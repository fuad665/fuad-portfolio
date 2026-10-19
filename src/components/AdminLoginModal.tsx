import React, { useState } from 'react';
import { ShieldCheck, Lock, X, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export const AdminLoginModal: React.FC = () => {
  const { isLoginModalOpen, closeLoginModal, login } = useAdmin();
  const [passcode, setPasscode] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(passcode);
    if (!success) {
      setError(true);
    } else {
      setError(false);
      setPasscode('');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-in fade-in duration-200"
      onClick={closeLoginModal}
    >
      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={closeLoginModal}
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted transition-colors hover:bg-surface-2 hover:text-foreground cursor-pointer"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <Lock className="h-6 w-6 stroke-[1.75]" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-semibold text-accent uppercase tracking-wider">
              <ShieldCheck className="h-3 w-3" />
              <span>Owner Access</span>
            </div>
            <h2 className="mt-1 font-heading text-lg font-bold text-foreground">
              Admin Authentication
            </h2>
          </div>
        </div>

        <p className="mt-3 text-sm text-muted">
          Enter your owner passcode to upload personal photos, add new cards, or delete placeholders.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
              Owner Passcode / كلمة مرور الإدارة
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={passcode}
                onChange={(e) => {
                  setPasscode(e.target.value);
                  setError(false);
                }}
                placeholder="Enter passcode (e.g. fuad2026)"
                autoFocus
                className={`w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent ${
                  error ? 'border-rose-500 ring-1 ring-rose-500' : 'border-border'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground p-1"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {error && (
              <p className="mt-2 flex items-center gap-1.5 text-xs text-rose-500 font-medium">
                <AlertCircle className="h-3.5 w-3.5" />
                <span>Incorrect passcode. Default is: fuad2026</span>
              </p>
            )}
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={closeLoginModal}
              className="btn-secondary px-4 py-2 text-xs font-medium cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-gradient px-5 py-2 text-xs font-semibold cursor-pointer"
            >
              Unlock Admin Mode
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
