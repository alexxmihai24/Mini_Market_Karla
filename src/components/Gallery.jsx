import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

/*
  PHOTOS: map your uploaded images to gallery slots.
  Save the photos to /public/ — names below.
  Each item has `img` (path) and `pos` (object-position for cropping focus).

    /public/img-cozonac.jpg   → Boromir cozonac collage
    /public/img-mezeluri.jpg  → Nobile's / meat collage
    /public/img-lactate.jpg   → Hochland / dairy / Bonito collage
    /public/img-magazin.jpg   → Store interior / wines shelf
*/
const imgSlots = [
  { img: '/Captura de pantalla 2026-03-22 184503.png', pos: 'left top',      icon: '🍞', bg: 'cozonac' },
  { img: '/Captura de pantalla 2026-03-22 184347.png', pos: 'right top',     icon: '🥩', bg: 'salam' },
  { img: '/Captura de pantalla 2026-03-22 184347.png', pos: 'left bottom',   icon: '🍖', bg: 'parizer' },
  { img: '/Captura de pantalla 2026-03-22 184503.png', pos: 'right bottom',  icon: '🌰', bg: 'cozonac2' },
  { img: '/Captura de pantalla 2026-03-22 184410.png', pos: 'right top',     icon: '🍷', bg: 'bauturi' },
  { img: '/Captura de pantalla 2026-03-22 184326.png', pos: 'left top',      icon: '🧀', bg: 'hochland' },
  { img: '/Captura de pantalla 2026-03-22 184326.png', pos: 'right center',  icon: '🥐', bg: 'placinta' },
  { img: '/Captura de pantalla 2026-03-22 184410.png', pos: 'left bottom',   icon: '🌭', bg: 'mezeluri' },
]

const ease = [0.16, 1, 0.3, 1]

export default function Gallery() {
  const { tr } = useLanguage()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="gallery" id="galeria" ref={ref}>
      <div className="container">
        <div className="gallery__header">
          <div>
            <span className="section-label">{tr.gallery.label}</span>
            <h2 className="section-title">
              {tr.gallery.title.split(' ').map((w, i) =>
                i === 1
                  ? <em key={i}> {w}</em>
                  : <span key={i}>{i > 0 ? ' ' : ''}{w}</span>
              )}
            </h2>
          </div>
          <a href="#contacto" className="btn btn--ghost">
            {tr.gallery.viewAll} <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="container">
        <div className="gallery__grid">
          {tr.gallery.items.map((item, i) => {
            const slot = imgSlots[i]
            return (
              <motion.div
                key={i}
                className="gallery__item"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.07, ease }}
              >
                {/* Real photo background */}
                <div
                  className={`gallery__item-bg gallery__bg--${slot.bg}`}
                  style={{
                    backgroundImage: `url('${slot.img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: slot.pos,
                  }}
                >
                  {/* Fallback icon when image not found */}
                  <div className="gallery__icon">{slot.icon}</div>
                </div>

                <div className="gallery__item-overlay">
                  <div className="gallery__item-sub">{item.sub}</div>
                  <div className="gallery__item-label">{item.label}</div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="gallery__more"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p style={{
            color: 'var(--muted)', fontSize: '0.85rem',
            marginBottom: 20, fontStyle: 'italic',
          }}>
            {tr.gallery.more}
          </p>
          <a href="#contacto" className="btn btn--primary">
            {tr.gallery.cta} <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
