import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles, Sprout, Heart, ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs font-mono mb-8"
        >
          <Sparkles size={14} className="text-accent animate-pulse" />
          <span>Selamat Datang di Portofolio Saya</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6"
        >
          Perkenalkan, <br />
          <span className="italic font-normal">nama aku</span>{" "}
          <span className="underline decoration-accent decoration-2 underline-offset-8">
            Axel Aevan
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-text-muted leading-relaxed font-light mb-12"
        >
          Seorang penyayang yang merawat tanaman, menulis jurnal keseharian, dan mencintai alam dengan kelembutan.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#about"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-colors shadow-sm"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Sprout size={18} />
            Mengenal Lebih Dekat
          </motion.a>
          <motion.a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-surface font-medium hover:border-accent hover:text-accent transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Heart size={18} />
            Sapa Axel
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
