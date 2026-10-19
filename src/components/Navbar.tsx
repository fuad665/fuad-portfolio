import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sun, Moon, Lock, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useAdmin } from '../context/AdminContext';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenContact, onOpenResume }) => {
  const { isAdmin, openLoginModal, logout } = useAdmin();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Awards', href: '#highlights' },
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'News', href: '#news' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-border bg-background/85 backdrop-blur-md shadow-sm'
            : 'border-b border-transparent bg-background/0'
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="group flex items-center gap-2.5"
            aria-label={`${PERSONAL_INFO.name} — Home`}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-sm font-semibold text-white transition-transform group-hover:scale-105">
              {PERSONAL_INFO.initials}
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-foreground">
              {PERSONAL_INFO.shortName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-foreground xl:px-3.5"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onOpenResume}
              className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-foreground xl:px-3.5"
            >
              Resume
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Owner Admin Button */}
            <button
              type="button"
              onClick={isAdmin ? logout : openLoginModal}
              title={isAdmin ? 'Admin Mode Active — Click to Logout' : 'Admin Login (Passcode: fuad2026)'}
              aria-label={isAdmin ? 'Admin Mode Active' : 'Admin Login'}
              className={`flex h-9 items-center justify-center rounded-full border transition-all cursor-pointer ${
                isAdmin
                  ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 gap-1.5'
                  : 'w-9 border-border bg-surface text-muted hover:text-foreground hover:scale-105'
              }`}
            >
              {isAdmin ? (
                <>
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline text-xs font-semibold">Admin</span>
                </>
              ) : (
                <Lock className="h-3.5 w-3.5" />
              )}
            </button>

            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-transform hover:scale-105"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber" /> : <Moon className="h-4 w-4 text-violet" />}
            </button>

            {/* Desktop Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn-gradient hidden min-h-9 px-4 sm:inline-flex"
            >
              <span>Contact</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-foreground lg:hidden"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-x-0 top-16 z-40 transform border-b border-border bg-background/95 p-6 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="rounded-xl px-4 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="text-left rounded-xl px-4 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-surface-2"
          >
            Resume
          </button>

          <div className="mt-2 pt-3 border-t border-border flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (isAdmin) {
                  logout();
                } else {
                  openLoginModal();
                }
              }}
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-xs font-semibold text-muted hover:text-foreground cursor-pointer"
            >
              {isAdmin ? (
                <>
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  <span>Exit Admin Mode</span>
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  <span>Admin Login (fuad2026)</span>
                </>
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn-gradient w-full justify-center"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
