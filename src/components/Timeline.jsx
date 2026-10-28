import { useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Target, BookOpen, Award, Sprout } from "lucide-react";

const timelineData = [
  {
    year: "2001",
    title: "Lahir di Dunia",
    desc: "Hari pertama perjalanan dimulai pada 16 Juli 2001.",
    icon: Calendar,
    color: "text-accent",
  },
  {
    year: "2006-2013",
    title: "Masa Sekolah Dasar & SMP",
    desc: "Belajar membaca, menulis, dan mulai mengenal alam.",
    icon: BookOpen,
    color: "text-emerald-500",
  },
  {
    year: "2014-2017",
    title: "SMA & Cita-cita Guru TK",
    desc: "Masa di mana cita-cita menjadi guru TK sempat berkibar tinggi.",
    icon: Target,
    color: "text-amber-500",
  },
  {
    year: "2019",
    title: "Mulai Menulis Jurnal",
    desc: "Menemukan kedamaian dalam menuliskan perasaan dan hari-hari.",
    icon: BookOpen,
    color: "text-rose-500",
  },
  {
    year: "2021",
    title: "Memulai Hobi Botani",
    desc: "Merawat tanaman pertama, dan jatuh cinta pada dunia hijau.",
    icon: Sprout,
    color: "text-green-500",
  },
  {
    year: "2023",
    title: "Merawat Hewan Peliharaan",
    desc: "Memperluas cinta tidak hanya ke tanaman, tapi juga hewan.",
    icon: Award,
    color: "text-blue-500",
  },
  {
    year: "Sekarang",
    title: "Hanya Merawat Tanaman",
    desc: "Cita-cita guru TK punah, tapi cinta pada tanaman tetap tumbuh.",
    icon: Sprout,
    color: "text-accent",
  },
];

export default function Timeline() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="timeline"
      className="min-h-[80vh] px-6 pt-20 pb-32 max-w-4xl mx-auto relative"
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border -translate-x-1/2 hidden lg:block" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-mono text-xs tracking-widest uppercase">
          Jalur Hidup
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-medium mt-4">
          Cerita yang Tumbuh
        </h2>
        <p className="text-text-muted mt-4">
          Setiap titik adalah benih yang membentuk siapa saya hari ini
        </p>
      </motion.div>

      <div className="relative">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative ${index % 2 === 0 ? "lg:pr-20 lg:w-1/2" : "lg:pl-20 lg:w-1/2 lg:ml-auto"}`}
          >
            <div className="absolute lg:left-1/2 top-4 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-bg z-10" style={{ backgroundColor: item.color.replace("text-", "") }}>
              <div className="absolute -top-[6px] -left-[6px] w-16 h-16 rounded-full border border-border/30" />
            </div>

            <div className="relative bg-surface border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color} bg-opacity-10`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm font-medium text-text-muted">{item.year}</span>
              </div>
              <h3 className="font-heading text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}