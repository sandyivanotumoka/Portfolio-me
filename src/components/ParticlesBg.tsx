import { useEffect, useRef } from "react";

export default function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return; // <-- ini penting buat hilangin ctx error

    let particles: Particle[] = [];
    const amount = 80;

    function resizeCanvas() {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    class Particle {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
      size = Math.random() * 2 + 0.5;
      speedX = (Math.random() - 0.5) * 0.3;
      speedY = (Math.random() - 0.5) * 0.3;
      opacity = Math.random() * 0.5 + 0.2;

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = window.innerWidth;
        if (this.x > window.innerWidth) this.x = 0;
        if (this.y < 0) this.y = window.innerHeight;
        if (this.y > window.innerHeight) this.y = 0;
      }

      draw() {
        const isDark = document.documentElement.classList.contains("dark");

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        if (isDark) {
          // DARK MODE → putih lembut
          ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
          ctx.shadowColor = "rgba(255,255,255,0.25)";
        } else {
          // LIGHT MODE → biru aesthetic
          ctx.fillStyle = `rgba(56,189,248,${this.opacity * 0.9})`;
          ctx.shadowColor = "rgba(56,189,248,0.35)";
        }

        ctx.shadowBlur = 8;
        ctx.fill();
      }
    }

    function init() {
      resizeCanvas();
      particles = Array.from({ length: amount }, () => new Particle());
    }

    function animate() {
      ctx.shadowBlur = 0; // reset glow tiap frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener("resize", init);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
