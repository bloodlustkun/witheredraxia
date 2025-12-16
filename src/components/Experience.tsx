import { motion } from 'motion/react';
import { Briefcase, Code, Palette, Rocket, TrendingUp } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      icon: Rocket,
      title: 'Full Stack Developer',
      company: 'DevBhoomi Wings',
      period: 'Current',
      link: 'https://www.devbhoomiwings.com',
      description: 'Currently working on professional web development projects. Building and maintaining full-stack applications using React, Next.js, and modern backend technologies.',
      tags: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    },
    {
      icon: Palette,
      title: 'UI/UX Collaboration',
      company: 'Various Teams',
      period: '2021 - Present',
      description: 'Working closely with UI/UX designers in Figma to bring designs to life. Translating design mockups into responsive, pixel-perfect web applications.',
      tags: ['Figma', 'UI/UX', 'HTML/CSS', 'React', 'Vite'],
    },
    {
      icon: Code,
      title: 'Gun Shop CLI System',
      company: 'Personal Project',
      period: '2023',
      description: 'Developed a command-line inventory management system for a gun shop. Built with Python using NumPy for calculations and MySQL for data persistence. Features full CRUD operations.',
      tags: ['Python', 'NumPy', 'MySQL', 'CLI'],
    },
    {
      icon: TrendingUp,
      title: 'Social Media & SaaS',
      company: 'Digital Marketing',
      period: '2022 - Present',
      description: 'Experience in social media marketing strategies and working with SaaS platforms. Understanding of digital growth, user acquisition, and data-driven marketing.',
      tags: ['Social Media', 'SaaS', 'Marketing', 'Analytics'],
    },
    {
      icon: Briefcase,
      title: 'Web & App Development',
      company: 'Freelance',
      period: '2021 - Present',
      description: 'Been coding since 2021. Started with basics like HTML, CSS, and JavaScript, gradually moved to frameworks and full-stack development. Built various web and mobile applications.',
      tags: ['Full Stack', 'Web Dev', 'App Dev', 'MongoDB'],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-gray-600">02.</span>{' '}
          <span className="bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
            EXPERIENCE
          </span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 border border-white/5 rounded-lg bg-black/40 backdrop-blur-sm hover:border-red-600/50 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300">
                {/* Timeline indicator */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-red-600 rounded-full border-4 border-black group-hover:scale-110 transition-transform" />
                
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="p-4 bg-red-950/30 rounded-lg group-hover:bg-red-900/40 transition-colors inline-block">
                      <exp.icon className="text-red-500" size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-white mb-1">{exp.title}</h3>
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-400 hover:text-red-300 transition-colors"
                          >
                            {exp.company} ↗
                          </a>
                        ) : (
                          <p className="text-red-500">{exp.company}</p>
                        )}
                      </div>
                      <span className="text-sm text-gray-500 border border-white/10 px-3 py-1 rounded-full bg-black/40 w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 text-red-400 border border-red-900/50 rounded-full bg-red-950/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 border border-red-900/30 rounded-lg bg-gradient-to-r from-red-950/20 to-black/40"
        >
          <h3 className="mb-4 text-red-500">Currently Learning</h3>
          <p className="text-gray-400 mb-6">
            Expanding my animation skills and diving deeper into advanced motion design for better user experiences.
          </p>
          <div className="flex flex-wrap gap-3">
            {['GSAP', 'Motion Animations', 'Advanced CSS Animations', 'React Performance'].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 border border-red-800/50 rounded-lg bg-red-950/30 text-red-300 hover:border-red-600 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
