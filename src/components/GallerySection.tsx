import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray<HTMLElement>('.cinematic-item');

    items.forEach((item, index) => {
      gsap.fromTo(item,
        { opacity: 0, scale: 0.95, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          delay: (index % 2) * 0.1
        }
      );
    });
  }, []);

  const galleryItems = [
    {
      title: "Radiant Beauty",
      context: "Heart's Reflection",
      quote: "The beauty you possess isn't just in your smile, but in the warmth and light you bring to every soul you encounter.",
      large: true
    },
    {
      title: "Gentle Kindness",
      context: "Soulful Grace",
      quote: "Your heart is a sanctuary of compassion, and your gentleness is a quiet strength that inspires everyone around you.",
      large: false
    },
    {
      title: "Soulful Serenity",
      context: "Inner Peace",
      quote: "In your presence, I find a peaceful sanctuary where every worry fades and every moment feels like a sacred blessing.",
      large: false
    },
    {
      title: "Enduring Light",
      context: "Constant Hope",
      quote: "You are a testament to the goodness in the world, a constant light that illuminates the path for everyone you love.",
      large: true
    }
  ];

  return (
    <section className="sacred-gallery-section" ref={sectionRef}>
      <div className="container-luxe">
        <div className="gallery-intro">
          <span className="sc-label">A SACRED VISUAL CELEBRATION</span>
          <h2 className="section-title">The <span className="text-gold">Beauty</span> of Your Spirit</h2>
          <div className="title-ornament">
            <span className="line"></span>
            <span className="star">✱</span>
            <span className="line"></span>
          </div>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="cinematic-item">
              <div className="sacred-card luxury-card">
                <div className="media-placeholder">
                  <span className="placeholder-icon">✵</span>
                  <div className="card-badge">{item.context}</div>
                </div>
                <div className="card-text">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-quote">{item.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .sacred-gallery-section {
          padding: 6rem 1.5rem;
          background: transparent;
        }

        .gallery-intro {
          text-align: center;
          margin-bottom: 5rem;
        }

        .sc-label {
            font-size: 0.6rem;
            letter-spacing: 0.5em;
            color: var(--text-dim);
            text-transform: uppercase;
        }

        .section-title {
            font-family: var(--font-title);
            font-size: clamp(1.8rem, 4vw, 2.8rem);
            margin-top: 1rem;
            color: var(--text-main);
        }

        .title-ornament {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-top: 1.5rem;
        }

        .title-ornament .line { width: 30px; height: 1px; background: var(--gold-primary); opacity: 0.2; }
        .title-ornament .star { color: var(--gold-primary); font-size: 1rem; }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem; /* Increased gap */
        }

        .sacred-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 20px; /* Softer corners */
          background: white;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          border: 1px solid var(--glass-border);
        }

        .cinematic-item {
            height: 420px;
        }

        .media-placeholder {
          position: relative;
          height: 180px;
          background: rgba(175, 135, 77, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--glass-border);
        }

        .placeholder-icon {
            font-size: 2.5rem;
            color: var(--gold-primary);
            opacity: 0.2;
        }

        .card-badge {
            position: absolute;
            top: 1.5rem;
            right: 1.5rem;
            padding: 0.5rem 1.2rem;
            background: white;
            border: 1px solid var(--glass-border);
            font-size: 0.6rem;
            letter-spacing: 0.25em;
            color: var(--sacred-rose);
            text-transform: uppercase;
            border-radius: 30px;
            font-weight: 600;
        }

        .card-text {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          background: white;
        }

        .card-title {
            font-family: var(--font-title);
            font-size: 1.2rem;
            color: var(--text-main);
            letter-spacing: 0.05em;
        }

        .card-quote {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          line-height: 1.5;
          color: var(--text-muted);
          font-style: italic;
        }

        .sacred-card:hover .card-img {
          transform: scale(1.08);
        }

        .sacred-card:hover {
            border-color: var(--sacred-rose);
        }

        @media (max-width: 768px) {
            .gallery-grid { grid-template-columns: 1fr; }
            .cinematic-item { height: 420px; }
            .card-text { padding: 1.5rem; }
            .card-quote { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
