/** Add `to` when the corresponding route is available. No placeholder pages are created. */
export type MenuLink = { label: string; description?: string; to?: string }
export type NavigationMenu = {
  id: string
  label: string
  groups: { title: string; links: MenuLink[] }[]
  featured: { label: string; title: string; description: string; cta: string; visual: 'journey' | 'destination' | 'services'; to?: string }
}
export const navigationMenus: NavigationMenu[] = [
  {
    id: 'voyager', label: 'Voyager',
    groups: [
      { title: 'Voyager', links: [
        { label: 'Planifier un trajet', description: 'Rechercher un itinéraire et consulter les horaires.' },
        { label: 'Horaires', description: 'Consulter les prochains départs.' },
        { label: 'Billets & tarifs', description: 'Découvrir les différentes formules de transport.' },
        { label: 'Gares & arrêts', description: 'Trouver une gare ou un arrêt.' },
      ] },
      { title: 'Pendant votre trajet', links: [
        { label: 'Suivi en temps réel', description: 'Suivre votre ligne pendant votre déplacement.' },
        { label: 'Perturbations', description: 'Voir les incidents et changements en cours.' },
        { label: 'Accessibilité', description: 'Préparer un trajet adapté à vos besoins.' },
        { label: 'Bagages', description: 'Consulter les conditions de transport.' },
      ] },
    ],
    featured: { label: 'Voyager plus simplement', title: 'Chaque trajet commence ici.', description: 'Des lignes, des arrêts et de nouvelles possibilités. Imaginez votre prochain départ.', cta: 'Découvrir le réseau', visual: 'journey' },
  },
  {
    id: 'destinations', label: 'Destinations',
    groups: [
      { title: 'Vos destinations', links: [
        { label: 'Destinations populaires', description: 'De nouvelles idées pour vos prochains voyages.' },
        { label: 'Toutes les destinations', description: 'Explorer les villes et préparer votre arrivée.' },
        { label: 'Carte du réseau', description: 'Visualiser les itinéraires et les correspondances.' },
      ] },
      { title: 'Explorer le réseau', links: [
        { label: 'Gares', description: 'Les informations pratiques avant votre départ.' },
        { label: 'Lignes nationales', description: 'Découvrir les trajets à travers le pays.' },
        { label: 'Lignes internationales', description: 'Penser votre voyage au-delà des frontières.' },
      ] },
    ],
    featured: { label: 'Inspiration destination', title: 'Une escapade à Bruxelles.', description: 'Entre grandes places et petites rues, la capitale se découvre à votre rythme.', cta: 'Explorer la destination', visual: 'destination' },
  },
  {
    id: 'services', label: 'Services',
    groups: [
      { title: 'À bord', links: [
        { label: 'Services à bord', description: 'Les informations utiles pour votre confort.' },
        { label: 'Wi-Fi', description: 'Se renseigner sur la connexion pendant le trajet.' },
        { label: 'Bagages', description: 'Préparer vos affaires avant le départ.' },
        { label: 'Transport de vélos', description: 'Organiser votre voyage avec un vélo.' },
      ] },
      { title: 'Un voyage pour chacun', links: [
        { label: 'Accessibilité', description: 'Anticiper vos besoins de mobilité.' },
        { label: 'Voyager avec des enfants', description: 'Préparer sereinement un départ en famille.' },
        { label: 'Animaux', description: 'Se renseigner avant de voyager accompagné.' },
        { label: 'Application mobile', description: 'Retrouver les informations de votre trajet.' },
      ] },
    ],
    featured: { label: 'L’esprit de service', title: 'Bien préparer. Mieux voyager.', description: 'Les petits détails font les bons voyages. Retrouvez les services de Kaza Services.', cta: 'Découvrir nos services', visual: 'services', to: '/services' },
  },
]
export const directNavigation: MenuLink[] = [{ label: 'Infos trafic' }, { label: 'À propos', to: '/a-propos' }]
