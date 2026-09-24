import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(() => {
    const q = gsap.utils.selector(aboutRef);
    const imageContainer = q('.about-content');
    const textContainer = q('.about-text');

    // 1. Image Container Animation (Fade & Slide Up)
    gsap.fromTo(
      imageContainer,
      { opacity: 0, y: 80,scale: 0.7 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        scrollTrigger: {
          trigger: imageContainer,
          start: 'top 85%', // Screen bottom ke 85% par aaye tab shuru ho
          end: 'top 40%',   // Screen ke 40% tak complete ho jaye
          scrub: 1,
          invalidateOnRefresh: true,
        }
      }
    );

    // 2. Text Content Animation (Fade & Slide From Right)
    gsap.fromTo(
      textContainer,
      { opacity: 0, x: 80 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: textContainer,
          start: 'top 80%',
          end: 'top 35%',
          scrub: 1,
          invalidateOnRefresh: true,
        }
      }
    );

  }, { scope: aboutRef });

  return (
    <>
      {/* BRAND ABOUT SECTION */}
      <section ref={aboutRef} id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Side */}
          <div className="about-content lg:col-span-5 relative will-change-transform">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800&auto=format&fit=crop" 
              alt="Atelier Fashion Craftsmanship" 
              className="w-full h-[500px] object-cover border border-white/10"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-vault-accent p-6 max-w-xs hidden sm:block">
              <p className="text-2xl font-serif font-bold text-white">Atelier Vault</p>
              <p className="text-xs text-white/80 mt-1">Hand-crafted sartorial excellence in Geneva & Milan.</p>
            </div>
          </div>

          {/* Text Side (Renamed class from about-image to about-text for clarity) */}
          <div className="about-text lg:col-span-7 space-y-6 will-change-transform">
            <span className="text-xs tracking-widest uppercase text-vault-accent font-semibold">Sartorial Manifesto</span>
            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
              "Fashion is not merely what you wear; it is the spatial boundary between your identity and the world."
            </h2>
            <p className="text-vault-muted text-sm md:text-base leading-relaxed font-light">
              Founded in 2024, VogueVault serves as a digital sanctuary for haute couture aficionados, minimalist designers, and editorial collectors. We curate strictly limited drops, celebrating non-conformist silhouettes and artisanal perfection.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6 border-t border-white/10">
              <div>
                <h4 className="font-serif text-lg font-semibold text-vault-cream">Zero Compromise</h4>
                <p className="text-xs text-vault-muted mt-1">Every textile is ethically sourced from certified European mills.</p>
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-vault-cream">Archival Storage</h4>
                <p className="text-xs text-vault-muted mt-1">Genuinely limited production runs guaranteed with verified digital proof.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;