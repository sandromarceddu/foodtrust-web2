'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useI18n } from './I18nProvider';

export default function HeroSection() {
  const { t } = useI18n();

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/sfondo.png')" }}
    >
      {/* Oscuramento leggero per migliorare leggibilità testo */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative container py-20 md:py-32 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-2xl mb-8 drop-shadow"
        >
          {t.hero.subtitle}
        </motion.p>

        <div className="flex gap-4">
          <Link href="/progetto" className="btn btn-secondary">
            {t.hero.ctaProject}
          </Link>

          <a
            href="https://verify.blockchainfoodtrust.com"
            className="btn btn-primary"
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
