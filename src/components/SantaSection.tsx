import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const EternalOdyssey = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo('.odyssey-luxe-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section className="odyssey-sacred-section" ref={sectionRef}>
      <div className="container-luxe">
        <div className="odyssey-luxe-card luxury-card">
          <div className="sacred-badge">A CELEBRATION OF YOUR RADIANCE</div>

          <h2 className="sacred-heading">Your Heart of <span className="text-love">Gold</span></h2>

          <div className="sacred-grid">
            <div className="sacred-item">
              <div className="sacred-icon">✨</div>
              <h4>Inspiring Light</h4>
              <p>Your extraordinary kindness and the way you enrich the lives of everyone you touch.</p>
              <span className="love-motif">❤</span>
            </div>
            <div className="sacred-item">
              <div className="sacred-icon">☀</div>
              <h4>Radiant Joy</h4>
              <p>Celebrating the vibrant spirit you carry, bringing laughter and hope to every moment.</p>
              <span className="love-motif">❤</span>
            </div>
            <div className="sacred-item">
              <div className="sacred-icon">🕊</div>
              <h4>Heart of Peace</h4>
              <p>Honoring the serenity you bring into my world, a quiet light that guides me through life.</p>
              <span className="love-motif">❤</span>
            </div>
            <div className="sacred-item">
              <div className="sacred-icon">⭐</div>
              <h4>Celestial Grace</h4>
              <p>Acknowledging the beautiful grace that surrounds you, a testimony to the goodness within.</p>
              <span className="love-motif">❤</span>
            </div>
          </div>

          <div className="sacred-poetic-block">
            <p>
              "Catherine, may your journey be always blessed with the same beauty and goodness you share so freely. Every moment with you is a gift, and every heartbeat is a testament to the joy you bring into my life."
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .odyssey-sacred-section {
          padding: 8rem 0;
          background: transparent;
          position: relative;
        }

        .odyssey-luxe-card {
           padding: 5rem 3.5rem;
           text-align: center;
           max-width: 950px;
           margin: 0 auto;
           background: white;
           position: relative;
           overflow: hidden;
        }

        .sacred-badge {
            font-size: 0.7rem;
            letter-spacing: 0.5em;
            color: var(--sacred-rose);
            margin-bottom: 2.5rem;
            font-weight: 500;
        }

        .sacred-heading {
            font-family: var(--font-title);
            font-size: clamp(2rem, 5vw, 3.2rem);
            margin-bottom: 4rem;
            color: var(--text-main);
        }

        .text-love {
            color: var(--sacred-rose);
            font-style: italic;
        }

        .sacred-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 3.5rem;
            margin-bottom: 5rem;
            align-items: start;
        }

        @media (min-width: 991px) {
            .sacred-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1200px) {
            .sacred-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .sacred-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            position: relative;
        }

        .sacred-icon {
            font-size: 3rem;
            color: var(--gold-primary);
            filter: drop-shadow(0 8px 20px rgba(175, 135, 77, 0.2));
            transition: transform 0.4s ease;
        }

        .sacred-item:hover .sacred-icon {
            transform: scale(1.1) rotate(5deg);
        }

        .sacred-item h4 {
            font-family: var(--font-title);
            font-size: 1.25rem;
            color: var(--text-main);
            letter-spacing: 0.05em;
        }

        .sacred-item p {
            font-size: 0.95rem;
            color: var(--text-muted);
            line-height: 1.6;
        }

        .love-motif {
            font-size: 1.2rem;
            color: var(--sacred-rose);
            opacity: 0.3;
            margin-top: 1rem;
        }

        .sacred-poetic-block {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            line-height: 1.6;
            color: var(--text-dim);
            font-style: italic;
            max-width: 750px;
            margin: 0 auto;
            border-top: 1px solid var(--glass-border);
            padding-top: 3.5rem;
        }

        @media (max-width: 991px) {
            .sacred-grid { gap: 2rem; }
        }

        @media (max-width: 768px) {
            .sacred-grid { grid-template-columns: 1fr; gap: 4rem; }
            .sacred-poetic-block { font-size: 1.2rem; }
            .odyssey-luxe-card { padding: 4rem 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default EternalOdyssey;
