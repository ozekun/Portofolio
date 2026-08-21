'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Code, CheckCircle, Lightbulb, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

interface CaseStudy {
  title: string;
  category: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  duration: string;
  client: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  process: { step: string; desc: string }[];
}

const caseStudiesData: Record<string, CaseStudy> = {
  'misa-text': {
    title: 'MisaText',
    category: 'Web App',
    image: '/images/misatext/project-misatext.jpg',
    tags: ['Next.js', 'Supabase', 'Vercel', 'SPX API'],
    demoUrl: 'https://text-misa-komsos.vercel.app/',
    githubUrl: 'https://github.com/ozekun/text-misa-komsos',
    duration: '1 Bulan',
    client: 'KOMSOS Paroki / Liturgi Gereja',
    overview: 'MisaText adalah platform otomatisasi running teks perayaan Ekaristi Gereja Katolik yang terintegrasi langsung dengan sistem broadcast graphics SPX Graphics. Dirancang khusus untuk mempermudah KOMSOS dan petugas liturgi paroki menyiapkan running teks liturgi, lirik lagu, dan pengumuman secara cepat, akurat, dan real-time.',
    challenges: [
      'Menyusun lirik lagu dan teks liturgi ordinarium agar terformat secara proporsional secara otomatis tanpa pemotongan kata yang buruk.',
      'Mengintegrasikan output data teks secara real-time dengan SPX Graphics API melalui webhook penyiaran broadcast.',
      'Membuat antarmuka pratinjau yang mudah digunakan oleh petugas liturgi paroki dengan berbagai tingkat literasi digital.'
    ],
    solutions: [
      'Mengembangkan algoritma parser teks pintar untuk memecah kalimat lagu berdasarkan ketukan dan panjang baris ideal secara otomatis.',
      'Menggunakan REST API & Socket integration untuk mengirimkan muatan data running teks secara instan ke sistem SPX Graphics.',
      'Merancang UI minimalis yang ramah pengguna dengan panduan visual dan fitur pratinjau langsung sebelum teks ditayangkan.'
    ],
    process: [
      { step: 'Analisis Kebutuhan Liturgi', desc: 'Mewawancarai petugas KOMSOS untuk memahami kendala waktu saat menyusun running teks misa manual.' },
      { step: 'Perancangan Antarmuka', desc: 'Membuat wireframe editor teks misa yang fokus pada kecepatan input dan kemudahan navigasi.' },
      { step: 'Integrasi Broadcast API', desc: 'Menghubungkan API backend Next.js dengan server SPX Graphics untuk mengirimkan running teks secara real-time.' },
      { step: 'Uji Coba Lapangan', desc: 'Melakukan uji coba penyiaran langsung pada perayaan Misa Mingguan di paroki untuk memvalidasi performa.' }
    ]
  },
  'one-family': {
    title: 'One Family',
    category: 'Web App',
    image: '/images/onefamily/project-onefamily.png',
    tags: ['React', 'Firebase', 'Vercel'],
    demoUrl: 'https://one-family-chi.vercel.app/',
    githubUrl: 'https://github.com/ozekun/one-family',
    duration: '2 Bulan',
    client: 'Community Portal Project',
    overview: 'One Family adalah platform portal komunitas interaktif yang menghubungkan anggota keluarga besar. Dilengkapi dengan bagan silsilah interaktif yang reaktif, direktori profil dinamis, kalender acara bersama, dan papan pengumuman untuk mempererat silaturahmi keluarga.',
    challenges: [
      'Membuat grafik bagan silsilah keluarga interaktif yang responsif dan dapat di-zoom/pan dengan lancar pada perangkat seluler.',
      'Menyusun visualisasi hubungan keluarga yang rumit (orang tua, anak, sepupu) agar mudah dipahami secara visual.',
      'Mengelola sinkronisasi data profil anggota keluarga secara real-time saat ada pembaruan data silsilah.'
    ],
    solutions: [
      'Menggunakan React State dikombinasikan dengan library visualisasi grafik Canvas/SVG interaktif dengan optimasi rendering Framer Motion.',
      'Merancang layout bagan berbasis level generasi dengan garis penghubung dinamis yang otomatis menyesuaikan posisi simpul anggota.',
      'Menerapkan arsitektur data terpusat menggunakan context provider untuk pembaruan profil yang reaktif dan instan.'
    ],
    process: [
      { step: 'Studi Silsilah Keluarga', desc: 'Mempelajari struktur hubungan keluarga standar dan memetakan model skema database hubungan.' },
      { step: 'Desain Grafik Interaktif', desc: 'Merancang layout koneksi antaranggota menggunakan visualisasi lingkaran bercahaya dan garis transisi.' },
      { step: 'Pengembangan Fitur Portal', desc: 'Membangun fitur tambahan seperti kalender acara bersama dan papan pos pengumuman.' },
      { step: 'Optimasi Zoom & Pan', desc: 'Menambahkan dukungan kontrol gesture cubit (pinch-to-zoom) dan geser (drag-to-pan) untuk perangkat mobile.' }
    ]
  }
};

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const data = caseStudiesData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <h1 className="text-2xl font-bold text-foreground mb-4">Studi Kasus Proyek Tidak Ditemukan</h1>
        <button
          onClick={() => router.push('/')}
          className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-lg hover:shadow-primary/20 transition-all cursor-pointer"
        >
          <ArrowLeft size={16} className="mr-2" /> Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Background neon glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm font-semibold text-foreground/60 hover:text-primary transition-colors mb-8 cursor-pointer group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Proyek
        </Link>

        {/* Title & Info Header */}
        <div className="space-y-6 mb-12 text-left">
          <div className="inline-block glass-panel px-3 py-1 rounded-full text-[10px] font-bold tracking-wider text-primary border border-primary/20 bg-background/90 uppercase">
            {data.category}
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {data.title}
          </h1>

          {/* Quick stats details metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-b border-border/40 py-6">
            <div>
              <p className="text-xs text-foreground/45 uppercase tracking-wider font-bold">Klien / Industri</p>
              <p className="text-sm font-semibold text-foreground mt-1">{data.client}</p>
            </div>
            <div>
              <p className="text-xs text-foreground/45 uppercase tracking-wider font-bold">Durasi Pengerjaan</p>
              <p className="text-sm font-semibold text-foreground mt-1">{data.duration}</p>
            </div>
            <div>
              <p className="text-xs text-foreground/45 uppercase tracking-wider font-bold">Tautan Langsung</p>
              <a
                href={data.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline mt-1 cursor-pointer"
              >
                Kunjungi Situs <ArrowUpRight size={14} className="ml-0.5" />
              </a>
            </div>
            <div>
              <p className="text-xs text-foreground/45 uppercase tracking-wider font-bold">Repoditori Kode</p>
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-primary hover:underline mt-1 cursor-pointer"
              >
                Lihat Kode <Github size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden glass-panel border border-border shadow-2xl mb-12 bg-card"
        >
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Content Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-left">
          
          {/* Main Case details (Left 2 columns) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Lightbulb className="text-primary" size={20} /> Rangkuman Proyek
              </h2>
              <p className="text-foreground/80 leading-relaxed text-sm sm:text-base">
                {data.overview}
              </p>
            </div>

            {/* Challenges */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Zap className="text-red-500" size={20} /> Tantangan Utama
              </h2>
              <ul className="space-y-3">
                {data.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <CheckCircle className="text-primary" size={20} /> Solusi & Pendekatan Teknis
              </h2>
              <ul className="space-y-3">
                {data.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start text-sm sm:text-base text-foreground/80 leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2.5 mr-3 flex-shrink-0"></span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar details (Right column) */}
          <div className="space-y-8">
            
            {/* Tech Stack Box */}
            <div className="glass-panel p-6 rounded-2xl border border-border space-y-4">
              <h3 className="text-md font-bold text-foreground flex items-center gap-2">
                <Code className="text-primary" size={16} /> Teknologi
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold rounded bg-card-foreground/5 dark:bg-white/5 border border-border text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Implementation Process Box */}
            <div className="glass-panel p-6 rounded-2xl border border-border space-y-6">
              <h3 className="text-md font-bold text-foreground">Proses Pengerjaan</h3>
              <div className="relative border-l border-border/80 pl-4 ml-2 space-y-6">
                {data.process.map((step, idx) => (
                  <div key={idx} className="relative space-y-1">
                    {/* Ring timeline circle indicator */}
                    <div className="absolute -left-[21px] top-1 h-3.5 w-3.5 rounded-full bg-background border border-primary shadow-sm flex items-center justify-center z-10">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    </div>
                    <h4 className="text-xs font-bold text-foreground">{step.step}</h4>
                    <p className="text-xs text-foreground/70 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
