import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'
import Motion from './Motion'
import PageCurtain from './PageCurtain'
export default function Layout() {
  const { pathname, hash } = useLocation()
  useLayoutEffect(() => { if (hash) { document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' }) } else { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }) } }, [pathname, hash])
  return <div className="app-layout"><a href="#main" className="skip-link">Aller au contenu</a><Nav /><main id="main"><Outlet /></main><Footer /><Motion /><PageCurtain /></div>
}
