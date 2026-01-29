import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Wrench, CheckCircle } from 'lucide-react';
import { CustomCursor } from '../components/CustomCursor';
import { Navigation } from '../components/Navigation';

const projectData: Record<string, {
  title: string;
  subtitle: string;
  category: string;
  year: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  tools: string[];
  features: string[];
  images: string[];
}> = {
  luna: {
    title: 'Luna',
    subtitle: 'Smart Sleep Aid Lamp',
    category: 'Product Design / Mechatronics',
    year: '2025',
    image: '/images/8-.png',
    overview: 'A magnetic levitation lamp that projects changing moon phases to establish healthy sleep routines. This product was created to support healthier sleep habits by helping users become more aware of their bedtime through subtle and engaging visual cues.',
    challenge: 'Many people struggle with maintaining consistent sleep schedules and often find themselves scrolling on their phones late into the night, disrupting their natural sleep cycle.',
    solution: 'Luna uses a custom-built magnetic levitation system to project changing moon phases onto the wall, creating a calming bedtime ritual. The projection gradually shifts over time to reflect the passage of night.',
    tools: ['Fusion 360', 'Arduino', '3D Printing', 'Electronics', 'UI/UX Design'],
    features: ['Magnetic Levitation', 'Moon Phase Projection', 'Mobile App Control', 'Sleep Schedule Tracking', 'Ambient Lighting'],
    images: ['/images/3-.png', '/images/4-.png', '/images/5-.png', '/images/6-.png', '/images/7-.png']
  },
  'concept-car': {
    title: 'Concept Car',
    subtitle: 'Aerodynamics Research',
    category: 'Aerodynamics / CFD Simulation',
    year: '2025',
    image: '/images/12-.png',
    overview: 'Complete simulation-experiment benchmarking process validating CFD tool reliability in early-stage design. This project explores how automotive design can help reduce aerodynamic drag and minimize carbon emissions.',
    challenge: 'Optimize aerodynamic performance while maintaining aesthetic appeal of the vehicle. Traditional design methods require extensive physical prototyping which is time-consuming and expensive.',
    solution: 'Modified chassis design with diffusers and underbody elements to improve aerodynamic performance and stability. Used CFD simulations validated with wind tunnel testing to refine the design.',
    tools: ['Ansys Fluent', 'SolidWorks', 'Wind Tunnel Testing', '3D Printing', 'CFD Analysis'],
    features: ['Teardrop Body Shape', 'Rear Diffuser', 'CFD Validation', 'Wind Tunnel Testing'],
    images: ['/images/9-.png', '/images/10-.png', '/images/11-.png']
  },
  'airplane-seat': {
    title: 'Airplane Seat',
    subtitle: 'Economy Class Redesign',
    category: 'Industrial Design / Ergonomics',
    year: '2024',
    image: '/images/17.png',
    overview: 'A modular economy-class seat design using aluminum alloy and composite materials for enhanced comfort and sustainability. The design minimizes weight while maximizing passenger comfort.',
    challenge: 'Economy class seats are often uncomfortable and lack personal space. Passengers struggle with limited legroom and inadequate entertainment options during long flights.',
    solution: 'Designed a modular aluminum alloy frame with entertainment system and foldable headrest. The seat uses lightweight materials and offers business-class comparable features.',
    tools: ['SolidWorks', 'KeyShot', 'Ergonomic Analysis', 'Material Selection'],
    features: ['Modular Design', 'Entertainment System', 'Foldable Headrest', 'Lightweight Construction'],
    images: ['/images/13-.png', '/images/14.png', '/images/15.png', '/images/16.png']
  },
  armusic: {
    title: 'Armusic',
    subtitle: 'Wearable Musical Instrument',
    category: 'Wearable Tech / Interactive Design',
    year: '2024',
    image: '/images/22.png',
    overview: 'A liberating blend of wearable art and musical innovation, freeing melody from conventional instruments through the power of touch. Combines technology and art for immersive performances.',
    challenge: 'Traditional instruments are bulky and difficult to transport. Musicians need portable solutions that don\'t compromise on expressiveness and control.',
    solution: 'Created a portable sleeve with touch sensors and LED visualization. The device uses MPR121 sensors and an accelerometer to detect movements and trigger sounds.',
    tools: ['Arduino', 'MPR121 Sensors', 'Ableton Live', 'Conductive Thread'],
    features: ['Touch Sensors', 'LED Visualization', 'Motion Detection', 'Portable Design'],
    images: ['/images/18.png', '/images/19.png', '/images/20.png', '/images/21.png']
  },
  sketches: {
    title: 'Digital Sketches',
    subtitle: 'Collection',
    category: 'Digital Art / Illustration',
    year: '2021-2024',
    image: '/images/27--.png',
    overview: 'A collection of digital sketches exploring various styles and subjects. Created using Procreate and other digital tools, ranging from realistic portraits to stylized illustrations.',
    challenge: 'Developing a distinctive artistic style while improving technique. Finding the right balance between realism and creative expression.',
    solution: 'Consistent practice with different brushes, techniques, and color palettes. Each piece represents a step in the artistic journey.',
    tools: ['Procreate', 'Digital Brushes'],
    features: ['Portrait Drawing', 'Architectural Sketching', 'Stylized Illustration', 'Anatomical Studies'],
    images: ['/images/23.PNG', '/images/24-.PNG', '/images/25-.PNG', '/images/26-.PNG']
  }
};

interface ProjectDetailProps {
  language: 'en' | 'zh';
  onLanguageChange: () => void;
}

export function ProjectDetail({ language, onLanguageChange }: ProjectDetailProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-white">Project not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <CustomCursor />
      <Navigation language={language} onLanguageChange={onLanguageChange} />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end pb-16 pt-32">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.button
              onClick={() => navigate('/#works')}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </motion.button>
            
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="text-sm font-medium text-purple-400 tracking-wider uppercase">
                {project.category}
              </span>
              <span className="text-white/40">•</span>
              <span className="text-sm text-white/60">{project.year}</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/60">{project.subtitle}</p>
          </motion.div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-white/70 leading-relaxed">{project.overview}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Challenge</h2>
                <p className="text-white/70 leading-relaxed">{project.challenge}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold text-white mb-4">Solution</h2>
                <p className="text-white/70 leading-relaxed">{project.solution}</p>
              </motion.div>
              
              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.images.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="aspect-square rounded-xl overflow-hidden bg-[#0a0a0a]"
                    >
                      <img
                        src={img}
                        alt={`${project.title} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Wrench className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 rounded-full text-sm bg-purple-500/10 text-purple-300 border border-purple-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5"
              >
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Key Features</h3>
                </div>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
