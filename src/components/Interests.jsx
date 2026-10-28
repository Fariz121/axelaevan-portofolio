import { useRef } from "react";
import { motion } from "framer-motion";
import { Sprout, Heart, BookOpen, Coffee, Feather, Smile } from "lucide-react";

const interests = [
  {
    icon: Sprout,
    title: "Merawat Tanaman",
    desc: "Menghabiskan waktu dengan tanah, menyiram, dan menyaksikan dedaunan baru bermunculan setiap pagi.",
  },
  {
    icon: Heart,
    title: "Merawat Hewan",
    desc: "Kasih sayang tulus untuk makhluk tak bersuara, memberikan mereka rasa aman dan kehangatan.",
  },
  {
    icon: BookOpen,
    title: "Menulis Jurnal",
    desc: "Menumpahkan perasaan yang up and down ke dalam lembaran kertas dengan kejujuran hati yang selembut Hello Kitty.",
  },
  {
    icon: Feather,
    title: "Ketentraman & Ketenangan",
    desc: "Menghargai keheningan dan ruang yang minim distraksi untuk menata pikiran yang sering bergelora.",
  },
  {
    icon: Coffee,
    title: "Waktu Menenangkan",
    desc: "Menikmati secangkir kehangatan di sela-sela merapikan pot-pot bunga di beranda rumah.",
  },
  {
    icon: Smile,
    title: "Kepedulian Tulus",
    desc: "Meski pemalu, selalu siap memberikan empati terdalam bagi orang-orang dan lingkungan sekitar.",
  },
];

export default function Interests() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="interests"
      className="min-h-[80vh] px-6 py-28 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-mono text-xs tracking-widest uppercase">
          Eksplorasi Hati
        </span>
        <h2 className="font-heading text-4xl font-medium mt-3">
          Hal-Hal yang Saya Cintai
        </h2>
        <p className="text-text-muted mt-3 max-w-lg mx-auto text-sm">
          Aktivitas dan kepedulian yang menjadi ruang bernapas di tengah dinamika hidup.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {interests.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-border bg-surface hover:border-accent/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent-light dark:bg-accent-dark/20 text-accent flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-medium mb-3">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-border flex items-center text-xs font-mono text-accent">
              <span>Aktivitas Sehari-hari</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}