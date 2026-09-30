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

type SlideImage = { src: string; alt: string; caption: string }
const flow = ['REMOTE NODE', 'IMAGE + SENSOR DATA', 'LoRa E32', 'GROUND STATION', 'IMAGE PROCESSING', 'HAZARD DETECTION']

function ImageCard({ image, onOpen }: { image: SlideImage; onOpen: (image: SlideImage) => void }) {
  return <figure className="zenith-slide-image"><button type="button" onClick={() => onOpen(image)}><img src={image.src} alt={image.alt} /></button><figcaption><span>{image.caption}</span><b>OPEN IMAGE ↗</b></figcaption></figure>
}

function Flow({ items }: { items: string[] }) {
  return <div className="zenith-slide-flow">{items.map((item, index) => <span key={item}>{index > 0 && <i>→</i>}{item}</span>)}</div>
}

export function ZenithCaseStudy({ onClose }: { onClose: () => void }) {
  const [slide, setSlide] = useState(0)
  const [lightbox, setLightbox] = useState<SlideImage | null>(null)
  const total = 9
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') lightbox ? setLightbox(null) : onClose()
      if (event.key === 'ArrowRight') setSlide((current) => Math.min(total - 1, current + 1))
      if (event.key === 'ArrowLeft') setSlide((current) => Math.max(0, current - 1))
    }
    window.addEventListener('keydown', keydown)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', keydown) }
  }, [lightbox, onClose])
  const openImage = (image: SlideImage) => setLightbox(image)
  const slideContent = [
    <div className="zenith-slide intro-slide" key="intro"><div><span className="eyebrow">01 / PROJECT DETAIL</span><h2>Zenith Satellite<br /><em>System</em></h2></div><div className="slide-intro-copy"><p className="zenith-subtitle">SATELLITE-BASED HAZARD DETECTION &amp; ENVIRONMENTAL MONITORING</p><p className="zenith-tech">ESP32-CAM · ENVIRONMENTAL SENSORS · ARDUINO IDE · DIPOLE TRANSMITTER</p><p>Developed a system to identify hazards and monitor environmental conditions in remote areas, including fires, chemical spills, temperature, humidity, and gas levels.</p></div></div>,
    <div className="zenith-slide" key="overview"><span className="eyebrow">02 / SYSTEM OVERVIEW</span><h2>From remote sensing to<br />ground-station analysis.</h2><div className="zenith-slide-grid"><ImageCard onOpen={openImage} image={{ src: images.hardwareOne, alt: 'Remote node prototype with ESP32-CAM and LoRa module', caption: 'REMOTE NODE / SATELLITE PROTOTYPE' }} /><ImageCard onOpen={openImage} image={{ src: images.hardwareTwo, alt: 'Remote node LoRa hardware prototype', caption: 'REMOTE NODE / LoRa HARDWARE' }} /></div><Flow items={flow} /></div>,
    <div className="zenith-slide" key="remote"><span className="eyebrow">03 / HOW THE SYSTEM WORKS</span><h2>Remote Node</h2><div className="zenith-slide-two-col"><ul className="zenith-list"><li>ESP32-CAM → captures images</li><li>ESP32 → handles telemetry + LoRa transmission</li><li>Sensors → BMP280 and MPU6050</li><li>Encoding → Base64 for LoRa packet transfer</li><li>Power → Li-Po battery with buck converter</li></ul><ImageCard onOpen={openImage} image={{ src: images.overview, alt: 'System overview flowchart', caption: 'SYSTEM OVERVIEW / COMMAND AND DATA PATH' }} /></div></div>,
    <div className="zenith-slide" key="station"><span className="eyebrow">04 / GROUND STATION</span><h2>Ground Station</h2><div className="zenith-slide-two-col"><ImageCard onOpen={openImage} image={{ src: images.station, alt: 'Ground station processing flowchart', caption: 'GROUND STATION / DATA PROCESSING FLOW' }} /><ul className="zenith-list"><li>Receives LoRa packets via E32 module</li><li>Decodes sensor + image data in real time</li><li>Python GUI → displays telemetry</li><li>Image Processing → reassembles and displays images</li><li>Hazard Mapping → thresholding + Voronoi safe path overlay</li></ul></div></div>,
    <div className="zenith-slide" key="sensor"><span className="eyebrow">05 / SENSOR DATA &amp; GUI</span><h2>Sensor Data &amp;<br />Visualization</h2><div className="zenith-slide-grid"><ImageCard onOpen={openImage} image={{ src: images.fieldTest, alt: 'Received field test image', caption: 'FIELD TEST IMAGE / QVGA 320×240' }} /><ImageCard onOpen={openImage} image={{ src: images.sensorGui, alt: 'Raw sensor telemetry and GUI visualization', caption: 'GROUND STATION GUI / RAW TELEMETRY + VISUALIZATION' }} /></div></div>,
    <div className="zenith-slide" key="transmission"><span className="eyebrow">06 / IMAGE TRANSMISSION</span><h2>Image Transmission</h2><div className="zenith-terminal"><span>REAL-TIME IMAGE DECODING</span><p>Terminal displaying real-time image decoding logs.</p><code>ESP32-CAM :: CAPTURE COMPLETE<br />BASE64 PACKET :: ENCODED<br />LoRa E32 :: TRANSMISSION READY<br />GROUND STATION :: RECONSTRUCTION</code></div><Flow items={['ESP32-CAM', 'IMAGE CAPTURE', 'BASE64 ENCODING', 'LoRa TRANSMISSION', 'GROUND STATION', 'IMAGE RECONSTRUCTION']} /></div>,
    <div className="zenith-slide" key="hazard"><span className="eyebrow">07 / HAZARD DETECTION</span><h2>Hazard Detection &amp;<br />Safe Path Analysis</h2><ImageCard onOpen={openImage} image={{ src: images.hazard, alt: 'Four-stage hazard analysis: raw image, hazard map, Voronoi analysis and safe path', caption: '01 RAW IMAGE · 02 HAZARD MAP · 03 VORONOI ANALYSIS · 04 SAFE PATH' }} /><p className="slide-note">Image processing identifies hazard regions through thresholding and derives traversable paths using Voronoi-based analysis.</p></div>,
    <div className="zenith-slide" key="flow"><span className="eyebrow">08 / COMPLETE SYSTEM FLOW</span><h2>Complete System Flow</h2><Flow items={['CAPTURE', 'SENSE', 'ENCODE', 'TRANSMIT', 'DECODE', 'PROCESS', 'DETECT', 'VISUALIZE']} /><div className="zenith-info-grid"><div><strong>HARDWARE</strong><p>ESP32-CAM · ESP32 · BMP280 · MPU6050 · LoRa E32</p></div><div><strong>COMMUNICATION</strong><p>LoRa wireless transmission</p></div><div><strong>PROCESSING</strong><p>Python · OpenCV · Image Processing</p></div><div><strong>OUTPUT</strong><p>Environmental Monitoring · Image Transmission · Hazard Detection</p></div></div></div>,
    <div className="zenith-slide takeaway-slide" key="takeaway"><span className="eyebrow">09 / PROJECT TAKEAWAY</span><h2>Connecting remote sensing,<br />wireless transmission,<br /><em>and intelligent image analysis.</em></h2><p>College Project · Zenith Satellite System</p></div>,
  ]
  return <div className="zenith-slides-overlay" role="dialog" aria-modal="true" aria-label="Zenith Satellite System case study"><header className="zenith-slides-header"><span className="project-number">ZENITH SATELLITE SYSTEM</span><button type="button" onClick={onClose}>CLOSE ×</button></header><main className="zenith-slides-stage"><div className="zenith-slide-key" key={slide}>{slideContent[slide]}</div></main><footer className="zenith-slides-footer"><button type="button" disabled={slide === 0} onClick={() => setSlide((current) => Math.max(0, current - 1))}>← PREVIOUS</button><nav aria-label="Project slides">{slideContent.map((_, index) => <button type="button" className={slide === index ? 'active' : ''} aria-label={`Go to slide ${index + 1}`} key={index} onClick={() => setSlide(index)}>{String(index + 1).padStart(2, '0')}</button>)}</nav><button type="button" disabled={slide === total - 1} onClick={() => setSlide((current) => Math.min(total - 1, current + 1))}>NEXT →</button></footer>{lightbox && <div className="zenith-slide-lightbox" role="dialog" aria-modal="true"><button type="button" onClick={() => setLightbox(null)}>CLOSE ×</button><img src={lightbox.src} alt={lightbox.alt} /></div>}</div>
}

export default ZenithCaseStudy
