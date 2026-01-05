import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Heart, Stars, Sparkles, Anchor } from 'lucide-react';

const WishSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll('.ethereal-wish-card');
    gsap.fromTo(items,
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  const wishes = [
    { icon: Stars, title: "Eternal Blessing", text: "Unnaiye eppavume Jesus bless pannitey iruparu—may His divine light always protect and guide your beautiful soul." },
    { icon: Heart, title: "Infinite Goodness", text: "Nee nalla irukanum—my deepest respect and only wish is to see you flourish in health, peace, and eternal joy." },
    { icon: Anchor, title: "Constant Presence", text: "Un kooda eppayum naa iruppan—know that in every moment of 2026, my spirit and devotion are walking right beside you." },
    { icon: Sparkles, title: "Respectful Longing", text: "I miss you more than I love you, with a depth of respect that honors the sacred bond of our souls." }
  ];

  return (
    <section className="ethereal-wish-section" ref={containerRef}>
      <div className="container-luxe">
        <div className="wish-header">
          <span className="luxe-eyebrow">A CIRCLE OF BLESSINGS</span>
          <h2 className="section-title">My <span className="text-gold">Heart's</span> Desire</h2>
          <div className="title-divider"></div>
        </div>

        <div className="ethereal-wish-grid">
          {wishes.map((wish, index) => (
            <div key={index} className="ethereal-wish-card luxury-card">
              <div className="wish-icon-wrapper">
                <wish.icon size={30} className="wish-svg" strokeWidth={1.5} />
              </div>
              <h3 className="wish-title">{wish.title}</h3>
              <p className="wish-text">{wish.text}</p>
              <div className="card-heart">❤</div>
              <div className="wish-gloss"></div>
            </div>
          ))}
        </div>

        <div className="wish-final-note">
          <p className="final-quote">"Everything I am, and everything I ever will be, is a reflection of the love you give."</p>
          <div className="final-signature">— For Catherine Suji</div>
        </div>
      </div>

      <style>{`
        .ethereal-wish-section {
          padding: var(--section-padding);
          background: transparent;
          position: relative;
        }

        .wish-header {
          text-align: center;
          margin-bottom: 7rem;
        }

        .luxe-eyebrow {
            font-size: 0.7rem;
            letter-spacing: 0.5em;
            color: var(--sacred-rose);
            margin-bottom: 2rem;
            display: block;
            font-weight: 500;
        }

        .title-divider {
            width: 80px;
            height: 1px;
            background: var(--gold-primary);
            margin: 2.5rem auto 0;
            opacity: 0.2;
        }

        .ethereal-wish-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 3rem;
          margin-bottom: 8rem;
          align-items: stretch;
        }

        @media (min-width: 991px) {
            .ethereal-wish-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1200px) {
            .ethereal-wish-grid { grid-template-columns: repeat(4, 1fr); }
        }

        .ethereal-wish-card {
          padding: 5rem 2.5rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          background: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .wish-icon-wrapper {
          margin-bottom: 2.5rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 1px solid var(--glass-border);
          background: radial-gradient(circle, rgba(214, 51, 132, 0.05) 0%, transparent 70%);
          transition: all 0.5s ease;
          align-self: center;
        }

        .wish-svg {
          color: var(--sacred-rose);
        }

        .ethereal-wish-card:hover {
          transform: translateY(-15px);
          border-color: var(--sacred-rose);
          box-shadow: 0 40px 80px rgba(0,0,0,0.06);
        }

        .ethereal-wish-card:hover .wish-icon-wrapper {
          border-color: var(--sacred-rose);
          box-shadow: 0 0 30px rgba(214, 51, 132, 0.15);
          transform: scale(1.1);
        }

        .wish-title {
          font-family: var(--font-title);
          font-size: 1.5rem;
          color: var(--text-main);
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }

        .wish-text {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          line-height: 1.7;
          color: var(--text-muted);
          font-style: italic;
        }

        .card-heart {
            margin-top: 1.5rem;
            color: var(--sacred-rose);
            font-size: 1rem;
            opacity: 0.3;
        }

        .wish-gloss {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(214, 51, 132, 0.03) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.8s ease;
        }

        .ethereal-wish-card:hover .wish-gloss {
          transform: translateX(100%);
        }

        .wish-final-note {
           text-align: center;
           max-width: 850px;
           margin: 0 auto;
           padding-top: 6rem;
           border-top: 1px solid var(--glass-border);
        }

        .final-quote {
           font-family: var(--font-serif);
           font-size: clamp(1.4rem, 2.8vw, 2.2rem);
           color: var(--text-main);
           font-style: italic;
           line-height: 1.5;
           margin-bottom: 2.5rem;
        }

        .final-signature {
            font-size: 0.85rem;
            letter-spacing: 0.4em;
            text-transform: uppercase;
            color: var(--sacred-rose);
            opacity: 0.8;
            font-weight: 600;
        }

        @media (max-width: 768px) {
           .wish-header { margin-bottom: 5rem; }
           .ethereal-wish-grid { gap: 2rem; }
           .ethereal-wish-card { padding: 3.5rem 2rem; }
           .final-quote { font-size: 1.3rem; }
        }
      `}</style>
    </section>
  );
};

export default WishSection;
