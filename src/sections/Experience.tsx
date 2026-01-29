import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Xiaomi',
    location: 'Shenzhen',
    role: 'Product Testing Intern',
    period: 'Jul 2024 – Sep 2024',
    description: "Participated in mobile phone reliability testing processes. Executed 'six sides, eight edges, twelve corners' standard drop tests. Accurately recorded data and identified 'corner drops' as the weakest failure mode."
  },
  {
    company: 'Candela',
    location: 'Shenzhen',
    role: 'Robotics R&D Intern',
    period: 'Sep 2022 – Dec 2022',
    description: 'Developed next-generation robotic vacuum prototype. Addressed hair entanglement pain point with innovative dual-blade cutting mechanism, reducing manual cleaning by ~40%.'
  },
  {
    company: 'Imperial College London',
    location: 'London',
    role: 'Research Assistant',
    period: 'Aug 2023 – Nov 2025',
    description: 'EMG technology research under Prof. D.F. Independently developed Arduino-based six-channel EMG signal acquisition system. Led commercialization effort with comprehensive business plan.'
  }
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
            Career
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white tracking-tight">
            EXPERIENCE
          </h2>
          <p className="mt-4 text-white/50 max-w-xl">
            Professional journey through product testing, robotics R&D, and academic research.
          </p>
        </motion.div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                      <div className="flex items-center gap-2 text-sm text-white/50">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="mt-3 text-base font-medium text-purple-300">{exp.role}</h4>
                  <p className="mt-2 text-white/60 text-sm leading-relaxed">{exp.description}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/40 md:text-right">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
