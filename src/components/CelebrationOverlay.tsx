import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface CelebrationOverlayProps {
    onComplete: () => void;
}

const CelebrationOverlay = ({ onComplete }: CelebrationOverlayProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const messageRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Grand Royal Cracker System
        const createParticle = (type: 'sparkle' | 'leaf' | 'star') => {
            const particle = document.createElement('div');
            particle.className = `royal-particle ${type}`;
            particlesRef.current?.appendChild(particle);

            const size = type === 'leaf' ? Math.random() * 15 + 10 : Math.random() * 6 + 2;
            const goldTones = ['#af874d', '#d4af37', '#f9f1c7', '#8c6a3a', '#ffffff'];
            const color = goldTones[Math.floor(Math.random() * goldTones.length)];

            gsap.set(particle, {
                width: size,
                height: type === 'leaf' ? size / 2 : size,
                backgroundColor: type === 'sparkle' ? color : 'transparent',
                borderLeft: type === 'star' ? `5px solid transparent` : 'none',
                borderRight: type === 'star' ? `5px solid transparent` : 'none',
                borderBottom: type === 'star' ? `10px solid ${color}` : 'none',
                backgroundImage: type === 'leaf' ? `linear-gradient(135deg, ${color}, #8c6a3a)` : 'none',
                borderRadius: type === 'sparkle' ? '50%' : '2px',
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                opacity: 1,
                scale: 0
            });

            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 25 + 15;
            const distance = Math.min(window.innerWidth, window.innerHeight) * 0.8;
            const destinationX = Math.cos(angle) * distance + (window.innerWidth / 2);
            const destinationY = Math.sin(angle) * distance + (window.innerHeight / 2);

            gsap.to(particle, {
                x: destinationX,
                y: destinationY,
                rotation: Math.random() * 1080,
                scale: Math.random() * 1.5 + 0.5,
                duration: Math.random() * 3 + 2,
                opacity: 0,
                ease: "expo.out"
            });
        };

        // Fire multiple bursts - faster burst
        for (let i = 0; i < 150; i++) {
            setTimeout(() => createParticle(i % 3 === 0 ? 'star' : i % 2 === 0 ? 'leaf' : 'sparkle'), i * 2);
        }

        // Cinematic Message reveal - faster timing
        const tl = gsap.timeline({
            onComplete: () => {
                setTimeout(onComplete, 300);
            }
        });

        tl.fromTo(overlayRef.current,
            { backgroundColor: 'rgba(253, 250, 247, 0)', backdropFilter: 'blur(0px)' },
            { backgroundColor: 'rgba(253, 250, 247, 0.98)', backdropFilter: 'blur(15px)', duration: 0.8, ease: "power3.inOut" }
        ).fromTo('.royal-frame',
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "expo.out" },
            "-=0.4"
        ).fromTo('.cele-line',
            { y: 30, opacity: 0, filter: 'blur(8px)' },
            { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, stagger: 0.15, ease: "power4.out" },
            "-=0.7"
        ).fromTo('.cele-ornament',
            { scale: 0, rotation: -180 },
            { scale: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" },
            "-=0.4"
        ).to(messageRef.current, {
            opacity: 0,
            scale: 1.02,
            filter: 'blur(15px)',
            duration: 0.8,
            ease: "power3.in",
            delay: 1.5 // Reduced wait time from 4s
        }).to(overlayRef.current, {
            opacity: 0,
            duration: 0.6,
            ease: "power2.inOut"
        });

    }, [onComplete]);

    return (
        <div className="celebration-overlay" ref={overlayRef}>
            <div className="royal-radiance"></div>
            <div className="particles-container" ref={particlesRef}></div>

            <div className="royal-frame">
                <div className="frame-corner tl">✵</div>
                <div className="frame-corner tr">✵</div>
                <div className="frame-corner bl">✵</div>
                <div className="frame-corner br">✵</div>
            </div>

            <div className="celebration-message" ref={messageRef}>
                <div className="cele-line cele-badge">✨ BY DIVINE APPOINTMENT ✨</div>
                <div className="cele-line">
                    <h2 className="cele-main-text">
                        <span className="sc-light">wish you happy</span> <br />
                        <span className="text-royal-gold">MERRY CHRISTMAS</span>
                    </h2>
                </div>
                <div className="cele-line amp-wrap">
                    <span className="amp">&</span>
                </div>
                <div className="cele-line">
                    <h2 className="cele-main-text">
                        <span className="sc-light">wish you happy</span> <br />
                        <span className="text-royal-gold">NEW YEAR 2026</span>
                    </h2>
                </div>
                <div className="cele-ornament">
                    <span className="star-main">✵</span>
                    <div className="sig-line">FOR CATHERINE SUJI XAVIER</div>
                </div>
            </div>

            <style>{`
                .celebration-overlay {
                    position: fixed;
                    inset: 0;
                    z-index: 5000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                }

                .royal-radiance {
                    position: absolute;
                    inset: 0;
                    background: 
                        radial-gradient(circle at center, rgba(251, 191, 36, 0.1) 0%, transparent 70%),
                        radial-gradient(circle at 20% 20%, rgba(214, 51, 132, 0.03) 0%, transparent 50%),
                        radial-gradient(circle at 80% 80%, rgba(214, 51, 132, 0.03) 0%, transparent 50%);
                }

                .royal-frame {
                    position: absolute;
                    inset: 4rem;
                    border: 1px solid rgba(175, 135, 77, 0.2);
                    pointer-events: none;
                }

                .frame-corner {
                    position: absolute;
                    width: 40px;
                    height: 40px;
                    color: var(--gold-primary);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.5rem;
                    background: var(--bg-deep);
                }

                .tl { top: -20px; left: -20px; }
                .tr { top: -20px; right: -20px; }
                .bl { bottom: -20px; left: -20px; }
                .br { bottom: -20px; right: -20px; }

                .particles-container {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                }

                .royal-particle {
                    position: absolute;
                    z-index: 1;
                }

                .celebration-message {
                    text-align: center;
                    position: relative;
                    z-index: 10;
                    padding: 2rem;
                    width: 90%;
                    max-width: 900px;
                }

                .cele-badge {
                    font-size: 0.75rem;
                    letter-spacing: 0.6em;
                    color: var(--gold-primary);
                    margin-bottom: 3rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .cele-main-text {
                    font-family: var(--font-title);
                    font-size: clamp(1.8rem, 5.5vw, 4rem);
                    line-height: 1.1;
                    color: var(--text-main);
                    margin: 0.5rem 0;
                }

                .sc-light {
                    font-family: var(--font-serif);
                    font-size: 0.45em;
                    text-transform: lowercase;
                    font-style: italic;
                    color: var(--text-muted);
                    letter-spacing: 0.1em;
                }

                .text-royal-gold {
                    background: linear-gradient(135deg, #8c6a3a, #af874d, #f9f1c7, #af874d, #8c6a3a);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.1));
                    display: inline-block;
                    margin-top: 0.5rem;
                    letter-spacing: 0.05em;
                }

                .amp-wrap { margin: 1.5rem 0; position: relative; }
                .amp {
                    font-family: var(--font-serif);
                    font-size: 3rem;
                    color: var(--sacred-rose);
                    font-style: italic;
                    opacity: 0.6;
                }

                .cele-ornament {
                    margin-top: 4rem;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1.5rem;
                }

                .star-main {
                    font-size: 2.5rem;
                    color: var(--gold-primary);
                    filter: drop-shadow(0 0 15px rgba(175, 135, 77, 0.3));
                }

                .sig-line {
                    font-size: 0.7rem;
                    letter-spacing: 0.4em;
                    color: var(--text-dim);
                    font-weight: 600;
                    border-top: 1px solid var(--glass-border);
                    padding-top: 1rem;
                    width: 250px;
                }

                @media (max-width: 768px) {
                    .royal-frame { inset: 2rem; }
                    .cele-main-text { font-size: 2.2rem; }
                    .amp { font-size: 2.2rem; }
                    .sig-line { width: 180px; }
                    .royal-particle.leaf { width: 5px !important; }
                }
            `}</style>
        </div>
    );
};

export default CelebrationOverlay;
