import Icon from '../components/Icon'
import { ContactBand, PageIntro, Partners } from '../components/Shared'

const values = [
  ['route', 'Proximité', 'Une connaissance du terrain au service des adresses, des destinataires et des réseaux.'],
  ['check', 'Rigueur', 'Des opérations préparées avec attention et une exécution selon les modalités convenues.'],
  ['shield', 'Engagement', 'Le même soin pour un colis du quotidien et pour une publication attendue.'],
]

export default function About() {
  return <>
    <PageIntro title="Un métier de terrain, une affaire de confiance">
      Derrière chaque livraison, il y a quelqu’un qui attend. C’est cette réalité simple qui donne du sens à notre travail.
    </PageIntro>

    <section className="tinted">
      <div className="wrap section about-statement">
        <h2>Nous sommes le lien entre les réseaux et le quotidien</h2>
        <div>
          <p>Kaza Services est spécialisée dans la livraison de colis dans toute la Belgique et la distribution de presse et de journaux. Nous accompagnons des réseaux reconnus dans la réalisation de leurs opérations sur le terrain.</p>
          <p>Notre approche repose sur le soin des envois, l’organisation des tournées et la qualité de la collaboration. Nous adaptons notre travail aux consignes propres à chaque activité, aux secteurs desservis et aux besoins de nos partenaires.</p>
        </div>
      </div>
    </section>

    <Partners />

    <section className="wrap section values-grid">
      {values.map(([icon, title, text]) => <article key={title}><Icon name={icon} size={30} /><h3>{title}</h3><p>{text}</p></article>)}
    </section>

    <ContactBand />
  </>
}
