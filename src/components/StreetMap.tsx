import type { Ref } from 'react'

/* Plan de rues génératif, repris du motif du K du logo : deux familles de rues obliques et deux grands axes courbes. */
const W = 1200, H = 720
const avenues = [470, 545, 610, 690, 760, 845, 905, 985, 1060, 1135, 1215, 1290]
const streets = [70, 140, 200, 275, 340, 420, 480, 560, 625, 700, 770]
const SKEW_A = 190, SKEW_B = 90, B_START = 280, B_LEN = W + 100 - B_START

// Intersection de l'avenue i, (x - SKEW_A·t, H·t), et de la rue j, (B_START + B_LEN·s, y - SKEW_B·s).
function crossing(i: number, j: number) {
  const x0 = avenues[i], y0 = streets[j]
  const t = (y0 - SKEW_B * ((x0 - B_START) / B_LEN)) / (H - SKEW_B * (SKEW_A / B_LEN))
  return [x0 - SKEW_A * t, H * t] as const
}

// La tournée suit les rues, d'intersection en intersection.
const stops: [number, number][] = [[3, 10], [3, 8], [5, 8], [5, 6], [7, 6], [7, 4], [8, 4]]
const route = stops.map(([i, j], k) => `${k ? 'L' : 'M'}${crossing(i, j).map(n => n.toFixed(1)).join(' ')}`).join(' ')
const [pinX, pinY] = crossing(8, 4)

type Props = { withRoute?: boolean; label?: string; routeRef?: Ref<SVGPathElement>; pinRef?: Ref<SVGGElement> }

export default function StreetMap({ withRoute = false, label = 'Livré, 1000 Bruxelles', routeRef, pinRef }: Props) {
  return <svg className="street-map" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
    <path d={`M-40 ${H - 40} C 320 ${H - 140}, 640 260, ${W + 40} 150`} className="street-map-arc" />
    <path d={`M-40 ${H + 30} C 360 ${H - 70}, 700 340, ${W + 40} 250`} className="street-map-arc" />
    {avenues.map(x => <line key={'a' + x} x1={x} y1={0} x2={x - SKEW_A} y2={H} />)}
    {streets.map(y => <line key={'s' + y} x1={B_START} y1={y} x2={W + 100} y2={y - SKEW_B} />)}
    {withRoute && <>
      <path ref={routeRef} d={route} className="street-map-route" />
      <g ref={pinRef} className="street-map-pin" style={{ transformOrigin: `${pinX}px ${pinY}px` }}>
        <circle cx={pinX} cy={pinY} r="26" className="pin-halo" />
        <circle cx={pinX} cy={pinY} r="9" className="pin-dot" />
        <rect x={pinX - 214} y={pinY - 70} width="196" height="40" rx="3" className="pin-tag" />
        <text x={pinX - 200} y={pinY - 45} className="pin-text">{label}</text>
      </g>
    </>}
  </svg>
}
