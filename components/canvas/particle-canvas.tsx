"use client"

import { useRef, useEffect, useLayoutEffect, useCallback } from "react"

interface Particle {
    x: number
    y: number
    tx: number
    ty: number
    vx: number
    vy: number
    color: string
    size: number
}

const PALETTES = [
    ["#5DCAA5", "#1D9E75", "#085041", "#9FE1CB", "#E1F5EE"],
    ["#7F77DD", "#534AB7", "#AFA9EC", "#3C3489", "#CECBF6"],
    ["#D85A30", "#F0997B", "#993C1D", "#F5C4B3", "#712B13"],
    ["#378ADD", "#85B7EB", "#185FA5", "#B5D4F4", "#0C447C"],
    ["#D4537E", "#ED93B1", "#993556", "#F4C0D1", "#72243E"],
    ["#EF9F27", "#FAC775", "#BA7517", "#854F0B", "#FAEEDA"],
]

const FONT_FAMILY = '"Syne", "Segoe UI", "Arial Black", Arial, sans-serif'
const STORAGE_KEY = "particle-text-pixels-v1"

interface ParticleCanvasProps {
    forceRadius: number
    particleSize: number
    springSpeed: number
    paletteIndex: number
    triggerExplode: number
    triggerVortex: number
}

export default function ParticleCanvas({
    forceRadius,
    particleSize,
    springSpeed,
    paletteIndex,
    triggerExplode,
    triggerVortex,
}: ParticleCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const particlesRef = useRef<Particle[]>([])
    const mouseRef = useRef({ x: -9999, y: -9999 })
    const dimensionsRef = useRef({ W: 0, H: 0 })
    const animationRef = useRef<number>(0)
    const isInteractingRef = useRef(false)
    const currentPaletteRef = useRef<string[]>(PALETTES[0])
    const textPixelsRef = useRef<{ x: number; y: number }[]>([])

    const loadStoredPixels = () => {
        if (typeof window === "undefined") return null
        try {
            const raw = window.localStorage.getItem(STORAGE_KEY)
            if (!raw) return null
            const parsed = JSON.parse(raw) as { W: number; H: number; points: { x: number; y: number }[] }
            return parsed
        } catch {
            return null
        }
    }

    const savePixels = (W: number, H: number, points: { x: number; y: number }[]) => {
        if (typeof window === "undefined") return
        try {
            window.localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify({ W, H, points })
            )
        } catch {
        }
    }

    const getTextPixels = useCallback((W: number, H: number, dpr: number) => {
        const stored = loadStoredPixels()
        if (stored && stored.W === W && stored.H === H) {
            textPixelsRef.current = stored.points
            return stored.points
        }

        const off = document.createElement("canvas")
        const octx = off.getContext("2d", { willReadFrequently: true })
        if (!octx) return []

        off.width = W * dpr
        off.height = H * dpr
        octx.setTransform(dpr, 0, 0, dpr, 0, 0)

        const fontSize = Math.min(W * 0.11, 100)
        octx.fillStyle = "#fff"
        octx.font = `800 ${fontSize}px ${FONT_FAMILY}`
        octx.textAlign = "center"
        octx.textBaseline = "middle"
        octx.fillText("YASHWANTH", W / 2, H / 2)

        const data = octx.getImageData(0, 0, off.width, off.height).data
        const points: { x: number; y: number }[] = []
        const gap = Math.max(3, Math.round(4 * (900 / W)))

        for (let y = 0; y < off.height; y += gap * dpr) {
            for (let x = 0; x < off.width; x += gap * dpr) {
                if (data[(y * off.width + x) * 4 + 3] > 128) {
                    points.push({ x: x / dpr, y: y / dpr })
                }
            }
        }
        savePixels(W, H, points)
        textPixelsRef.current = points
        return points
    }, [])

    const initParticles = useCallback(
        (W: number, H: number, dpr: number, palette: string[]) => {
            const points = getTextPixels(W, H, dpr)
            const particleCount = points.length
            const particles: Particle[] = new Array(particleCount)

            for (let i = 0; i < particleCount; i++) {
                const point = points[i]
                particles[i] = {
                    x: point.x,
                    y: point.y,
                    tx: point.x,
                    ty: point.y,
                    vx: 0,
                    vy: 0,
                    color: palette[i % palette.length],
                    size: particleSize + Math.random() * 0.8,
                }
            }
            return particles
        },
        [getTextPixels, particleSize]
    )

    const drawStaticFrame = useCallback(
        (ctx: CanvasRenderingContext2D, W: number, H: number) => {
            ctx.clearRect(0, 0, W, H)
            const particles = particlesRef.current
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i]
                ctx.globalAlpha = 1
                ctx.fillStyle = p.color
                ctx.beginPath()
                ctx.arc(p.tx, p.ty, p.size / 2, 0, Math.PI * 2)
                ctx.fill()
            }
        },
        []
    )

    useLayoutEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        const dpr = window.devicePixelRatio || 1

        const initCanvas = () => {
            const W = container.offsetWidth
            const fontSize = Math.min(W * 0.11, 100)
            const H = fontSize * 1.5

            canvas.width = W * dpr
            canvas.height = H * dpr
            canvas.style.height = `${H}px`
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

            dimensionsRef.current = { W, H }

            const stored = loadStoredPixels()
            if (stored && stored.W === W && stored.H === H) {
                textPixelsRef.current = stored.points
            }

            particlesRef.current = initParticles(W, H, dpr, currentPaletteRef.current)
            drawStaticFrame(ctx, W, H)
        }

        initCanvas()

        let resizeTimeout: ReturnType<typeof setTimeout>
        const handleResize = () => {
            clearTimeout(resizeTimeout)
            resizeTimeout = setTimeout(() => {
                const W = container.offsetWidth
                const fontSize = Math.min(W * 0.11, 100)
                const H = fontSize * 1.5

                canvas.width = W * dpr
                canvas.height = H * dpr
                canvas.style.height = `${H}px`
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

                dimensionsRef.current = { W, H }

                const points = getTextPixels(W, H, dpr)
                const particles = particlesRef.current
                const len = Math.min(points.length, particles.length)
                for (let i = 0; i < len; i++) {
                    particles[i].tx = points[i].x
                    particles[i].ty = points[i].y
                }

                if (!isInteractingRef.current) {
                    drawStaticFrame(ctx, W, H)
                }
            }, 100)
        }

        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
            clearTimeout(resizeTimeout)
        }
    }, [drawStaticFrame, initParticles])

    useEffect(() => {
        const palette = PALETTES[paletteIndex % PALETTES.length]
        currentPaletteRef.current = palette
        const particles = particlesRef.current
        const len = particles.length
        for (let i = 0; i < len; i++) {
            particles[i].color = palette[i % palette.length]
        }
    }, [paletteIndex])

    useEffect(() => {
        const particles = particlesRef.current
        const len = particles.length
        for (let i = 0; i < len; i++) {
            particles[i].size = particleSize + Math.random() * 0.8
        }
    }, [particleSize])

    useEffect(() => {
        if (triggerExplode === 0) return
        const particles = particlesRef.current
        const len = particles.length
        for (let i = 0; i < len; i++) {
            const angle = Math.random() * Math.PI * 2
            const force = 15 + Math.random() * 25
            particles[i].vx = Math.cos(angle) * force
            particles[i].vy = Math.sin(angle) * force
        }
    }, [triggerExplode])

    useEffect(() => {
        if (triggerVortex === 0) return
        const particles = particlesRef.current
        const { W, H } = dimensionsRef.current
        const len = particles.length
        const centerX = W / 2
        const centerY = H / 2
        for (let i = 0; i < len; i++) {
            const p = particles[i]
            const dx = p.x - centerX
            const dy = p.y - centerY
            const angle = Math.atan2(dy, dx) + Math.PI / 2
            const force = 8 + Math.random() * 12
            p.vx += Math.cos(angle) * force
            p.vy += Math.sin(angle) * force
        }
    }, [triggerVortex])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d", { alpha: true })
        if (!ctx) return

        const animate = () => {
            const { W, H } = dimensionsRef.current
            const particles = particlesRef.current
            const mouse = mouseRef.current
            const len = particles.length
            const forceRadiusSq = forceRadius * forceRadius

            ctx.clearRect(0, 0, W, H)

            for (let i = 0; i < len; i++) {
                const p = particles[i]
                const dx = p.tx - p.x
                const dy = p.ty - p.y
                p.vx += dx * springSpeed
                p.vy += dy * springSpeed

                const mx = mouse.x - p.x
                const my = mouse.y - p.y
                const mdSq = mx * mx + my * my
                if (mdSq < forceRadiusSq && mdSq > 0) {
                    const md = Math.sqrt(mdSq)
                    const force = (1 - md / forceRadius) * 10
                    p.vx -= (mx / md) * force
                    p.vy -= (my / md) * force
                }

                p.vx *= 0.9
                p.vy *= 0.9
                p.x += p.vx
                p.y += p.vy

                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
                ctx.globalAlpha = Math.min(1, 0.4 + speed * 0.12)
                ctx.fillStyle = p.color

                const s = p.size + Math.min(speed * 0.3, 2)
                ctx.beginPath()
                ctx.arc(p.x, p.y, s / 2, 0, Math.PI * 2)
                ctx.fill()
            }

            ctx.globalAlpha = 1
            animationRef.current = requestAnimationFrame(animate)
        }

        animationRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(animationRef.current)
    }, [forceRadius, springSpeed])

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect()
        mouseRef.current.x = e.clientX - rect.left
        mouseRef.current.y = e.clientY - rect.top
        isInteractingRef.current = true
    }, [])

    const handleMouseLeave = useCallback(() => {
        mouseRef.current.x = -9999
        mouseRef.current.y = -9999
    }, [])

    const handleTouchMove = useCallback((e: React.TouchEvent<HTMLCanvasElement>) => {
        e.preventDefault()
        const canvas = canvasRef.current
        if (!canvas) return
        const rect = canvas.getBoundingClientRect()
        mouseRef.current.x = e.touches[0].clientX - rect.left
        mouseRef.current.y = e.touches[0].clientY - rect.top
        isInteractingRef.current = true
    }, [])

    const handleTouchEnd = useCallback(() => {
        mouseRef.current.x = -9999
        mouseRef.current.y = -9999
    }, [])

    return (
        <div
            ref={containerRef}
            className="relative w-full flex items-center justify-center"
        >
            <canvas
                ref={canvasRef}
                className="block w-full cursor-crosshair"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            />
        </div>
    )
}