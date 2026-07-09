import { useEffect, useRef } from 'react';

interface WireframeGlobeProps {
  rotationSpeed?: number;
  color?: string; // Hex color e.g., "#00f0ff"
  glowColor?: string;
}

export default function WireframeGlobe({
  rotationSpeed = 0.005,
  color = '#00f0ff',
  glowColor = 'rgba(0, 240, 255, 0.4)',
}: WireframeGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angleX = 0.5; // Fixed tilt
    let angleY = 0;

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = (rect?.width || 300) * window.devicePixelRatio;
      canvas.height = (rect?.height || 300) * window.devicePixelRatio;
      canvas.style.width = '100%';
      canvas.style.height = '100%';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Points representing a 3D sphere
    const numLatitudes = 8;
    const numLongitudes = 12;
    const points: { x: number; y: number; z: number }[] = [];

    // Generate latitude and longitude points
    for (let i = 1; i < numLatitudes; i++) {
      const lat = (Math.PI * i) / numLatitudes;
      for (let j = 0; j < numLongitudes; j++) {
        const lon = (2 * Math.PI * j) / numLongitudes;
        const x = Math.sin(lat) * Math.cos(lon);
        const y = Math.cos(lat);
        const z = Math.sin(lat) * Math.sin(lon);
        points.push({ x, y, z });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const size = Math.min(width, height) * 0.45;
      const cx = width / 2;
      const cy = height / 2;

      ctx.save();
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      const drawSize = size / window.devicePixelRatio;
      const drawCx = cx / window.devicePixelRatio;
      const drawCy = cy / window.devicePixelRatio;

      // Update rotation
      angleY += rotationSpeed;

      // Render lines of Latitude
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 6;

      // Draw horizontal rings (Latitude lines)
      for (let i = 1; i < numLatitudes; i++) {
        ctx.beginPath();
        const lat = (Math.PI * i) / numLatitudes;
        const radius = Math.sin(lat) * drawSize;
        const yRaw = Math.cos(lat) * drawSize;

        // Apply tilt (rotation around X axis)
        const y = yRaw * Math.cos(angleX);
        const zScale = Math.sin(angleX);

        // Drawing a projected ellipse for the latitude line
        ctx.ellipse(
          drawCx,
          drawCy + y,
          radius,
          radius * zScale,
          0,
          0,
          Math.PI * 2
        );
        ctx.stroke();
      }

      // Draw vertical longitude lines
      for (let j = 0; j < numLongitudes; j++) {
        ctx.beginPath();
        const lonBase = (2 * Math.PI * j) / numLongitudes;
        const lon = lonBase + angleY;

        let first = true;
        for (let i = 0; i <= 36; i++) {
          const lat = (Math.PI * i) / 36;
          
          // 3D coordinates
          const x3d = Math.sin(lat) * Math.cos(lon) * drawSize;
          const y3d = Math.cos(lat) * drawSize;
          const z3d = Math.sin(lat) * Math.sin(lon) * drawSize;

          // Rotate around X axis (tilt)
          const yRot = y3d * Math.cos(angleX) - z3d * Math.sin(angleX);
          const zRot = y3d * Math.sin(angleX) + z3d * Math.cos(angleX);

          // Perspective scaling
          const fov = drawSize * 2.5;
          const scale = fov / (fov + zRot);
          const screenX = drawCx + x3d * scale;
          const screenY = drawCy + yRot * scale;

          if (first) {
            ctx.moveTo(screenX, screenY);
            first = false;
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }
        ctx.stroke();
      }

      // Draw outer bounds sphere circle
      ctx.beginPath();
      ctx.arc(drawCx, drawCy, drawSize, 0, Math.PI * 2);
      ctx.strokeStyle = `${color}33`; // Fainter
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [rotationSpeed, color, glowColor]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-45 mix-blend-screen"
      style={{ filter: 'drop-shadow(0 0 8px rgba(0,240,255,0.2))' }}
    />
  );
}
