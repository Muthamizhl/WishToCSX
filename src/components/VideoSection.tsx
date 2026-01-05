import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const VideoSection = () => {
  const videoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((ref) => {
      if (!ref) return;
      gsap.fromTo(ref,
        { opacity: 0, scale: 0.95, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  const scenes = [
    { id: 1, title: "The Spirit of Giving", img: "/src/assets/santa.png", desc: "A journey through warmth and wonder." },
    { id: 2, title: "Festive Joy", img: "/src/assets/festive_street.png", desc: "Lighting up the world, one heart at a time." }
  ];

  return (
    <section className="section video-section">
      <div className="video-container">
        {scenes.map((scene, index) => (
          <div
            key={scene.id}
            className="video-card"
            ref={el => { videoRefs.current[index] = el; }}
          >
            <div className="video-frame">
              <img src={scene.img} alt={scene.title} className="video-placeholder" />
              <div className="video-glow" />
              <div className="video-content">
                <h3 className="video-title">{scene.title}</h3>
                <p className="video-desc">{scene.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .video-section {
          padding: 10rem 2rem;
        }

        .video-container {
          display: flex;
          flex-direction: column;
          gap: 8rem;
          width: 100%;
          max-width: 1400px;
        }

        .video-card {
          width: 100%;
          perspective: 1000px;
        }

        .video-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 21/9;
          overflow: hidden;
          border-radius: 4px;
          border: 1px solid rgba(153, 27, 27, 0.3);
          box-shadow: 0 30px 60px rgba(0,0,0,0.8);
        }

        .video-placeholder {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: contrast(1.1) brightness(0.8) sepia(0.2) hue-rotate(-10deg);
          transition: transform 10s linear;
        }

        .video-card:hover .video-placeholder {
          transform: scale(1.1);
        }

        .video-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 30%, rgba(45, 10, 10, 0.4) 100%);
          pointer-events: none;
        }

        .video-content {
          position: absolute;
          bottom: 4rem;
          left: 4rem;
          max-width: 500px;
        }

        .video-title {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          color: var(--white-soft);
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 10px rgba(0,0,0,0.5);
        }

        .video-desc {
          font-family: var(--font-sans);
          font-size: 0.9rem;
          letter-spacing: 0.1rem;
          color: var(--white-muted);
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .video-frame { aspect-ratio: 16/9; }
          .video-content { bottom: 2rem; left: 2rem; }
          .video-title { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default VideoSection;
