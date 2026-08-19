'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function Skills() {
  const skills: Skill[] = [
    {
      name: 'HTML5',
      subtitle: 'MARKUP LANG',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 11.205.004.244-2.722H5.412l.708 7.936H15.6l-.324 3.636-3.276.9-3.3-.9-.212-2.42H5.708l.392 4.676 5.9 1.636 5.864-1.636.78-8.72H8.531z" />
        </svg>
      ),
    },
    {
      name: 'CSS3',
      subtitle: 'STYLING LANG',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm5.09 5.08h10.822l-.232 2.614H9.467l.192 2.176h7.525l-.644 7.218-4.54 1.258-4.542-1.258-.296-3.34h2.614l.148 1.67 2.076.574 2.072-.574.248-2.778H6.866l-.276-3.104H16.89l.18-2.022H6.346l-.256-2.778z" />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      subtitle: 'SCRIPTING LANG',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.268c-.156-.842-.71-1.423-1.876-1.87-.704-.277-1.127-.47-1.127-.893 0-.356.39-.588.892-.588.583 0 .93.284 1.077.72l2.062-1.294c-.382-.93-1.396-1.824-3.136-1.824-2.146 0-3.645 1.215-3.645 3.018 0 2.036 1.5 2.76 2.766 3.224 1.02.378 1.348.6 1.348.97 0 .337-.417.653-1.077.653-.872 0-1.39-.46-1.575-1.102l-2.062 1.2c.404 1.058 1.543 2.025 3.633 2.025 2.502 0 4.153-1.252 4.153-3.235zm-9.356-.164c0-1.865-1.16-3.003-3.14-3.003-1.637 0-2.613.882-2.91 1.633l1.83 1.085c.218-.46.597-.736 1.08-.736.634 0 1.002.44 1.002 1.28v1.31h-2.008c-2.316 0-3.673 1.01-3.673 2.775 0 1.69 1.258 2.787 3.076 2.787 1.638 0 2.527-.796 2.846-1.536h.058v1.36h2.72v-6.937zm-2.72 4.8c0 .763-.615 1.15-1.236 1.15-.653 0-1.096-.348-1.096-.99 0-.696.65-1.018 1.95-1.018h.38v.858z" />
        </svg>
      ),
    },
    {
      name: 'TypeScript',
      subtitle: 'TYPED LANG',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fill="#3178C6" d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zm10.56 12.852H8.384V20h-2.61v-7.148H2.176V10.37h10.024v2.482zm9.264 5.418c0 1.986-1.626 3.23-3.66 3.23-2.15 0-3.66-1.218-3.66-3.23 0-2.036 1.512-2.772 2.784-3.236 1.026-.378 1.356-.606 1.356-.97 0-.342-.42-.654-1.086-.654-.876 0-1.398.462-1.584 1.11l-2.076-1.206c.408-1.062 1.548-2.034 3.66-2.034 2.508 0 4.164 1.26 4.164 3.252v3.738z" />
        </svg>
      ),
    },
    {
      name: 'React',
      subtitle: 'FRONTEND LIB',
      icon: (
        <svg className="w-8 h-8" viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: 'Next.js',
      subtitle: 'WEB FRAMEWORK',
      icon: (
        <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.216 18.064l-6.853-8.815v7.26h-1.391v-9.68h1.272l6.815 8.784v-7.234h1.391v9.685h-1.234zm-8.835-9.685h1.391v4.717l-1.391-1.79v-2.927z" />
        </svg>
      ),
    },
    {
      name: 'PHP',
      subtitle: 'BACKEND LANG',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fill="#777BB4" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.3 14c-.3 1.2-1.3 2-2.7 2h-2.1l-.8 3H9.2l1.9-7h2.9c1.4 0 2.2.8 2.3 2zm-1.8-.2c0-.6-.5-1-1.2-1h-1.2l-.5 2h1.2c.7 0 1.2-.4 1.2-1z" />
        </svg>
      ),
    },
    {
      name: 'Laravel',
      subtitle: 'BACKEND FW',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fill="#FF2D20" d="M22 6.559V19.44a2.56 2.56 0 0 1-1.28 2.217l-10.3 5.96a2.56 2.56 0 0 1-2.56 0l-5.15-2.979a2.56 2.56 0 0 1-1.28-2.217V6.559a2.56 2.56 0 0 1 1.28-2.217l5.15-2.979a2.56 2.56 0 0 1 2.56 0l10.3 5.96A2.56 2.56 0 0 1 22 6.559zM9.13 22.062l9.16-5.29v-5.485l-9.16 5.29zM10.41 5.333l9.16 5.29-4.58 2.645-9.16-5.29zm0 8.847l4.58-2.645v5.29l-4.58 2.645z" />
        </svg>
      ),
    },
    {
      name: 'Python',
      subtitle: 'BACKEND LANG',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fill="#3776AB" d="M11.922 0C5.623 0 6.012 2.7 6.012 2.7l.006 2.825H12.01v.834H3.633S0 5.86 0 11.976c0 6.11 3.197 5.9 3.197 5.9h1.916v-2.7c0 0-.083-3.23 3.155-3.23h5.922s3.156 0 3.156-3.156V3.818S17.433 0 11.922 0zM7.747 1.637a.916.916 0 1 1 0 1.83.916.916 0 0 1 0-1.83zm13.056 4.387v2.7s.083 3.23-3.156 3.23H11.72s-3.155 0-3.155 3.156v5.068s-.389 3.822 5.122 3.822c5.51 0 5.122-2.7 5.122-2.7l-.006-2.825H12.82v-.834h8.375S24 17.56 24 11.444c0-6.11-3.197-5.9-3.197-5.9h-1.916v.48zM16.253 20.533a.916.916 0 1 1 0 1.83.916.916 0 0 1 0-1.83z" />
        </svg>
      ),
    },
    {
      name: 'MySQL',
      subtitle: 'DATABASE',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fill="#4479A1" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.6 15c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm7.2 3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-3c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
        </svg>
      ),
    },
    {
      name: 'vMix',
      subtitle: 'LIVE BROADCAST',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 25 25" fill="currentColor">
          {/* Row 1 */}
          <rect x="0" y="0" width="7" height="7" fill="#1F75C4" rx="0.5" />
          <rect x="9" y="0" width="7" height="7" fill="#1F75C4" rx="0.5" />
          <rect x="18" y="0" width="7" height="7" fill="#39B54A" rx="0.5" />
          
          {/* Row 2 */}
          <rect x="0" y="9" width="7" height="7" fill="#1F75C4" rx="0.5" />
          <rect x="9" y="9" width="7" height="7" fill="#1F75C4" rx="0.5" />
          <rect x="18" y="9" width="7" height="7" fill="#1F75C4" rx="0.5" />
          
          {/* Row 3 */}
          <rect x="0" y="18" width="7" height="7" fill="#F58220" rx="0.5" />
          <rect x="9" y="18" width="7" height="7" fill="#1F75C4" rx="0.5" />
          <rect x="18" y="18" width="7" height="7" fill="#1F75C4" rx="0.5" />
        </svg>
      ),
    },
    {
      name: 'OBS Studio',
      subtitle: 'STREAMING SOFT',
      icon: (
        <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S16.627 0 12 0zm.016 4.316a7.683 7.683 0 0 1 5.385 13.125c-.29-.651-.818-1.397-1.564-1.956-1.564-1.171-4.043-1.635-6.326-1.102a4.675 4.675 0 0 0 .19-1.309c0-2.585-2.096-4.68-4.68-4.68-.456 0-.895.068-1.308.19A7.683 7.683 0 0 1 12.016 4.316zm-7.68 7.669c.404-.112.831-.173 1.272-.173 2.213 0 4.007 1.794 4.007 4.007 0 .441-.06.868-.172 1.272a7.683 7.683 0 0 1-5.107-5.106zm7.697 7.699a7.683 7.683 0 0 1-5.385-13.125c.29.651.818 1.397 1.564 1.956 1.564 1.171 4.043 1.635 6.326 1.102a4.675 4.675 0 0 0-.19 1.309c0 2.585 2.096 4.68 4.68 4.68.456 0 .895-.068 1.308-.19a7.683 7.683 0 0 1-8.303 4.268zm7.68-7.669c-.404.112-.831.173-1.272.173-2.213 0-4.007-1.794-4.007-4.007 0-.441.06-.868.172-1.272a7.683 7.683 0 0 1 5.107 5.106z" />
        </svg>
      ),
    },
    {
      name: 'n8n',
      subtitle: 'AUTOMATION',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#FF6C37" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="3" fill="#FF6C37" />
          <circle cx="5" cy="18" r="3" fill="#FF6C37" />
          <circle cx="19" cy="18" r="3" fill="#FF6C37" />
          <line x1="12" y1="8" x2="6.5" y2="15.5" />
          <line x1="12" y1="8" x2="17.5" y2="15.5" />
        </svg>
      ),
    },
    {
      name: 'Firebase',
      subtitle: 'DATABASE',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M3.89 15.572L6.012 2.298c.06-.37.334-.67.7-.76a.82.82 0 0 1 .844.316l3.336 5.539-7.002 8.18z" fill="#FFC107" />
          <path d="M19.123 13.567l-2.072-12.87c-.06-.367-.33-.667-.7-.756a.825.825 0 0 1-.844.317L3.486 17.472a.56.56 0 0 0 .045.698.54.54 0 0 0 .666.117l14.926-4.72z" fill="#FF3D00" />
          <path d="M15.549 19.387c.219.13.504.09.673-.1l2.901-3.72-2.316-4.455-1.258 8.275zm-3.539 4.618a.65.65 0 0 1-.41-.163L.367 12.8c-.37-.367-.3-.984.145-1.259l1.642-1.025 9.873 9.873 2.124-2.124L4.278 8.39l7.308-4.568a.65.65 0 0 1 .81 0l7.308 4.568L12.01 24.005z" fill="#FF9100" />
        </svg>
      ),
    },
    {
      name: 'Supabase',
      subtitle: 'DATABASE',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fill="#3ECF8E" d="M21.366 11.234H12.98l2.793-9.567a.465.465 0 0 0-.756-.47L3.385 12.327a.466.466 0 0 0 .34.782h8.384L9.317 22.68a.467.467 0 0 0 .757.471l11.632-11.13a.466.466 0 0 0-.34-.787z" />
        </svg>
      ),
    },
    {
      name: 'Git',
      subtitle: 'VERSION CONTROL',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path fill="#F05032" d="M23.384 11.41L12.59.616c-.82-.82-2.15-.82-2.97 0L8.45 1.785l3.238 3.24c.783-.264 1.67-.08 2.296.547.63.63.81 1.52.54 2.304l3.187 3.187c.784-.27 1.68-.088 2.31.54 1.025 1.026 1.025 2.69 0 3.716-1.026 1.025-2.69 1.025-3.716 0-.63-.63-.81-1.52-.54-2.303l-3.13-3.13c-.27.26-.74.45-1.3.45-.63 0-1.25-.26-1.67-.68-.6-.6-.79-1.46-.57-2.22L7.135 7.15c-.756.22-1.614.03-2.21-.57-.64-.64-.81-1.55-.52-2.35L1.22 7.42c-.82.82-.82 2.15 0 2.97l10.795 10.795c.82.82 2.15.82 2.97 0l8.4-8.4c.82-.82.82-2.15 0-2.97v-.005z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      subtitle: 'CODE HOSTING',
      icon: (
        <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      name: 'Vercel',
      subtitle: 'DEPLOYMENT',
      icon: (
        <svg className="w-8 h-8 text-foreground" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0L12 1.475l12 21.05z" />
        </svg>
      ),
    },
    {
      name: 'Figma',
      subtitle: 'UI/UX DESIGN',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="#F24E1E" />
          <path d="M6 12a3 3 0 1 0 6 0V9H6v3z" fill="#A259FF" />
          <path d="M12 12a3 3 0 1 0 6 0V9h-6v3z" fill="#1ABC9C" />
          <path d="M18 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" fill="#FF7262" />
          <path d="M6 18a3 3 0 0 0 6 0v-3H6v3z" fill="#18A0FB" />
        </svg>
      ),
    },
    {
      name: 'Google Stitch',
      subtitle: 'DESIGN TO CODE',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M6 4h6a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H8a4 4 0 0 0-4 4v0a4 4 0 0 0 8 4h6" stroke="#4285F4" strokeWidth="3" strokeLinecap="round" />
          <path d="M12 10l4-4-4-4" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="6" r="1.5" fill="#34A853" />
          <circle cx="8" cy="18" r="1.5" fill="#FBBC05" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills" className="pt-36 pb-24 relative bg-background/50 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">Creative & Tech Stack</p>
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 150, damping: 12 }}
              className="glass-panel p-3 sm:p-5 rounded-xl border border-border flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3.5 group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 min-h-[105px] sm:min-h-[140px]"
            >
              {/* Icon wrapper */}
              <div className="p-2 sm:p-3.5 rounded-xl bg-card border border-border group-hover:border-primary/30 group-hover:scale-110 transition-all duration-300 flex items-center justify-center w-10 h-10 sm:w-14 sm:h-14 shadow-sm group-hover:shadow-[0_0_15px_var(--primary-glow)] [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-8 sm:[&>svg]:h-8">
                {skill.icon}
              </div>
              
              {/* Name & Subtitle */}
              <div className="w-full flex flex-col items-center space-y-0.5 sm:space-y-1">
                <span className="text-xs sm:text-sm font-bold text-foreground group-hover:text-primary transition-colors block leading-tight">
                  {skill.name}
                </span>
                <span className="text-[7px] sm:text-[9px] font-bold text-foreground/45 tracking-wider uppercase block">
                  {skill.subtitle}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
