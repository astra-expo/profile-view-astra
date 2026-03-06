'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [expandedSection, setExpandedSection] = useState(null);

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: '𝕏' },
    { name: 'GitHub', url: 'https://github.com/astra-expoi', icon: '⚙️' },
    { name: 'YouTube', url: 'https://youtube.com/yourchannel', icon: '▶️' },
    { name: 'Discord', url: 'https://discord.com/invite/yourserver', icon: '💬' },
    { name: 'Instagram', url: 'https://instagram.com/yourprofile', icon: '📷' },
    { name: 'TikTok', url: 'https://tiktok.com/@yourprofile', icon: '🎵' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Profile Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl font-bold bg-gradient-to-br from-purple-600 to-pink-600">
                AE
              </div>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2 drop-shadow-lg">astra-expoi</h1>
          <p className="text-xl text-purple-300 mb-2">Creative Developer & Designer</p>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-md mx-auto">Building cool digital experiences on the web</p>
        </div>

        {/* Main Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {/* About Me Button */}
          <button
            onClick={() => setExpandedSection(expandedSection === 'about' ? null : 'about')}
            className="group relative overflow-hidden rounded-lg p-6 text-left transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 hover:border-purple-500/60 shadow-lg hover:shadow-purple-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-3xl mb-2">👤</div>
              <h2 className="text-2xl font-bold text-white">About Me</h2>
              <p className="text-purple-300 text-sm mt-1">Learn more about who I am</p>
            </div>
          </button>

          {/* Projects Button */}
          <button
            onClick={() => setExpandedSection(expandedSection === 'projects' ? null : 'projects')}
            className="group relative overflow-hidden rounded-lg p-6 text-left transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 hover:border-blue-500/60 shadow-lg hover:shadow-blue-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-3xl mb-2">🚀</div>
              <h2 className="text-2xl font-bold text-white">Projects</h2>
              <p className="text-blue-300 text-sm mt-1">Check out my work</p>
            </div>
          </button>

          {/* Skills Button */}
          <button
            onClick={() => setExpandedSection(expandedSection === 'skills' ? null : 'skills')}
            className="group relative overflow-hidden rounded-lg p-6 text-left transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 hover:border-green-500/60 shadow-lg hover:shadow-green-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-3xl mb-2">⚡</div>
              <h2 className="text-2xl font-bold text-white">Skills</h2>
              <p className="text-green-300 text-sm mt-1">Technologies I use</p>
            </div>
          </button>

          {/* Contact Button */}
          <button
            onClick={() => setExpandedSection(expandedSection === 'contact' ? null : 'contact')}
            className="group relative overflow-hidden rounded-lg p-6 text-left transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 hover:border-orange-500/60 shadow-lg hover:shadow-orange-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="text-3xl mb-2">✉️</div>
              <h2 className="text-2xl font-bold text-white">Contact</h2>
              <p className="text-orange-300 text-sm mt-1">Get in touch with me</p>
            </div>
          </button>
        </div>

        {/* Expandable Content Sections */}
        {expandedSection === 'about' && (
          <div className="mb-8 p-6 rounded-lg bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/30 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">About Me</h3>
            <p className="text-gray-300 leading-relaxed mb-3">
              Hey! I'm a passionate developer and designer crafting digital experiences. I love building things on the web and creating beautiful, functional interfaces.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, playing games, or creating content. Let's build something amazing together!
            </p>
          </div>
        )}

        {expandedSection === 'projects' && (
          <div className="mb-8 p-6 rounded-lg bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/30 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">Featured Projects</h3>
            <div className="space-y-3">
              {['Project Alpha', 'Project Beta', 'Project Gamma'].map((project, idx) => (
                <div key={idx} className="p-3 rounded bg-slate-800/50 hover:bg-slate-800/70 transition-colors cursor-pointer border border-blue-500/20">
                  <p className="text-white font-semibold">{project}</p>
                  <p className="text-sm text-gray-400">Click to view details →</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {expandedSection === 'skills' && (
          <div className="mb-8 p-6 rounded-lg bg-gradient-to-br from-green-600/10 to-emerald-600/10 border border-green-500/30 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">My Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {['JavaScript', 'React', 'Next.js', 'CSS/Tailwind', 'Node.js', 'Git'].map((skill, idx) => (
                <div key={idx} className="p-3 rounded bg-green-500/10 border border-green-500/30 text-green-300 font-semibold text-center hover:bg-green-500/20 transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}

        {expandedSection === 'contact' && (
          <div className="mb-8 p-6 rounded-lg bg-gradient-to-br from-orange-600/10 to-red-600/10 border border-orange-500/30 backdrop-blur-sm animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Me</h3>
            <p className="text-gray-300 mb-4">Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="space-y-2">
              <p className="text-gray-300"><span className="text-orange-400 font-semibold">Email:</span> your.email@example.com</p>
              <p className="text-gray-300"><span className="text-orange-400 font-semibold">Discord:</span> yourhandle#0000</p>
            </div>
          </div>
        )}

        {/* Social Media Links */}
        <div className="mb-8">
          <p className="text-gray-400 text-center mb-4 text-sm">Connect With Me</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg hover:shadow-purple-500/50 flex flex-col items-center justify-center"
                title={link.name}
              >
                <div className="text-2xl mb-2 group-hover:scale-125 transition-transform duration-300">{link.icon}</div>
                <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-slate-700 pt-6">
          <p>© 2026 astra-expoi. Made with ❤️</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}