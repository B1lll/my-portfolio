import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, Flag } from 'lucide-react';

const honors = [
  { title: 'BPhO Global Gold Award', year: '2022' },
  { title: 'Physics Bowl Global 72nd Place', year: '2022' },
  { title: 'AMC Global Gold Award', year: '2021' },
  { title: 'Imperial College Table Tennis Team - UK National Ranking 33rd', year: '2024' },
  { title: 'Imperial College American Football Team - Starting Wide Receiver', year: '2024' }
];

const icons = [Award, Trophy, Medal, Star, Flag];

export function Honors() {
  return (
    <section id="honors" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
            Achievements
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white tracking-tight">
            HONORS
          </h2>
          <p className="mt-4 text-white/50 max-w-xl">
            Recognition in academic competitions and athletic achievements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {honors.map((honor, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={honor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0a] border border-white/5
                           hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-white leading-tight">{honor.title}</h3>
                  <p className="mt-1 text-sm text-white/40">{honor.year}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
