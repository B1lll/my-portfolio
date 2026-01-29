import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastMoveTimeRef = useRef(Date.now());
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Reset hover timer on mouse move
      lastMoveTimeRef.current = Date.now();
      if (isShrunk) {
        setIsShrunk(false);
      }
      
      // Clear existing timer
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
      
      // Set new timer for 1 second hover
      hoverTimerRef.current = setTimeout(() => {
        const timeSinceLastMove = Date.now() - lastMoveTimeRef.current;
        if (timeSinceLastMove >= 1000) {
          setIsShrunk(true);
        }
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, [mouseX, mouseY, isShrunk]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          initial={{ width: 32, height: 32 }}
          animate={{ 
            width: isShrunk ? 12 : 32, 
            height: isShrunk ? 12 : 32 
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          style={{ boxShadow: '0 0 20px rgba(255,255,255,0.3)' }}
        />
      </motion.div>
      
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          className="relative -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50"
          initial={{ width: 48, height: 48 }}
          animate={{ 
            width: isShrunk ? 20 : 48, 
            height: isShrunk ? 20 : 48 
          }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        />
      </motion.div>
      
      <style>{`
        * {
          cursor: none !important;
        }
        
        @media (pointer: coarse) {
          * {
            cursor: auto !important;
          }
        }
      `}</style>
    </>
  );
}
