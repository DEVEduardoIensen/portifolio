import React, { useRef, useEffect } from 'react';

const gifs = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

const row1 = gifs.slice(0, 11);
const row2 = gifs.slice(11);

// Tripled arrays for infinite scroll effect
const row1Tripled = [...row1, ...row1, ...row1];
const row2Tripled = [...row2, ...row2, ...row2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Only animate if the section is somewhat in view
      if (scrollY + windowHeight < sectionTop || scrollY > sectionTop + sectionRef.current.offsetHeight) {
        return;
      }
      
      const offset = (scrollY - sectionTop + windowHeight) * 0.3;
      
      row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-3">
      {/* Row 1 - Moves Right */}
      <div 
        ref={row1Ref} 
        className="flex gap-3 w-max"
        style={{ willChange: 'transform' }}
      >
        {row1Tripled.map((src, i) => (
          <img 
            key={`row1-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 bg-gray-900"
          />
        ))}
      </div>
      
      {/* Row 2 - Moves Left */}
      <div 
        ref={row2Ref} 
        className="flex gap-3 w-max"
        style={{ willChange: 'transform' }}
      >
        {row2Tripled.map((src, i) => (
          <img 
            key={`row2-${i}`}
            src={src}
            alt=""
            loading="lazy"
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 bg-gray-900"
          />
        ))}
      </div>
    </section>
  );
};
