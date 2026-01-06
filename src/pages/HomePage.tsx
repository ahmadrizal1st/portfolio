import { motion } from "motion/react";
import { ArrowRight, Code, Award, Briefcase } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import {
  personalInfo,
  experiences,
  certifications,
  projects,
  skills,
} from "../lib/data";
import { Button } from "../components/Button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

export function HomePage() {
  const navigate = useNavigate();
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);
  const latestExperiences = experiences.slice(0, 2);
  const topCertifications = certifications.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b-2 border-black dark:border-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 items-center max-w-6xl"
          >
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex justify-center md:hidden lg:hidden"
            >
              <img
                src="/images/avatar/avatar.gif"
                alt="Avatar"
                className="w-full rounded-full object-cover"
              />
            </motion.div>

            <div>
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl md:text-7xl font-black mb-6"
              >
                Hi, I'm
                <br />
                {personalInfo.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-2xl md:text-3xl mb-8"
              >
                {personalInfo.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl"
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button onClick={() => navigate("/project")} size="lg">
                  View My Work
                </Button>
                <Button
                  onClick={() => navigate("/contact")}
                  variant="outline"
                  size="lg"
                >
                  Get In Touch
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex justify-center"
            >
              <img
                src="/images/avatar/avatar.gif"
                alt="Avatar"
                className="hidden md:block w-full rounded-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-2 md:py-2 border-b-2 border-black dark:border-white">
        <InfiniteSlider duration={10} durationOnHover={20}>
          {skills.map((skill) => (
            <img
              key={skill.name}
              src={skill.logoUrl}
              alt={skill.name}
              className="h-20 w-20 mb-2 mt-2 grayscale hover:grayscale-0"
            />
          ))}
        </InfiniteSlider>
      </section>

      {/* Experience */}
      <section className="py-16 border-b-2 border-black dark:border-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black flex items-center gap-3">
              <Briefcase size={32} />
              Experience Highlights
            </h2>
            <button
              onClick={() => navigate("/experience")}
              className="flex items-center gap-2 hover:underline"
            >
              View All <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {latestExperiences.map((exp, index) => (
              <Link to="/experience">
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-2 border-black dark:border-white p-4 md:p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {exp.imageUrl && (
                        <img
                          src={exp.imageUrl}
                          alt={exp.company}
                          className="w-16 h-10 md:w-20 md:h-12 object-contain"
                        />
                      )}
                      <div>
                        <h3 className="font-black text-lg md:text-xl mb-1">
                          {exp.position.length > 20
                            ? exp.position.slice(0, 20) + "..."
                            : exp.position}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-2 line-clamp-3 text-sm md:text-base">
                          {exp.description}
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <span className="bg-black text-white px-3 py-1 text-xs md:text-sm">
                      {exp.duration.split(" - ")[0]}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="border border-black dark:border-white px-2 py-1 text-xs md:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Spotlight */}
      <section className="py-16 border-b-2 border-black dark:border-white bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black flex items-center gap-3">
              <Award size={32} />
              Certifications
            </h2>
            <button
              onClick={() => navigate("/certification")}
              className="flex items-center gap-2 hover:underline"
            >
              View All <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {topCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-black border-2 border-black dark:border-white p-4 md:p-6"
              >
                {cert.imageUrl ? (
                  <img
                    src={cert.imageUrl}
                    alt={cert.name}
                    className="w-20 h-12 md:w-24 md:h-16 object-contain mb-4"
                  />
                ) : (
                  <Award size={24} className="mb-4 md:w-8 md:h-8" />
                )}
                <h3 className="font-black text-base md:text-lg mb-2 truncate">
                  {cert.name} - {cert.issuer}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black flex items-center gap-3">
              <Code size={32} />
              Featured Projects
            </h2>
            <button
              onClick={() => navigate("/project")}
              className="flex items-center gap-2 hover:underline"
            >
              View All <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group cursor-pointer"
                onClick={() => navigate(`/project/${project.id}`)}
              >
                <div className="border-2 border-black dark:border-white p-4 md:p-6 h-full hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all">
                  <div className="w-full aspect-[16/9] mb-4 rounded overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full aspect-[16/9] object-cover"
                      />
                    ) : (
                      <Code
                        size={36}
                        className="text-gray-500 md:w-12 md:h-12"
                      />
                    )}
                  </div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-black text-lg md:text-xl group-hover:underline">
                        {project.title.length > 25
                          ? project.title.slice(0, 25) + "..."
                          : project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm md:text-base">
                        {project.description.length > 40
                          ? project.description.slice(0, 40) + "..."
                          : project.description}
                      </p>
                    </div>
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform w-4 h-4 md:w-5 md:h-5"
                      size={16}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-black text-white px-2 py-1 text-xs md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black dark:bg-white text-white dark:text-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'm always open to discussing new
              opportunities and creative ideas.
            </p>
            <Button
              onClick={() => navigate("/contact")}
              variant="secondary"
              size="lg"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
