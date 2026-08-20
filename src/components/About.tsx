'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const stats = [
    { label: 'Tahun Pengalaman', value: '3+' },
    { label: 'Proyek Selesai', value: '20+' },
    { label: 'Klien Puas', value: '10+' },
  ];

  return (
    <section id="about" className="pt-12 sm:pt-24 lg:pt-36 pb-12 sm:pb-24 lg:pb-36 relative bg-background/50 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square rounded-2xl overflow-hidden glass-panel border border-border p-4">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-background">
                <Image
                  src="/images/developer-profile.jpg"
                  alt="Theodorus About Profile"
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Overlap badge */}
              <div className="absolute -bottom-4 -right-4 glass-panel py-3 px-5 rounded-xl border border-border shadow-xl text-center z-10">
                <p className="text-2xl font-extrabold text-primary">3+</p>
                <p className="text-[10px] font-semibold text-foreground/80 uppercase tracking-wider">Tahun<br />Pengalaman</p>
              </div>
            </div>
          </motion.div>

          {/* Right Info Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* Title: Tentang Saya */}
            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Tentang <span className="text-primary glow-text-neon">Saya</span>
            </h3>

            {/* Subheading Quote */}
            <div className="border-l-2 border-primary pl-4 py-0.5">
              <p className="italic text-foreground/80 font-medium text-sm sm:text-base leading-relaxed">
                Perpaduan logika kode dan estetika desain.
              </p>
            </div>

            {/* Content Paragraphs */}
            <p className="text-foreground/85 leading-relaxed text-sm sm:text-base">
              Perjalanan saya di dunia digital dimulai sejak duduk di bangku SMA N 1 Gianyar. Berawal dari rasa ingin tahu yang mendalam tentang teknologi, saya menyadari bahwa coding bukan sekadar menulis baris perintah, melainkan sebuah seni menyusun logika yang hidup dan fungsional untuk memecahkan masalah nyata.
            </p>

            <p className="text-foreground/85 leading-relaxed text-sm sm:text-base">
              Sebagai langkah nyata untuk mendalami industri ini, saat ini saya aktif menempuh pendidikan tinggi sebagai mahasiswa semester 5 di Institut Bisnis dan Teknologi Indonesia (INSTIKI). Di sini, saya terus memperluas wawasan akademis dan keahlian praktis guna menciptakan solusi perangkat lunak yang andal, responsif, serta bernilai estetika tinggi.
            </p>

            {/* Divider */}
            <hr className="border-border/40 pt-2" />

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col text-left">
                  <span className="text-3xl sm:text-4xl font-extrabold text-primary glow-text-neon">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-foreground/50 tracking-wider uppercase mt-1 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
