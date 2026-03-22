import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

/*
  PHOTOS: save your uploaded images to /public/ with these names:
    /public/img-cozonac.jpg   → photo of Boromir cozonac products
    /public/img-mezeluri.jpg  → photo of Nobile's meat products
    /public/img-lactate.jpg   → photo of Hochland / dairy products
    /public/img-magazin.jpg   → photo of store / wines shelf
*/
const imgMap = {
  dulciuri: '/Captura de pantalla 2026-03-22 184503.png',
  mezeluri: '/Captura de pantalla 2026-03-22 184347.png',
  lactate:  '/Captura de pantalla 2026-03-22 184326.png',
  bauturi:  '/Captura de pantalla 2026-03-22 184410.png',
}

const ease = [0.16, 1, 0.3, 1]

export default function Products() {
  const { tr } = useLanguage()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="products" id="productos" ref={ref}>
      <div className="container">
        <motion.div
          className="products__header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <span className="section-label">{tr.products.label}</span>
          <h2 className="section-title">
            {tr.products.title.split('\n').map((line, i) => (
              <span key={i}>
                {i === 1 ? <em>{line}</em> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
          <p style={{
            maxWidth: 440, fontSize: '0.95rem',
            color: 'var(--muted)', lineHeight: 1.7, textAlign: 'center',
          }}>
            {tr.products.sub}
          </p>
        </motion.div>
      </div>

      <div className="products__grid">
        {tr.products.items.map((cat, i) => (
          <motion.div
            key={cat.num}
            className={`product-card product-card--${cat.cls}`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.75, delay: i * 0.1, ease }}
          >
            <div className="product-card__line" />

            {/* Real photo background */}
            <div
              className="product-card__bg"
              style={{
                backgroundImage: `url('${imgMap[cat.cls]}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="product-card__overlay" />

            <span className="product-card__num">{cat.num}</span>
            <div className="product-card__icon-bg">{cat.icon}</div>

            <div className="product-card__content">
              <span className="product-card__tag">{cat.tag}</span>
              <h3 className="product-card__name">
                {cat.name}
                <br />
                <span className="product-card__name-es">{cat.nameSub}</span>
              </h3>
              <p style={{
                fontSize: '0.82rem', color: 'var(--cream-dim)',
                lineHeight: 1.65, marginTop: 12, opacity: 0.85,
              }}>
                {cat.desc}
              </p>
              <div className="product-card__count">{cat.products}</div>
            </div>

            <div className="card-arrow" style={{
              position: 'absolute', top: 28, right: 28,
              zIndex: 4, opacity: 0,
              transition: 'opacity 0.4s',
            }}>
              <ArrowUpRight size={20} color="var(--gold)" />
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`.product-card:hover .card-arrow { opacity: 1 !important; }`}</style>
    </section>
  )
}
