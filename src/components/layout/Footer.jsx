import React from 'react';
import {
  Twitter,
  Linkedin,
  Github,
  ArrowUp
} from 'lucide-react';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' }
];

const services = ['AI Solutions', 'Blockchain Development', 'DevOps Automation', 'Data Analytics'];
const resources = ['Case Studies', 'Technical Blog', 'Documentation', 'API Reference'];
const policies = ['Privacy Policy', 'Terms of Service', 'Security'];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-sm text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Echocraft
            </h2>
            <p className="mb-4">
              Building intelligent systems that scale with your vision.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-full hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>hello@echocraft.io</li>
              <li>+1 (888) 555-ECHO</li>
              <li className="pt-4">
                123 Innovation Blvd<br />
                San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500">&copy; {currentYear} Echocraft Technologies. All rights reserved.</p>

          <div className="flex gap-6 flex-wrap justify-center md:justify-start">
            {policies.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <motion.button
            onClick={scrollToTop}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
            <span className="hidden sm:inline">Back to top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
