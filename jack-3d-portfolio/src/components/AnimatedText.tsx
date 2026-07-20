import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={containerRef} className={`relative flex flex-wrap justify-center gap-x-[0.25em] gap-y-[0.1em] ${className}`}>
      {words.map((word, wordIdx) => {
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {word.split('').map((char, i) => {
              const currentIdx = charIndex++;
              const start = currentIdx / totalChars;
              const end = start + (1 / totalChars);
              
              const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
              
              return (
                <span key={i} className="relative inline-block">
                  <span className="opacity-0">{char}</span>
                  <motion.span 
                    className="absolute left-0 top-0"
                    style={{ opacity }}
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
