import { motion } from "motion/react";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 92 },
        { name: "React/Next.js", level: 90 },
        { name: "Tailwind CSS", level: 93 },
      ],
    },
    {
      category: "Backend & Languages",
      skills: [
        { name: "Python", level: 92 },
        { name: "C Programming", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "SQL/MySQL", level: 90 },
      ],
    },
    {
      category: "Tools & Design",
      skills: [
        { name: "Figma (UI/UX)", level: 85 },
        { name: "Vite", level: 80 },
        { name: "Git/GitHub", level: 88 },
        { name: "GSAP", level: 70 },
      ],
    },
    {
      category: "Data & Marketing",
      skills: [
        { name: "NumPy", level: 75 },
        { name: "Pandas", level: 72 },
        { name: "Social Media", level: 80 },
        { name: "SaaS Platforms", level: 78 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-gray-600">04.</span>{" "}
          <span className="bg-gradient-to-r from-white to-red-600 bg-clip-text text-transparent">
            SKILLS
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="p-6 border border-white/5 rounded-lg bg-black/40 backdrop-blur-sm hover:border-red-600/50 hover:shadow-lg hover:shadow-red-900/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <h3 className="mb-6 text-red-500">
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-500">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-red-600 to-red-900"
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          delay:
                            categoryIndex * 0.2 +
                            skillIndex * 0.1,
                          duration: 1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="mb-8 text-center text-gray-400">
            Technologies & Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Vite",
              "TypeScript",
              "Python",
              "C",
              "Node.js",
              "MongoDB",
              "SQL",
              "MySQL",
              "NumPy",
              "Pandas",
              "Tailwind CSS",
              "Motion",
              "GSAP",
              "Figma",
              "UI/UX",
              "Git/GitHub",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 border border-white/10 rounded-lg bg-black/40 text-gray-300 hover:border-red-600 hover:text-red-400 transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}