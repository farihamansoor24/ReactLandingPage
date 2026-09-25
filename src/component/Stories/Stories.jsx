import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {useRef} from 'react'
import Card from "../Card/Card"

gsap.registerPlugin(ScrollTrigger);
 const Stories = () => {
    const containerRef = useRef(null);
    const storyData=[{
        id:"Story 1",
        imgSrc:"https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800&auto=format&fit=crop",
        readtime:"6 min read",
        title1:"Haute Couture Philosophy",
        title2:"The Revival of Sculptural Tailoring in Modern Paris",
        desc:"How master tailors are abandoning soft silhouettes in favor of rigid, architectural garments that redefine body proportions.",
        readBy:"Hélène Vance"

    },{
         id:"Story 2",
        imgSrc:"https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop",
        readtime:"4 min read",
        title1:"Textile Innovation",
        title2:" Monochrome & Texture: Beyond Color Palettes",
        desc:"Exploring how single-color garments command presence through raw silk weave, matte leather, and glossy obsidian hardware.",
        readBy:"Julian Thorne"

    },{
         id:"Story 3",
        imgSrc:"https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=800&auto=format&fit=crop",
        readtime:"8 min read",
        title1:"Runway Critique",
        title2:"Autumn/Winter '26 Key Takeaways from Milan",
        desc:" An exclusive breakdown of runway presentations, high-contrast aesthetics, and emerging accessory trends.",
        readBy:"Clara DuPont"

    }]
      // Smooth One-By-One Scrub without Jerk
  useGSAP(() => {
    const q = gsap.utils.selector(containerRef);
    const cards = q('article');

    if (!cards.length) return;

    //Create a ScrollTrigger for each card with staggered start positions 
    cards.forEach((card, index) => {
      // Index ke base par start position offset kardi taaki same row ke cards ek saath na aayein
      // Top 88% se start hoga, phir 76%, phir 64% for each subsequent card in the same row
      const startOffset = 88 - (index % 3) * 12; // 88%, 76%, 64% se sequential trigger hoga
      const endOffset = startOffset - 35;

      gsap.fromTo(
        card,
        {
          y: 90,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: card,
            start: `top ${startOffset}%`,
            end: `top ${endOffset}%`,
            scrub: 1, // Smooth scrub tracking
            invalidateOnRefresh: true,
          }
        }
      );
    });

  }, { scope: containerRef });
  return (
    <>
      {/* <!-- EDITORIAL STORIES SECTION --> */}
    <section ref={containerRef} id="stories" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10">
        <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs tracking-widest uppercase text-vault-accent font-semibold block mb-2">Vault Magazine</span>
            <h2 className="text-4xl md:text-5xl font-serif">Editorial Stories</h2>
            <p className="text-vault-muted text-sm mt-3 font-light">
                In-depth essays on avant-garde craftsmanship, runway reportage, and sartorial philosophy.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

       {
        storyData.map((data)=>{
            
            return (
                <div key={data.id}>
                <Card {...data}/>
                </div>
     
            );

        })
       }

            
       

        </div>
    </section>
    </>
  )
}
export default Stories
