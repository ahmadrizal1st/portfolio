import { motion } from "motion/react";
import { User, Code, Heart, Zap } from "lucide-react";
import { personalInfo, experiences, certifications } from "../lib/data";

export function AboutPage() {
  const skills = Array.from(
    new Set([
      ...experiences.flatMap((e) => e.skills),
      ...certifications.flatMap((c) => c.skills),
    ])
  );

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 flex items-center gap-4">
            <User size={48} />
            About Me
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            Get to know more about my background, skills, and what drives me as
            a developer.
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="border-2 border-black dark:border-white p-8 md:p-12 bg-white dark:bg-black">
            <h2 className="text-4xl font-black mb-6">Hello!</h2>
            <div className="prose max-w-none">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I'm passionate about creating elegant solutions to complex
                problems. My journey in software development started over{" "}
                {experiences.length} years ago, and I've had the privilege of
                working on diverse projects across various industries.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me contributing to open-source
                projects, mentoring aspiring developers, or exploring new
                technologies and frameworks.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-black mb-8">What I Value</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Code size={32} />,
                title: "Clean Code",
                description:
                  "Writing maintainable, efficient, and well-documented code that stands the test of time.",
              },
              {
                icon: <Heart size={32} />,
                title: "User Focus",
                description:
                  "Building products with the end-user in mind, ensuring great experiences and accessibility.",
              },
              {
                icon: <Zap size={32} />,
                title: "Continuous Learning",
                description:
                  "Staying updated with the latest technologies and best practices in software development.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-2 border-black dark:border-white p-6 bg-white dark:bg-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-black mb-3">{value.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-black mb-8">Skills & Technologies</h2>
          <div className="border-2 border-black dark:border-white p-8 bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-2 border-black dark:border-white p-8 bg-white dark:bg-black"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">
                {experiences.length}
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">
                {experiences.reduce(
                  (sum, exp) => sum + exp.achievements.length,
                  0
                )}
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Achievements
              </div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">
                {certifications.length}
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                Certifications
              </div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">{skills.length}+</div>
              <div className="text-gray-700 dark:text-gray-300">Skills</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
