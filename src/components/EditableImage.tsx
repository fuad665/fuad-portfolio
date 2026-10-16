import React, { useState, useEffect, useRef } from 'react';
import { Camera, Trash2, UploadCloud, Loader2 } from 'lucide-react';
import { compressAndStoreImage, getStoredImage, removeStoredImage } from '../utils/imageStore';

interface EditableImageProps {
  storageKey: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackContent?: React.ReactNode;
  uploadPrompt?: string;
  objectFit?: 'cover' | 'contain';
  objectPosition?: string;
  showBadgeOnlyOnHover?: boolean;
}

export const EditableImage: React.FC<EditableImageProps> = ({
  storageKey,
  alt,
  className = '',
  imgClassName = '',
  fallbackContent,
  uploadPrompt = 'Upload Photo',
  objectFit = 'cover',
  objectPosition = 'object-center',
  showBadgeOnlyOnHover = true,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load initial stored image
    setImageSrc(getStoredImage(storageKey));

    // Listen to custom updates across components
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<{ key: string; dataUrl: string | null }>;
      if (customEvent.detail.key === storageKey) {
        setImageSrc(customEvent.detail.dataUrl);
      }
    };

    window.addEventListener('portfolio_image_updated', handleUpdate);
    return () => window.removeEventListener('portfolio_image_updated', handleUpdate);
  }, [storageKey]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setLoading(true);
      const dataUrl = await compressAndStoreImage(file, storageKey);
      setImageSrc(dataUrl);
    } catch (err) {
      console.error('Failed to compress and save image', err);
      alert('Could not save image. Please select a smaller photo.');
    } finally {
      setLoading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm('Do you want to reset this image? / هل ترغب في إعادة ضبط الصورة؟')) {
      removeStoredImage(storageKey);
      setImageSrc(null);
    }
  };

  return (
    <div className={`relative group/uploader overflow-hidden ${className}`}>
      {/* Hidden native file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        id={`file-input-${storageKey}`}
      />

      {/* Render Image or Fallback */}
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={alt}
          className={`h-full w-full ${objectFit === 'cover' ? 'object-cover' : 'object-contain'} ${objectPosition} transition-transform duration-500 group-hover/uploader:scale-[1.02] ${imgClassName}`}
        />
      ) : fallbackContent ? (
        fallbackContent
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center bg-gray-50 text-gray-400">
          <UploadCloud className="h-10 w-10 text-gray-400 mb-2 stroke-[1.5]" />
          <p className="text-xs font-medium text-gray-500">No image uploaded</p>
          <p className="text-[10px] text-gray-400 mt-0.5">Click to add photo</p>
        </div>
      )}

      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm text-white">
          <Loader2 className="h-6 w-6 animate-spin text-white" />
        </div>
      )}

      {/* Floating Upload / Change Button */}
      <div
        className={`absolute bottom-3 right-3 z-20 flex items-center gap-1.5 transition-all duration-200 ${
          showBadgeOnlyOnHover ? 'opacity-0 group-hover/uploader:opacity-100' : 'opacity-100'
        }`}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            fileInputRef.current?.click();
          }}
          className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-md backdrop-blur-md transition-all hover:bg-white hover:scale-105 hover:text-black cursor-pointer"
          title="Upload / Change Photo"
        >
          <Camera className="h-3.5 w-3.5 text-indigo-600" />
          <span>{imageSrc ? 'Change' : uploadPrompt}</span>
        </button>

        {imageSrc && (
          <button
            type="button"
            onClick={handleRemove}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-600 shadow-md backdrop-blur-md hover:bg-rose-50 hover:text-rose-600 transition-all cursor-pointer"
            title="Reset image"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
};
