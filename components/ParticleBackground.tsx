"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const mouse = { x: -999, y: -999 };

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    const onMouseMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
        mouse.x = e.clientX - r.left;
        mouse.y = e.clientY - r.top;
      } else {
        mouse.x = -999;
        mouse.y = -999;
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    const N = Math.min(80, Math.floor((canvas.width * canvas.height) / 14000));
    const particles: Particle[] = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.2 + 0.4,
    }));

    const MAX_D = 130;
    const MOUSE_D = 180;

    const frame = () => {
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < MAX_D) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124,58,237,${(1 - d / MAX_D) * 0.18})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        const md = Math.hypot(mouse.x - a.x, mouse.y - a.y);
        if (md < MOUSE_D) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(168,85,247,${(1 - md / MOUSE_D) * 0.55})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168,85,247,0.5)";
        ctx.fill();
      }

      raf = requestAnimationFrame(frame);
    };
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}
