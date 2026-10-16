// Utility to manage uploaded portfolio images with local persistence and canvas compression

const STORAGE_PREFIX = 'portfolio_img_';

/**
 * Compresses an image File using an offscreen canvas to avoid localStorage 5MB quota exhaustion.
 */
export async function compressAndStoreImage(file: File, key: string, maxWidth = 1200, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas context unavailable'));
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);

        try {
          localStorage.setItem(STORAGE_PREFIX + key, dataUrl);
          window.dispatchEvent(new CustomEvent('portfolio_image_updated', { detail: { key, dataUrl } }));
          resolve(dataUrl);
        } catch (storageErr) {
          // If storage limit reached, try more aggressive compression
          try {
            const smallerDataUrl = canvas.toDataURL('image/jpeg', 0.65);
            localStorage.setItem(STORAGE_PREFIX + key, smallerDataUrl);
            window.dispatchEvent(new CustomEvent('portfolio_image_updated', { detail: { key, dataUrl: smallerDataUrl } }));
            resolve(smallerDataUrl);
          } catch (finalErr) {
            reject(finalErr);
          }
        }
      };
      img.onerror = reject;
      img.src = e.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function getStoredImage(key: string): string | null {
  return localStorage.getItem(STORAGE_PREFIX + key);
}

export function removeStoredImage(key: string): void {
  localStorage.removeItem(STORAGE_PREFIX + key);
  window.dispatchEvent(new CustomEvent('portfolio_image_updated', { detail: { key, dataUrl: null } }));
}
