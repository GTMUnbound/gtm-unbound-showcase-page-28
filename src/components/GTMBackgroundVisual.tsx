
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "@/contexts/AnimationContext";

interface GTMBackgroundVisualProps {
  className?: string;
  variant?: "hero" | "section";
}

const GTMBackgroundVisual = ({ 
  className, 
  variant = "hero" 
}: GTMBackgroundVisualProps) => {
  const { prefersReducedMotion } = useAnimation();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Draw the background GTM paths and nodes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to match its display size
    const updateCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    // Initial size
    updateCanvasDimensions();

    // Update on resize
    const resizeObserver = new ResizeObserver(() => {
      updateCanvasDimensions();
      drawGTMBackground();
    });
    
    resizeObserver.observe(canvas);

    // Draw the GTM Background with paths, nodes, and orbit rings
    const drawGTMBackground = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(255, 78, 153, 0.04)'); // Pink
      gradient.addColorStop(1, 'rgba(255, 169, 140, 0.04)'); // Peach
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw orbit rings
      drawOrbitRings(ctx, canvas.width / 2, canvas.height / 2);
      
      // Draw connection paths
      drawConnectionPaths(ctx, canvas.width, canvas.height);
      
      // Draw nodes
      drawNodes(ctx, canvas.width, canvas.height);
    };

    const drawOrbitRings = (ctx: CanvasRenderingContext2D, centerX: number, centerY: number) => {
      const maxRadius = Math.min(centerX, centerY) * 0.8;
      
      // Draw multiple orbit rings
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, maxRadius * (i / 3), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 78, 153, ${0.1 - i * 0.025})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    const drawConnectionPaths = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // Generate some random paths connecting different parts of the canvas
      ctx.lineWidth = 0.5;
      
      const numPaths = 8;
      const points = [];
      
      // Create random points
      for (let i = 0; i < numPaths; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height
        });
      }
      
      // Connect points with bezier curves
      for (let i = 0; i < points.length - 1; i++) {
        const startPoint = points[i];
        const endPoint = points[i + 1];
        
        const ctrlX1 = (startPoint.x + endPoint.x) / 2;
        const ctrlY1 = startPoint.y;
        const ctrlX2 = (startPoint.x + endPoint.x) / 2;
        const ctrlY2 = endPoint.y;
        
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.bezierCurveTo(ctrlX1, ctrlY1, ctrlX2, ctrlY2, endPoint.x, endPoint.y);
        
        const gradient = ctx.createLinearGradient(
          startPoint.x, startPoint.y, 
          endPoint.x, endPoint.y
        );
        gradient.addColorStop(0, 'rgba(255, 78, 153, 0.15)');
        gradient.addColorStop(1, 'rgba(255, 169, 140, 0.15)');
        
        ctx.strokeStyle = gradient;
        ctx.stroke();
      }
    };

    const drawNodes = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // Draw some nodes/points at key intersections
      const numNodes = 12;
      
      for (let i = 0; i < numNodes; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = 1 + Math.random() * 3;
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        
        const alpha = 0.1 + Math.random() * 0.3;
        ctx.fillStyle = `rgba(255, 78, 153, ${alpha})`;
        ctx.fill();
        
        // Add a subtle glow for some nodes
        if (Math.random() > 0.7) {
          ctx.beginPath();
          ctx.arc(x, y, size + 2 + Math.random() * 5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 78, 153, ${alpha * 0.3})`;
          ctx.fill();
        }
      }
    };

    // Initial draw
    drawGTMBackground();

    // Animation loop if motion is not reduced
    let animationId: number | null = null;
    
    if (!prefersReducedMotion) {
      let time = 0;
      const animate = () => {
        time += 0.01;
        drawGTMBackground();
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }

    // Clean up
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
    };
  }, [prefersReducedMotion, variant]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <canvas 
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: variant === "hero" ? 0.8 : 0.4 }}
      />
      {/* Add additional decorative elements with Framer Motion */}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute top-1/4 left-1/3 h-24 w-24 rounded-full bg-gradient-to-br from-gtm-pink/5 to-pink-400/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      {!prefersReducedMotion && (
        <motion.div 
          className="absolute bottom-1/3 right-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-pink-300/5 to-gtm-coral/10 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      )}
    </div>
  );
};

export default GTMBackgroundVisual;
