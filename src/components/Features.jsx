import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Package, Truck, Star } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const icons = [Package, Truck, Star]
const ease  = [0.16, 1, 0.3, 1]

export default function Features() {
  const { tr } = useLanguage()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="features" ref={ref}>
      <div className="grain" style={{ opacity: 0.03 }} />
      <div className="container">
        <div className="features__grid">
          {tr.features.items.map((f, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.14, ease }}
              >
                <span className="feature-card__num">0{i + 1}</span>
                <div className="feature-card__icon">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
