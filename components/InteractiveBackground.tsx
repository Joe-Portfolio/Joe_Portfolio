
import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    resize();

    const hexSize = 35;
    const hexHeight = Math.sqrt(3) * hexSize;
    const hexWidth = 2 * hexSize;
    const columns = Math.ceil(width / (hexWidth * 0.75)) + 1;
    const rows = Math.ceil(height / hexHeight) + 1;

    const drawHex = (x: number, y: number, radius: number, hue: number, opacity: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + radius * Math.cos(angle);
        const hy = y + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
      ctx.strokeStyle = `hsla(${hue}, 80%, 60%, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      
      const timeOffset = time * 0.0005;

      for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * hexWidth * 0.75;
          const y = r * hexHeight + (c % 2 === 1 ? hexHeight / 2 : 0);

          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          let hue = 220; // Default slate blue
          let opacity = 0.08;

          // Rainbow hover effect
          if (dist < 250) {
            hue = (time * 0.1 + dist * 0.5) % 360;
            opacity = 0.2 + (1 - dist / 250) * 0.3;
          } else {
            // Subtle glossy animation for others
            const noise = Math.sin(x * 0.01 + y * 0.01 + timeOffset);
            opacity = 0.08 + noise * 0.02;
          }

          drawHex(x, y, hexSize * 0.9, hue, opacity);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'linear-gradient(to bottom, #0f172a, #020617)' }}
    />
  );
};

export default InteractiveBackground;
