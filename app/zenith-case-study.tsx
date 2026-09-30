'use client'

import { useEffect, useState } from 'react'

const images = {
  hardwareOne: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z1rCKU5B3x1ilLzyVQqTNWwKxxX98G.png',
  hardwareTwo: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cPdIrIAmo3NDbLsT64iiVYCb1c3KZO.png',
  fieldTest: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lTbEsf2wylsgL7CTcYET8kQManBd4v.png',
  sensorGui: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xXrLv81gnr8LmIIpgpYVHxOggUnjEZ.png',
  hazard: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BqrJF8Z3lssrxc0SDQZsp220e3z5tt.png',
  overview: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eiBPRdospfj4qoSDeVzdeFy3RYGSxb.png',
  station: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tatxiT4g0Cbv2TW8bsyj7pCeGTBdyP.png',
} as const

type ImageData = { src: string; alt: string; caption: string }
const image = (key: keyof typeof images, alt: string, caption: string): ImageData => ({ src: images[key], alt, caption })

function Media({ data, onOpen, large = false }: { data: ImageData; onOpen: (data: ImageData) => void; large?: boolean }) {
  return <figure className={`zenith-media${large ? ' is-large' : ''}`}><button type="button" onClick={() => onOpen(data)}><img src={data.src} alt={data.alt} /></button><figcaption><span>{data.caption}</span><b>OPEN IMAGE ↗</b></figcaption></figure>
}
function Flow({ items }: { items: string[] }) { return <div className="zenith-flow">{items.map((item, i) => <span key={item}>{i > 0 && <i>→</i>}{item}</span>)}</div> }
const remote = ['ESP32-CAM → captures images', 'ESP32 → handles telemetry + LoRa transmission', 'Sensors → BMP280 and MPU6050', 'Encoding → Base64 for LoRa packet transfer', 'Power → Li-Po battery with buck converter']
const ground = ['Receives LoRa packets via E32 module', 'Decodes sensor + image data in real time', 'Python GUI → displays telemetry', 'Image Processing → reassembles and displays images', 'Hazard Mapping → thresholding + Voronoi safe path overlay']

