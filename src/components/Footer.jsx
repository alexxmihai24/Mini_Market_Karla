import { Instagram, Facebook, Phone } from 'lucide-react'
import { useLanguage } from '../LanguageContext'

export default function Footer() {
  const { tr } = useLanguage()
  const year   = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__flag">
          <span style={{ background: 'var(--ro-blue)' }} />
          <span style={{ background: 'var(--ro-yellow)' }} />
          <span style={{ background: 'var(--ro-red)' }} />
        </div>

        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 3,
                overflow: 'hidden', display: 'flex',
                position: 'relative', flexShrink: 0,
              }}>
                <span style={{ flex: 1, background: 'var(--ro-blue)' }} />
                <span style={{ flex: 1, background: 'var(--ro-yellow)' }} />
                <span style={{ flex: 1, background: 'var(--ro-red)' }} />
                <span style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: '1.15rem', color: '#fff',
                  textShadow: '0 1px 4px rgba(0,0,0,0.5)',
                }}>K</span>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.1rem',
                  fontWeight: 600, color: 'var(--cream)',
                }}>Mini Market Karla</div>
                <div style={{
                  fontSize: '0.6rem', fontWeight: 600,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}>Magazin Românesc</div>
              </div>
            </div>
            <p>{tr.footer.desc}</p>
          </div>

          {/* Productos */}
          <div>
            <div className="footer__col-title">{tr.footer.colProducts}</div>
            <ul className="footer__links">
              {tr.footer.productLinks.map(l => (
                <li key={l}><a href="#productos">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <div className="footer__col-title">{tr.footer.colInfo}</div>
            <ul className="footer__links">
              {tr.footer.infoLinks.map(l => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="footer__col-title">{tr.footer.colContact}</div>
            <ul className="footer__links">
              <li><a href="tel:+34619184224">619 18 42 24</a></li>
              <li>
                <a href="https://wa.me/34619184224" target="_blank" rel="noopener noreferrer">
                  {tr.footer.waLabel}
                </a>
              </li>
              <li style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>{tr.footer.schedule1}</li>
              <li style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>{tr.footer.schedule2}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">
            {tr.footer.copy.replace('{year}', year)}
          </span>
          <div className="footer__social">
            <a
              href="https://www.instagram.com/minimarketkarla/"
              target="_blank" rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063456789012"
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={16} strokeWidth={1.5} />
            </a>
            <a
              href="https://wa.me/34619184224"
              target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Phone size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
