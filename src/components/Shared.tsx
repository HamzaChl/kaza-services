import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'


export function PageIntro({ title, children }: { title: ReactNode; children: ReactNode }) {
  return <section className="page-intro">
    <span className="intro-index" aria-hidden="true">KAZA / BE</span>
    <div className="wrap">
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  </section>
}

export function ContactBand() {
  return <section className="contact-band"><div className="wrap">
    <span className="editorial-label">+ CONSTRUISONS LA SUITE</span>
    <div className="contact-band-inner"><h2>Avançons.<br />Ensemble.</h2><div><p>Vous recherchez un partenaire pour la livraison de colis ou la distribution de presse ? Présentez-nous vos secteurs et vos besoins.</p><a href="mailto:info@kazaservices.be" className="btn btn-light">Parlons de votre projet ↗︎</a><Link to="/services" className="final-secondary">Explorer nos expertises ↗︎</Link></div></div>
  </div></section>
}

export function Partners() {
  return <section className="partners wrap" aria-label="Réseaux avec lesquels nous travaillons">
    <p>Nous travaillons avec</p>
    <ul>
      {[
        ['bpost', '/Logos-co/Bpost_logo.svg.webp'],
        ['Colis Privé', '/Logos-co/colis-prive.png'],
        ['DPD', '/Logos-co/DPD_logo.png'],
        ['AMP', '/Logos-co/amp_logo.png'],
      ].map(([name, src]) => <li key={name}><img src={src} alt={name} width="160" height="64" loading="lazy" /></li>)}
    </ul>
  </section>
}

const regions = [
  { name: 'Bruxelles', detail: 'Les 19 communes de la Région de Bruxelles-Capitale' },
  { name: 'Flandre', detail: 'Anvers, Limbourg, Flandre-Orientale, Flandre-Occidentale, Brabant flamand' },
  { name: 'Wallonie', detail: 'Hainaut, Liège, Luxembourg, Namur, Brabant wallon' },
]

export function RegionList() {
  return <ul className="region-list">
    {regions.map(r => <li key={r.name}><h3>{r.name}</h3><p>{r.detail}</p></li>)}
  </ul>
}
