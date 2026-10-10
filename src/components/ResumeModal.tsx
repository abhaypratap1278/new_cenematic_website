import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useScrollLock } from '../hooks/smoothScroll';
import { EASE } from './fx';
import { ResumeSheet } from './ResumeViewer';

/** Profile summary modal. A personal PDF can be added when Abhay supplies one. */
export default function ResumeModal({ onClose }: { onClose: () => void }) {
  useScrollLock(true);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <motion.div className="fixed inset-0 z-[140] flex flex-col bg-black/90 backdrop-blur-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label="Profile summary">
      <div className="gutter flex h-16 shrink-0 items-center justify-between gap-3 pt-[env(safe-area-inset-top)]">
        <p className="truncate font-display text-2xl tracking-wide text-bone">{profile.displayName} · Profile</p>
        <button type="button" onClick={onClose} aria-label="Close profile" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-bone hover:bg-white/20">✕</button>
      </div>
      <motion.div className="gutter flex-1 overflow-y-auto pb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }}>
        <div className="mx-auto max-w-4xl"><p className="mb-5 text-sm text-mist">This is a profile summary, not a downloadable resume. Add your own resume PDF when ready.</p><ResumeSheet /></div>
      </motion.div>
    </motion.div>
  );
}
