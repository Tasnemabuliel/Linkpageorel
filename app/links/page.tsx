'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import styles from './LinksPage.module.css';

const NAME = 'OREL KORIAT';
const ROLE = 'מאמן כושר';

const PHONE_E164 = '+972522345850';
const PHONE_DISPLAY = '0522345850';
const WA_E164_NO_PLUS = '972522345850';

const URLS = {
  facebook: 'https://www.facebook.com/share/1KMoAUAXac/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/orel.koriat?igsh=MWhvbjE5a2ZsamRlcg%3D%3D&utm_source=qr',
  web: 'https://orel-kuriat.vercel.app/',
  whatsapp: `https://wa.me/${WA_E164_NO_PLUS}`,
  phone: `tel:${PHONE_E164}`,
};

const ASSETS = {
  heroPhoto: '/orel.png', // public/orel.png
};

function IconInstagram() {
  return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.2 2.9h9.6a4.3 4.3 0 0 1 4.3 4.3v9.6a4.3 4.3 0 0 1-4.3 4.3H7.2a4.3 4.3 0 0 1-4.3-4.3V7.2A4.3 4.3 0 0 1 7.2 2.9Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M17.3 6.8h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 8.5h2V6h-2c-2.2 0-4 1.8-4 4v2H8v2.6h2V21h2.8v-6.4h2.2L16 12h-3.2V10c0-.8.6-1.5 1.2-1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg className={styles.socialIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.8a9 9 0 0 0-7.8 13.5L3.2 21l4.8-1a9 9 0 1 0 4-17.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 8.5c-.4.6-.5 1.3-.2 2 1 2.4 3.7 5.1 6.1 6.1.7.3 1.4.2 2-.2l.7-.5c.4-.3.5-.9.2-1.3l-.9-1.1c-.3-.4-.8-.5-1.2-.3l-1 .5c-1.4-.8-2.6-2-3.4-3.4l.5-1c.2-.4.1-.9-.3-1.2l-1.1-.9c-.4-.3-1-.2-1.3.2l-.5.7Z"
        fill="currentColor"
        opacity="0.92"
      />
    </svg>
  );
}

export default function LinksPage() {
  const [heroImgOk, setHeroImgOk] = useState(true);

  const social = useMemo(
    () => [
      { label: 'Instagram', href: URLS.instagram, icon: <IconInstagram />, variant: 'ig' as const },
      { label: 'Facebook', href: URLS.facebook, icon: <IconFacebook />, variant: 'fb' as const },
      { label: 'WhatsApp', href: URLS.whatsapp, icon: <IconWhatsApp />, variant: 'wa' as const },
    ],
    []
  );

  return (
    <div className={styles.page} dir="rtl" lang="he">
      <header className={styles.hero} aria-label="הירו">
        <div className={styles.heroBg} aria-hidden="true">
          {heroImgOk && (
            <Image
              src={ASSETS.heroPhoto}
              alt=""
              fill
              priority
              sizes="100vw"
              className={styles.heroImg}
              onError={() => setHeroImgOk(false)}
            />
          )}
        </div>

        <div className={styles.heroOverlay} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.wordmark}>{NAME}</div>

          <h1 className={styles.h1}>
            הצעד הראשון שלך לשינוי מתחיל <span className={styles.h1Accent}>כאן.</span>
          </h1>

          <a
            className={styles.primaryCta}
            href={`${URLS.whatsapp}?text=${encodeURIComponent('היי אוראל! אשמח לקבוע שיעור ניסיון 💪')}`}
            target="_blank"
            rel="noreferrer"
          >
            קבע שיעור ניסיון
          </a>
        </div>
      </header>

      <main className={styles.main} aria-label="תוכן">
        <section className={styles.section} aria-label="מה קורה בשיעור ניסיון?">
          <h2 className={styles.h2}>מה קורה בשיעור ניסיון?</h2>
          <p className={styles.sectionText}></p>
          <ul className={styles.list}>
            <li>היכרות קצרה כדי להבין את המטרות שלך</li>
            <li>נבדוק ביחד את רמתך הנוכחית</li>
            <li>אימון מותאם אישית — גם למי שלא התאמן אף פעם</li>
            <li>טיפים שיעזרו לך להתחיל נכון</li>
            <li>תחושת הצלחה כבר מהדקה הראשונה</li>
          </ul>
        </section>

        <div className={styles.secondaryRow}>
          <a className={styles.secondaryCta} href={URLS.web} target="_blank" rel="noreferrer">
            כניסה לאתר
          </a>
        </div>

        <div className={styles.bottomSocial} aria-label="אייקונים">
          {social.map(s => (
            <a
              key={s.label}
              className={`${styles.socialBtnSmall} ${s.variant !== 'wa' ? styles.socialBtnLarge : ''} ${
                s.variant === 'wa' ? styles.socialWa : s.variant === 'ig' ? styles.socialIg : styles.socialFb
              }`}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <footer className={styles.footer} aria-label="פוטר">
          <div className={styles.footerName}>{NAME}</div>
          <div className={styles.footerRole}>
            {ROLE} •{' '}
            <a className={styles.footerLink} href={URLS.phone} aria-label="טלפון">
              {PHONE_DISPLAY}
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}

