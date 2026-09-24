import { useState, useRef } from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Lookbook = () => {
  const containerRef = useRef(null);

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLook, setSelectedLook] = useState(null);

  const handleOpenModal = (lookData) => {
    setSelectedLook(lookData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedLook(null);
  };

  const filterBtnClass1 = "filter-btn text-xs tracking-widest uppercase px-3 py-1.5 text-vault-accent border-b-2 border-vault-accent font-medium";
  const filterBtnClass2 = "filter-btn text-xs tracking-widest uppercase px-3 py-1.5 text-vault-muted hover:text-vault-cream";

  const looksData = [
    {
      id: "1",
      number: "Look #001",
      title: "Structured Velvet Trench",
      categoryKey: "couture",
      categoryName: "Couture",
      fullCategory: "Haute Couture",
      price: "$2,890",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
      desc: "Tailored architectural blazer trench with sharp exaggerated shoulders and deep burgundy velvet lapels. Hand-stitched in Milan."
    },
    {
      id: "2",
      number: "Look #002",
      title: "Draped Silk Gown",
      categoryKey: "minimalist",
      categoryName: "Minimalist",
      fullCategory: "Minimalist",
      price: "$1,950",
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
      desc: "Heavy weight Japanese mulberry silk gown featuring an asymmetrical draped neckline and fluid column silhouette."
    },
    {
      id: "3",
      number: "Look #003",
      title: "Oversized Matrix Coat",
      categoryKey: "streetwear",
      categoryName: "Avant-Street",
      fullCategory: "Avant-Street",
      price: "$3,100",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      desc: "Heavy grade calfskin leather floor-length coat with custom brushed steel hardware and drop-shoulder tailoring."
    },
    {
      id: "4",
      number: "Look #004",
      title: "Obsidian Eyewear",
      categoryKey: "accessories",
      categoryName: "Accessories",
      fullCategory: "Accessories",
      price: "$620",
      img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=800&auto=format&fit=crop",
      desc: "Hand-cut Japanese acetate frames with dark obsidian polarized lenses and anti-reflective titanium inner rim."
    },
    {
      id: "5",
      number: "Look #005",
      title: "Crimson Haute Jacket",
      categoryKey: "couture",
      categoryName: "Couture",
      fullCategory: "Haute Couture",
      price: "$4,200",
      img: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=800&auto=format&fit=crop",
      desc: "Deep burgundy silk-blend velvet jacket with hand-burnished golden metal buttons and corset boning structure inside."
    },
    {
      id: "6",
      number: "Look #006",
      title: "Sandstone Trousers Set",
      categoryKey: "minimalist",
      categoryName: "Minimalist",
      fullCategory: "Minimalist",
      price: "$1,420",
      img: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=800&auto=format&fit=crop",
      desc: "Minimalist sand beige high-waisted pleated wool trousers paired with a seamless modal under-layer top."
    }
  ];

  // Smooth One-By-One Scrub without Jerk
  useGSAP(() => {
    const q = gsap.utils.selector(containerRef);
    const cards = q('.look-card');

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
      <section 
        ref={containerRef} 
        id="lookbook" 
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/10"
      >
        {/* Section Title & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
          <div>
            <span className="text-xs tracking-widest uppercase text-vault-accent font-semibold block mb-2">Curated Selection</span>
            <h2 className="text-4xl md:text-5xl font-serif">The Lookbook Grid</h2>
          </div>

          <div id="filter-container" className="flex flex-wrap gap-2 sm:gap-4 border-b border-white/10 pb-2">
            <Button text='All Looks' dataFilter='all' isIcon={false} btnClass={filterBtnClass1} />
            <Button text='Haute Couture' dataFilter='couture' isIcon={false} btnClass={filterBtnClass2} />
            <Button text='Avant-Street' dataFilter='streetwear' isIcon={false} btnClass={filterBtnClass2} />
            <Button text='Minimalist' dataFilter='minimalist' isIcon={false} btnClass={filterBtnClass2} />
            <Button text='Accessories' dataFilter='accessories' isIcon={false} btnClass={filterBtnClass2} />
          </div>
        </div>

        {/* Gallery Grid */}
        <div id="gallery-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[600px] relative">
          {looksData.map((look) => {
            const customDataProps = {
              'data-id': look.id,
              'data-title': look.title,
              'data-category': look.fullCategory,
              'data-price': look.price,
              'data-img': look.img,
              'data-desc': look.desc
            };

            return (
              <div 
                key={look.id} 
                className="look-card group relative bg-vault-black border border-white/10 overflow-hidden will-change-transform" 
                data-category={look.categoryKey}
              >
                <div className="relative h-[480px] overflow-hidden">
                  <img 
                    src={look.img} 
                    alt={look.title} 
                    loading="lazy"
                    onLoad={() => ScrollTrigger.refresh()}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Quick View Button */}
                  <div className="absolute inset-0 bg-vault-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center p-6 text-center transition-opacity duration-300 z-10">
                    <Button 
                      text="Quick View"
                      btnClass="quick-view-btn bg-vault-cream text-vault-black hover:bg-vault-accent hover:text-white px-6 py-3 text-xs tracking-widest uppercase font-semibold duration-300"
                      dataProps={customDataProps} 
                      onClick={() => handleOpenModal(look)} 
                    />
                  </div>

                  {/* Bookmark Button */}
                  <Button 
                    text='' 
                    isIcon={true} 
                    iconClass="fa-regular fa-bookmark" 
                    btnClass="bookmark-card-btn absolute top-4 right-4 bg-vault-black/80 hover:bg-vault-accent text-white w-9 h-9 rounded-full flex items-center justify-center border border-white/20 z-20" 
                    title='Bookmark Look' 
                  />

                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-vault-black/80 border border-white/20 text-[10px] tracking-widest uppercase px-2.5 py-1 text-vault-beige z-20">
                    {look.categoryName}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-5 flex justify-between items-start border-t border-white/10 bg-vault-black relative z-10">
                  <div>
                    <p className="text-xs font-mono text-vault-muted uppercase">{look.number}</p>
                    <h3 className="text-lg font-serif font-semibold mt-0.5 group-hover:text-vault-beige">{look.title}</h3>
                  </div>
                  <span className="text-sm font-mono text-vault-cream font-medium">{look.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick View Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        data={selectedLook} 
      />
    </>
  );
};

export default Lookbook;