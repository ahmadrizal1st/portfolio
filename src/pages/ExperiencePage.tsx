import { motion } from "motion/react";
import { useState } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "../lib/data";
import * as Accordion from "@radix-ui/react-accordion";

export function ExperiencePage() {
  const [filter, setFilter] = useState<
    "all" | "full-time" | "organization" | "volunteer"
  >("all");

  const filteredExperiences =
    filter === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === filter);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 flex items-center gap-4">
            <Briefcase size={48} />
            Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            My professional journey, organizations, and volunteer work.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {(["all", "full-time", "organization", "volunteer"] as const).map(
            (type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 border-2 border-border transition-all ${
                  filter === type
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-card-foreground hover:bg-accent"
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
              </button>
            )
          )}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:transform md:-translate-x-1/2" />

          {filteredExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
              } md:w-1/2`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-0 w-4 h-4 bg-primary border-4 border-background rounded-full ${
                  index % 2 === 0 ? "left-0 md:right-0" : "left-0"
                } md:transform md:-translate-x-1/2`}
              />

              {/* Content Card */}
              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <div className="border-2 border-border p-6 bg-card hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all">
                  {/* Header */}
                  <div className="mb-4">
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 text-sm mb-3">
                      {exp.year}
                    </span>
                    <h3 className="text-2xl font-black mb-2">{exp.position}</h3>
                    <p className="text-xl text-muted-foreground mb-3">
                      {exp.company}
                    </p>

                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  {exp.imageUrl && (
                    <img
                      src={exp.imageUrl}
                      alt={`${exp.position} at ${exp.company}`}
                      className="w-full aspect-[16/9] object-cover border-2 border-border mb-4"
                    />
                  )}

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements Accordion */}
                  <Accordion.Root type="single" collapsible>
                    <Accordion.Item value="achievements">
                      <Accordion.Trigger className="w-full text-left font-bold hover:underline mb-2">
                        Key Achievements ↓
                      </Accordion.Trigger>
                      <Accordion.Content>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </Accordion.Content>
                    </Accordion.Item>
                  </Accordion.Root>

                  {/* Skills */}
                  <div className="mt-4 pt-4 border-t-2 border-border">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="border border-black px-3 py-1 text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="mt-4">
                    <span className="inline-block text-xs px-2 py-1 bg-muted border border-border">
                      {exp.type.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
