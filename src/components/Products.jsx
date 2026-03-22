import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, X } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const imgMap = {
  dulciuri: '/Captura de pantalla 2026-03-22 184503.png',
  mezeluri: '/Captura de pantalla 2026-03-22 184347.png',
  lactate:  '/Captura de pantalla 2026-03-22 184326.png',
  bauturi:  '/Captura de pantalla 2026-03-22 184410.png',
}

const imgPos = {
  dulciuri: 'center top',
  mezeluri: 'center top',
  lactate:  'left top',
  bauturi:  'left top',
}

const ease = [0.16, 1, 0.3, 1]

function ProductCard({ cat, index, inView }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className={`pcard${open ? ' pcard--open' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
    >
      {/* Gold top border — visible on hover/open */}
      <div className="pcard__top-line" />

      {/* Photo */}
      <div className="pcard__img-wrap">
        <img
          className="pcard__img"
          src={imgMap[cat.cls]}
          alt={cat.name}
          style={{ objectPosition: imgPos[cat.cls] }}
        />
        <div className="pcard__img-vignette" />
        {/* Category number watermark */}
        <span className="pcard__watermark">{cat.num}</span>
      </div>

      {/* Info area */}
      <div className="pcard__body">
        <div className="pcard__meta">
          <span className="pcard__tag">{cat.tag}</span>
          <span className="pcard__icon">{cat.icon}</span>
        </div>

        <h3 className="pcard__name">{cat.name}</h3>
        <p className="pcard__namesub">{cat.nameSub}</p>
        <p className="pcard__desc">{cat.desc}</p>

        <button
          className="pcard__toggle"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
        >
          <span>{open ? <X size={14} /> : <ChevronDown size={14} />}</span>
          {open ? 'Cerrar' : cat.products.split(' · ').length + ' productos'}
        </button>
      </div>

      {/* Products panel — slides down */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="pcard__products"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease }}
          >
            <div className="pcard__products-inner">
              <div className="pcard__products-grid">
                {cat.productList.map((p, i) => (
                  <motion.div
                    key={p}
                    className="pcard__product-item"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.3 }}
                  >
                    <span className="pcard__product-dot" />
                    {p}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

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

        <div className="products__grid">
          {tr.products.items.map((cat, i) => (
            <ProductCard key={cat.num} cat={cat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
