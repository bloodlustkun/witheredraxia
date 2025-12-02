import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'DevBhoomi Wings',
      description: 'Professional website for DevBhoomi Wings. Full-stack application built with modern technologies, featuring responsive design and smooth user experience.',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
      link: 'https://www.devbhoomiwings.com',
      current: true,
    },
    {
      title: 'Gun Shop Inventory System',
      description: 'Command-line inventory management system for a gun shop. Built with Python, NumPy for calculations, and MySQL for data persistence. Features complete CRUD operations and real-time stock tracking.',
      tags: ['Python', 'NumPy', 'MySQL', 'CLI'],
      github: '#',
    },
    {
      title: 'UI/UX Implementation Projects',
      description: 'Multiple projects where I collaborated with UI/UX designers to convert their Figma designs into pixel-perfect, responsive web applications. Focus on attention to detail and smooth animations.',
      tags: ['React', 'Figma', 'HTML/CSS', 'Motion'],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-gray-600">03.</span>{' '}
          <span className="bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
            PROJECTS
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-white/5 rounded-lg bg-black/40 backdrop-blur-sm hover:border-red-600/50 hover:shadow-lg hover:shadow-red-900/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-white group-hover:text-red-400 transition-colors">
                  {project.title}
                  {project.current && (
                    <span className="ml-2 text-xs px-2 py-1 bg-red-600/20 text-red-400 rounded-full">
                      Current
                    </span>
                  )}
                </h3>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-400 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs border border-white/10 rounded-full text-gray-400 bg-black/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm">
            More projects on{' '}
            <a
              href="https://github.com/bloodlustkun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              GitHub @bloodlustkun
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
