import { motion } from "motion/react";
import { Code, ArrowRight, Star } from "lucide-react";
import { projects } from "../lib/data";
import { useNavigate } from "react-router-dom";

export function ProjectPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 flex items-center gap-2 md:gap-4">
            <Code size={32} className="md:w-12 md:h-12" />
            Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            A collection of projects I've worked on, from web applications to
            developer tools.
          </p>
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
              <Star size={20} className="md:w-6 md:h-6" fill="currentColor" />
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <div className="border-2 border-black dark:border-white p-6 md:p-8 bg-gray-100 dark:bg-gray-800 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] md:dark:hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] transition-all h-full">
                    {/* Project Image */}
                    <div className="mb-4 md:mb-6">
                      {project.imageUrl ? (
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full aspect-[16/9] object-cover border-2 border-black dark:border-white"
                        />
                      ) : (
                        <div className="w-full aspect-[16/9] border-2 border-black dark:border-white bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <Code
                            size={32}
                            className="md:w-12 md:h-12 text-gray-600 dark:text-gray-400"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-black mb-2 group-hover:underline truncate">
                          {project.title.length > 15
                            ? `${project.title.slice(0, 15)}...`
                            : project.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                          {project.year} • {project.category}
                        </p>
                      </div>
                      <ArrowRight
                        className="group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform flex-shrink-0"
                        size={20}
                      />
                    </div>

                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4 md:mb-6 truncate">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-black dark:bg-white text-white dark:text-black px-2 md:px-3 py-1 text-xs md:text-sm"
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
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-8">
              All Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: featuredProjects.length * 0.1 + index * 0.1,
                  }}
                  className="group cursor-pointer"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <div className="border-2 border-black dark:border-white p-4 md:p-6 bg-white dark:bg-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] md:dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all h-full">
                    {/* Project Image */}
                    <div className="mb-3 md:mb-4">
                      {project.imageUrl ? (
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full aspect-[16/9] object-cover border-2 border-black dark:border-white"
                        />
                      ) : (
                        <div className="w-full aspect-[16/9] border-2 border-black dark:border-white bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <Code
                            size={24}
                            className="md:w-8 md:h-8 text-gray-600 dark:text-gray-400"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex items-start justify-between mb-3 md:mb-4">
                      <h3 className="text-lg md:text-xl font-black group-hover:underline truncate">
                        {project.title.length > 16
                          ? `${project.title.slice(0, 16)}...`
                          : project.title}
                      </h3>
                      <ArrowRight
                        className="group-hover:translate-x-1 transition-transform flex-shrink-0"
                        size={16}
                      />
                    </div>

                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 md:mb-3">
                      {project.year} • {project.category}
                    </p>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 mb-3 md:mb-4 truncate">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="border border-black dark:border-white px-2 py-1 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 text-gray-600 dark:text-gray-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
