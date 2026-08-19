'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Zap, Server, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Membangun aplikasi web yang cepat, responsif, dan mudah dikembangkan menggunakan teknologi modern.',
      icon: Globe,
    },
    {
      title: 'Responsive Design',
      description: 'Merancang antarmuka mobile-first yang indah untuk memberikan pengalaman pengguna terbaik di semua perangkat.',
      icon: Smartphone,
    },
    {
      title: 'Performance Optimization',
      description: 'Meningkatkan kecepatan loading, skor SEO, dan efisiensi performa keseluruhan aplikasi web Anda.',
      icon: Zap,
    },
    {
      title: 'Backend Development',
      description: 'Mengembangkan layanan backend, RESTful API, dan arsitektur database yang aman, andal, dan skalabel.',
      icon: Server,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="services" className="py-24 relative bg-background border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-primary uppercase mb-2">Services</h2>
          <p className="text-3xl sm:text-4xl font-bold text-foreground">What I Can Do For You</p>
          <div className="h-1 w-12 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="glass-panel p-6 rounded-xl border border-border flex flex-col justify-between h-full group hover:border-primary/50 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="p-3 rounded-lg bg-primary/10 text-primary w-12 h-12 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  
                  {/* Title & Desc */}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="pt-6 flex justify-end">
                  <span className="text-foreground/45 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
