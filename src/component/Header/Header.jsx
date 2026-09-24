import { Link } from '../Link/Link';
import Button from '../Button/Button';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Header = () => {
    const headerRef = useRef(null);

    useGSAP(() => {
        // Scope ke andar elements query karein

        const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.8 } });

        // 1. Full Header Entrance
        tl.fromTo(headerRef.current, 
            { y: -100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 0.8 }
        )
        // 2. Brand Logo Entrance
        .fromTo('.brand-logo', 
            { opacity: 0, x: -30 }, 
            { opacity: 1, x: 0, duration: 0.6 }, 
            '-=0.4'
        )
        // 3. Nav Items Entrance (Staggered)
        .fromTo('.nav-item', 
            { opacity: 0, y: -20 }, 
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 }, 
            '-=0.4'
        );

    }, { scope: headerRef });

    return (
        <header 
            ref={headerRef} 
            id="main-header" 
            className="fixed top-0 left-0 w-full z-50 bg-vault-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                
                {/* Mobile Menu Toggle */}
                <div className="nav-item md:hidden">
                    <Button 
                        btnID='mobile-menu-btn' 
                        isIcon={true} 
                        iconClass="fa-solid fa-bars" 
                        btnClass="text-vault-cream text-xl focus:outline-none" 
                        ariaLabel='Toggle Menu' 
                    />
                </div>

                {/* Brand Logo */}
                <a href="#" className="brand-logo text-2xl md:text-3xl font-serif tracking-widest font-bold uppercase hover:opacity-80 transition inline-block">
                    VOGUE<span className="text-vault-accent italic font-normal">VAULT</span>
                </a>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center space-x-10 text-xs tracking-widest uppercase font-medium">
                    <div className="nav-item"><Link href="#hero" text="Collections" /></div>
                    <div className="nav-item"><Link href="#lookbook" text="Lookbook" /></div>
                    <div className="nav-item"><Link href="#stories" text="Editorial Stories" /></div>
                    <div className="nav-item"><Link href="#about" text="About Vault" /></div>
                </nav>

                {/* Quick Action Icons */}
                <div className="flex items-center space-x-6 text-sm">
                    <div className="nav-item">
                        <Button btnID='search-toggle-btn' isIcon={true} iconClass="fa-solid fa-magnifying-glass" btnClass="hover:text-vault-accent transition relative focus:outline-none" title='Search' />
                    </div>
                    <div className="nav-item">
                        <Button btnID='bookmark-toggle-btn' isIcon={true} iconClass="fa-regular fa-bookmark" btnClass="hover:text-vault-accent transition relative focus:outline-none" title='Saved Looks' />
                    </div>
                    <div className="nav-item hidden sm:inline-block">
                        <Button 
                            btnID='newsletter-btn' 
                            text="VIP Access" 
                            isIcon={false} 
                            btnClass="border border-vault-cream/30 hover:border-vault-accent hover:bg-vault-accent px-4 py-1.5 text-xs tracking-widest uppercase transition-all duration-300" 
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;