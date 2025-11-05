'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useI18n } from './I18nProvider';

export default function Header() {
  const { t, toggle } = useI18n();
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Blockchain Food Trust" width={40} height={40} />
          <span className="font-semibold">Blockchain Food Trust</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/">{t.nav.home}</Link>
          <Link href="/progetto">{t.nav.project}</Link>
          <Link href="/prodotti">{t.nav.products}</Link>
          <Link href="/territori">{t.nav.regions}</Link>
          <Link href="/verifica">{t.nav.verify}</Link>
          <Link href="/contatti">{t.nav.contact}</Link>
        </nav>
        <button onClick={toggle} className="btn btn-secondary">{t.nav.lang}</button>
      </div>
    </header>
  );
}
