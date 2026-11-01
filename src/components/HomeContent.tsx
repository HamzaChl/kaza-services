import { Link } from 'react-router-dom'
import Icon from './Icon'

const needs = [
  { icon: 'box', label: 'COMMERCES & ENTREPRISES', title: 'Vos livraisons professionnelles', text: 'Un approvisionnement, une commande client ou un transfert entre deux sites : précisez le volume et les contraintes de réception.', examples: 'Colis · Palettes · Marchandises conditionnées' },
  { icon: 'clock', label: 'BESOINS RÉGULIERS', title: 'Des envois qui se répètent', text: 'Vous avez plusieurs livraisons à organiser ? Indiquez les adresses, la fréquence souhaitée et les créneaux à prendre en compte.', examples: 'Fréquence · Points de livraison · Créneaux' },
  { icon: 'truck', label: 'PARTICULIERS', title: 'Un transport ponctuel', text: 'Un achat volumineux ou des biens à déplacer : décrivez les objets et les lieux pour permettre une étude adaptée de votre demande.', examples: 'Dimensions · Poids · Conditions d’accès' },
]
const questions = [
  { question: 'Quelles informations préparer pour un devis ?', answer: 'Prévoyez les adresses de départ et d’arrivée, la date souhaitée, la nature des marchandises, leur quantité, leurs dimensions et leur poids estimé. Ajoutez les contraintes de chargement ou de livraison : étage, accès étroit, stationnement ou créneau imposé.' },
  { question: 'Puis-je demander un transport en tant que particulier ?', answer: 'Oui, vous pouvez préparer une demande pour un besoin personnel. Décrivez les biens à déplacer et les conditions d’accès. Les modalités du transport doivent être définies avant toute prise en charge.' },
  { question: 'Comment présenter un besoin de livraisons régulières ?', answer: 'Indiquez la fréquence envisagée, le nombre de points de livraison, les volumes habituels et les horaires souhaités. Mentionnez également les variations prévisibles pour permettre une étude de votre organisation.' },
  { question: 'Que préciser pour des objets fragiles ou volumineux ?', answer: 'Signalez leur fragilité, leurs dimensions, leur poids et leur emballage. Précisez si une aide au chargement est disponible. Ces éléments permettent de déterminer les conditions nécessaires ; la prise en charge reste à confirmer.' },
  { question: 'La demande de devis confirme-t-elle mon transport ?', answer: 'Non. Une demande sert à décrire votre besoin. La disponibilité, le tarif, les dates et les conditions doivent être convenus avant de confirmer un transport. Le formulaire du site prépare actuellement un document à télécharger ; il n’effectue ni envoi automatique ni réservation.' },
]

export function TransportNeeds() {
  return <section className="container section transport-needs" aria-labelledby="needs-title">
    <div className="section-heading"><div><div className="eyebrow"><span /> VOS BESOINS AU QUOTIDIEN</div><h2 id="needs-title">À chaque activité,<br />ses besoins de transport.</h2></div><div className="section-intro"><p>Le point de départ, c’est votre organisation.<br />Voici quelques exemples de demandes à préparer.</p></div></div>
    <div className="needs-grid">{needs.map(need => <article className="need-item" key={need.title}><Icon name={need.icon} size={30} /><span className="need-label">{need.label}</span><h3>{need.title}</h3><p>{need.text}</p><div className="need-examples">{need.examples}</div><Link to="/contact" className="inline-link">Présenter mon besoin <Icon size={17} /></Link></article>)}</div>
  </section>
}

export function ShippingPreparation() {
  return <section className="shipping-preparation" aria-labelledby="preparation-title"><div className="container preparation-grid">
    <div className="preparation-intro"><div className="eyebrow"><span /> AVANT LE DÉPART</div><h2 id="preparation-title">Les détails qui font<br />la différence à l’arrivée.</h2><p>Une demande précise aide à anticiper les contraintes du transport. Prenez quelques minutes pour rassembler ces informations.</p><Link to="/contact" className="button">Préparer ma demande <Icon size={18} /></Link></div>
    <div className="preparation-checklist">{[['Identifier votre chargement', 'Nombre de colis ou de palettes, dimensions, poids estimé et nature du contenu.'], ['Décrire les accès', 'Quai, étage, ascenseur, stationnement et espace disponible au départ comme à l’arrivée.'], ['Préciser les disponibilités', 'Date souhaitée, plage horaire et coordonnées des personnes présentes sur place.'], ['Signaler les particularités', 'Fragilité, emballage, manutention nécessaire ou consignes spécifiques.']].map(([title, text]) => <div key={title}><span className="preparation-check"><Icon name="check" size={17} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
  </div></section>
}

export function TransportFaq() {
  return <section className="container section transport-faq" aria-labelledby="faq-title"><div className="faq-intro"><div className="eyebrow"><span /> QUESTIONS FRÉQUENTES</div><h2 id="faq-title">Avant d’organiser<br />votre envoi.</h2><p>Des réponses pratiques pour préparer votre demande de transport.</p><Link to="/contact" className="inline-link">Décrire mon projet <Icon size={18} /></Link></div><div className="faq-list">{questions.map(item => <details key={item.question}><summary>{item.question}<span className="faq-plus" aria-hidden="true" /></summary><p>{item.answer}</p></details>)}</div></section>
}
