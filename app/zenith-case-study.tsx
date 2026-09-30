'use client'

import { useEffect, useMemo, useState } from 'react'

const images = {
  hardwareOne: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z1rCKU5B3x1ilLzyVQqTNWwKxxX98G.png',
  hardwareTwo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cPdIrIAmo3NDbLsT64iiVYCb1c3KZO.png',
  fieldTest: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lTbEsf2wylsgL7CTcYET8kQManBd4v.png',
  sensorGui: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xXrLv81gnr8LmIIpgpYVHxOggUnjEZ.png',
  hazard: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BqrJF8Z3lssrxc0SDQZsp220e3z5tt.png',
  overview: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eiBPRdospfj4qoSDeVzdeFy3RYGSxb.png',
  station: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tatxiT4g0Cbv2TW8bsyj7pCeGTBdyP.png',
} as const

type SlideImage = { src: string; alt: string; caption: string }
const flows = (items: string[]) => <div className="zenith-deck-flow">{items.map((item, index) => <span key={item}>{index > 0 && <i>→</i>}{item}</span>)}</div>
function ImagePanel({ image, onOpen }: { image: SlideImage; onOpen: (image: SlideImage) => void }) { return <figure className="zenith-deck-image"><button type="button" onClick={() => onOpen(image)}><img src={image.src} alt={image.alt} /></button><figcaption><span>{image.caption}</span><b>OPEN IMAGE ↗</b></figcaption></figure> }
function Slide({ index, onOpen }: { index: number; onOpen: (image: SlideImage) => void }) {
  const image = (key: keyof typeof images, alt: string, caption: string): SlideImage => ({ src: images[key], alt, caption })
  const slideImages = {
    1: [image('hardwareOne', 'Remote node prototype with ESP32-CAM, sensors and LoRa module', 'REMOTE NODE / SATELLITE PROTOTYPE'), image('hardwareTwo', 'Remote node LoRa hardware prototype', 'REMOTE NODE / LoRa HARDWARE')],
    2: [image('overview', 'System overview flowchart', 'SYSTEM OVERVIEW / COMMAND AND DATA PATH')],
    3: [image('station', 'Ground station processing flowchart', 'GROUND STATION / DATA PROCESSING FLOW')],
    4: [image('fieldTest', 'Received field-test image', 'FIELD TEST IMAGE / QVGA 320×240'), image('sensorGui', 'Raw sensor telemetry and GUI visualization', 'GROUND STATION GUI / RAW TELEMETRY + VISUALIZATION')],
    6: [image('hazard', 'Four-stage hazard analysis showing raw image, hazard map, Voronoi analysis and safe path', '01 RAW IMAGE · 02 HAZARD MAP · 03 VORONOI ANALYSIS · 04 SAFE PATH')],
  }[index as 1 | 2 | 3 | 4 | 6] ?? []
  const list = index === 2 ? ['ESP32-CAM → captures images', 'ESP32 → handles telemetry + LoRa transmission', 'Sensors → BMP280 and MPU6050', 'Encoding → Base64 for LoRa packet transfer', 'Power → Li-Po battery with buck converter'] : ['Receives LoRa packets via E32 module', 'Decodes sensor + image data in real time', 'Python GUI → displays telemetry', 'Image Processing → reassembles and displays images', 'Hazard Mapping → thresholding + Voronoi safe path overlay']
  if (index === 0) return <div className="zenith-deck-slide zenith-deck-intro"><div><span className="eyebrow">01 / PROJECT DETAIL</span><h2>Zenith Satellite<br /><em>System</em></h2></div><div className="zenith-deck-copy"><p className="zenith-deck-kicker">SATELLITE-BASED HAZARD DETECTION &amp; ENVIRONMENTAL MONITORING</p><p className="zenith-deck-tech">ESP32-CAM · ENVIRONMENTAL SENSORS · ARDUINO IDE · DIPOLE TRANSMITTER</p><p>Developed a system to identify hazards and monitor environmental conditions in remote areas, including fires, chemical spills, temperature, humidity, and gas levels.</p><div className="zenith-deck-stamp">REMOTE SENSING<br />+ WIRELESS DATA<br />+ IMAGE ANALYSIS</div></div></div>
  const headings = ['From remote sensing to ground-station analysis.', 'Remote Node', 'Ground Station', 'Sensor Data & Visualization', 'Image Transmission', 'Hazard Detection & Safe Path Analysis', 'Complete System Flow', 'Connecting remote sensing, wireless transmission, and intelligent image analysis.']
  const labels = ['02 / SYSTEM OVERVIEW', '03 / REMOTE NODE', '04 / GROUND STATION', '05 / SENSOR DATA', '06 / IMAGE TRANSMISSION', '07 / HAZARD DETECTION', '08 / COMPLETE SYSTEM', '09 / PROJECT TAKEAWAY']
  return <div className={`zenith-deck-slide zenith-deck-slide-${index}`}><span className="eyebrow">{labels[index - 1]}</span><h2>{headings[index - 1]}</h2>{index === 1 && <><div className="zenith-deck-grid">{slideImages.map((item) => <ImagePanel key={item.caption} image={item} onOpen={onOpen} />)}</div>{flows(['REMOTE NODE', 'IMAGE + SENSOR DATA', 'LoRa E32', 'GROUND STATION', 'IMAGE PROCESSING', 'HAZARD DETECTION'])}</>}{index === 2 && <div className="zenith-deck-two-col"><ul className="zenith-deck-list">{list.map((item) => <li key={item}>{item}</li>)}</ul><ImagePanel image={slideImages[0]} onOpen={onOpen} /></div>}{index === 3 && <div className="zenith-deck-two-col"><ImagePanel image={slideImages[0]} onOpen={onOpen} /><ul className="zenith-deck-list">{list.map((item) => <li key={item}>{item}</li>)}</ul></div>}{index === 4 && <div className="zenith-deck-grid">{slideImages.map((item) => <ImagePanel key={item.caption} image={item} onOpen={onOpen} />)}</div>}{index === 5 && <><div className="zenith-terminal"><b>REAL-TIME IMAGE DECODING</b><p>Terminal displaying real-time image decoding logs.</p><code>ESP32-CAM :: CAPTURE COMPLETE<br />BASE64 PACKET :: ENCODED<br />LoRa E32 :: TRANSMISSION READY<br />GROUND STATION :: RECONSTRUCTION</code></div>{flows(['ESP32-CAM', 'IMAGE CAPTURE', 'BASE64 ENCODING', 'LoRa TRANSMISSION', 'GROUND STATION', 'IMAGE RECONSTRUCTION'])}</>}{index === 6 && <><ImagePanel image={slideImages[0]} onOpen={onOpen} /><p className="zenith-deck-note">Image processing identifies hazard regions through thresholding and derives traversable paths using Voronoi-based analysis.</p></>}{index === 7 && <><div className="zenith-deck-flow zenith-deck-flow-large">{['CAPTURE', 'SENSE', 'ENCODE', 'TRANSMIT', 'DECODE', 'PROCESS', 'DETECT', 'VISUALIZE'].map((item) => <span key={item}>{item}</span>)}</div><div className="zenith-deck-info">{[['HARDWARE', 'ESP32-CAM · ESP32 · BMP280 · MPU6050 · LoRa E32'], ['COMMUNICATION', 'LoRa wireless transmission'], ['PROCESSING', 'Python · OpenCV · Image Processing'], ['OUTPUT', 'Environmental Monitoring · Image Transmission · Hazard Detection']].map(([title, text]) => <div key={title}><b>{title}</b><p>{text}</p></div>)}</div></>}{index === 8 && <div className="zenith-deck-takeaway"><h3>{headings[7]}</h3><p>College Project · Zenith Satellite System</p></div>}</div>
}

