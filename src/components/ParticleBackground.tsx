import { useEffect, useRef } from "react";
import { noise } from "@chriscourses/perlin-noise";

// Define the Particle type
type Particle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  angle: number;
  angleSpeed: number;
  driftX: number;
  driftY: number;
  noiseOffsetX: number;
  noiseOffsetY: number;
  depth: number;
  color: string;
};

export default function ParticleBackground() {
  console.log("ParticleBackground component rendering");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("ParticleBackground mounted");
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas not found");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Could not get 2d context");
      return;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log(`Canvas resized to ${canvas.width}x${canvas.height}`);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Type particles as an array of Particle objects
    const particles: Particle[] = [];

    const createParticles = () => {
      const particleCount = Math.min(window.innerWidth / 10, 150);
      console.log(`Creating ${particleCount} particles`);
      for (let i = 0; i < particleCount; i++) {
        const depth = Math.random() * 3 + 1;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: (Math.random() * 2 + 0.5) * (depth / 3),
          speedX: ((Math.random() - 0.5) * 0.5) / depth,
          speedY: ((Math.random() - 0.5) * 0.5) / depth,
          angle: Math.random() * Math.PI * 2,
          angleSpeed: (Math.random() - 0.5) * 0.02,
          driftX: (Math.random() - 0.5) * 0.1,
          driftY: (Math.random() - 0.5) * 0.1,
          noiseOffsetX: Math.random() * 1000,
          noiseOffsetY: Math.random() * 1000,
          depth,
          color: `rgba(255, 255, 255, ${depth / 4})`, // Changed to white color for stars
        });
      }
    };

    createParticles();

    let mouseX = 0, mouseY = 0, isMouseMoving = false;

    // Add type to the event parameter
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;

      clearTimeout(mouseMoveTimeout);
      mouseMoveTimeout = setTimeout(() => {
        isMouseMoving = false;
      }, 300);
    };

    let mouseMoveTimeout: ReturnType<typeof setTimeout>;
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: ReturnType<typeof requestAnimationFrame>;
    let noiseTime = 0;

    const animate = () => {
      console.log("Animation frame", noiseTime);
      // Clear the entire canvas with pure black
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      noiseTime += 0.01;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const noiseX = noise(p.noiseOffsetX, noiseTime) - 0.5;
        const noiseY = noise(p.noiseOffsetY, noiseTime) - 0.5;

        p.x += noiseX * 1.5 * (p.depth / 3);
        p.y += noiseY * 1.5 * (p.depth / 3);

        p.angle += p.angleSpeed;
        p.x += p.speedX + Math.cos(p.angle) * 0.3 + p.driftX;
        p.y += p.speedY + Math.sin(p.angle) * 0.3 + p.driftY;

        p.speedX *= 0.98;
        p.speedY *= 0.98;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (isMouseMoving && distance < 120) {
          const force = Math.min(3 / distance, 0.05);
          p.speedX -= Math.cos(Math.atan2(dy, dx)) * force;
          p.speedY -= Math.sin(Math.atan2(dy, dx)) * force;
        } else if (!isMouseMoving && distance < 200) {
          const force = (distance / 200) * 0.001;
          p.speedX += dx * force;
          p.speedY += dy * force;
        }

        // Add glow effect to particles
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${p.depth / 2})`); // Increased opacity
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.depth / 2})`; // Increased opacity
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - distance / 500})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas 
    ref={canvasRef} 
    className="fixed inset-0" 
    style={{ 
      pointerEvents: "none",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "#FF0000",  // Bright red background
      zIndex: -1, // Should be behind other content
    }} 
  />;
} 