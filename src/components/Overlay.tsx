import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Overlay = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRefs = useRef<(HTMLDivElement | null)[]>([]);

    const phrases = [
        "In the silence of the winter night...",
        "There exists a light that never fades.",
        "A care so deep, it transcends words.",
        "Before time, and beyond it...",
        "For Catherine Suji Xavier.",
        "A presence that remains, eternal and calm.",
        "Merry Christmas, with a heart full of gratitude."
    ];

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });

        textRefs.current.forEach((ref) => {
            if (!ref) return;

            tl.fromTo(ref,
                { opacity: 0, y: 20, filter: 'blur(10px)' },
                { opacity: 1, y: 0, filter: 'blur(0px)', duration: 3, ease: "power2.out" }
            )
                .to(ref,
                    { opacity: 0, y: -20, filter: 'blur(10px)', duration: 3, ease: "power2.in" },
                    "+=4" // Wait for 4 seconds before fading out
                );
        });
    }, []);

    return (
        <div ref={containerRef} className="overlay-container">
            <div className="poetic-content">
                {phrases.map((phrase, index) => (
                    <div
                        key={index}
                        ref={(el) => { textRefs.current[index] = el; }}
                        className="poetic-phrase"
                    >
                        {phrase}
                    </div>
                ))}
            </div>

            <div className="utility-controls">
                <button className="utility-btn">
                    <span className="btn-label">Ambient Sound</span>
                    <div className="btn-icon">♪</div>
                </button>
            </div>

            <style>{`
        .overlay-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          pointer-events: none;
          z-index: 20;
        }

        .poetic-content {
          position: relative;
          width: 80%;
          max-width: 800px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .poetic-phrase {
          position: absolute;
          font-family: var(--font-serif);
          font-size: 2.2rem;
          font-weight: 300;
          color: var(--white-soft);
          text-align: center;
          letter-spacing: 0.1rem;
          line-height: 1.6;
          opacity: 0;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          font-style: italic;
        }

        @media (max-width: 768px) {
          .poetic-phrase {
            font-size: 1.5rem;
          }
        }

        .utility-controls {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          display: flex;
          gap: 1rem;
          pointer-events: auto;
        }

        .utility-btn {
          background: transparent;
          border: 1px solid rgba(245, 158, 11, 0.3);
          color: var(--gold-soft);
          padding: 0.8rem 1.2rem;
          font-family: var(--font-sans);
          font-size: 0.7rem;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .utility-btn:hover {
          background: rgba(245, 158, 11, 0.1);
          border-color: var(--gold-primary);
        }

        .btn-icon {
          font-size: 1.2rem;
        }
      `}</style>
        </div>
    );
};

export default Overlay;
