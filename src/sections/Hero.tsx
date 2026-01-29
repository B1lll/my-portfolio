import { useEffect, useRef, useState } from 'react';
import { motion, type Variants } from 'framer-motion';
import { GradientOrb } from '../components/GradientOrb';

const tags = ['DESIGN ENGINEER', 'ROBOTICS', 'AERODYNAMICS', 'PROTOTYPING'];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

const tagsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.9
    }
  }
};

const tagVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

// Text with distortion effect on hover
function DistortText({ children, className }: { children: string; className?: string }) {
  const textRef = useRef<HTMLSpanElement>(null);
  const [distortion, setDistortion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!textRef.current) return;
      
      const rect = textRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Check if cursor is near the text
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );
      
      if (distance < 150) {
        const x = ((e.clientX - centerX) / 150) * 8;
        const y = ((e.clientY - centerY) / 150) * 8;
        setDistortion({ x, y });
      } else {
        setDistortion({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <span
      ref={textRef}
      className={className}
      style={{
        display: 'inline-block',
        transform: `translate(${distortion.x}px, ${distortion.y}px)`,
        transition: 'transform 0.1s ease-out',
        textShadow: distortion.x !== 0 || distortion.y !== 0 
          ? '2px 2px 0 rgba(147, 51, 234, 0.3), -2px -2px 0 rgba(59, 130, 246, 0.3)' 
          : 'none'
      }}
    >
      {children}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-1"
            >
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white"
              >
                HELLO
              </motion.h1>
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white"
              >
                I'M
              </motion.h1>
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-gradient"
              >
                <DistortText>FANJUN</DistortText>
              </motion.h1>
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white"
              >
                WEI
              </motion.h1>
            </motion.div>
            
            {/* Tags */}
            <motion.div
              variants={tagsContainerVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  variants={tagVariants}
                  className="px-4 py-2 rounded-full text-xs font-medium tracking-wide
                             bg-white/5 border border-white/10 text-white/70
                             hover:bg-purple-500/10 hover:border-purple-500/30 hover:text-purple-300
                             transition-all duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 text-base md:text-lg text-white/50 max-w-md mx-auto lg:mx-0"
            >
              Design Engineering student at Imperial College London, passionate about solving complex problems through mechatronic systems.
            </motion.p>
          </div>
          
          {/* Gradient Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-shrink-0"
          >
            <GradientOrb />
          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
