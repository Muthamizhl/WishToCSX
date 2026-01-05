import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import CelebrationOverlay from './CelebrationOverlay';

interface LockerProps {
  onUnlock: () => void;
}

const Locker = ({ onUnlock }: LockerProps) => {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    ).fromTo(cardRef.current,
      { scale: 1.1, opacity: 0, filter: "blur(20px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 2, ease: "expo.out" },
      "-=0.5"
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const key = passcode.toLowerCase().trim();
    if (key === 'einestin') {
      setShowCelebration(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 800);
      setPasscode('');
    }
  };

  if (showCelebration) {
    return <CelebrationOverlay onComplete={onUnlock} />;
  }

  return (
    <div className="sacred-locker" ref={containerRef}>
      <div className="locker-background"></div>

      <div className={`locker-card-wrap ${error ? 'shake' : ''}`} ref={cardRef}>
        <div className="locker-inner luxury-card">
          <div className="badge">A SACRED JOURNEY</div>
          <h1 className="title">Opening the <span className="text-love">Heart</span></h1>

          <div className="divider">
            <span className="line"></span>
            <span className="star-heart">❤</span>
            <span className="star">✵</span>
            <span className="star-heart">❤</span>
            <span className="line"></span>
          </div>

          <p className="description">
            “The star led them to the light, and love leads me to you.”
            <br />
            <span className="hint">The word is 'EINESTIN'.</span>
          </p>

          <form onSubmit={handleSubmit} className="entry-form">
            <div className="input-field">
              <input
                type="text"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="ENTER THE KEY..."
                className="styled-input"
              />
              <div className="focal-line"></div>
            </div>

            <button type="submit" className="unlock-btn">
              UNVEIL THE SPIRIT
            </button>
          </form>
        </div>
      </div>

      <style>{`
                .sacred-locker {
                    position: fixed;
                    inset: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--bg-deep);
                    z-index: 2000;
                }

                .locker-background {
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at center, rgba(251, 191, 36, 0.15) 0%, transparent 60%);
                }

                .locker-card-wrap {
                    width: 90%;
                    max-width: 500px;
                    position: relative;
                    z-index: 10;
                }

                .locker-inner {
                    padding: 4rem 2.5rem;
                    text-align: center;
                    background: white;
                }

                .badge {
                    font-size: 0.6rem;
                    letter-spacing: 0.5em;
                    color: var(--text-dim);
                    margin-bottom: 2rem;
                }

                .title {
                    font-family: var(--font-title);
                    font-size: clamp(1.8rem, 4vw, 2.8rem);
                    margin-bottom: 2.5rem;
                    color: var(--text-main);
                }

                .text-love {
                    color: var(--sacred-rose);
                    font-style: italic;
                }

                .divider {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1.2rem;
                    margin-bottom: 3rem;
                }

                .divider .line { width: 50px; height: 1px; background: var(--gold-primary); opacity: 0.2; }
                .divider .star { color: var(--gold-primary); font-size: 1.4rem; }
                .divider .star-heart { color: var(--sacred-rose); font-size: 1rem; opacity: 0.7; }

                .description {
                    font-family: var(--font-serif);
                    font-size: 1.2rem;
                    line-height: 1.6;
                    color: var(--text-muted);
                    font-style: italic;
                    margin-bottom: 4rem;
                }

                .hint {
                    display: block;
                    margin-top: 1rem;
                    font-size: 0.65rem;
                    font-family: var(--font-sans);
                    font-style: normal;
                    letter-spacing: 0.2em;
                    color: var(--gold-primary);
                    opacity: 0.7;
                }

                .entry-form {
                    display: flex;
                    flex-direction: column;
                    gap: 3rem;
                }

                .input-field { position: relative; }

                .styled-input {
                    width: 100%;
                    background: transparent;
                    border: none;
                    text-align: center;
                    padding: 1rem;
                    color: var(--text-main);
                    font-family: var(--font-title);
                    letter-spacing: 0.3em;
                    outline: none;
                    font-size: 0.9rem;
                }

                .focal-line {
                    height: 1px;
                    background: linear-gradient(to right, transparent, var(--gold-primary), transparent);
                    opacity: 0.3;
                }

                .unlock-btn {
                    padding: 1.2rem;
                    background: var(--gold-primary);
                    color: #fff;
                    border: none;
                    font-family: var(--font-title);
                    font-weight: 700;
                    letter-spacing: 0.3em;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.4s ease;
                    box-shadow: 0 10px 30px rgba(180, 83, 9, 0.1);
                }

                .unlock-btn:hover {
                    box-shadow: 0 15px 35px rgba(180, 83, 9, 0.2);
                    transform: translateY(-3px);
                }

                .shake { animation: shake 0.5s ease; }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    75% { transform: translateX(10px); }
                }

                @media (max-width: 480px) {
                    .locker-inner { padding: 3rem 1.5rem; }
                    .title { font-size: 1.6rem; }
                }
            `}</style>
    </div>
  );
};

export default Locker;
