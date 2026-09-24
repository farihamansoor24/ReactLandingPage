import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Button from '../Button/Button'
import LinkButton from '../Link/Link'

const Hero = () => {
  const heroRef = useRef(null)

  useGSAP(() => {
    // 1. Set position of hero section to top on page load
    // window.scrollTo(0, 0);
    // Stagger for hero image and contetn
    gsap.fromTo('.hero-animate', 
      { opacity: 0, y: 40 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.15, 
        ease: 'power3.out',
        delay: 0.2
      }
    )
  }, { scope: heroRef })

  return (
    <>
      {/* HERO SECTION */}
      <section 
        ref={heroRef} 
        id="hero" 
        className="relative min-h-screen pt-28 pb-16 px-6 md:px-12 flex items-center justify-center overflow-hidden border-b border-white/10"
      >
        {/* Background Grain Pattern */}
        <div className="absolute inset-0 grain-overlay opacity-30 pointer-events-none"></div>

        {/* Hero Content Grid */}
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Hero Text Column */}
            <div className="lg:col-span-6 space-y-6 lg:pr-8">
                <div className="hero-animate inline-flex items-center space-x-2 text-xs tracking-widest uppercase text-vault-accent font-semibold">
                    <span className="w-8 h-px bg-vault-accent"></span>
                    <span>Autumn / Winter '26 Collection</span>
                </div>
                
                <h1 className="hero-animate text-5xl md:text-7xl lg:text-8xl font-serif font-normal leading-[1.05] tracking-tight">
                    Architectural <br/>
                    <span className="italic font-light text-vault-beige">Symphony</span>
                </h1>
                
                <p className="hero-animate text-vault-muted text-sm md:text-base max-w-lg leading-relaxed font-light">
                    An exploration of sculptural silhouettes, unyielding textures, and timeless monochromatic elegance. Designed for those who perceive fashion as wearable fine art.
                </p>

                <div className="hero-animate pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <LinkButton text="Explore Lookbook" href='#Lookbook' linkClass="bg-vault-cream text-vault-black hover:bg-vault-accent hover:text-white shadow-lg" />
                    <LinkButton text="Read Story Feature" href='#Stories' linkClass="border border-white/20 hover:border-vault-cream" />
                </div>

                {/* Hero Metrics */}
                <div className="hero-animate pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-left">
                    <div>
                        <p className="text-2xl font-serif font-bold text-vault-cream">42</p>
                        <p className="text-[10px] uppercase tracking-wider text-vault-muted">Curated Looks</p>
                    </div>
                    <div>
                        <p className="text-2xl font-serif font-bold text-vault-cream">12</p>
                        <p className="text-[10px] uppercase tracking-wider text-vault-muted">Global Designers</p>
                    </div>
                    <div>
                        <p className="text-2xl font-serif font-bold text-vault-cream">Limited</p>
                        <p className="text-[10px] uppercase tracking-wider text-vault-muted">Haute Couture</p>
                    </div>
                </div>
            </div>

            {/* Hero Imagery Collage */}
            <div className="hero-animate lg:col-span-6 relative flex justify-center items-center mt-8 lg:mt-0">
                <div className="absolute -top-4 -left-4 w-3/4 h-3/4 border border-vault-accent/40 rounded-sm pointer-events-none hidden sm:block"></div>
                
                <div className="relative z-10 overflow-hidden shadow-2xl group w-full max-w-md lg:max-w-none">
                    <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop" 
                         alt="High Fashion Editorial Model AW26" 
                         className="w-full h-[550px] md:h-[650px] object-cover parallax-bg"
                       />
                    
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-vault-black/90 via-vault-black/40 to-transparent p-6 flex justify-between items-end">
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-vault-accent font-mono block">Look 01 / AW26</span>
                            <span className="text-lg font-serif font-semibold">The Sculpted Wool Overcoat</span>
                        </div>
                        <span className="text-xs font-mono text-vault-beige border-b border-vault-beige pb-0.5">$3,450</span>
                    </div>
                </div>

                <div className="absolute -bottom-6 -right-2 sm:right-4 z-20 w-44 sm:w-56 bg-vault-black/90 backdrop-blur-md p-3 border border-white/10 shadow-2xl hidden sm:block">
                    <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400&auto=format&fit=crop" 
                         alt="Accessory Detail" className="w-full h-32 object-cover mb-2"
                        />
                    <p className="text-[11px] font-serif font-medium text-vault-cream">Monochrome Leather Harness</p>
                    <p className="text-[9px] uppercase tracking-widest text-vault-accent mt-0.5">Paris Runway Edition</p>
                </div>
            </div>

        </div>
    </section>
    </>
  )
}

export default Hero