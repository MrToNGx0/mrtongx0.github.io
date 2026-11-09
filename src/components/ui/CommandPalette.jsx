import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform);
export const shortcutLabel = isMac ? '⌘K' : 'Ctrl K';

const CommandPalette = ({ open, setOpen, commands }) => {
  const [query, setQuery] = React.useState('');
  const [active, setActive] = React.useState(0);

  // global shortcut: Cmd/Ctrl+K toggles
  React.useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [setOpen]);

  React.useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
    }
  }, [open]);

  const q = query.trim().toLowerCase();
  const results = q
    ? commands.filter((c) => `${c.label} ${c.group} ${c.keywords || ''}`.toLowerCase().includes(q))
    : commands;

  const run = (cmd) => {
    setOpen(false);
    cmd?.action();
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') setOpen(false);
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      run(results[active]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4" onKeyDown={onKeyDown}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              placeholder="Type a command or search..."
              role="combobox"
              aria-expanded="true"
              aria-controls="cmdk-list"
              aria-activedescendant={results[active] ? `cmdk-${results[active].id}` : undefined}
              className="w-full px-5 py-4 text-base outline-none border-b border-slate-100 placeholder:text-slate-400"
            />
            <ul id="cmdk-list" role="listbox" className="max-h-80 overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-5 py-6 text-sm text-slate-400 text-center">No results</li>
              )}
              {results.map((cmd, i) => (
                <li
                  key={cmd.id}
                  id={`cmdk-${cmd.id}`}
                  role="option"
                  aria-selected={i === active}
                  onMouseMove={() => setActive(i)}
                  onClick={() => run(cmd)}
                  className={`mx-2 px-3 py-2.5 rounded-lg flex items-center justify-between cursor-pointer text-sm ${
                    i === active ? 'bg-slate-100 text-slate-900' : 'text-slate-600'
                  }`}
                >
                  <span>{cmd.label}</span>
                  <span className="text-xs text-slate-400">{cmd.group}</span>
                </li>
              ))}
            </ul>
            <div className="px-5 py-2.5 border-t border-slate-100 text-xs text-slate-400 flex gap-4">
              <span>↑↓ navigate</span>
              <span>↵ select</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
