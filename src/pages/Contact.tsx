import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Icon from '../components/Icon'

export default function Contact() {
  const [params] = useSearchParams()
  const [saved, setSaved] = useState(false)

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = 'DEMANDE DE COLLABORATION — KAZA SERVICES\n\n' + Array.from(data.entries()).map(([k, v]) => `${k} : ${v}`).join('\n\n')
    const url = URL.createObjectURL(new Blob([body], { type: 'text/plain;charset=utf-8' }))
    const a = document.createElement('a')
    a.href = url
    a.download = 'demande-kaza-services.txt'
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
    setSaved(true)
  }

  return <section className="wrap contact-layout">
    <div>
      <h1>La prochaine tournée commence ici</h1>
      <p className="contact-lede">Vous représentez un réseau de livraison, un acteur de la presse ou une entreprise ? Présentez-nous vos besoins de distribution.</p>
      <div className="contact-info"><Icon name="box" size={28} /><div><h2>Colis et dernier kilomètre</h2><p>Livraison sur l’ensemble du territoire belge.</p></div></div>
      <div className="contact-info"><Icon name="clock" size={28} /><div><h2>Presse et journaux</h2><p>Une organisation dédiée à la distribution de presse.</p></div></div>
      <aside className="contact-notice">Pour suivre un colis, contactez le réseau indiqué sur votre confirmation d’expédition.</aside>
    </div>

    <form onSubmit={submit} className="contact-form">
      <h2>Présentez votre projet</h2>
      <div className="form-row">
        <label>Nom complet *<input name="Nom" autoComplete="name" required /></label>
        <label>Entreprise<input name="Entreprise" autoComplete="organization" /></label>
      </div>
      <div className="form-row">
        <label>E-mail *<input name="E-mail" type="email" autoComplete="email" required placeholder="vous@entreprise.be" /></label>
        <label>Téléphone<input name="Téléphone" type="tel" autoComplete="tel" placeholder="+32" /></label>
      </div>
      <label>Votre activité
        <select name="Activité" defaultValue={params.get('service') === 'presse' ? 'Distribution de presse' : 'Livraison de colis'}>
          <option>Livraison de colis</option><option>Distribution de presse</option><option>Autre collaboration</option>
        </select>
      </label>
      <label>Secteurs concernés<input name="Secteurs" placeholder="Régions, villes ou codes postaux" /></label>
      <label>Votre projet *<textarea name="Projet" required rows={5} placeholder="Volumes, fréquence des tournées, secteurs, date de démarrage…" /></label>
      <p className="form-note">Ce formulaire prépare une fiche à télécharger. Aucun message n’est envoyé : vos informations restent dans votre navigateur et dans le document.</p>
      <button className="btn" type="submit">Télécharger ma demande</button>
      {saved && <p className="success" role="status">Votre fiche a été téléchargée. Aucun message n’a été envoyé.</p>}
    </form>
  </section>
}
