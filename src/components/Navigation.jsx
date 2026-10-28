import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Leaf, Sun, Moon } from "lucide-react";

const navItems = [
  { href: "#about", label: "Tentang" },
  { href: "#fandom", label: "Fandom" },
  { href: "#timeline", label: "Jalur" },
  { href: "#interests", label: "Minat" },
  { href: "#contact", label: "Kontak" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-4" aria-label="Navigasi utama">
          <div className="flex items-center justify-between">
            <motion.a
              href="#"
              className="font-heading text-xl font-medium tracking-tight"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              aria-label="Beranda"
            >
              <span className="text-accent">A</span>xel
            </motion.a>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-text-muted hover:text-text transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-surface border border-border hover:bg-accent-light dark:hover:bg-accent-dark/30 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isDark ? "Mode terang" : "Mode gelap"}
              >
                {isDark ? <Sun size={20} className="text-text" /> : <Moon size={20} className="text-text" />}
              </motion.button>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <motion.button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-surface border border-border hover:bg-accent-light dark:hover:bg-accent-dark/30 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isDark ? "Mode terang" : "Mode gelap"}
              >
                {isDark ? <Sun size={20} className="text-text" /> : <Moon size={20} className="text-text" />}
              </motion.button>
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-surface border border-border hover:bg-accent-light dark:hover:bg-accent-dark/30 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={24} className="text-text" /> : <Menu size={24} className="text-text" />}
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={false}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0, paddingTop: isOpen ? "1rem" : 0 }}
            className="md:hidden overflow-hidden border-t border-border pt-0"
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="flex flex-col gap-3 py-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-text-muted hover:text-text transition-colors px-2 py-2"
                  whileHover={{ x: 4 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </nav>
      </header>

      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          className="p-3 rounded-xl bg-surface border border-border shadow-lg hover:bg-accent-light dark:hover:bg-accent-dark/30 transition-all"
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Scroll ke atas"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Leaf size={22} className="text-accent" />
        </motion.button>
      </motion.div>
    </>
  );
}