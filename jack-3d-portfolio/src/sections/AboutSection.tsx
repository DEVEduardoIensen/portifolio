import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-dark">
      {/* Decorative Images */}
      {/* Top-left: Moon */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png" 
          alt="" 
          className="w-[120px] sm:w-[160px] md:w-[210px]" 
        />
      </FadeIn>
      
      {/* Bottom-left: 3D object */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png" 
          alt="" 
          className="w-[100px] sm:w-[140px] md:w-[180px]" 
        />
      </FadeIn>

      {/* Top-right: Lego */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png" 
          alt="" 
          className="w-[120px] sm:w-[160px] md:w-[210px]" 
        />
      </FadeIn>

      {/* Bottom-right: Group */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none">
        <img 
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png" 
          alt="" 
          className="w-[130px] sm:w-[170px] md:w-[220px]" 
        />
      </FadeIn>

      {/* Content */}
      <div className="z-10 flex flex-col items-center">
        <FadeIn delay={0} y={40}>
          <h2 
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Sobre mim
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center mt-10 sm:mt-14 md:mt-16">
          <AnimatedText 
            text="Sou Eduardo Iensen Prestes, acadêmico de Ciência da Computação apaixonado por tecnologia, programação e inovação. Focado no desenvolvimento de aplicações web modernas, busco unir a teoria acadêmica com práticas de mercado para criar experiências de usuário fluidas e interfaces de alto impacto. Adoro explorar novos desafios e transformar ideias em soluções reais!"
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[700px]"
            // We use inline style for font-size clamp to override Tailwind properly
          />
          <style>{`
            #sobre p {
              font-size: clamp(1rem, 2vw, 1.35rem);
            }
          `}</style>
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <ContactButton />
        </div>
      </div>
    </section>
  );
};
