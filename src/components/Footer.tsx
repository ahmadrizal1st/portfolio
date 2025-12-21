import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { personalInfo } from '../lib/data';
import { PageType } from '../lib/types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Experience', page: 'experience' },
    { label: 'Projects', page: 'project' },
  ];

  return (
    <footer className="border-t-2 border-black bg-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-black text-xl mb-4">{personalInfo.name}</h3>
            <p className="text-gray-700 mb-4">{personalInfo.title}</p>
            <p className="text-sm text-gray-600">{personalInfo.location}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-xl mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className="block hover:underline text-gray-700"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-black text-xl mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:underline text-gray-700"
              >
                <Mail size={18} />
                {personalInfo.email}
              </a>
              
              <div className="flex items-center gap-4 mt-4">
                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                )}
                {personalInfo.linkedin && (
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                )}
                {personalInfo.website && (
                  <a
                    href={personalInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
                    aria-label="Website"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-black mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
