import { motion } from "motion/react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { certifications } from "../lib/data";
import { useState } from "react";
import { Certification } from "../lib/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../app/components/ui/dialog";

export function CertificationPage() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

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
              className="border-2 border-border p-6 bg-card hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all min-h-[500px] flex flex-col cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Icon */}
              <div className="mb-6">
                <Award size={48} strokeWidth={2} className="text-foreground" />
              </div>

              {/* Content */}
              <h3
                className="text-2xl font-black mb-3 line-clamp-1"
                title={cert.name}
              >
                {cert.name}
              </h3>
              <p
                className="text-lg text-muted-foreground mb-4 line-clamp-1"
                title={cert.issuer}
              >
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

              {cert.description && cert.description.trim().length > 0 ? (
                <p className="text-muted-foreground mb-4 text-justify flex-grow line-clamp-2">
                  {cert.description}
                </p>
              ) : (
                <p className="text-muted-foreground mb-4 text-justify flex-grow">
                  No description available.
                </p>
              )}

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
                  onClick={(e) => e.stopPropagation()}
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

        <Dialog
          open={!!selectedCert}
          onOpenChange={(open) => !open && setSelectedCert(null)}
          modal={false}
        >
          <DialogContent className="max-w-2xl z-[102] [&>button]:p-3 [&>button>svg]:size-6">
            {selectedCert && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedCert.name}</DialogTitle>
                  <DialogDescription>
                    {selectedCert.issuer} - {selectedCert.date}
                  </DialogDescription>
                </DialogHeader>
                {selectedCert.imageUrl && (
                  <img
                    src={selectedCert.imageUrl}
                    alt={`${selectedCert.name} certificate`}
                    className="w-full aspect-[4/3] object-cover border-2 border-border mb-4"
                  />
                )}
                <p className="text-muted-foreground mb-4 text-justify">
                  {selectedCert.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-primary text-primary-foreground px-2 py-1 text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                {selectedCert.credentialId && (
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-bold">Credential ID:</span>{" "}
                    {selectedCert.credentialId}
                  </p>
                )}
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm hover:underline"
                  >
                    <ExternalLink size={16} />
                    Verify Credential
                  </a>
                )}
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
