import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';

const projects = [
  {
    num: "01",
    name: "Eldorado Lake",
    category: "Web App",
    url: "https://deveduardoiensen.github.io/eldorado-lake/",
    image: "eldorado.png"
  },
  {
    num: "02",
    name: "TR Fishing",
    category: "Landing Page",
    url: "https://deveduardoiensen.github.io/tr-fishing/",
    image: "trfishing.png"
  },
  {
    num: "03",
    name: "IronRiders",
    category: "Vue.js App",
    url: "https://wesleysantosx.github.io/IronRiders-VueJs/",
    image: "ironriders.png"
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projetos" className="bg-dark rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <FadeIn y={40}>
        <h2 
          className="hero-heading font-black uppercase text-center mb-16 sm:mb-20 md:mb-28 leading-none"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projetos
        </h2>
      </FadeIn>

      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
        {projects.map((proj, i) => (
          <ProjectCard key={proj.num} project={proj} index={i} totalCards={projects.length} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, totalCards }: { project: any, index: number, totalCards: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  
  // Actually the scale down effect happens when scrolling past it
  // Let's use a standard scroll progress for the wrapper to scale down
  const { scrollYProgress: wrapperScrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });
  
  const targetScale = 1 - ((totalCards - 1 - index) * 0.03);
  const scale = useTransform(wrapperScrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div ref={containerRef} className="h-[85vh] md:h-[90vh] flex items-center justify-center sticky" style={{ top: `calc(96px + ${index * 28}px)` }}>
      <motion.div 
        style={{ scale }}
        className="w-full h-full bg-dark rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 flex flex-col overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-10 gap-6">
          <div className="flex items-center gap-6 sm:gap-10">
            <span 
              className="text-[#D7E2EA] font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 100px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA]/60 uppercase tracking-widest text-xs sm:text-sm mb-1">{project.category}</span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-2xl sm:text-3xl md:text-4xl">{project.name}</h3>
            </div>
          </div>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <LiveProjectButton />
          </a>
        </div>

        {/* Bottom Row - Image Grid */}
        <div className="flex-1 w-full h-full relative overflow-hidden rounded-[40px] sm:rounded-[50px] md:rounded-[60px]">
          <motion.img 
            style={{ scale: imageScale }}
            src={`${import.meta.env.BASE_URL}${project.image}`} 
            alt={project.name} 
            className="w-full h-full object-cover object-top origin-center" 
          />
        </div>
      </motion.div>
    </div>
  );
};
