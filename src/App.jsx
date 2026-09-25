import './App.css';
// import React, { useEffect, useRef } from 'react';
import Header from './component/Header/Header';
import Hero from './component/Hero/Hero';
import Lookbook from './component/Lookbook/Lookbook';
import Stories from './component/Stories/Stories.jsx';
import About from './component/About/About';
import Footer from './component/Footer/Footer';

function App() {
  const appRef = useRef(null);

  // useEffect(() => {
  //   const { gsap, ScrollTrigger } = window;

  //   if (!gsap || !ScrollTrigger) {
  //     console.warn("GSAP or ScrollTrigger CDN missing in index.html");
  //     return;
  //   }

  //   gsap.registerPlugin(ScrollTrigger);

  //   let ctx = gsap.context(() => {
  //     // A) HEADER
  //     gsap.from('#main-header', {
  //       y: -80,
  //       opacity: 0,
  //       duration: 1,
  //       ease: 'power3.out',
  //     });

  //     // B) HERO
  //     const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
  //     heroTl
  //       .from('#hero h1', { y: 50, opacity: 0, delay: 0.2 })
  //       .from('#hero p', { y: 30, opacity: 0 }, '-=0.6')
  //       .from('#hero a', { y: 20, opacity: 0, stagger: 0.2 }, '-=0.6')
  //       .from('#hero .relative.z-10', { scale: 0.9, opacity: 0, duration: 1.2 }, '-=0.8');

  //     // C) LOOKBOOK CARDS
  //     gsap.fromTo('.look-card', 
  //       {
  //         autoAlpha: 0,
  //         y: 50,
  //       }, 
  //       {
  //         autoAlpha: 1,
  //         y: 0,
  //         duration: 0.9,
  //         stagger: 0.15,
  //         ease: 'power3.out',
  //         force3D: true,
  //         scrollTrigger: {
  //           trigger: '#gallery-grid',
  //           start: 'top 85%',
  //           toggleActions: 'play none none reverse',
  //           invalidateOnRefresh: true,
  //         }
  //       }
  //     );

  //     // D) STORIES CARDS (Fixed Trigger & Smooth Stagger)
  //     gsap.fromTo('#stories article', 
  //       {
  //         autoAlpha: 0,
  //         y: 50,
  //       }, 
  //       {
  //         autoAlpha: 1,
  //         y: 0,
  //         duration: 0.9,
  //         stagger: 0.18,
  //         ease: 'power3.out',
  //         force3D: true,
  //         scrollTrigger: {
  //           trigger: '#stories',
  //           start: 'top 85%',
  //           toggleActions: 'play none none reverse',
  //           invalidateOnRefresh: true,
  //         }
  //       }
  //     );

  //     // E) ABOUT SECTION
  //     gsap.from('#about img', {
  //       scrollTrigger: {
  //         trigger: '#about',
  //         start: 'top 80%',
  //       },
  //       x: -50,
  //       opacity: 0,
  //       duration: 1,
  //       ease: 'power2.out',
  //     });

  //     gsap.from('#about .lg\\:col-span-7', {
  //       scrollTrigger: {
  //         trigger: '#about',
  //         start: 'top 80%',
  //       },
  //       x: 50,
  //       opacity: 0,
  //       duration: 1,
  //       ease: 'power2.out',
  //     });

  //   }, appRef);

  //   // Initial delay refresh to ensure all heights are calculated properly
  //   const timer = setTimeout(() => {
  //     ScrollTrigger.refresh();
  //   }, 200);

  //   return () => {
  //     clearTimeout(timer);
  //     ctx.revert();
  //   };
  // }, []);

  return (
    <div ref={appRef} className="bg-vault-black text-vault-cream min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Lookbook />
      <Stories />
      <About />
      <Footer />
    </div>
  );
}

export default App;