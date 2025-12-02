import { motion } from 'motion/react';
import { Brain, Code2, Palette, Zap } from 'lucide-react';

export function About() {
  const traits = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Building complete web applications from frontend to backend, handling databases, APIs, and user interfaces.',
    },
    {
      icon: Palette,
      title: 'Design Implementation',
      description: 'Working with UI/UX designers to convert Figma designs into responsive, pixel-perfect websites.',
    },
    {
      icon: Brain,
      title: 'Problem Solver',
      description: 'Love tackling complex problems, whether it\'s debugging code or architecting new systems.',
    },
    {
      icon: Zap,
      title: 'Always Learning',
      description: 'Constantly exploring new technologies and improving skills. Currently focused on animations and motion design.',
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="text-gray-600">01.</span>{' '}
            <span className="bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
              ABOUT
            </span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <p className="text-xl text-gray-400 max-w-3xl mb-6">
              I'm <span className="text-white">Aksh Thakur</span>, a BCA first-year student and full-stack developer based in India. 
              Been coding since 2021, starting with HTML, CSS, and JavaScript basics, then gradually building 
              my way into frameworks and full-stack development.
            </p>
            
            <p className="text-xl text-gray-400 max-w-3xl mb-6">
              I come from a <span className="text-red-400">PCB + Computer Science</span> background. While I'm 
              working on improving my mathematics skills, I'm dedicated to learning and growing as a developer. 
              Currently working with <span className="text-white">DevBhoomi Wings</span> and collaborating with 
              UI/UX designers to bring Figma designs to life.
            </p>
            
            <p className="text-xl text-gray-400 max-w-3xl">
              I speak <span className="text-white">Hindi</span> and <span className="text-white">English</span>. 
              Always exploring new technologies and diving into GSAP and motion animations to create better user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traits.map((trait, index) => (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-white/5 rounded-lg bg-black/40 backdrop-blur-sm group hover:border-red-600/50 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="mb-4 inline-block p-3 bg-red-950/30 rounded-lg group-hover:bg-red-900/40 transition-colors">
                    <trait.icon className="text-red-500" size={28} />
                  </div>
                  
                  <h3 className="mb-3 text-white">{trait.title}</h3>
                  
                  <p className="text-gray-400">{trait.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
