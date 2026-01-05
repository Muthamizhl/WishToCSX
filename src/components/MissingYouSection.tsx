import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MissingYouSection = () => {
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
      { opacity: 0, scale: 0.9, x: -50 },
      { opacity: 1, scale: 1, x: 0, duration: 2, ease: "power4.out" }
    ).fromTo(textRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power4.out" },
      "-=1.2"
    );
  }, []);

  const thingsIMiss = [
    { label: "THE RADIANCE", title: "Your Smile", desc: "A light so pure it turns the coldest winter into a sanctuary of warmth and endless hope." },
    { label: "THE ESSENCE", title: "Your Presence", desc: "The quiet gravity of your soul that brings peace to my world and makes every second meaningful." },
    { label: "THE MELODY", title: "Your Voice", desc: "A symphony of kindness that resonates in my heart, guiding me with its gentle wisdom." },
    { label: "THE LIGHT", title: "Your Spirit", desc: "The invisible grace that dances in your eyes, a constant reminder of the beauty in this world." }
  ];

  return (
    <section className="missing-luxe-section" ref={containerRef}>
      <div className="container-luxe">
        <div className="missing-grid">
          <div className="missing-media" ref={mediaRef}>
            <div className="portrait-frame">
              <img
                src="/src/assets/catherine_missing.png"
                alt="Sacred Remembrance"
                className="portrait-img"
              />
              <div className="luxe-mist"></div>
            </div>
            <div className="floating-title">Your Light Illuminates My World</div>
          </div>

          <div className="missing-text" ref={textRef}>
            <div className="sc-badge">A CELEBRATION OF YOUR RADIANCE</div>
            <h2 className="sc-title">Every Moment With You Is A <span className="text-gold">Sacred Blessing</span></h2>
            <div className="sc-divider"></div>

            <div className="longing-grid">
              {thingsIMiss.map((item, i) => (
                <div key={i} className="longing-card luxury-card">
                  <div className="card-top">
                    <span className="card-label">
                      <span className="heart-mini">❤</span>
                      {item.label}
                    </span>
                    <span className="card-idx">0{i + 1}</span>
                  </div>
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="final-poetic">
              <p>"Your love is the anchor that holds me, and your presence is the light that guides me home."</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .missing-luxe-section {
          padding: 8rem 1.5rem;
          background: transparent;
          position: relative;
          overflow: hidden;
        }

        .missing-grid {
          display: grid;
          grid-template-columns: 1fr 1fr; /* Equal grid for better balance */
          gap: 6rem;
          align-items: center;
          max-width: var(--container-max);
          margin: 0 auto;
        }

        .missing-media {
          position: relative;
          width: 100%;
        }

        .portrait-frame {
          position: relative;
          aspect-ratio: 4/5;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.04);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
        }

        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 1;
          transition: transform 3s ease;
        }

        .luxe-mist {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 40%);
        }

        .floating-title {
          position: absolute;
          bottom: 2rem;
          left: -2rem;
          background: white;
          color: var(--sacred-rose);
          padding: 1.5rem 2.5rem;
          font-family: var(--font-title);
          font-size: 0.85rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          font-weight: 700;
          z-index: 5;
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          border-radius: 8px;
          border: 1px solid var(--glass-border);
        }

        .sc-badge {
            font-size: 0.75rem;
            letter-spacing: 0.4em;
            color: var(--sacred-rose);
            margin-bottom: 2rem;
            display: block;
            font-weight: 600;
        }

        .sc-title {
          font-family: var(--font-title);
          font-size: clamp(2.2rem, 4vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 3rem;
          color: var(--text-main);
        }

        .sc-divider {
            width: 80px;
            height: 1px;
            background: var(--gold-primary);
            margin-bottom: 4rem;
            opacity: 0.2;
        }

        .longing-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 1200px) {
            .longing-grid {
                grid-template-columns: 1fr 1fr;
            }
        }

        .longing-card {
          padding: 2.5rem;
          border-radius: 20px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          background: white;
          border: 1px solid var(--glass-border);
          height: 100%; /* Ensure match height */
        }

        .card-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .card-label {
            font-size: 0.65rem;
            letter-spacing: 0.3em;
            color: var(--text-dim);
            text-transform: uppercase;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .heart-mini { color: var(--sacred-rose); opacity: 0.6; }

        .card-idx {
            font-family: var(--font-title);
            font-size: 1.2rem;
            color: var(--gold-primary);
            opacity: 0.1;
        }

        .card-title {
          font-family: var(--font-title);
          font-size: 1.5rem;
          color: var(--text-main);
          margin-bottom: 0.8rem;
          letter-spacing: 0.02em;
        }

        .card-desc {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          line-height: 1.5;
          color: var(--text-muted);
          font-style: italic;
        }

        .longing-card:hover {
          transform: translateX(10px);
          border-color: var(--sacred-rose);
          box-shadow: 0 15px 35px rgba(0,0,0,0.03);
        }

        .final-poetic {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            color: var(--text-muted);
            font-style: italic;
            border-left: 3px solid var(--sacred-rose);
            padding-left: 2rem;
            opacity: 0.9;
            line-height: 1.5;
        }

        @media (max-width: 1200px) {
            .missing-grid { gap: 4rem; }
        }

        @media (max-width: 1024px) {
            .missing-grid { grid-template-columns: 1fr; gap: 6rem; }
            .missing-media { max-width: 550px; margin: 0 auto; }
            .floating-title { left: 0; bottom: -1rem; }
        }

        @media (max-width: 768px) {
            .sc-title { font-size: 2rem; }
            .longing-card { padding: 2rem; }
            .card-title { font-size: 1.4rem; }
            .card-desc { font-size: 1.1rem; }
            .missing-grid { gap: 4rem; }
        }
      `}</style>
    </section>
  );
};

export default MissingYouSection;
