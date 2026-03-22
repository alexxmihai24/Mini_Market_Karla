import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '../LanguageContext'

/*
  PHOTOS: save your uploaded images to /public/ with these names:
    /public/img-magazin.jpg  → store interior / product shelf photo
*/

function CountUp({ to, suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(0)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const step  = to / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= to) { setValue(to); clearInterval(timer) }
      else setValue(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, to, duration])

  return <span ref={ref}>{value}{suffix}</span>
}

const ease = [0.16, 1, 0.3, 1]

export default function About() {
  const { tr } = useLanguage()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="about" id="nosotros" ref={ref}>
      <div className="grain" style={{ opacity: 0.04 }} />
      <div className="container">
        <div className="about__inner">

          {/* Text column */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease }}
          >
            <span className="section-label">{tr.about.label}</span>
            <h2 className="section-title">
              {tr.about.title.split('\n').map((line, i) => (
                <span key={i}>
                  {i === 1 ? <em>{line}</em> : line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
            <div className="gold-divider" />

            <p dangerouslySetInnerHTML={{ __html: tr.about.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: tr.about.p2 }} />
            <p dangerouslySetInnerHTML={{ __html: tr.about.p3 }} />

            <div className="about__stats">
              <div className="about__stat">
                <strong className="about__stat-num">
                  <CountUp to={10} suffix="+" />
                </strong>
                <span className="about__stat-label">{tr.about.stats.years}</span>
              </div>
              <div className="about__stat">
                <strong className="about__stat-num">
                  <CountUp to={300} suffix="+" />
                </strong>
                <span className="about__stat-label">{tr.about.stats.products}</span>
              </div>
              <div className="about__stat">
                <strong className="about__stat-num">
                  <CountUp to={7} />
                </strong>
                <span className="about__stat-label">{tr.about.stats.days}</span>
              </div>
            </div>
          </motion.div>

          {/* Visual column */}
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease }}
          >
            <div className="about__img-badge">
              <strong>100%</strong>
              <span>{tr.about.badge}</span>
            </div>

            <div className="about__img-wrap">
              <img
                src="/Captura de pantalla 2026-03-22 184410.png"
                alt="Mini Market Karla"
                onError={e => { e.target.style.display = 'none' }}
              />
              <div className="about__img-placeholder">🛒</div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease }}
              style={{
                position: 'absolute',
                bottom: 32, right: -24,
                background: 'var(--surface-3)',
                border: '1px solid var(--border)',
                borderRadius: 4,
                padding: '20px 28px',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flag-stripe" style={{ marginBottom: 12, height: 3 }}>
                <span className="s-blue" />
                <span className="s-yellow" />
                <span className="s-red" />
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: 'var(--cream)',
                fontWeight: 600,
              }}>
                {tr.about.quality}
              </div>
              <div style={{
                fontSize: '0.72rem',
                color: 'var(--muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginTop: 4,
              }}>
                {tr.about.importLabel}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
