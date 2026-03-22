import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export default function Navbar() {
  const { lang, setLang, tr } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  const links = [
    { href: '#inicio',    label: tr.nav.home },
    { href: '#productos', label: tr.nav.products },
    { href: '#nosotros',  label: tr.nav.about },
    { href: '#galeria',   label: tr.nav.gallery },
    { href: '#contacto',  label: tr.nav.contact },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Romanian flag stripe */}
        <div className="navbar__flag flag-stripe">
          <span className="s-blue" />
          <span className="s-yellow" />
          <span className="s-red" />
        </div>

        <div className="container navbar__inner">
          {/* Logo */}
          <a href="#inicio" className="navbar__logo">
            <div className="navbar__logo-icon">
              <span style={{ background: '#1850A8' }} />
              <span style={{ background: '#F0C01A' }} />
              <span style={{ background: '#CC2A2A' }} />
              <span className="lbl">K</span>
            </div>
            <div className="navbar__logo-text">
              Karla
              <small>Magazin Românesc</small>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="navbar__nav">
            {links.map(l => (
              <a key={l.href} href={l.href} className="navbar__link">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right side: lang toggle + CTA */}
          <div className="navbar__right">
            {/* Language toggle */}
            <div className="lang-toggle">
              <button
                className={lang === 'ro' ? 'active' : ''}
                onClick={() => setLang('ro')}
                aria-label="Română"
              >
                <span className="lang-flag ro" />
                RO
              </button>
              <span className="lang-sep" />
              <button
                className={lang === 'es' ? 'active' : ''}
                onClick={() => setLang('es')}
                aria-label="Español"
              >
                <span className="lang-flag es" />
                ES
              </button>
            </div>

            <a href="#contacto" className="navbar__cta">{tr.nav.cta}</a>
          </div>

          {/* Mobile burger */}
          <button
            className="navbar__burger"
            aria-label="Menú"
            onClick={() => setOpen(true)}
          >
            <Menu size={22} color="var(--cream)" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="navbar__mobile open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              style={{
                position: 'absolute', top: 28, right: 28,
                color: 'var(--cream)', lineHeight: 0,
              }}
              onClick={() => setOpen(false)}
            >
              <X size={26} />
            </button>

            {/* Mobile language toggle */}
            <div className="lang-toggle lang-toggle--mobile">
              <button
                className={lang === 'ro' ? 'active' : ''}
                onClick={() => setLang('ro')}
              >
                <span className="lang-flag ro" /> RO
              </button>
              <span className="lang-sep" />
              <button
                className={lang === 'es' ? 'active' : ''}
                onClick={() => setLang('es')}
              >
                <span className="lang-flag es" /> ES
              </button>
            </div>

            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16,1,0.3,1] }}
              >
                {l.label}
              </motion.a>
            ))}

            <motion.div
              className="flag-stripe"
              style={{ width: 120, height: 4, borderRadius: 2, marginTop: 16 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="s-blue" />
              <span className="s-yellow" />
              <span className="s-red" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
