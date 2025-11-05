'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useI18n } from './I18nProvider';

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section 
      className="relative border-b"
      style={{
        backgroundImage: "url('/sfondo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay per migliorare il contrasto del testo */}
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="container py-16 md:py-24 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-lg"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-white/90 mb-8 max-w-2xl drop-shadow"
        >
          {t.hero.subtitle}
        </motion.p>

        <div className="flex gap-3">
          <Link 
            href="/progetto" 
            className="btn btn-secondary bg-white text-black font-semibold shadow-md hover:bg-gray-100"
          >
            {t.hero.ctaProject}
          </Link>

          <a 
            href="https://verify.blockchainfoodtrust.com" 
            className="btn btn-primary bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md"
            target="_blank" 
            rel="noreferrer"
          >
            {t.hero.ctaVerify}
          </a>
        </div>
      </div>
    </section>
  );
}
