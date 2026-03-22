import { motion } from 'framer-motion'
import { ChevronRight, MapPin } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  const { tr } = useLanguage()

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" />
      <div className="grain" style={{ opacity: 0.05, zIndex: 3 }} />
      <div className="hero__overlay-bottom" />

      {/* Romanian flag top accent */}
      <div className="hero__flag">
        <span style={{ background: 'var(--ro-blue)' }} />
        <span style={{ background: 'var(--ro-yellow)' }} />
        <span style={{ background: 'var(--ro-red)' }} />
      </div>

      {/* Content */}
      <div className="container hero__content" style={{ zIndex: 5, position: 'relative' }}>
        <div className="hero__inner">

          {/* ── Left: text ── */}
          <div>
            <motion.span
              className="hero__eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              {tr.hero.eyebrow}
            </motion.span>

            <h1 className="hero__title">
              <motion.span
                className="hero__title-sub"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease }}
              >
                {tr.hero.titleSub}
              </motion.span>

              <motion.span
                className="hero__title-main"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.65, ease }}
              >
                K<span className="accent">AR</span>LA
              </motion.span>
            </h1>

            <motion.div
              className="gold-divider"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9, ease }}
              style={{ marginBottom: '1.5rem' }}
            />

            <motion.p
              className="hero__sub"
              key={tr.hero.sub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1, ease }}
            >
              {tr.hero.sub}
            </motion.p>

            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.15, ease }}
            >
              <a href="#productos" className="btn btn--primary">
                {tr.hero.cta1} <ChevronRight size={16} />
              </a>
              <a href="#contacto" className="btn btn--ghost">
                {tr.hero.cta2}
              </a>
            </motion.div>

            {/* Address teaser */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4, ease }}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                marginTop: 32, color: 'var(--muted)', fontSize: '0.8rem',
              }}
            >
              <MapPin size={14} color="var(--gold)" strokeWidth={1.5} />
              <span>Av. de la Constitución, 5 · Montilla, Córdoba</span>
            </motion.div>
          </div>

          {/* ── Right: photo frame ── */}
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease }}
          >
            <div className="hero__photo-frame">
              <div className="hero__photo-glow" />
              <div className="hero__photo-dots" />
              <div className="hero__photo-border" />

              <img
                className="hero__photo-img"
                src="/Captura de pantalla 2026-03-22 184437.png"
                alt="Mini Market Karla — Montilla"
              />

              <div className="hero__photo-tag">Montilla, Córdoba</div>

              {/* Stars badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2, ease }}
                style={{
                  position: 'absolute',
                  top: -20, left: -20,
                  background: 'var(--surface-3)',
                  border: '1px solid var(--border)',
                  borderRadius: 4,
                  padding: '12px 18px',
                  backdropFilter: 'blur(12px)',
                  zIndex: 2,
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem', fontWeight: 700,
                  color: 'var(--gold-bright)', lineHeight: 1,
                }}>3.8 ★</div>
                <div style={{
                  fontSize: '0.62rem', color: 'var(--muted)',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  marginTop: 3,
                }}>Google Reviews</div>
              </motion.div>

              {/* Open badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4, ease }}
                style={{
                  position: 'absolute',
                  bottom: 30, right: -20,
                  background: 'var(--surface-3)',
                  border: '1px solid var(--border)',
                  borderRadius: 4,
                  padding: '12px 18px',
                  backdropFilter: 'blur(12px)',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <span style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#4CAF50',
                  boxShadow: '0 0 6px #4CAF50',
                  display: 'block', flexShrink: 0,
                }} />
                <div>
                  <div style={{
                    fontSize: '0.78rem', fontWeight: 600,
                    color: 'var(--cream)',
                  }}>Abierto · Deschis</div>
                  <div style={{
                    fontSize: '0.62rem', color: 'var(--muted)',
                    letterSpacing: '0.08em',
                  }}>09:00 – 21:00</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
