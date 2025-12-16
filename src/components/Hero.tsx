import { motion } from "motion/react";
import {
  ArrowDown,
  Github,
  Youtube,
  Instagram,
  Mail,
} from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10"
      >
        <motion.div variants={item} className="mb-6">
          <motion.span 
            className="tracking-widest relative inline-block"
            animate={{
              textShadow: [
                '0 0 10px rgba(239, 68, 68, 0.6), 0 0 20px rgba(239, 68, 68, 0.4)',
                '0 0 15px rgba(220, 38, 38, 0.7), 0 0 25px rgba(220, 38, 38, 0.5)',
                '0 0 10px rgba(239, 68, 68, 0.6), 0 0 20px rgba(239, 68, 68, 0.4)',
              ]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'linear-gradient(90deg, #ef4444, #dc2626, #b91c1c, #dc2626, #ef4444)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, #ef4444, #dc2626, #b91c1c, #dc2626, #ef4444)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block'
              }}
            >
              A portfolio and work experience for my obsession with tech.
            </motion.span>
          </motion.span>
        </motion.div>

        <motion.h1 variants={item} className="mb-6">
          <motion.span 
            className="block relative"
            animate={{
              textShadow: [
                '0 0 20px rgba(156, 163, 175, 0.4), 0 0 40px rgba(156, 163, 175, 0.2)',
                '0 0 25px rgba(209, 213, 219, 0.5), 0 0 50px rgba(209, 213, 219, 0.3)',
                '0 0 20px rgba(107, 114, 128, 0.4), 0 0 40px rgba(107, 114, 128, 0.2)',
                '0 0 25px rgba(209, 213, 219, 0.5), 0 0 50px rgba(209, 213, 219, 0.3)',
                '0 0 20px rgba(156, 163, 175, 0.4), 0 0 40px rgba(156, 163, 175, 0.2)',
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'linear-gradient(90deg, #9ca3af, #d1d5db, #f3f4f6, #d1d5db, #9ca3af)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, #9ca3af, #d1d5db, #f3f4f6, #d1d5db, #9ca3af)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block'
              }}
            >
              Witheredraxia
            </motion.span>
          </motion.span>
          <motion.span 
            className="block relative mt-2"
            animate={{
              textShadow: [
                '0 0 15px rgba(136, 19, 55, 0.6), 0 0 30px rgba(136, 19, 55, 0.4), 0 0 45px rgba(136, 19, 55, 0.2)',
                '0 0 20px rgba(159, 18, 57, 0.7), 0 0 40px rgba(159, 18, 57, 0.5), 0 0 60px rgba(159, 18, 57, 0.3)',
                '0 0 15px rgba(136, 19, 55, 0.6), 0 0 30px rgba(136, 19, 55, 0.4), 0 0 45px rgba(136, 19, 55, 0.2)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              background: 'linear-gradient(135deg, #fecdd3 0%, #fda4af 15%, #fb7185 30%, #f43f5e 50%, #9f1239 70%, #881337 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            <motion.span
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(135deg, #fecdd3 0%, #fda4af 15%, #fb7185 30%, #f43f5e 50%, #9f1239 70%, #881337 100%)',
                backgroundSize: '200% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block'
              }}
            >
              Aksh Thakur
            </motion.span>
          </motion.span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto px-4"
        >
          Full Stack Developer • BCA Student • UI/UX Implementor
          <br className="hidden sm:block" />
          <span className="block sm:inline mt-2">
            Building and learning since 2021
          </span>
        </motion.p>

        <motion.div 
          variants={item}
          className="mb-12 text-sm text-gray-500 max-w-xl mx-auto px-4"
        >
          <p>
            📍 India • 💬 Hindi & English • 🎓 BCA First Year
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="flex gap-4 justify-center mb-16"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/bloodlustkun",
              label: "GitHub",
            },
            {
              icon: Youtube,
              href: "https://youtube.com/@akshexe",
              label: "YouTube",
            },
            {
              icon: Instagram,
              href: "https://instagram.com/lmaooaksh",
              label: "Instagram",
            },
            { icon: Mail, href: "#contact", label: "Email" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target={
                social.href.startsWith("http")
                  ? "_blank"
                  : "_self"
              }
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="p-3 border border-white/10 rounded-lg hover:border-red-600 transition-colors group relative overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={social.label}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-900 opacity-0 group-hover:opacity-100 transition-opacity" />
              <social.icon
                className="relative z-10"
                size={24}
              />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#about"
          variants={item}
          className="inline-block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={32} className="text-red-600" />
        </motion.a>
      </motion.div>
    </section>
  );
}