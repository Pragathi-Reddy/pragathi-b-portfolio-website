'use client'

import { useEffect, useState } from 'react'

export function GlobalBackground() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth - 0.5) * 12,
        y: (event.clientY / window.innerHeight - 0.5) * 12,
      })
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])

  return (
    <div
      className="global-background"
      aria-hidden="true"
      style={{ '--background-x': `${pointer.x}px`, '--background-y': `${pointer.y}px` } as React.CSSProperties}
    >
      <span className="background-orbit background-orbit-one" />
      <span className="background-orbit background-orbit-two" />
      <span className="background-trajectory background-trajectory-one" />
      <span className="background-trajectory background-trajectory-two" />
      <span className="background-trajectory background-trajectory-three" />
      <span className="background-trajectory background-trajectory-four" />
      <span className="background-route background-route-one" />
      <span className="background-route background-route-two" />
      <span className="background-telemetry-line background-telemetry-line-one" />
      <span className="background-telemetry-line background-telemetry-line-two" />
      <span className="background-telemetry-line background-telemetry-line-three" />
      <span className="background-telemetry-line background-telemetry-line-four" />
      <span className="background-data-point background-data-point-one" />
      <span className="background-data-point background-data-point-two" />
      <span className="background-data-point background-data-point-three" />
      <span className="background-node background-node-one" />
      <span className="background-node background-node-two" />
      <span className="background-node background-node-three" />
      <span className="background-node background-node-four" />
      <span className="background-point background-point-one" />
      <span className="background-point background-point-two" />
      <span className="background-point background-point-three" />
      <span className="background-crosshair background-crosshair-one" />
      <span className="background-crosshair background-crosshair-two" />
      <span className="background-scanline" />
    </div>
  )
}
