"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseHue: number;
}

interface Props {
  particleCount?: number;
}

function CanvasFractalBackground({ particleCount = 220 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 0.5 + Math.random() * 0.6, // ოდნავ დავაპატარავე
        baseHue: 210, // fix ლურჯი/ციანფერი ტონი
      });
    }

    const maxDist = 130;
    const gridSize = 65;
    let start = performance.now();

    const loop = (now: number) => {
      const t = (now - start) * 0.001;
      const { width, height } = canvas;

      // ბექგრაუნდი
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#000000");
      bgGrad.addColorStop(0.5, "#04050c");
      bgGrad.addColorStop(1, "#000000");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // grid
      ctx.save();
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgb(17, 17, 17)";

      const offsetX = Math.sin(t * 0.2) * 10;
      const offsetY = Math.cos(t * 0.25) * 10;

      for (let x = offsetX % gridSize; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = offsetY % gridSize; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // Particles – fix ლურჯი ფერი
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        p.x += Math.sin(t * 0.7 + i * 0.15) * 0.35;
        p.y += Math.cos(t * 0.9 + i * 0.11) * 0.35;

        if (p.x < -20) p.x = width + 10;
        if (p.x > width + 20) p.x = -10;
        if (p.y < -20) p.y = height + 10;
        if (p.y > height + 20) p.y = -10;

        // ვეღარ ვცვლით hue-ს, უბრალოდ baseHue ვიყენებთ
        const hue = p.baseHue;

        const gradient = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius * 5,
        );
        gradient.addColorStop(0, `hsla(${hue}, 90%, 80%, 0.95)`);
        gradient.addColorStop(0.3, `hsla(${hue}, 90%, 70%, 0.6)`);
        gradient.addColorStop(1, `hsla(${hue}, 80%, 20%, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2); // ვიზუალური წერტილი უფრო პატარა
        ctx.fill();
      });

      // ხაზები ნაწილაკებს შორის – ეგრევე fix ლურჯ ტონზე
      ctx.lineWidth = 0.6;
      ctx.lineCap = "round";
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.7;
            const midHue = 210; // fix იგივე ლურჯი
            ctx.strokeStyle = `hsla(${midHue}, 85%, 65%, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [particleCount]);

  return (
    <div className="overflow-hidden">
      <canvas ref={canvasRef} className="fixed inset-0 -z-10 h-full w-full" />
    </div>
  );
}

export default CanvasFractalBackground;
