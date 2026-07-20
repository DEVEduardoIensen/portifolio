import React from 'react';
import { FadeIn } from '../components/FadeIn';

const services = [
  {
    num: "01",
    name: "Modelagem 3D",
    desc: "Criação de objetos detalhados, personagens ou ambientes adaptados às necessidades específicas do cliente, ideal para jogos, produtos e visualizações."
  },
  {
    num: "02",
    name: "Renderização",
    desc: "Renders fotorrealistas de alta qualidade que mostram designs com iluminação, texturas e materiais personalizados para dar vida aos conceitos."
  },
  {
    num: "03",
    name: "Motion Design",
    desc: "Animações dinâmicas e motion graphics que adicionam energia e narrativa a marcas, produtos e experiências digitais."
  },
  {
    num: "04",
    name: "Branding",
    desc: "Criação de identidades visuais coesas - de logotipos a sistemas de marca completos - que comunicam uma presença clara e memorável."
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Design de sites limpos, modernos e focados em conversão, com atenção ao layout, tipografia e experiência do usuário."
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
