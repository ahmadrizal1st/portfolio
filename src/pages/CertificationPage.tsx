import { motion } from "motion/react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { certifications } from "../lib/data";

export function CertificationPage() {
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
            <Award size={48} />
            Certifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Professional certifications and achievements that validate my
            expertise.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-2 border-border p-6 bg-card hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all"
            >
              {/* Icon */}
              <div className="mb-6">
                <Award size={48} strokeWidth={2} className="text-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-black mb-3">{cert.name}</h3>
              <p className="text-lg text-muted-foreground mb-4">
                {cert.issuer}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>

              {/* Image */}
              {cert.imageUrl ? (
                <img
                  src={cert.imageUrl}
                  alt={`${cert.name} certificate`}
                  className="w-full aspect-[4/3] object-cover border-2 border-border mb-4"
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-muted border-2 border-border mb-4 flex items-center justify-center">
                  <Award size={48} className="text-muted-foreground" />
                </div>
              )}

              <p className="text-muted-foreground mb-4">{cert.description}</p>

              {/* Credential Info */}
              {cert.credentialId && (
                <p className="text-sm text-muted-foreground mb-2">
                  <span className="font-bold">Credential ID:</span>{" "}
                  {cert.credentialId}
                </p>
              )}

              {/* Skills */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary text-primary-foreground px-2 py-1 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verify Link */}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:underline mt-4 border-t-2 border-border pt-4"
                >
                  <ExternalLink size={16} />
                  Verify Credential
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 border-2 border-border bg-muted"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-black mb-2">
                {certifications.length}
              </div>
              <div className="text-muted-foreground">Total Certifications</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">
                {new Set(certifications.flatMap((c) => c.skills)).size}
              </div>
              <div className="text-muted-foreground">Verified Skills</div>
            </div>
            <div>
              <div className="text-5xl font-black mb-2">
                {new Set(certifications.map((c) => c.issuer)).size}
              </div>
              <div className="text-muted-foreground">Issuing Organizations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
