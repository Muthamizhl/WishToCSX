import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sacred-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-wrapper">
        <div className="nav-identity">
          <span className="logo">CSX</span>
          <span className="year">2026</span>
        </div>

        <div className="nav-marquee-belt">
          <span className="marquee-text">Guided by the Star of Bethlehem • Walking in Grace • A Sacred Celebration for Catherine</span>
        </div>

        <div className="nav-meta">
          <div className="connection-status">
            <span className="pulse-orb"></span>
            <span className="label">DIVINE CONNECTION</span>
          </div>
        </div>
      </div>

      <style>{`
        .sacred-navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 3rem;
          z-index: 1000;
          transition: all 0.5s ease;
          color: var(--text-main);
        }

        .sacred-navbar.scrolled {
          padding: 0.8rem 3rem;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(15px);
          border-bottom: 1px solid var(--glass-border);
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
        }

        .nav-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: var(--container-max);
          margin: 0 auto;
        }

        .nav-identity {
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .logo {
          font-family: var(--font-title);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--gold-primary);
          letter-spacing: 0.1em;
        }

        .year {
          font-size: 0.65rem;
          opacity: 0.6;
          letter-spacing: 0.2em;
        }

        .nav-marquee-belt {
          flex: 1;
          margin: 0 3rem;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          opacity: 0.9;
        }

        .marquee-text {
          display: inline-block;
          white-space: nowrap;
          font-size: 0.6rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--text-muted);
          animation: nav-scroll 25s linear infinite;
        }

        @keyframes nav-scroll {
          0% { transform: translateX(50%); }
          100% { transform: translateX(-100%); }
        }

        .connection-status {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 0.8rem;
          background: rgba(0, 0, 0, 0.03);
          border-radius: 20px;
          border: 1px solid var(--glass-border);
        }

        .pulse-orb {
          width: 4px;
          height: 4px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 8px #22c55e;
          animation: orb-pulse 2s infinite;
        }

        @keyframes orb-pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.4); opacity: 0.6; }
            100% { transform: scale(1); opacity: 1; }
        }

        .label {
          font-size: 0.55rem;
          letter-spacing: 0.15em;
          font-weight: 600;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
            .nav-marquee-belt { display: none; }
        }

        @media (max-width: 768px) {
            .sacred-navbar { padding: 1rem 1.5rem; }
            .sacred-navbar.scrolled { padding: 0.8rem 1.5rem; }
            .nav-meta { display: none; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
