import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FamilyWishes = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.fromTo(card,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none"
          },
          delay: index * 0.1
        }
      );
    });
  }, []);

  const familyMembers = [
    {
      role: "Dad",
      title: "The Pillar of Faith",
      message: "To your Father: May his year be filled with the same unwavering peace he has siempre provided for you. He is the guardian of the beautiful character you possess today.",
      icon: "🤴"
    },
    {
      role: "Mom",
      message: "To your Mother: A true reflection of grace and warmth. May her path be filled with the same tenderness she has always poured into your soul.",
      title: "The Heart of Grace",
      icon: "🕊"
    },
    {
      role: "Brother",
      title: "The Shield of Strength",
      message: "To your Brother: May his path be guided by courage and success, mirroring the steadfast bond and strength he shares with you as family.",
      icon: "⚔"
    },
    {
      role: "Suji Family",
      title: "The Eternal Circle",
      message: "To your extended Kin: May your legacy be blessed with abundance and unity, celebrating the beautiful love that binds every generation together.",
      icon: "🏠"
    }
  ];

  return (
    <section className="sacred-family-section" ref={sectionRef}>
      <div className="container-luxe">
        <div className="sacred-header">
          <span className="badge">A DIVINE BOND</span>
          <h2 className="section-title">Honoring Your <span className="text-gold">Legacy</span></h2>
          <p className="section-desc">Blessings for those who mirror the love of the Holy Family in your life.</p>
        </div>

        <div className="sacred-grid">
          {familyMembers.map((member, index) => (
            <div
              key={index}
              className="sacred-jewel-card luxury-card"
              ref={el => { cardsRef.current[index] = el; }}
            >
              <div className="jewel-icon-wrap">
                <span className="icon">{member.icon}</span>
              </div>

              <div className="member-info">
                <span className="role">{member.role}</span>
                <h3 className="title">{member.title}</h3>
              </div>

              <div className="divider-line"></div>

              <p className="message">{member.message}</p>

              <div className="card-ornament">✵</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
                .sacred-family-section {
                    padding: 6rem 1.5rem;
                    background: transparent;
                    position: relative;
                }

                .sacred-header {
                    text-align: center;
                    margin-bottom: 5rem;
                }

                .badge {
                    font-size: 0.6rem;
                    letter-spacing: 0.4em;
                    color: var(--gold-primary);
                    opacity: 0.7;
                    text-transform: uppercase;
                }

                .section-title {
                    font-family: var(--font-title);
                    font-size: clamp(1.8rem, 4vw, 2.8rem);
                    margin: 1rem 0;
                    color: var(--text-main);
                }

                .section-desc {
                    font-family: var(--font-serif);
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    font-style: italic;
                    max-width: 500px;
                    margin: 0 auto;
                }

                .sacred-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 2rem;
                }

                @media (min-width: 991px) {
                    .sacred-grid { grid-template-columns: repeat(2, 1fr); }
                }

                @media (min-width: 1200px) {
                    .sacred-grid { grid-template-columns: repeat(4, 1fr); }
                }

                .sacred-jewel-card {
                    padding: 3.5rem 2rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    position: relative;
                    background: white;
                }

                .jewel-icon-wrap {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    border: 1px solid var(--glass-border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 2rem;
                    background: rgba(180, 83, 9, 0.05);
                }

                .icon { font-size: 2rem; color: var(--gold-primary); opacity: 0.9; }

                .role {
                    display: block;
                    font-size: 0.65rem;
                    letter-spacing: 0.3em;
                    color: var(--gold-primary);
                    text-transform: uppercase;
                    margin-bottom: 0.5rem;
                }

                .title {
                    font-family: var(--font-title);
                    font-size: 1.4rem;
                    margin-bottom: 1.5rem;
                    color: var(--text-main);
                }

                .divider-line {
                    width: 30px;
                    height: 1px;
                    background: var(--gold-primary);
                    margin-bottom: 1.5rem;
                    opacity: 0.3;
                }

                .message {
                    font-family: var(--font-serif);
                    font-size: 1.1rem;
                    line-height: 1.6;
                    color: var(--text-muted);
                    font-style: italic;
                }

                .card-ornament {
                    margin-top: 2rem;
                    color: var(--gold-primary);
                    font-size: 1rem;
                    opacity: 0.3;
                }

                @media (max-width: 768px) {
                    .sacred-grid { grid-template-columns: 1fr; }
                    .sacred-jewel-card { padding: 3rem 1.5rem; }
                    .message { font-size: 1rem; }
                }
            `}</style>
    </section>
  );
};

export default FamilyWishes;
