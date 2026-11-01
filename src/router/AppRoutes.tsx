import { Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Services from '../pages/Services'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Coverage from '../pages/Coverage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/couverture" element={<Coverage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
