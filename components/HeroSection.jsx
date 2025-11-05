'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useI18n } from './I18nProvider';

export default function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="bg-gradient-to-br from-green-50 to-yellow-50 border-b">
      <div className="container py-16 md:py-24">
        <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
          className="text-3xl md:text-5xl font-extrabold mb-4">
          {t.hero.title}
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2, duration:0.6}}
          className="text-lg text-gray-700 mb-8">{t.hero.subtitle}</motion.p>
        <div className="flex gap-3">
          <Link href="/progetto" className="btn btn-secondary">{t.hero.ctaProject}</Link>
          <a href="https://verify.blockchainfoodtrust.com" className="btn btn-primary" target="_blank" rel="noreferrer">{t.hero.ctaVerify}</a>
        </div>
      </div>
    </section>
  );
}
