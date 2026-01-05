import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const DecorativeElements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Divine Dust animation
    const particles = containerRef.current.querySelectorAll('.divine-particle');
    particles.forEach((p) => {
      gsap.to(p, {
        opacity: gsap.utils.random(0.1, 0.4),
        scale: gsap.utils.random(0.5, 1.5),
        y: `-=${gsap.utils.random(50, 150)}`,
        x: `+=${gsap.utils.random(-30, 30)}`,
        duration: gsap.utils.random(8, 20),
        repeat: -1,
        ease: "sine.inOut",
        delay: gsap.utils.random(0, 5)
      });
    });

    // Snowfall animation
    const flakes = containerRef.current.querySelectorAll('.snow-flake');
    flakes.forEach((f) => {
      gsap.to(f, {
        y: '105vh',
        x: `+=${gsap.utils.random(-100, 100)}`,
        rotation: gsap.utils.random(0, 360),
        duration: gsap.utils.random(10, 25),
        repeat: -1,
        ease: "none",
        delay: gsap.utils.random(0, 15)
      });
    });

  }, []);

  return (
    <div className="divine-radiance-bg" ref={containerRef}>
      <div className="radiance-glow"></div>

      {/* Snowfall */}
      {[...Array(60)].map((_, i) => (
        <div
          key={`snow-${i}`}
          className="snow-flake"
          style={{
            top: `-5vh`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
          }}
        />
      ))}


      {/* Divine Dust Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={`dust-${i}`}
          className="divine-particle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
          }}
        />
      ))}

      <div className="radiance-soft-overlay"></div>

      <style>{`
        .divine-radiance-bg {
          position: fixed;
          inset: 0;
          z-index: -1;
          background: var(--bg-deep);
          overflow: hidden;
        }

        .radiance-glow {
          position: absolute;
          width: 150%;
          height: 150%;
          top: -25%;
          left: -25%;
          background: 
            radial-gradient(circle at 20% 20%, rgba(251, 191, 36, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(180, 83, 9, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 60%);
          filter: blur(100px);
          animation: divine-float 30s infinite alternate ease-in-out;
        }

        .divine-particle {
          position: absolute;
          background: var(--gold-primary);
          border-radius: 50%;
          filter: blur(1px);
          opacity: 0.2;
          pointer-events: none;
        }

        .snow-flake {
            position: absolute;
            background: white;
            border-radius: 50%;
            filter: blur(1px);
            opacity: 0.6;
            pointer-events: none;
        }

        .confetti-piece {
            position: absolute;
            pointer-events: none;
            border-radius: 1px;
        }

        .radiance-soft-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, transparent 30%, rgba(243, 239, 234, 0.2) 100%);
          pointer-events: none;
        }

        @keyframes divine-float {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(-2%, 2%) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default DecorativeElements;
