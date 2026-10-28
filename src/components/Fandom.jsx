import { useRef } from "react";
import { motion } from "framer-motion";
import { Leaf, Sparkles, Droplets, Sun } from "lucide-react";

const plants = [
  {
    name: "Monstera Deliciosa",
    desc: "Daunnya yang berlubang-lubang seperti jendela alam. Kuasanya membuat setiap sudut ruangan terasa sejuk.",
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    name: "Pothos Epipremnum",
    desc: "Tanaman yang tahan lama dan mudah dirawat. Hiasan lembaran hijau yang selalu menemaniku menulis jurnal.",
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    name: "Sukkulent",
    desc: "Kaktus dan sukulenta kecil yang menyimpan air di daunnya. Kesabaran dalam bentuk tanaman.",
    icon: <Droplets className="w-5 h-5" />,
  },
  {
    name: "Lavender",
    desc: "Aromanya tenang seperti pelukan lembut. Tanaman yang melahirkan ketenangan di setiap napas.",
    icon: <Sun className="w-5 h-5" />,
  },
];

export default function Fandom() {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="fandom"
      className="min-h-[80vh] px-6 pt-32 pb-20 max-w-7xl mx-auto relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/10 w-64 h-64 rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/8 w-72 h-72 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-accent font-mono text-xs tracking-widest uppercase">
          Tanaman Kesayangan
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-medium mt-4">
          Aku Gemari Hal Ini
        </h2>
        <p className="text-text-muted mt-4 max-w-xl mx-auto">
          Setiap tanaman punya karakter dan cerita yang berbeda-beda
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plants.map((plant, idx) => (
          <motion.div
            key={plant.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-border bg-surface p-6 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[3px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            
            <div className="w-12 h-12 rounded-xl bg-accent-light dark:bg-accent-dark/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {plant.icon}
            </div>
            
            <h3 className="font-heading text-lg font-medium mb-2">{plant.name}</h3>
            <p className="text-sm text-text-muted leading-relaxed">{plant.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
