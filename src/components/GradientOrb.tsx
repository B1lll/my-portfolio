import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const lightningPaths = [
  "M30,20 Q35,40 30,50 T35,70 T25,90",
  "M70,15 Q65,35 70,45 T65,65 T75,85",
  "M50,25 Q55,40 50,55 T55,75 T45,95",
  "M25,30 Q30,45 25,60 T30,80 T20,100",
  "M75,25 Q70,45 75,60 T70,80 T80,100"
];

export function GradientOrb() {
  const [isHovering, setIsHovering] = useState(false);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      
      const rect = orbRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.sqrt(
        Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
      );
      
      // Trigger lightning when cursor is within 200px of the orb
      setIsHovering(distance < 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={orbRef}
      className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
    >
      {/* Base purple gradient layers - always visible */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 30% 40%, rgba(88, 28, 135, 0.8) 0%, rgba(67, 20, 102, 0.6) 30%, rgba(45, 10, 70, 0.4) 50%, transparent 70%)',
          filter: 'blur(25px)'
        }}
        animate={{
          scale: [1, 1.08, 0.95, 1.05, 1],
          rotate: [0, 15, -10, 5, 0],
          opacity: [0.7, 0.85, 0.65, 0.8, 0.7]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute inset-4 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 60% 35%, rgba(107, 33, 168, 0.7) 0%, rgba(88, 28, 135, 0.5) 35%, rgba(60, 15, 90, 0.3) 55%, transparent 70%)',
          filter: 'blur(20px)'
        }}
        animate={{
          scale: [1.05, 0.95, 1.1, 0.98, 1.05],
          rotate: [0, -20, 10, -5, 0],
          opacity: [0.6, 0.75, 0.55, 0.7, 0.6]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute inset-8 rounded-full"
        style={{
          background: 'radial-gradient(ellipse at 40% 60%, rgba(139, 92, 246, 0.6) 0%, rgba(107, 33, 168, 0.45) 30%, rgba(70, 20, 110, 0.25) 50%, transparent 65%)',
          filter: 'blur(15px)'
        }}
        animate={{
          scale: [0.95, 1.12, 0.9, 1.08, 0.95],
          rotate: [0, 25, -15, 8, 0],
          opacity: [0.5, 0.7, 0.45, 0.65, 0.5]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute inset-16 rounded-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.5) 0%, rgba(139, 92, 246, 0.3) 40%, transparent 60%)',
          filter: 'blur(12px)'
        }}
        animate={{
          scale: [1, 1.15, 0.9, 1.1, 1],
          opacity: [0.6, 0.8, 0.5, 0.75, 0.6]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Lightning effect - only visible on hover */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        style={{ 
          filter: 'drop-shadow(0 0 8px rgba(216, 180, 254, 0.8))',
          opacity: isHovering ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={lightningPaths[i]}
            fill="none"
            stroke="rgba(216, 180, 254, 0.9)"
            strokeWidth="0.8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isHovering ? {
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 0.6, 0],
              strokeWidth: ['0.5', '1.5', '0.8', '0.5']
            } : { pathLength: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              repeatDelay: 2 + i * 0.8,
              delay: i * 0.5,
              ease: 'easeOut'
            }}
          />
        ))}
        {[0, 1, 2].map((i) => (
          <motion.path
            key={`branch-${i}`}
            d={[
              "M40,35 L45,45 L42,50",
              "M60,40 L55,50 L58,55",
              "M50,60 L48,70 L52,75"
            ][i]}
            fill="none"
            stroke="rgba(192, 132, 252, 0.6)"
            strokeWidth="0.4"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={isHovering ? {
              opacity: [0, 0.7, 0]
            } : { opacity: 0 }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3 + i,
              delay: 1 + i * 0.7
            }}
          />
        ))}
      </svg>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 50%)'
        }}
        animate={{
          scale: [0.8, 1.3, 0.8],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Rotating elements */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            filter: 'blur(15px)'
          }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(107, 33, 168, 0.25) 0%, transparent 70%)',
            filter: 'blur(12px)'
          }}
        />
      </motion.div>
    </div>
  );
}