function Slide({ index, onOpen }: { index: number; onOpen: (data: ImageData) => void }) {
  const hardware = [image('hardwareOne', 'Remote node prototype with ESP32-CAM, sensors and LoRa module', 'REMOTE NODE / SATELLITE PROTOTYPE'), image('hardwareTwo', 'Remote node LoRa hardware prototype', 'REMOTE NODE / LoRa HARDWARE')]
  const sensor = [image('fieldTest', 'Received field-test image', 'FIELD TEST IMAGE / QVGA 320×240'), image('sensorGui', 'Raw sensor telemetry beside GUI visualization', 'GROUND STATION GUI / RAW TELEMETRY + VISUALIZATION')]
  const labels = ['01 / PROJECT DETAIL', '02 / SYSTEM OVERVIEW', '03 / HOW THE SYSTEM WORKS', '04 / GROUND STATION', '05 / SENSOR DATA & GUI', '06 / IMAGE TRANSMISSION', '07 / HAZARD DETECTION', '08 / COMPLETE SYSTEM FLOW', '09 / PROJECT TAKEAWAY']
  if (index === 0) return <section className="zenith-slide zenith-intro-slide"><div><span className="eyebrow">{labels[index]}</span><h2>Zenith Satellite<br /><em>System</em></h2></div><div className="zenith-intro-copy"><p className="kicker">SATELLITE-BASED HAZARD DETECTION &amp; ENVIRONMENTAL MONITORING</p><p className="tech">ESP32-CAM · ENVIRONMENTAL SENSORS · ARDUINO IDE · DIPOLE TRANSMITTER</p><p>Developed a system to identify hazards and monitor environmental conditions in remote areas, including fires, chemical spills, temperature, humidity, and gas levels.</p><div className="intro-visual">REMOTE SENSING<br />+ WIRELESS DATA<br />+ IMAGE ANALYSIS</div></div></section>
  if (index === 1) return <section className="zenith-slide"><span className="eyebrow">{labels[index]}</span><h2>From remote sensing to<br />ground-station analysis.</h2><div className="media-grid">{hardware.map((item) => <Media key={item.caption} data={item} onOpen={onOpen} />)}</div><Flow items={['REMOTE NODE', 'IMAGE + SENSOR DATA', 'LoRa E32', 'GROUND STATION', 'IMAGE PROCESSING', 'HAZARD DETECTION']} /></section>
  if (index === 2) return <section className="zenith-slide"><span className="eyebrow">{labels[index]}</span><h2>Remote Node</h2><div className="two-col"><ul className="deck-list">{remote.map((item) => <li key={item}>{item}</li>)}</ul><Media data={image('overview', 'System overview flowchart', 'SYSTEM OVERVIEW / COMMAND AND DATA PATH')} onOpen={onOpen} /></div></section>
  if (index === 3) return <section className="zenith-slide"><span className="eyebrow">{labels[index]}</span><h2>Ground Station</h2><div className="two-col"><Media data={image('station', 'Ground station processing flowchart', 'GROUND STATION / DATA PROCESSING FLOW')} onOpen={onOpen} /><ul className="deck-list">{ground.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
  if (index === 4) return <section className="zenith-slide"><span className="eyebrow">{labels[index]}</span><h2>Sensor Data &amp;<br />Visualization</h2><div className="media-grid">{sensor.map((item) => <Media key={item.caption} data={item} onOpen={onOpen} />)}</div></section>
  if (index === 5) return <section className="zenith-slide"><span className="eyebrow">{labels[index]}</span><h2>Image Transmission</h2><div className="terminal"><b>REAL-TIME IMAGE DECODING</b><p>Terminal displaying real-time image decoding logs.</p><code>ESP32-CAM :: CAPTURE COMPLETE<br />BASE64 PACKET :: ENCODED<br />LoRa E32 :: TRANSMISSION READY<br />GROUND STATION :: RECONSTRUCTION</code></div><Flow items={['ESP32-CAM', 'IMAGE CAPTURE', 'BASE64 ENCODING', 'LoRa TRANSMISSION', 'GROUND STATION', 'IMAGE RECONSTRUCTION']} /></section>
  if (index === 6) return <section className="zenith-slide"><span className="eyebrow">{labels[index]}</span><h2>Hazard Detection &amp;<br />Safe Path Analysis</h2><Media large data={image('hazard', 'Four-stage hazard analysis showing raw image, hazard map, Voronoi analysis and safe path', '01 RAW IMAGE · 02 HAZARD MAP · 03 VORONOI ANALYSIS · 04 SAFE PATH')} onOpen={onOpen} /><p className="slide-note">Image processing identifies hazard regions through thresholding and derives traversable paths using Voronoi-based analysis.</p></section>
  if (index === 7) return <section className="zenith-slide"><span className="eyebrow">{labels[index]}</span><h2>Complete System Flow</h2><Flow items={['CAPTURE', 'SENSE', 'ENCODE', 'TRANSMIT', 'DECODE', 'PROCESS', 'DETECT', 'VISUALIZE']} /><div className="info-grid">{[['HARDWARE', 'ESP32-CAM · ESP32 · BMP280 · MPU6050 · LoRa E32'], ['COMMUNICATION', 'LoRa wireless transmission'], ['PROCESSING', 'Python · OpenCV · Image Processing'], ['OUTPUT', 'Environmental Monitoring · Image Transmission · Hazard Detection']].map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}</div></section>
  return <section className="zenith-slide takeaway"><span className="eyebrow">{labels[index]}</span><h2>Connecting remote sensing,<br />wireless transmission,<br /><em>and intelligent image analysis.</em></h2><p>College Project · Zenith Satellite System</p></section>
}

export function ZenithCaseStudy({ onClose }: { onClose: () => void }) {
  const [slide, setSlide] = useState(0)
  const [lightbox, setLightbox] = useState<ImageData | null>(null)
  const total = 9
  const go = (next: number) => setSlide(Math.max(0, Math.min(total - 1, next)))
  useEffect(() => { document.body.style.overflow = 'hidden'; const key = (event: KeyboardEvent) => { if (event.key === 'Escape') lightbox ? setLightbox(null) : onClose(); if (event.key === 'ArrowRight') go(slide + 1); if (event.key === 'ArrowLeft') go(slide - 1) }; window.addEventListener('keydown', key); return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', key) } }, [lightbox, slide])
  return <div className="zenith-overlay" role="dialog" aria-modal="true" aria-label="Zenith Satellite System project presentation"><div className="zenith-card"><header className="zenith-card-top"><span>ZENITH SATELLITE SYSTEM</span><button type="button" onClick={onClose}>CLOSE ×</button></header><div className="zenith-card-content"><Slide index={slide} onOpen={setLightbox} /></div><footer className="zenith-card-nav"><button type="button" disabled={slide === 0} onClick={() => go(slide - 1)}>← PREVIOUS</button><nav aria-label="Project slides">{Array.from({ length: total }, (_, i) => <button key={i} type="button" className={i === slide ? 'active' : ''} onClick={() => go(i)}>{String(i + 1).padStart(2, '0')}</button>)}</nav><button type="button" disabled={slide === total - 1} onClick={() => go(slide + 1)}>NEXT →</button></footer></div>{lightbox && <div className="zenith-lightbox" role="dialog" aria-modal="true"><button type="button" onClick={() => setLightbox(null)}>CLOSE ×</button><img src={lightbox.src} alt={lightbox.alt} /></div>}</div>
}

export default ZenithCaseStudy