export function ZenithCaseStudy({ onClose }: { onClose: () => void }) {
  const [slide, setSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [lightbox, setLightbox] = useState<SlideImage | null>(null)
  const total = 9
  const go = (next: number) => { setDirection(next > slide ? 1 : -1); setSlide(Math.max(0, Math.min(total - 1, next))) }
  useEffect(() => { document.body.style.overflow = 'hidden'; const keydown = (event: KeyboardEvent) => { if (event.key === 'Escape') lightbox ? setLightbox(null) : onClose(); if (event.key === 'ArrowRight') go(slide + 1); if (event.key === 'ArrowLeft') go(slide - 1) }; window.addEventListener('keydown', keydown); return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', keydown) } }, [lightbox, onClose, slide])
  const visible = useMemo(() => [slide - 1, slide, slide + 1].filter((item) => item >= 0 && item < total), [slide])
  return <div className="zenith-deck-overlay" role="dialog" aria-modal="true" aria-label="Zenith Satellite System project deck"><header className="zenith-deck-header"><span>ZENITH SATELLITE SYSTEM</span><button type="button" onClick={onClose}>CLOSE ×</button></header><main className="zenith-deck-stage"><div className="zenith-deck-stack">{visible.map((item) => <article key={item} className={`zenith-deck-card ${item === slide ? 'is-current' : item < slide ? 'is-previous' : 'is-next'}`} style={{ '--direction': direction } as React.CSSProperties}><Slide index={item} onOpen={setLightbox} /></article>)}</div></main><footer className="zenith-deck-footer"><button type="button" disabled={slide === 0} onClick={() => go(slide - 1)}>← PREVIOUS</button><nav aria-label="Project slides">{Array.from({ length: total }, (_, index) => <button key={index} type="button" className={slide === index ? 'active' : ''} onClick={() => go(index)}>{String(index + 1).padStart(2, '0')}</button>)}</nav><button type="button" disabled={slide === total - 1} onClick={() => go(slide + 1)}>NEXT →</button></footer>{lightbox && <div className="zenith-deck-lightbox" role="dialog" aria-modal="true"><button type="button" onClick={() => setLightbox(null)}>CLOSE ×</button><img src={lightbox.src} alt={lightbox.alt} /></div>}</div>
}

export default ZenithCaseStudy
