import React from 'react';
import { ShieldCheck, LogOut, Sparkles } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

export const AdminBar: React.FC = () => {
  const { isAdmin, logout } = useAdmin();

  if (!isAdmin) return null;

  return (
    <div className="fixed top-16 inset-x-0 z-40 bg-gradient-to-r from-accent via-violet to-rose p-0.5 shadow-lg animate-in slide-in-from-top-2 duration-300">
      <div className="bg-surface px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white">
            <ShieldCheck className="h-3 w-3" />
          </span>
          <span className="font-semibold text-foreground">
            Owner Admin Mode Active
          </span>
          <span className="hidden sm:inline text-muted">
            &bull; Photo uploads, card creation, and delete ('X') buttons are enabled
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1 font-semibold text-foreground transition-colors hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 cursor-pointer text-xs"
          >
            <LogOut className="h-3 w-3" />
            <span>Exit Admin Mode</span>
          </button>
        </div>
      </div>
    </div>
  );
};
