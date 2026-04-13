"use client"

import { useState } from "react"
import ParticleCanvas from "@/components/canvas/particle-canvas"

export default function Particle() {
    const [forceRadius] = useState(100)
    const [particleSize] = useState(2)
    const [springSpeed] = useState(0.06)
    const [paletteIndex] = useState(0)
    const [triggerExplode] = useState(0)
    const [triggerVortex] = useState(0)

    return (
        <div className="overflow-hidden">
            <ParticleCanvas
                forceRadius={forceRadius}
                particleSize={particleSize}
                springSpeed={springSpeed}
                paletteIndex={paletteIndex}
                triggerExplode={triggerExplode}
                triggerVortex={triggerVortex}
            />
        </div>
    )
}
