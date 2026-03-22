import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

const ease = [0.16, 1, 0.3, 1]

export default function Contact() {
  const { tr } = useLanguage()
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="contact" id="contacto" ref={ref}>
      <div className="grain" style={{ opacity: 0.03 }} />
      <div className="container">

        <motion.div
          style={{ textAlign: 'center', marginBottom: 72 }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          <span className="section-label">{tr.contact.label}</span>
          <h2 className="section-title">
            {tr.contact.title.split('\n').map((line, i) => (
              <span key={i}>
                {i === 1 ? <em>{line}</em> : line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        <div className="contact__inner">

          <motion.div
            className="contact__info-block"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            {/* Address */}
            <div className="contact__item">
              <div className="contact__item-icon">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact__item-title">{tr.contact.addressTitle}</div>
                <div className="contact__item-text" style={{ whiteSpace: 'pre-line' }}>
                  {tr.contact.addressText}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="contact__item">
              <div className="contact__item-icon">
                <Phone size={18} strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact__item-title">{tr.contact.phoneTitle}</div>
                <div className="contact__item-text">
                  <a href="tel:+34619184224">619 18 42 24</a>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact__item">
              <div className="contact__item-icon">
                <MessageCircle size={18} strokeWidth={1.5} />
              </div>
              <div>
                <div className="contact__item-title">{tr.contact.waTitle}</div>
                <div className="contact__item-text">
                  <a
                    href="https://wa.me/34619184224"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tr.contact.waText}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="contact__item">
              <div className="contact__item-icon">
                <Clock size={18} strokeWidth={1.5} />
              </div>
              <div style={{ width: '100%' }}>
                <div className="contact__item-title">{tr.contact.hoursTitle}</div>
                <table className="hours-table">
                  <tbody>
                    {tr.contact.hours.map(h => (
                      <tr key={h.day} className={h.highlight ? 'highlight' : ''}>
                        <td>{h.day}</td>
                        <td>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            className="contact__map"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <div className="contact__map-grid" />
            <div className="contact__map-pin">
              <MapPin size={22} strokeWidth={1.5} />
            </div>
            <div className="contact__map-label">{tr.contact.mapLabel}</div>
            <div className="contact__map-sub">{tr.contact.mapSub}</div>
            <a
              href="https://www.google.com/maps/place/Minimarket+Karla/@37.5901,-4.6390,17z/data=!3m1!4b1!4m6!3m5!1s0xd6c9f0c!8m2!3d37.5901!4d-4.6390"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              style={{ marginTop: 16, zIndex: 1 }}
            >
              {tr.contact.mapBtn}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
