import { Link } from 'react-router-dom'
import { ContactBand, PageIntro, Partners } from '../components/Shared'

export default function Services() {
  return <>
    <PageIntro title="Deux métiers, le même sens du service">
      La livraison de colis et la distribution de presse demandent une présence de terrain, une organisation précise et une attention constante aux destinataires.
    </PageIntro>

    <section id="colis" className="wrap service-detail">
      <div className="service-image"><img src="/pexels-polina-tankilevitch-4440780.jpg" alt="Livreur déposant des colis à la porte d’un destinataire" /></div>
      <div>
        <p className="service-tag">Livraison de colis</p>
        <h2>Du réseau à la porte du destinataire</h2>
        <p>Kaza Services intervient dans la livraison de colis sur l’ensemble du territoire belge, en collaboration avec bpost, Colis Privé, PACKS et PostNL.</p>
        <p>Nous inscrivons notre travail dans l’organisation de chaque réseau : des secteurs définis, des consignes de distribution et une attention particulière portée à la remise des colis.</p>
        <ul className="feature-list">
          <li>Couverture en Flandre, à Bruxelles et en Wallonie</li>
          <li>Organisation des tournées selon les besoins du réseau</li>
          <li>Livraison auprès des destinataires particuliers et professionnels</li>
        </ul>
        <Link to="/contact?service=colis" className="btn">Parler de vos colis</Link>
      </div>
    </section>

    <section id="presse" className="wrap service-detail reverse">
      <div className="service-image"><img src="/press.jpg" alt="Exemplaires de journaux prêts à être distribués" loading="lazy" /></div>
      <div>
        <p className="service-tag">Distribution de presse</p>
        <h2>La presse a son rythme, nous le connaissons</h2>
        <p>Nous travaillons avec AMP dans la distribution de presse et de journaux. Une activité où la régularité des tournées et le respect des consignes de distribution sont essentiels.</p>
        <p>Les zones, fréquences et modalités de prise en charge sont définies dans le cadre de la collaboration, selon les besoins opérationnels.</p>
        <ul className="feature-list">
          <li>Distribution de journaux et de publications</li>
          <li>Collaboration avec le réseau AMP</li>
          <li>Organisation adaptée aux contraintes de la presse</li>
        </ul>
        <Link to="/contact?service=presse" className="btn">Parler de la distribution</Link>
      </div>
    </section>

    <Partners />
    <ContactBand />
  </>
}
