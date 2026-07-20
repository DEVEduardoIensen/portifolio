import React from 'react';
import { FadeIn } from '../components/FadeIn';

const services = [
  {
    num: "01",
    name: "Landing Pages",
    desc: "Criação de páginas otimizadas para conversão, com design moderno e foco em resultados rápidos para campanhas."
  },
  {
    num: "02",
    name: "Sites Institucionais",
    desc: "Desenvolvimento de sites profissionais para empresas, garantindo presença digital forte, performance e acessibilidade."
  },
  {
    num: "03",
    name: "Desenvolvimento Front-end",
    desc: "Implementação de interfaces interativas e responsivas utilizando as tecnologias mais modernas do mercado (React, Vue, Tailwind)."
  },
  {
    num: "04",
    name: "Sistemas Web",
    desc: "Criação de aplicações web robustas e escaláveis, focadas na experiência do usuário e alta performance."
  },
  {
    num: "05",
    name: "UI/UX Design",
    desc: "Foco na usabilidade e no visual atraente para garantir que a navegação do usuário seja intuitiva e marcante."
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <FadeIn y={40}>
        <h2 
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Serviços
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((svc, i) => (
          <FadeIn 
            key={svc.num} 
            delay={i * 0.1}
            y={20}
            className="flex flex-col md:flex-row items-start md:items-center py-8 sm:py-10 md:py-12 border-b-[1px] border-[rgba(12,12,12,0.15)] last:border-b-0 gap-6 md:gap-12 lg:gap-20"
          >
            <div 
              className="text-[#0C0C0C] font-black leading-none shrink-0"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {svc.num}
            </div>
            
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 
                className="text-[#0C0C0C] font-medium uppercase leading-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {svc.name}
              </h3>
              <p 
                className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {svc.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
