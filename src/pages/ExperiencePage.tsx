import { motion } from "motion/react";
import { useState } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "../lib/data";
import * as Accordion from "@radix-ui/react-accordion";

export function ExperiencePage() {
  const [filter, setFilter] = useState<
    | "all"
    | "full-time"
    | "part-time"
    | "intern"
    | "organization"
    | "volunteer"
    | "freelance"
  >("all");

  const filteredExperiences =
    filter === "all"
      ? experiences
      : experiences.filter((exp) => exp.type === filter);

  return (
    <div className="min-h-screen py-8 md:py-16 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 flex items-center gap-2 md:gap-4">
            <Briefcase size={32} className="md:w-12 md:h-12" />
            Experience
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            My professional journey, organizations, and volunteer work.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 md:gap-4 mb-8 md:mb-12"
        >
          {(
            [
              "all",
              "full-time",
              "part-time",
              "intern",
              "organization",
              "volunteer",
              "freelance",
            ] as const
          ).map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 md:px-6 md:py-2 border-2 border-border transition-all text-sm md:text-base ${
                filter === type
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-card-foreground hover:bg-accent"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ")}
            </button>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {filteredExperiences.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 md:py-16"
            >
              <Briefcase
                size={48}
                className="md:w-16 md:h-16 mx-auto mb-4 text-muted-foreground"
              />
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                No experiences found
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                There are no experiences matching the selected filter.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform -translate-x-1/2" />

              {filteredExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative mb-8 md:mb-12 w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute top-0 w-3 h-3 md:w-4 md:h-4 bg-primary border-2 md:border-4 border-background rounded-full left-4 ${
                      index % 2 === 0
                        ? "md:right-0 md:left-auto md:translate-x-1/2"
                        : "md:left-0 md:-translate-x-1/2"
                    }`}
                  />

                  {/* Content Card */}
                  <div
                    className={`ml-8 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="border-2 border-border p-4 md:p-6 bg-card hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] md:dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all">
                      {/* Header */}
                      <div className="mb-3 md:mb-4">
                        <span className="inline-block bg-primary text-primary-foreground px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm mb-2 md:mb-3">
                          {exp.year}
                        </span>
                        <h3 className="text-xl md:text-2xl font-black mb-2 break-words">
                          {exp.position}
                        </h3>
                        <p className="text-lg md:text-xl text-muted-foreground mb-2 md:mb-3 break-words">
                          {exp.company}
                        </p>

                        <div className="flex flex-col gap-1 md:gap-2 text-xs md:text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="md:w-4 md:h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="md:w-4 md:h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      {exp.imageUrl && (
                        <img
                          src={exp.imageUrl}
                          alt={`${exp.position} at ${exp.company}`}
                          className="w-full aspect-[16/9] object-cover border-2 border-border mb-3 md:mb-4"
                        />
                      )}

                      {/* Description */}
                      <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 whitespace-pre-wrap break-words">
                        {exp.description}
                      </p>

                      {/* Achievements Accordion */}
                      <Accordion.Root type="single" collapsible>
                        <Accordion.Item value="achievements">
                          <Accordion.Trigger className="w-full text-left font-bold hover:underline mb-2 text-sm md:text-base">
                            Key Achievements ↓
                          </Accordion.Trigger>
                          <Accordion.Content>
                            <ul className="list-disc list-inside space-y-1 md:space-y-2 text-muted-foreground ml-2 text-sm md:text-base break-words">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="break-words">
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </Accordion.Content>
                        </Accordion.Item>
                      </Accordion.Root>

                      {/* Skills */}
                      <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t-2 border-border">
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="border border-black px-2 py-1 md:px-3 md:py-1 text-xs md:text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Type Badge */}
                      <div className="mt-3 md:mt-4">
                        <span className="inline-block text-xs px-2 py-1 bg-muted border border-border">
                          {exp.type.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
