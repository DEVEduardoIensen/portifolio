import React from 'react';
import { ContactButton } from '../components/ContactButton';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col justify-between overflow-x-clip relative w-full">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="flex justify-between px-6 md:px-10 pt-6 md:pt-8 w-full z-20 relative">
        {['Sobre', 'Projetos', 'Contato'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {item}
          </a>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden w-full z-0 relative mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40} className="w-full text-center flex justify-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw]">
            oi, sou eduardo iensen prestes
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} className="pointer-events-auto">
            <img
              src={`${import.meta.env.BASE_URL}avatar.png`}
              alt="Eduardo Portrait"
              className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 w-full z-20 relative">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            um desenvolvedor web motivado por criar projetos marcantes e inesquecíveis
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
