import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'luna',
    title: 'Luna - Smart Sleep Aid Lamp',
    category: 'Product Design / Mechatronics',
    year: '2025',
    image: '/images/8-.png',
    description: 'A magnetic levitation lamp that projects changing moon phases to establish healthy sleep routines.'
  },
  {
    id: 'concept-car',
    title: 'Concept Car Aerodynamics',
    category: 'Aerodynamics / CFD Simulation',
    year: '2025',
    image: '/images/12-.png',
    description: 'Complete simulation-experiment benchmarking process validating CFD tool reliability in early-stage design.'
  },
  {
    id: 'airplane-seat',
    title: 'Airplane Seat Redesign',
    category: 'Industrial Design / Ergonomics',
    year: '2024',
    image: '/images/17.png',
    description: 'A modular economy-class seat design using aluminum alloy and composite materials for enhanced comfort and sustainability.'
  },
  {
    id: 'armusic',
    title: 'Armusic Wearable Instrument',
    category: 'Wearable Tech / Interactive Design',
    year: '2024',
    image: '/images/22.png',
    description: 'A liberating blend of wearable art and musical innovation, freeing melody from conventional instruments through the power of touch.'
  },
  {
    id: 'sketches',
    title: 'Digital Sketches Collection',
    category: 'Digital Art / Illustration',
    year: '2021-2024',
    image: '/images/27--.png',
    description: 'A collection of digital sketches and illustrations exploring various styles and subjects.'
  }
];

export function Works() {
  return (
    <section id="works" className="relative py-24 md:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
            Portfolio
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-white tracking-tight">
            SELECTED WORKS
          </h2>
          <p className="mt-4 text-white/50 max-w-xl">
            A collection of projects showcasing my expertise in design engineering, robotics, aerodynamics, and product development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/project/${project.id}`} className="group block">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-purple-400">{project.category}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60">{project.year}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-white/50 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
