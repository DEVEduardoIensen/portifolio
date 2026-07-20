
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';

function App() {
  return (
    <div className="w-full min-h-screen bg-dark text-light overflow-x-hidden selection:bg-[#B600A8]/30 selection:text-white">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      
      {/* Footer */}
      <footer className="bg-dark py-10 text-center relative z-20 border-t border-light/10 mt-20">
        <p className="text-light/50 text-sm">
          © {new Date().getFullYear()} Eduardo Iensen Prestes. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

export default App;
