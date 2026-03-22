import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  const { tr } = useLanguage()

  return (
    <section className="hero" id="inicio">
      {/* Background — save storefront.jpg to /public/ */}
      <div className="hero__bg" />
      <div className="grain" style={{ opacity: 0.06, zIndex: 3 }} />

      <div className="hero__overlay" />
      <div className="hero__overlay-bottom" />

      {/* Romanian flag top accent */}
      <div className="hero__flag">
        <span style={{ background: 'var(--ro-blue)' }} />
        <span style={{ background: 'var(--ro-yellow)' }} />
        <span style={{ background: 'var(--ro-red)' }} />
      </div>

      {/* Side text */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease }}
        style={{
          position: 'absolute',
          right: 'clamp(24px, 6vw, 100px)',
          top: '50%',
          transform: 'translateY(-40%)',
          zIndex: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.6rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--gold)',
          writingMode: 'vertical-rl',
          transition: 'all 0.5s',
        }}>
          {tr.hero.sideText}
        </span>
        <div style={{
          width: 1, height: 80,
          background: 'linear-gradient(to bottom, var(--gold), transparent)',
        }} />
      </motion.div>

      {/* Main content */}
      <div className="container hero__content">
        <motion.span
          className="hero__eyebrow"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          key={tr.hero.eyebrow}
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
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>

      {/* Bottom badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4, ease }}
        style={{
          position: 'absolute',
          bottom: 48,
          left: 'var(--gutter)',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <div className="flag-stripe" style={{ width: 40, height: 24, borderRadius: 2 }}>
          <span className="s-blue" />
          <span className="s-yellow" />
          <span className="s-red" />
        </div>
        <span style={{
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          transition: 'all 0.5s',
        }}>
          {tr.hero.badge}
        </span>
      </motion.div>
    </section>
  )
}
