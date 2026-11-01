import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer className="footer">
    <div className="wrap">
      <div className="footer-grid">
        <div>
          <Link to="/" className="footer-brand" aria-label="Kaza Services, accueil"><img src="/logo-full.png" alt="Kaza Services" width="500" height="105" /></Link>
          <p>Livraison de colis et distribution de presse, partout en Belgique.</p>
        </div>
        <nav aria-label="Nos métiers">
          <h2>Nos métiers</h2>
          <Link to="/services#colis">Livraison de colis</Link>
          <Link to="/services#presse">Distribution de presse</Link>
          <Link to="/couverture">Couverture</Link>
        </nav>
        <nav aria-label="L’entreprise">
          <h2>L’entreprise</h2>
          <Link to="/a-propos">À propos</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Kaza Services</span>
        <a href="#main">Retour en haut</a>
      </div>
    </div>
  </footer>
}
