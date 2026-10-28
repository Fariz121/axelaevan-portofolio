import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-border bg-surface text-text/70">
      <motion.div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <motion.a
              href="#"
              className="font-heading text-xl font-medium text-text"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-accent">A</span>xel
            </motion.a>
            <span className="text-sm text-accent mt-1">Aevan</span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <span>Telepon: 812 3456 7890</span>
            <a
              href="mailto:axel.aevan@example.com"
              className="hover:text-accent transition-colors"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              IG
            </a>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center text-sm">
          <span>
            {new Date().getFullYear()}
          </span>
          <div className="flex items-center gap-6">
            <span className="hover:text-accent transition-colors">All rights reserved.</span>
            <a
              href="https://github.com/axellevan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 pt-8 text-center text-xs font-mono text-accent/60">
        Built with <Heart className="inline text-accent" /> using React, Tailwind CSS, and Framer Motion.
      </div>
    </footer>
  );
}