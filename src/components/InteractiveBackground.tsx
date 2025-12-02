import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if mobile
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseX, mouseY, isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Night City Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black" />
      
      {/* City Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-red-950/30 via-purple-950/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-blue-950/20 to-transparent" />
      
      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 md:w-[500px] md:h-[500px] rounded-full blur-3xl opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.2) 0%, rgba(153, 27, 27, 0.1) 50%, transparent 70%)',
          left: isMobile ? '10%' : x,
          top: isMobile ? '20%' : y,
          transform: isMobile ? 'none' : 'translate(-50%, -50%)',
        }}
      />
      
      <motion.div
        className="absolute w-80 h-80 md:w-[400px] md:h-[400px] rounded-full blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(153, 27, 27, 0.2) 0%, rgba(127, 29, 29, 0.1) 50%, transparent 70%)',
          right: isMobile ? '10%' : `${100 - (mousePosition.x / window.innerWidth) * 100}%`,
          bottom: isMobile ? '20%' : `${100 - (mousePosition.y / window.innerHeight) * 100}%`,
        }}
      />

      {/* Subtle Grid */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      


      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/30 to-black/80" />
      
      {/* Scanline effect */}
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(220, 38, 38, 0.1) 2px, rgba(220, 38, 38, 0.1) 4px)',
        }}
        animate={{
          y: [0, 100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
