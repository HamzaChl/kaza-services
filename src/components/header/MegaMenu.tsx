import { Link } from 'react-router-dom'
import Icon from '../Icon'
import type { MenuLink, NavigationMenu } from '../../data/navigation'

export function NavigationLink({ item, className, onNavigate, children }: { item: MenuLink; className?: string; onNavigate: () => void; children?: React.ReactNode }) {
  return item.to
    ? <Link to={item.to} className={className} onClick={onNavigate}>{children ?? item.label}</Link>
    : <button type="button" className={className} aria-disabled="true" title="Cette rubrique sera disponible prochainement.">{children ?? item.label}</button>
}

export function MegaMenuFeaturedCard({ featured, onNavigate }: { featured: NavigationMenu['featured']; onNavigate: () => void }) {
  return <aside className={`mega-feature mega-feature--${featured.visual}`}>
    <div className="mega-feature-visual" aria-hidden="true">
      {featured.visual === 'journey' ? <img src="/transport-hero.jpg" alt="" /> : featured.visual === 'destination' ? <div className="destination-art"><span className="city-building city-building--left" /><span className="city-building city-building--center" /><span className="city-building city-building--right" /><span className="city-line" /></div> : <div className="journey-art"><span className="journey-stop" /><span className="journey-line" /><span className="journey-stop" /><span className="journey-icon"><Icon name="route" size={35} /></span></div>}
    </div>
    <div className="mega-feature-copy"><p className="mega-category">{featured.label}</p><h3>{featured.title}</h3><p>{featured.description}</p><NavigationLink item={{ label: featured.cta, to: featured.to }} className="mega-feature-link" onNavigate={onNavigate}>{featured.cta}<Icon size={18} /></NavigationLink></div>
  </aside>
}

export default function MegaMenu({ menu, onNavigate, mobile = false }: { menu: NavigationMenu; onNavigate: () => void; mobile?: boolean }) {
  return <div className={mobile ? 'mobile-menu-groups' : 'mega-grid'}>
    {menu.groups.map(group => <section className="mega-group" key={group.title} aria-label={group.title}><h2 className="mega-category">{group.title}</h2><ul>{group.links.map(item => <li key={item.label}><NavigationLink item={item} className="mega-link" onNavigate={onNavigate}><span className="mega-link-title">{item.label}</span>{item.description && <span className="mega-description">{item.description}</span>}</NavigationLink></li>)}</ul></section>)}
    {!mobile && <MegaMenuFeaturedCard featured={menu.featured} onNavigate={onNavigate} />}
  </div>
}
