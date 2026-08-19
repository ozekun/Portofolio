'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, BookOpen, X } from 'lucide-react';
import Link from 'next/link';
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

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  screenshots: string[];
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  slug: string;
  category: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'MisaText',
      description: 'Platform otomatisasi running teks perayaan Ekaristi Gereja Katolik terintegrasi langsung dengan sistem broadcast graphics SPX Graphics.',
      longDescription: 'MisaText adalah solusi inovatif yang dirancang khusus untuk KOMSOS dan petugas liturgi paroki Gereja Katolik. Aplikasi ini menyederhanakan persiapan running teks liturgi Ekaristi dan lirik lagu dengan cara memecah teks secara otomatis menjadi baris-baris proporsional, serta mengirimkannya secara real-time ke sistem broadcast graphic SPX Graphics melalui integrasi API.',
      image: '/images/misatext/project-misatext.jpg',
      screenshots: [
        '/images/misatext/project-misatext.jpg',
        '/images/misatext/misatext-ss1.png',
        '/images/misatext/misatext-ss2.png',
        '/images/misatext/misatext-ss3.png'
      ],
      tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Broadcast API', 'SPX Graphics'],
      demoUrl: 'https://text-misa-komsos.vercel.app/',
      githubUrl: 'https://github.com/theodorusfidelis/text-misa-komsos',
      slug: 'misa-text',
      category: 'Web App',
    },
    {
      title: 'One Family',
      description: 'Portal komunitas terpadu untuk menghubungkan keluarga dengan fitur bagan interaktif hubungan anggota, direktori anggota, dan kalender acara.',
      longDescription: 'One Family adalah platform portal sosial interaktif keluarga besar yang memfasilitasi komunikasi dan visualisasi silsilah keturunan. Fitur unggulannya meliputi bagan silsilah keluarga interaktif yang responsif (zoom/pan), direktori informasi anggota keluarga, kalender ulang tahun dan acara bersama, serta papan pengumuman komunitas.',
      image: '/images/project-onefamily.jpg',
      screenshots: [
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80'
      ],
      tags: ['React', 'Tailwind CSS', 'Material Symbols', 'Dynamic Graph', 'Framer Motion'],
      demoUrl: 'https://one-family-chi.vercel.app/',
      githubUrl: 'https://github.com/theodorusfidelis/one-family',
      slug: 'one-family',
      category: 'Web App',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="projects" className="py-24 relative bg-background/50 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-2">Proyek</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Karya & Portfolio Pilihan</p>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-2xl overflow-hidden border border-border group hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image Panel */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-card border-b border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Floating Badge */}
                <div className="absolute top-4 left-4 glass-panel px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-primary border border-primary/20 bg-background/90 uppercase">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors text-left">
                    {project.title}
                  </h3>
                  <p className="text-foreground/75 text-sm leading-relaxed line-clamp-3 text-left">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-medium rounded bg-foreground/5 dark:bg-white/5 border border-border text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/40" onClick={(e) => e.stopPropagation()}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-xs font-bold text-primary hover:text-accent transition-colors gap-1 group/btn"
                    >
                      <BookOpen size={14} className="group-hover/btn:scale-110 transition-transform" />
                      <span>Studi Kasus</span>
                    </Link>

                    <div className="flex items-center space-x-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-border hover:border-primary/50 hover:bg-card/80 text-foreground/80 hover:text-primary transition-all cursor-pointer"
                        title="Kode GitHub"
                      >
                        <Github size={15} />
                      </a>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="p-2 rounded-full border border-border hover:border-primary/50 hover:bg-card/80 text-foreground/80 hover:text-primary transition-all cursor-pointer"
                        title="Detail & Galeri"
                      >
                        <ArrowUpRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl p-6 sm:p-8 z-10 flex flex-col space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-foreground/5 text-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Title & Category */}
              <div className="space-y-1.5 text-left pr-8">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Main Image Gallery / Carousel */}
              <div className="space-y-3">
                <p className="text-xs font-bold text-foreground/45 uppercase tracking-wider text-left">
                  Tangkapan Layar (Screenshots)
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {selectedProject.screenshots.map((url, idx) => (
                    <div key={idx} className="relative aspect-[16/9] rounded-xl overflow-hidden border border-border bg-muted">
                      <Image
                        src={url}
                        alt={`${selectedProject.title} screenshot ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 350px"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 text-left">
                <h4 className="text-sm font-bold text-foreground/80">Deskripsi Proyek</h4>
                <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="space-y-2 text-left">
                <h4 className="text-xs font-bold text-foreground/45 uppercase tracking-wider">Teknologi yang Digunakan</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-semibold rounded bg-foreground/5 dark:bg-white/5 border border-border text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border/40">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  Kunjungi Website <ArrowUpRight size={16} className="ml-2" />
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full border border-border hover:border-primary/50 hover:bg-card/50 text-foreground font-semibold hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Github size={16} className="mr-2" /> Lihat Repositori Kode
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
