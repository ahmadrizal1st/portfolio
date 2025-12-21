import { motion } from 'motion/react';
import { ArrowRight, Code, Award, Briefcase } from 'lucide-react';
import { personalInfo, experiences, certifications, projects } from '../lib/data';
import { Button } from '../components/Button';
import { PageType } from '../lib/types';

interface HomePageProps {
  onNavigate: (page: PageType, projectId?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const latestExperiences = experiences.slice(0, 2);
  const topCertifications = certifications.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 border-b-2 border-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl md:text-7xl font-black mb-6"
            >
              Hi, I'm<br />{personalInfo.name}
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
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl"
            >
              {personalInfo.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button onClick={() => onNavigate('project')} size="lg">
                View My Work
              </Button>
              <Button onClick={() => onNavigate('contact')} variant="outline" size="lg">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 border-b-2 border-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black flex items-center gap-3">
              <Briefcase size={32} />
              Experience Highlights
            </h2>
            <button
              onClick={() => onNavigate('experience')}
              className="flex items-center gap-2 hover:underline"
            >
              View All <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {latestExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-2 border-black p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-black text-xl mb-1">{exp.position}</h3>
                    <p className="text-gray-700">{exp.company}</p>
                  </div>
                  <span className="bg-black text-white px-3 py-1 text-sm">{exp.duration.split(' - ')[0]}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="border border-black px-2 py-1 text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Spotlight */}
      <section className="py-16 border-b-2 border-black bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black flex items-center gap-3">
              <Award size={32} />
              Certifications
            </h2>
            <button
              onClick={() => onNavigate('certification')}
              className="flex items-center gap-2 hover:underline"
            >
              View All <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {topCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-black p-6"
              >
                <Award size={32} className="mb-4" />
                <h3 className="font-black text-lg mb-2">{cert.name}</h3>
                <p className="text-gray-700 mb-2">{cert.issuer}</p>
                <p className="text-sm text-gray-600">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-black flex items-center gap-3">
              <Code size={32} />
              Featured Projects
            </h2>
            <button
              onClick={() => onNavigate('project')}
              className="flex items-center gap-2 hover:underline"
            >
              View All <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group cursor-pointer"
                onClick={() => onNavigate('project-detail', project.id)}
              >
                <div className="border-2 border-black p-6 h-full hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-black text-xl group-hover:underline">{project.title}</h3>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="bg-black text-white px-2 py-1 text-sm">
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
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Let's Work Together</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
            </p>
            <Button 
              onClick={() => onNavigate('contact')} 
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
