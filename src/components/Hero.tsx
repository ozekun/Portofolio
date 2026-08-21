'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Download, Terminal, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Github = ({ size = 18, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    width={size}
    height={size}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 18, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    width={size}
    height={size}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 18, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    width={size}
    height={size}
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Tiktok = ({ size = 18, ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
    width={size}
    height={size}
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  const codeString = [
    'const developer = {',
    '  name: "Theodorus Fidelis Samangun",',
    '  role: "Mahasiswa IT / Developer",',
    '  passion: "Membangun Masa Depan"',
    '};',
  ];

  const roles = [
    { text: "Frontend Developer", gradient: "from-primary to-cyan-400" },
    { text: "Backend Developer", gradient: "from-blue-400 to-teal-400" },
    { text: "UI/UX Designer", gradient: "from-purple-400 to-pink-400" },
    { text: "Web Developer", gradient: "from-teal-400 to-primary" }
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-0 lg:min-h-screen flex items-center justify-center pt-24 pb-8 lg:pt-30 lg:pb-16 overflow-hidden bg-background"
    >
      {/* Dynamic Background Neon Light Circles */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-5 text-center lg:text-left items-center lg:items-start"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tagline, Title, and Role Group */}
            <div className="flex flex-col space-y-3 items-center lg:items-start">
              {/* Tagline / Subtitle */}
              <motion.div variants={itemVariants}>
                <span className="text-[13px] sm:text-sm font-bold tracking-widest text-foreground/50 uppercase">
                  HALO, SAYA
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]"
              >
                Theodorus <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent glow-text-neon">
                  Fidelis Samangun
                </span>
              </motion.h1>

              {/* Role / Profession */}
              <motion.div variants={itemVariants} className="flex flex-col space-y-1 pt-1 items-center lg:items-start">
                <span className="text-lg sm:text-lg font-bold text-foreground/60">
                  Seorang
                </span>
                <div className="inline-block border-b-2 border-primary pb-1.5 mx-auto lg:mx-0 w-max max-w-full overflow-hidden h-[38px] sm:h-[40px] md:h-[46px] relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={currentRoleIndex}
                      initial={{ y: -25, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 25, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className={`text-2xl sm:text-2xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${roles[currentRoleIndex].gradient} tracking-tight block`}
                    >
                      {roles[currentRoleIndex].text}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-5 pt-2">
              <a href="https://github.com/ozekun" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                <Github size={30} />
              </a>
              <a href="https://www.linkedin.com/in/theo-samangun" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                <Linkedin size={30} />
              </a>
              <a href="https://www.instagram.com/the.sam_22/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors cursor-pointer">
                <Instagram size={30} />
              </a>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-foreground/75 max-w-xl leading-relaxed pt-2 mx-auto lg:mx-0"
            >
              Saya membantu bisnis dan individu mengubah ide menjadi solusi digital yang indah dan berfungsi.
            </motion.p>

            {/* Actions Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-primary-foreground bg-primary rounded-full shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-200 group cursor-pointer"
              >
                Lihat Karya Saya
                <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="/cv-theodorus.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-foreground bg-transparent border border-border hover:border-primary/50 hover:bg-card/50 rounded-full transition-all duration-200 group cursor-pointer"
              >
                Unduh CV
                <Download size={18} className="ml-2 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Scroll Indicator (Visible on desktop) */}
            <motion.div
              variants={itemVariants}
              className="hidden lg:flex items-center space-x-2 text-xs font-semibold tracking-widest text-foreground/40 hover:text-primary uppercase pt-8 cursor-pointer transition-colors"
            >

            </motion.div>
          </motion.div>

          {/* Right Visual Column */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center relative">
            {/* Avatar Wrapper with pulsing circles */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 80, delay: 0.3 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96"
            >
              {/* Spinning Neon Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 animate-spin-[20s]"></div>

              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 opacity-40 blur-xl animate-pulse-slow"></div>

              {/* Neon border wrapper */}
              <div className="absolute inset-3 rounded-full p-1 bg-gradient-to-tr from-primary to-accent shadow-[0_0_30px_rgba(16,185,129,0.3)] overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-background relative">
                  <Image
                    src="/images/developer-profile.jpg"
                    alt="Developer Avatar"
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>


            </motion.div>

            {/* Code Card Mockup overlapping below */}
            <motion.div
              initial={{ x: 50, y: 50, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 90, delay: 0.6 }}
              className="absolute -bottom-8 lg:bottom-4 left-0 sm:left-4 right-0 sm:right-auto glass-panel border border-border/80 rounded-xl shadow-2xl overflow-hidden font-mono text-xs w-[320px] sm:w-[350px] mx-auto z-20"
            >
              {/* Editor Header */}
              <div className="flex justify-between items-center bg-card-foreground/5 dark:bg-muted-foreground/10 px-4 py-2 border-b border-border/80">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="flex items-center text-foreground/40 text-[10px] space-x-1">
                  <Terminal size={10} />
                  <span>developer.ts</span>
                </div>
              </div>
              {/* Editor Body */}
              <div className="p-4 space-y-1.5 text-[11px] leading-relaxed text-foreground bg-background/50">
                {codeString.map((line, index) => {
                  let formattedLine = line;
                  if (line.includes('const')) {
                    formattedLine = line.replace('const', '<span class="text-blue-500">const</span>');
                  }
                  if (line.includes('developer')) {
                    formattedLine = formattedLine.replace('developer', '<span class="text-yellow-500 font-semibold">developer</span>');
                  }
                  if (line.includes('name:')) {
                    formattedLine = formattedLine.replace('name:', '<span class="text-purple-400">name</span>:');
                  }
                  if (line.includes('role:')) {
                    formattedLine = formattedLine.replace('role:', '<span class="text-purple-400">role</span>:');
                  }
                  if (line.includes('passion:')) {
                    formattedLine = formattedLine.replace('passion:', '<span class="text-purple-400">passion</span>:');
                  }
                  if (line.includes('"Theodorus Fidelis Samangun"')) {
                    formattedLine = formattedLine.replace('"Theodorus Fidelis Samangun"', '<span class="text-emerald-400">"Theodorus Fidelis Samangun"</span>');
                  }

                  if (line.includes('"Building the Future"')) {
                    formattedLine = formattedLine.replace('"Building the Future"', '<span class="text-emerald-400">"Building the Future"</span>');
                  }

                  return (
                    <div key={index} className="flex">
                      <span className="w-6 text-foreground/35 select-none text-right pr-3">{index + 1}</span>
                      <span dangerouslySetInnerHTML={{ __html: formattedLine }}></span>
                    </div>
                  );
                })}
                {/* Simulated interactive run command */}
                <div className="pt-2 flex items-center border-t border-border/20 text-[10px]">
                  <span className="text-primary mr-1.5">&gt;</span>
                  <span className="text-foreground/50">let'sBuildSomethingGreat();</span>
                  <span className="h-3 w-1.5 bg-primary ml-1 animate-pulse"></span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
