import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const MessageSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(textRef.current,
      { opacity: 0, filter: 'blur(10px)' },
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        }
      }
    );
  }, []);

  return (
    <section className="sacred-message-section" ref={containerRef}>
      <div className="sacred-message-content" ref={textRef}>
        <div className="luxe-letter-case luxury-card">
          <div className="letter-header">
            <span className="star-ornament">✵</span>
            <span className="header-tag">A Sacred Epistle</span>
            <span className="star-ornament">✵</span>
          </div>

          <h2 className="letter-headline">May the Grace of Jesus <span className="text-gold">Shield You Always</span></h2>

          <div className="letter-body">
            <p>
              Catherine, in every prayer, I ask for your well-being. Nee nalla irukanum—you should always be happy and healthy. No matter where you are, unnaiye eppavume Jesus bless pannitey iruparu; His light is your constant guide.
            </p>
            <p>
              I want you to know that un kooda eppayum naa iruppan. I am always with you, supporting your dreams and celebrating the goodness you bring to this world. I missing your presence with the highest respect.
            </p>
            <p className="letter-climax">
              "Your peace is my priority, and your happiness is my greatest blessing."
            </p>
            <p>
              May 2026 be a year where you feel His divine hand in everything you do. I will always be here, your faithful companion in spirit.
            </p>
          </div>

          <div className="letter-signature">
            <span className="sig-pre">With Divine Devotion,</span>
            <span className="sig-post">Your Faithful Companion</span>
          </div>
        </div>
      </div>

      <style>{`
        .sacred-message-section {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          position: relative;
          padding: 6rem 1.5rem;
        }

        .sacred-message-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 800px;
        }

        .luxe-letter-case {
           padding: 4rem 3rem;
           text-align: center;
           background: white;
        }

        .letter-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2.5rem;
        }

        .header-tag {
            font-size: 0.6rem;
            letter-spacing: 0.4em;
            text-transform: uppercase;
            color: var(--gold-primary);
            opacity: 0.8;
        }

        .star-ornament {
            color: var(--gold-primary);
            font-size: 1.2rem;
            opacity: 0.4;
        }

        .letter-headline {
           font-family: var(--font-title);
           font-size: clamp(1.8rem, 3.5vw, 2.8rem);
           margin-bottom: 3rem;
           color: var(--text-main);
        }

        .letter-body {
           font-family: var(--font-serif);
           font-size: clamp(1.1rem, 1.8vw, 1.4rem);
           line-height: 1.7;
           color: var(--text-muted);
           font-style: italic;
           max-width: 650px;
           margin: 0 auto;
        }

        .letter-body p {
           margin-bottom: 2.5rem;
        }

        .letter-climax {
           color: var(--text-main);
           font-size: clamp(1.2rem, 2vw, 1.8rem);
           font-weight: 500;
           padding: 2.5rem 0;
           border-top: 1px solid var(--glass-border);
           border-bottom: 1px solid var(--glass-border);
           line-height: 1.4;
        }

        .letter-signature {
           margin-top: 4rem;
           display: flex;
           flex-direction: column;
           gap: 0.5rem;
        }

        .sig-pre {
           font-family: var(--font-serif);
           font-size: 1.1rem;
           color: var(--gold-primary);
        }

        .sig-post {
           font-family: var(--font-title);
           font-size: 0.75rem;
           letter-spacing: 0.3em;
           color: var(--text-dim);
           text-transform: uppercase;
        }

        @media (max-width: 768px) {
           .sacred-message-section { padding: 4rem 1rem; }
           .luxe-letter-case { padding: 3rem 1.5rem; }
           .letter-body { line-height: 1.6; }
        }
      `}</style>
    </section>
  );
};

export default MessageSection;
