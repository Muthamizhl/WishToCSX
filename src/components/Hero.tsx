import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.6 });

    tl.fromTo(badgeRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1.2, ease: "back.out(1.7)" }
    )
      .fromTo(titleRef.current,
        { opacity: 0, filter: 'blur(20px)', y: 30 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.5, ease: "power4.out" },
        "-=0.6"
      )
      .fromTo(paraRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        "-=0.8"
      );

    // Hero Confetti Upward Flow
    const confetti = containerRef.current?.querySelectorAll('.hero-confetti-piece');
    confetti?.forEach((c) => {
      gsap.set(c, { y: '110vh' }); // Start below
      gsap.to(c, {
        y: '-20vh', // Flow to top
        x: `+=${gsap.utils.random(-150, 150)}`,
        rotation: gsap.utils.random(0, 720),
        duration: gsap.utils.random(8, 15),
        repeat: -1,
        ease: "none",
        delay: gsap.utils.random(0, 15)
      });
    });
  }, []);

  return (
    <section className="sacred-hero" ref={containerRef}>
      <div className="hero-bg-layer">
        <div className="hero-overlay"></div>
        {/* Upward Flowing Golden Party Paper */}
        <div className="hero-confetti-container">
          {[...Array(30)].map((_, i) => (
            <div
              key={`h-confetti-${i}`}
              className="hero-confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 4 + 2}px`,
                background: i % 2 === 0 ? 'var(--gold-primary)' : 'var(--sacred-rose)',
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <div className="sacred-badge" ref={badgeRef}>
          <span className="dot"></span>
          <span className="badge-txt">A Sacred Celebration for Catherine</span>
          <span className="dot"></span>
        </div>

        <h1 className="sacred-title" ref={titleRef}>
          A Sacred Blessing for <span className="text-gold">Catherine</span>
          <br />
          <span className="subtitle">In Every Prayer, <span className="text-love">I Am Always With You</span></span>
        </h1>

        <div className="sacred-divider">
          <span className="line"></span>
          <span className="ornament heart">❤</span>
          <span className="ornament">✵</span>
          <span className="ornament heart">❤</span>
          <span className="line"></span>
        </div>

        <p className="sacred-quote" ref={paraRef}>
          “May the Lord Jesus always bless you with infinite grace. Nee nalla irukanum—I wish for you only the greatest health and joy. Know that wherever life leads, I am always with you in spirit and devotion.”
        </p>

        <div className="hero-scroll-invite">
          <div className="scroll-bar"></div>
          <span className="scroll-lbl">Descend into our Sacred Journey</span>
        </div>
      </div>

      <style>{`
                .sacred-hero {
                    min-height: 100vh;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    padding: 8rem 0;
                }

                .hero-bg-layer {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    background: var(--bg-deep);
                }

                .hero-overlay {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, transparent 0%, rgba(253, 250, 247, 0.4) 100%);
                    z-index: 2;
                }

                .hero-confetti-container {
                    position: absolute;
                    inset: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    pointer-events: none;
                }

                .hero-confetti-piece {
                    position: absolute;
                    border-radius: 1px;
                }

                .hero-content {
                    position: relative;
                    z-index: 10;
                    text-align: center;
                    width: 90%;
                    max-width: 1000px;
                }

                .sacred-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2.5rem;
                    padding: 0.6rem 1.5rem;
                    background: white;
                    border: 1px solid var(--glass-border);
                    border-radius: 40px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
                }

                .sacred-badge .dot {
                    width: 5px;
                    height: 5px;
                    background: var(--sacred-rose);
                    border-radius: 50%;
                }

                .badge-txt {
                    font-size: 0.7rem;
                    letter-spacing: 0.35em;
                    text-transform: uppercase;
                    color: var(--text-main);
                    font-weight: 500;
                }

                .sacred-title {
                    font-family: var(--font-title);
                    font-size: clamp(2.5rem, 6vw, 4.8rem);
                    line-height: 1.1;
                    margin-bottom: 2rem;
                    color: var(--text-main);
                }

                .sacred-title .subtitle {
                    font-size: clamp(1rem, 3vw, 2rem);
                    font-weight: 400;
                    letter-spacing: 0.15em;
                    color: var(--text-muted);
                    display: block;
                    margin-top: 1rem;
                }

                .text-love {
                    color: var(--sacred-rose);
                    font-style: italic;
                }

                .sacred-divider {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 3.5rem;
                }

                .sacred-divider .line {
                    width: 80px;
                    height: 1px;
                    background: var(--gold-primary);
                    opacity: 0.2;
                }

                .sacred-divider .ornament {
                    color: var(--gold-primary);
                    font-size: 1.5rem;
                }

                .sacred-divider .heart {
                    color: var(--sacred-rose);
                    font-size: 1.2rem;
                    opacity: 0.8;
                }

                .sacred-quote {
                    font-family: var(--font-serif);
                    font-size: clamp(1.2rem, 2vw, 1.7rem);
                    line-height: 1.6;
                    color: var(--text-muted);
                    font-style: italic;
                    max-width: 750px;
                    margin: 0 auto;
                }

                .hero-scroll-invite {
                    position: absolute;
                    bottom: -10vh;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }

                .scroll-bar {
                    width: 1px;
                    height: 50px;
                    background: linear-gradient(to bottom, var(--gold-primary), transparent);
                    animation: bar-reveal 3s infinite;
                }

                @keyframes bar-reveal {
                    0% { transform: scaleY(0); transform-origin: top; }
                    50% { transform: scaleY(1); transform-origin: top; }
                    51% { transform-origin: bottom; }
                    100% { transform: scaleY(0); transform-origin: bottom; }
                }

                .scroll-lbl {
                    font-size: 0.6rem;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: var(--text-dim);
                }

                @media (max-width: 768px) {
                    .hero-content { width: 100%; padding: 0 1rem; }
                    .sacred-divider .line { width: 30px; }
                    .sacred-hero { min-height: 80vh; padding: 6rem 0; }
                    .hero-scroll-invite { position: relative; bottom: 0; margin-top: 3rem; }
                    .sacred-title { font-size: 2.2rem; }
                    .sacred-title .subtitle { font-size: 1.1rem; }
                    .sacred-quote { font-size: 1.1rem; line-height: 1.5; }
                }
            `}</style>
    </section>
  );
};

export default Hero;
