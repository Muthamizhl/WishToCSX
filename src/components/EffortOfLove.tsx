import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EffortOfLove = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none none"
            }
        });

        tl.fromTo(imageRef.current,
            { opacity: 0, x: -50, scale: 0.9 },
            { opacity: 1, x: 0, scale: 1, duration: 1.5, ease: "power3.out" }
        ).fromTo(contentRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" },
            "-=1"
        );
    }, []);

    return (
        <section className="effort-section" ref={containerRef}>
            <div className="effort-grid">
                <div className="effort-image-container" ref={imageRef}>
                    <div className="effort-image-frame gold-border">
                        <img
                            src="https://antigravity-artifacts.s3.amazonaws.com/luxury_love_effort_heart_1767371947330.png"
                            alt="Effort of Love Heart"
                            className="effort-image"
                        />
                    </div>
                    <div className="image-luxury-accent"></div>
                </div>

                <div className="effort-content" ref={contentRef}>
                    <span className="premium-tag">Redesigning Love</span>
                    <h2 className="effort-title text-gold">My Effort of Love</h2>
                    <div className="effort-divider"></div>

                    <div className="effort-description">
                        <p>
                            They say love is a feeling, but for me, love is an effort. It's the effort to make you feel special every single day, to redesign your world with the finest fragments of my heart.
                        </p>
                        <p className="emphasis">
                            Everything you see here—every line of code, every color chosen, every grand wish crafted—is a physical representation of how much you mean to me.
                        </p>
                        <p>
                            In 2026 and beyond, my effort will only grow grander, my love more luxury, and my commitment more absolute. No one has loved you like this, and no one ever will.
                        </p>
                    </div>

                    <div className="love-stats glass-card shadow-gold">
                        <div className="stat-item">
                            <span className="stat-value">Infinite</span>
                            <span className="stat-label">Commitment</span>
                        </div>
                        <div className="stat-slash"></div>
                        <div className="stat-item">
                            <span className="stat-value">Forever</span>
                            <span className="stat-label">Effort</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .effort-section {
          padding: 8rem 2rem;
          background: #050505;
          position: relative;
        }

        .effort-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .effort-image-container {
          position: relative;
        }

        .effort-image-frame {
          position: relative;
          z-index: 2;
          border-radius: 20px;
          overflow: hidden;
          padding: 10px;
        }

        .effort-image {
          width: 100%;
          height: auto;
          border-radius: 12px;
          display: block;
          transition: transform 1s ease;
        }

        .effort-image-frame:hover .effort-image {
          transform: scale(1.05);
        }

        .image-luxury-accent {
          position: absolute;
          top: -30px;
          left: -30px;
          width: 200px;
          height: 200px;
          background: var(--gradient-gold);
          opacity: 0.1;
          filter: blur(60px);
          z-index: 1;
        }

        .effort-content {
          color: white;
        }

        .premium-tag {
          font-family: var(--font-modern);
          color: var(--champagne-gold);
          font-size: 0.8rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 1rem;
        }

        .effort-title {
          font-family: var(--font-luxury);
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }

        .effort-divider {
          width: 60px;
          height: 2px;
          background: var(--gradient-gold);
          margin-bottom: 2.5rem;
        }

        .effort-description {
          font-family: var(--font-elegant);
          font-size: 1.3rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
        }

        .effort-description p {
          margin-bottom: 1.5rem;
        }

        .emphasis {
          color: var(--soft-white);
          font-weight: 500;
          font-style: italic;
          border-left: 3px solid var(--rich-red);
          padding-left: 1.5rem;
        }

        .love-stats {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          padding: 2rem;
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          flex: 1;
        }

        .stat-value {
          display: block;
          font-family: var(--font-luxury);
          font-size: 1.8rem;
          color: var(--champagne-gold);
          margin-bottom: 0.3rem;
        }

        .stat-label {
          font-family: var(--font-modern);
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 0.2em;
        }

        .stat-slash {
          width: 1px;
          height: 40px;
          background: rgba(212, 175, 55, 0.2);
        }

        @media (max-width: 968px) {
          .effort-grid { grid-template-columns: 1fr; gap: 4rem; }
          .effort-title { font-size: 2.5rem; }
        }
      `}</style>
        </section>
    );
};

export default EffortOfLove;
