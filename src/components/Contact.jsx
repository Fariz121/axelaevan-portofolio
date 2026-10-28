import { useRef } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="contact"
      className="py-32 px-6 max-w-4xl mx-auto relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-mono text-xs tracking-widest uppercase">
          Sampaikan Pesan
        </span>
        <h2 className="font-heading text-4xl font-medium mt-3">
          Terus Sapa Saja
        </h2>
        <p className="text-text-muted mt-3 text-lg">
          Selalu terbuka untuk berdialog atau sekadar menyapa. Gunakan petunjuk di bawah ini.
        </p>
      </motion.div>

      <div className="grid max-w-2xl mx-auto gap-8">
        <div className="border border-border rounded-2xl p-6 bg-surface flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Send className="w-6 h-6 text-accent" />
            <span className="text-lg font-medium text-text">Hubungi Via Email</span>
          </div>
          <p className="text-sm text-text-muted leading-relaxed">
            Jika ingin berteman, tanya tentang tanaman, atau sekadar salam, silakan kirim pesan ke:
          </p>
          <a
            href="mailto:axel.aevan@example.com"
            className="mt-3 text-accent font-medium underline underline-offset-4 decoration-accent"
            rel="noopener noreferrer"
          >
            alex.aevan@example.com
          </a>
        </div>

        <div className="border border-border rounded-2xl p-6 bg-surface flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Mail className="w-6 h-6 text-accent" />
            <span className="text-lg font-medium text-text">Berbagi Cerita</span>
          </div>
          <p className="text-sm text-text-muted leading-relaxed">
            Kami menantikan pidato hati Anda. Baik itu tentang tanaman, jurnal, atau pengalaman indah.
          </p>
        </div>

        <div className="border border-border rounded-2xl p-6 bg-surface flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <Phone className="w-6 h-6 text-accent" />
            <span className="text-lg font-medium text-text">Salam Langsung</span>
          </div>
          <p className="text-sm text-text-muted leading-relaxed">
            Perbincian langkah demi langkah tentang merawat tanaman di belakang pulang.
          </p>
        </div>
      </div>
    </section>
  );
}