import React from 'react';
import { Instagram, Send, Linkedin } from 'lucide-react';

// Configure your social links here
const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/orbita.agency', // Replace with your Instagram URL
  telegram: 'https://t.me/orbita_agency', // Replace with your Telegram URL
  linkedin: 'https://linkedin.com/company/orbita-agency' // Replace with your LinkedIn URL
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-zinc-900" role="contentinfo">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter">ORBITA</h2>
          <p className="text-zinc-500 text-sm mt-1">Growth Systems & Digital Engineering</p>
        </div>

        <nav className="flex gap-6" aria-label="Social links">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
            <span className="hidden sm:inline">Instagram</span>
          </a>
          <a
            href={SOCIAL_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
            aria-label="Telegram"
          >
            <Send className="w-5 h-5" />
            <span className="hidden sm:inline">Telegram</span>
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-zinc-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </nav>

        <div className="text-zinc-600 text-xs">
          © {new Date().getFullYear()} ORBITA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
