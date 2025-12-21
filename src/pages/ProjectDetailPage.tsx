import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Github, Calendar, Send } from "lucide-react";
import { projects } from "../lib/data";
import { Button } from "../components/Button";
import { PageType } from "../lib/types";

interface ProjectDetailPageProps {
  projectId: string | null;
  onNavigate: (page: PageType) => void;
}

export function ProjectDetailPage({
  projectId,
  onNavigate,
}: ProjectDetailPageProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const project = projects.find((p) => p.id === projectId);

  const onSubmit = async (data: any) => {
    try {
      // Modify subject to include project name
      const modifiedData = {
        ...data,
        subject: `${project?.title || "Project"} | ${data.subject}`,
      };

      const response = await fetch("/api/resend/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Feedback <onboarding@resend.dev>",
          to: "ahmaddrizalul@gmail.com", // Replace with your actual email
          subject: modifiedData.subject,
          html: `
            <h2>New Feedback from Portfolio</h2>
            <p><strong>Name:</strong> ${modifiedData.name}</p>
            <p><strong>Email:</strong> ${modifiedData.email}</p>
            <p><strong>Subject:</strong> ${modifiedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${modifiedData.message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Email sent successfully:", result);

      setSubmitStatus("success");
      reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
          <Button onClick={() => onNavigate("project")}>
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => onNavigate("project")}
          className="flex items-center gap-2 mb-8 hover:underline"
        >
          <ArrowLeft size={20} />
          Back to Projects
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-sm">
              {project.category}
            </span>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Calendar size={16} />
              <span>{project.year}</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            {project.title}
          </h1>
          <p className="text-2xl text-gray-700 dark:text-gray-300 max-w-3xl">
            {project.description}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            {/* Project Image */}
            {project.imageUrl && (
              <div className="mb-8">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full aspect-[16/9] object-cover border-2 border-black dark:border-white"
                />
              </div>
            )}

            <div className="border-2 border-black dark:border-white p-8 bg-white dark:bg-black">
              <h2 className="text-3xl font-black mb-6">About This Project</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {project.longDescription}
              </p>

              {/* Technologies Used */}
              <div className="mt-8 pt-8 border-t-2 border-black dark:border-white">
                <h3 className="text-2xl font-black mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Links */}
            <div className="border-2 border-black dark:border-white p-6 bg-white dark:bg-black">
              <h3 className="text-xl font-black mb-4">Project Links</h3>
              <div className="space-y-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                )}
                {!project.demoUrl && !project.githubUrl && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Links not available for this project
                  </p>
                )}
              </div>
            </div>

            {/* Project Info */}
            <div className="border-2 border-black dark:border-white p-6 bg-gray-50 dark:bg-black">
              <h3 className="text-xl font-black mb-4">Project Info</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Category
                  </div>
                  <div className="font-bold">{project.category}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Year
                  </div>
                  <div className="font-bold">{project.year}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Status
                  </div>
                  <div className="font-bold">
                    {project.featured ? "Featured" : "Completed"}
                  </div>
                </div>
              </div>
            </div>

            {/* Feedback Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="border-2 border-black dark:border-white p-8 bg-white dark:bg-black">
                <h2 className="text-2xl font-black mb-6">Send Feedback</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block font-bold mb-2">
                      Name *
                    </label>
                    <input
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters",
                        },
                      })}
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-black text-black dark:text-white"
                      placeholder="Your name"
                    />
                    {errors.name?.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {String(errors.name.message)}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block font-bold mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Please enter a valid email",
                        },
                      })}
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-black text-black dark:text-white"
                      placeholder="your.email@example.com"
                    />
                    {errors.email?.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {String(errors.email.message)}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block font-bold mb-2">
                      Subject *
                    </label>
                    <input
                      {...register("subject", {
                        required: "Subject is required",
                        minLength: {
                          value: 5,
                          message: "Subject must be at least 5 characters",
                        },
                      })}
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white bg-white dark:bg-black text-black dark:text-white"
                      placeholder="What's this about?"
                    />
                    {errors.subject?.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {String(errors.subject.message)}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block font-bold mb-2">
                      Message *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                        minLength: {
                          value: 10,
                          message: "Message must be at least 10 characters",
                        },
                      })}
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none bg-white dark:bg-black text-black dark:text-white"
                      placeholder="Tell me about your project..."
                    />
                    {errors.message?.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {String(errors.message.message)}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2"
                    size="lg"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-100 dark:bg-green-900 border-2 border-green-600 dark:border-green-400 text-green-800 dark:text-green-200"
                    >
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-100 dark:bg-red-900 border-2 border-red-600 dark:border-green-400 text-red-800 dark:text-red-200"
                    >
                      Something went wrong. Please try again.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl font-black mb-8">More Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== projectId)
              .slice(0, 3)
              .map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => window.scrollTo(0, 0)}
                  className="cursor-pointer group"
                >
                  <div className="border-2 border-black dark:border-white p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all h-full">
                    <h3 className="text-xl font-black mb-2 group-hover:underline">
                      {relatedProject.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {relatedProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {relatedProject.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="border border-black dark:border-white px-2 py-1 text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
