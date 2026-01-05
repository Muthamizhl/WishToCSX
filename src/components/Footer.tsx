const Footer = () => {
   return (
      <footer className="footer-sacred-final">
         <div className="container-luxe">
            <div className="footer-blessing-wrap">
               <div className="final-blessing-card luxury-card">
                  <div className="blessing-ornament top">✵</div>
                  <span className="blessing-eyebrow">A SACRED BENEDICTION</span>
                  <h3 className="blessing-headline">The Grace of <span className="text-gold">Eternal Support</span></h3>
                  <p className="blessing-paragraph">
                     To Catherine: Unnaiye eppavume Jesus bless pannitey iruparu. May His peace be your constant companion, and may your journey in 2026 be paved with health and the highest goodness. Remember, un kooda eppayum naa iruppan—I am always with you, respecting your light and celebrating your soul.
                  </p>
                  <div className="blessing-ornament bottom">✵</div>
               </div>
            </div>

            <div className="footer-main-identity">
               <h2 className="footer-name-logo">Catherine Suji Xavier</h2>
               <p className="footer-tagline">Respect | Devotion | Eternal Light</p>

               <div className="footer-divider-luxe">
                  <span className="d-line"></span>
                  <span className="d-star">✵</span>
                  <span className="d-line"></span>
               </div>

               <div className="footer-credits">
                  <p className="copyright">© 2026 • SACRED DEVOTION</p>
                  <p className="handcrafted">HANDCRAFTED UNDER THE STARS</p>
               </div>

               <div className="deep-emotion-ps">
                  <p className="emotion-quote">"i miss you more than i love you"</p>
                  <span className="emotion-sig">— Tamil</span>
               </div>
            </div>
         </div>

         <style>{`
         .footer-sacred-final {
           padding: 8rem 1.5rem 5rem;
           background: var(--bg-deep);
           color: var(--text-main);
           position: relative;
           border-top: 1px solid var(--glass-border);
         }

         .final-blessing-card {
            padding: 5rem 3rem;
            text-align: center;
            max-width: 800px;
            margin: 0 auto 8rem;
            position: relative;
            background: white;
         }

         .blessing-ornament {
             font-size: 1.2rem;
             color: var(--gold-primary);
             opacity: 0.4;
             position: absolute;
             left: 50%;
             transform: translateX(-50%);
         }

         .blessing-ornament.top { top: 2.5rem; }
         .blessing-ornament.bottom { bottom: 2.5rem; }

         .blessing-eyebrow {
             font-size: 0.6rem;
             letter-spacing: 0.4em;
             color: var(--text-dim);
             text-transform: uppercase;
             margin-bottom: 2rem;
             display: block;
         }

         .blessing-headline {
             font-family: var(--font-title);
             font-size: clamp(1.8rem, 3.5vw, 2.8rem);
             margin-bottom: 2.5rem;
             color: var(--text-main);
         }

         .blessing-paragraph {
             font-family: var(--font-serif);
             font-size: clamp(1.1rem, 1.8vw, 1.4rem);
             line-height: 1.6;
             color: var(--text-muted);
             font-style: italic;
             max-width: 700px;
             margin: 0 auto;
         }

         .footer-main-identity {
             text-align: center;
         }

         .footer-name-logo {
             font-family: var(--font-title);
             font-size: clamp(2rem, 4vw, 3rem);
             margin-bottom: 0.8rem;
             letter-spacing: 0.05em;
             color: var(--text-main);
         }

         .footer-tagline {
             font-family: var(--font-serif);
             font-size: 1.1rem;
             color: var(--gold-primary);
             margin-bottom: 4rem;
             font-style: italic;
             opacity: 0.8;
         }

         .footer-divider-luxe {
             display: flex;
             align-items: center;
             justify-content: center;
             gap: 2rem;
             margin-bottom: 4rem;
         }

         .d-line {
             width: 80px;
             height: 1px;
             background: var(--gold-primary);
             opacity: 0.2;
         }

         .d-star {
             color: var(--gold-primary);
             font-size: 1rem;
         }

         .footer-credits {
             display: flex;
             flex-direction: column;
             gap: 0.8rem;
             font-size: 0.6rem;
             letter-spacing: 0.3em;
             text-transform: uppercase;
             opacity: 0.5;
         }

         .handcrafted {
             color: var(--gold-primary);
         }

         .deep-emotion-ps {
            margin-top: 5rem;
            padding-top: 3rem;
            border-top: 1px solid var(--glass-border);
            opacity: 0.8;
         }

         .emotion-quote {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            color: var(--text-main);
            font-style: italic;
            margin-bottom: 1rem;
         }

         .emotion-sig {
            font-family: var(--font-title);
            font-size: 0.7rem;
            letter-spacing: 0.4em;
            color: var(--sacred-rose);
            text-transform: uppercase;
         }

         @media (max-width: 768px) {
             .footer-sacred-final { padding: 5rem 1rem; }
             .final-blessing-card { padding: 3.5rem 1.5rem; margin-bottom: 5rem; }
             .blessing-headline { font-size: 1.8rem; }
             .d-line { width: 40px; }
             .footer-tagline { margin-bottom: 2.5rem; }
             .emotion-quote { font-size: 1.2rem; }
         }
       `}</style>
      </footer>
   );
};

export default Footer;
