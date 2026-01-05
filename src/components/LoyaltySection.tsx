import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LoyaltySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        toggleActions: "play none none none"
      }
    });

    tl.fromTo(mediaRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
    ).fromTo(textRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.2, ease: "power3.out" },
      "-=0.8"
    );
  }, []);

  return (
    <section className="devotion-section" ref={containerRef}>
      <div className="devotion-grid container-luxe">
        <div className="devotion-media" ref={mediaRef}>
          <div className="portrait-frame">
            <img
              src="/src/assets/catherine_loyalty.jpg"
              className="devotion-image"
              alt="Sacred Loyalty"
            />
          </div>
          <div className="devotion-signature-card">
            <span className="sc-label">ESTABLISHED IN LOVE</span>
            <span className="sc-name">Catherine Suji</span>
          </div>
        </div>

        <div className="devotion-content" ref={textRef}>
          <div className="content-eyebrow">
            <span className="diamond-ornament"></span>
            <span className="eyebrow-text">A Promise Beyond Time</span>
          </div>

          <h2 className="content-title">My Heart's <span className="text-gold">Sanctuary</span></h2>

          <div className="content-body">
            <p className="description">
              In a world of constant change, my devotion to you remains the only absolute. It is the compass that guides me through the unknown, and the sanctuary where I find my peace.
            </p>

            <div className="values-stack">
              <div className="value-item luxury-card">
                <div className="v-header">
                  <span className="v-num">01</span>
                  <span className="v-title">Unconditional</span>
                </div>
                <p>My love for you carries no shadows and demands no price. It is as pure as the starlight that watches over us tonight.</p>
              </div>

              <div className="value-item luxury-card">
                <div className="v-header">
                  <span className="v-num">02</span>
                  <span className="v-title">Unwavering</span>
                </div>
                <p>Through every season, my heart stands firm. You are the anchor in my storm and the sunlight in my day.</p>
              </div>
            </div>

            <blockquote className="heart-quote">
              "Every beat of my heart is a tribute to your goodness, and every breath I take is a prayer of gratitude for sharing this life with you."
            </blockquote>
          </div>
        </div>
      </div>

      <style>{`
        .devotion-section {
          padding: var(--section-padding);
          background: var(--bg-deep);
          position: relative;
        }

        .devotion-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          max-width: var(--container-max);
          margin: 0 auto;
        }

        .devotion-media {
          position: relative;
        }

        .portrait-frame {
          position: relative;
          padding: 0.8rem;
          background: linear-gradient(135deg, var(--sacred-rose), transparent);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.06);
          aspect-ratio: 4/5;
        }

        .devotion-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          opacity: 1;
        }

        .devotion-signature-card {
          position: absolute;
          bottom: 2rem;
          right: -2rem;
          background: white;
          padding: 2.5rem 4rem;
          border: 1px solid var(--glass-border);
          box-shadow: 0 20px 50px rgba(0,0,0,0.06);
          text-align: center;
          border-radius: 12px;
        }

        .sc-label {
          display: block;
          font-size: 0.7rem;
          letter-spacing: 0.35em;
          color: var(--sacred-rose);
          margin-bottom: 0.8rem;
          font-weight: 600;
        }

        .sc-name {
          font-family: var(--font-title);
          font-size: 1.5rem;
          letter-spacing: 0.1em;
          font-weight: 700;
          color: var(--text-main);
        }

        .content-eyebrow {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .diamond-ornament {
          width: 10px;
          height: 10px;
          background: var(--sacred-rose);
          transform: rotate(45deg);
        }

        .eyebrow-text {
          font-size: 0.85rem;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 500;
        }

        .content-title {
          font-family: var(--font-title);
          font-size: clamp(2.2rem, 4.5vw, 3.8rem);
          line-height: 1.1;
          margin-bottom: 3rem;
          color: var(--text-main);
        }

        .description {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          line-height: 1.8;
          color: var(--text-muted);
          margin-bottom: 4.5rem;
          font-style: italic;
        }

        .values-stack {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
          margin-bottom: 4.5rem;
        }

        .value-item {
          padding: 2.5rem;
          background: white;
          border-radius: 16px;
          border: 1px solid var(--glass-border);
        }

        .v-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 1.2rem;
        }

        .v-num {
          font-family: var(--font-title);
          font-size: 0.9rem;
          color: var(--sacred-rose);
          opacity: 0.5;
        }

        .v-title {
          font-family: var(--font-title);
          font-size: 1.2rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-main);
        }

        .value-item p {
          font-size: 1rem;
          color: var(--text-muted);
          padding-left: 3rem;
          line-height: 1.6;
        }

        .heart-quote {
          position: relative;
          padding: 3.5rem;
          background: rgba(214, 51, 132, 0.03);
          border-left: 4px solid var(--sacred-rose);
          font-family: var(--font-serif);
          font-size: 1.6rem;
          line-height: 1.6;
          color: var(--text-main);
          font-style: italic;
          border-radius: 0 16px 16px 0;
        }

        @media (max-width: 1200px) {
            .devotion-grid { gap: 4rem; }
            .devotion-signature-card { padding: 2rem; right: 0; }
        }

        @media (max-width: 991px) {
            .devotion-grid { grid-template-columns: 1fr; gap: 6rem; }
            .devotion-image { height: 550px; }
            .devotion-content { order: -1; }
        }

        @media (max-width: 768px) {
            .devotion-section { padding: 4rem 1.5rem; }
            .devotion-signature-card { position: relative; bottom: 0; right: 0; margin-top: -2.5rem; width: 100%; padding: 1.5rem; }
            .sc-name { font-size: 1.2rem; }
            .heart-quote { padding: 2rem; font-size: 1.2rem; width: 100%; border-radius: 12px; }
            .content-title { font-size: 2rem; margin-bottom: 2rem; }
            .description { font-size: 1.1rem; margin-bottom: 3rem; }
            .value-item { padding: 1.5rem; }
            .v-title { font-size: 1rem; }
            .value-item p { padding-left: 0; font-size: 0.95rem; text-align: center; }
            .v-header { justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default LoyaltySection;
