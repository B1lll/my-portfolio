import { motion } from 'framer-motion';
import { Cpu, Code, Palette, Factory } from 'lucide-react';

const skills = {
  'Engineering & Simulation': {
    icon: Cpu,
    items: ['Fusion 360', 'ANSYS Fluent/CFD', 'SolidWorks', 'Blender']
  },
  'Programming': {
    icon: Code,
    items: ['C/C++ (Embedded)', 'Python', 'JavaScript', 'Arduino', 'Raspberry Pi']
  },
  'Design': {
    icon: Palette,
    items: ['Figma', 'Adobe InDesign', 'User Research', 'Prototyping']
  },
  'Manufacturing': {
    icon: Factory,
    items: ['3D Printing (FDM/SLA)', 'Basic CNC', 'Wind Tunnel Testing', 'Granta Edupack']
  }
};

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 via-transparent to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
            Expertise
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white tracking-tight">
            SKILLS
          </h2>
          <p className="mt-4 text-white/50 max-w-xl">
            A diverse skill set spanning engineering, programming, design, and manufacturing.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, { icon: Icon, items }], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: index * 0.15 + skillIndex * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(147, 51, 234, 0.25)' 
                    }}
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                               bg-purple-500/10 border border-purple-500/30 text-purple-200
                               transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
