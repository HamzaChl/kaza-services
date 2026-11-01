import { ContactBand, PageIntro, RegionList } from '../components/Shared'

export default function Coverage() {
  return <>
    <PageIntro title="Proches de vous, partout en Belgique">
      Notre activité de livraison de colis couvre les trois régions du pays. Les tournées sont organisées selon les secteurs et les besoins des réseaux partenaires.
    </PageIntro>

    <section className="wrap section coverage-grid">
      <div>
        <h2>Trois régions, des réalités différentes</h2>
        <p>Rues denses de la capitale, centres urbains flamands, communes rurales wallonnes : chaque secteur a ses contraintes de distribution, et nos tournées s’y adaptent.</p>
        <p className="small-note">Pour la presse, les secteurs de distribution sont définis dans le cadre de notre collaboration avec AMP.</p>
      </div>
      <RegionList />
    </section>

    <ContactBand />
  </>
}
