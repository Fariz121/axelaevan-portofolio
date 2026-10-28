import { useRef } from "react";
import { motion } from "framer-motion";
import { Heart, Calendar, BookOpen, User, CheckCircle } from "lucide-react";

export default function About() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="about"
      className="min-h-screen flex items-center py-32 px-6 max-w-7xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-accent-light/20 blur-3xl rounded-full -z-10 scale-125" />
          
          <motion.div
            className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-surface shadow-lg"
            whileHover={{ scale: 1.02, rotate: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"
              alt="Axel Aevan"
              className="w-full h-full object-cover"
            />
            
            <motion.div
              className="absolute bottom-6 right-6 w-20 h-20 rounded-full bg-accent flex items-center justify-center"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.div
            className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-accent/30"
            style={{ animation: "float 6s ease-in-out infinite" }}
          />
          <motion.div
            className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-2 border-accent/30"
            style={{ animation: "float 6s ease-in-out infinite", animationDelay: "1s" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="font-heading text-4xl font-medium mb-6">
            <span className="text-accent">Tentang</span> Saya
          </h2>

          <div className="prose prose-lg max-w-none text-left">
            <p className="text-base text-text-muted leading-relaxed">
              Halo! Saya <strong>Axel Aevan</strong>, seorang penyayang yang berdedikasi untuk merawat 
              tanaman dan hewan dengan cinta. Dengan hati yang selembut hello kitty, saya 
              membagikan kehangatan dan kepedulian dalam setiap interaksi.
            </p>

            <p className="text-sm text-text-muted/80 mt-4 italic">
              Mental saya unik - naik turun naik turun, tetapi selalu punya energi yang berbeda 
              untuk setiap keindahan yang saya temui di sekitar saya.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-accent-light dark:bg-accent-dark/30 flex items-center justify-center">
                  <User className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-sm font-medium text-text mb-1">Karakter</h3>
                <p className="text-sm text-text-muted">
                  Pemalu, penyayang, dan selalu mencari keindahan dalam detail kecil
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-accent-light dark:bg-accent-dark/30 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-sm font-medium text-text mb-1">Lahir</h3>
                <p className="text-sm text-text-muted">16 Juli 2001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-accent-light dark:bg-accent-dark/30 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
              </div>
              <div>
                <h3 className="font-heading text-sm font-medium text-text mb-1">Dulu Cita-cita</h3>
                <p className="text-sm text-text-muted">Guru TK, namun sekarang hanya bisa merawat tanaman</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}