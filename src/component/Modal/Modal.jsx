import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Object destructuring for props
const Modal = ({ isOpen, onClose, data }) => {
  const modalRef = useRef(null)

  // 1. All hooks MUST be called at the top level (before any return statement)
  useGSAP(() => {
    if (isOpen && data && modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, { scope: modalRef, dependencies: [isOpen, data] });

  // 2. Early return statement placed AFTER all hooks
  if (!isOpen || !data) return null;

  return (
    // Conditional overlay styling and close handler
    <div 
      ref={modalRef}
      id="quick-view-modal" 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-vault-black/90 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div 
        className="bg-vault-black border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside card content
      >
        
        {/* Close Button */}
        <button 
          id="close-modal-btn" 
          className="absolute top-4 right-4 text-vault-muted hover:text-white text-xl p-2 transition"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Modal Image Showcase */}
          <div className="h-80 md:h-[450px] overflow-hidden bg-vault-black">
            <img 
              id="modal-img" 
              src={data.img || data.imgSrc} 
              alt={data.title || data.title1} 
              className="w-full h-full object-cover" 
            />
          </div>

          {/* Modal Product Details - Dynamic props binding */}
          <div className="space-y-6">
            <div>
              <span id="modal-category" className="text-xs tracking-widest uppercase text-vault-accent font-semibold block mb-1">
                {data.fullCategory || data.categoryName || data.title1}
              </span>
              <h3 id="modal-title" className="text-2xl md:text-3xl font-serif font-bold text-vault-cream">
                {data.title || data.title2}
              </h3>
              {data.price && (
                <p id="modal-price" className="text-xl font-mono text-vault-beige mt-2">
                  {data.price}
                </p>
              )}
            </div>

            <p id="modal-desc" className="text-vault-muted text-xs md:text-sm leading-relaxed font-light">
              {data.desc}
            </p>

            {/* Color Swatches */}
            <div>
              <label className="text-[10px] uppercase tracking-widest text-vault-muted block mb-2 font-mono">Available Color Swatches</label>
              <div className="flex space-x-3">
                <button className="w-7 h-7 rounded-full bg-[#111111] border-2 border-vault-accent focus:outline-none" title="Obsidian Black"></button>
                <button className="w-7 h-7 rounded-full bg-[#6B1D2F] border-2 border-transparent hover:border-vault-cream focus:outline-none" title="Burgundy Velvet"></button>
                <button className="w-7 h-7 rounded-full bg-[#E8E2D5] border-2 border-transparent hover:border-vault-cream focus:outline-none" title="Sandstone Cream"></button>
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <label className="text-[10px] uppercase tracking-widest text-vault-muted block mb-2 font-mono">Select Size</label>
              <div className="grid grid-cols-4 gap-2">
                <button className="size-btn border border-white/20 hover:border-vault-accent py-2 text-xs font-mono transition uppercase">XS</button>
                <button className="size-btn border border-vault-accent text-vault-accent py-2 text-xs font-mono transition uppercase font-bold">S</button>
                <button className="size-btn border border-white/20 hover:border-vault-accent py-2 text-xs font-mono transition uppercase">M</button>
                <button className="size-btn border border-white/20 hover:border-vault-accent py-2 text-xs font-mono transition uppercase">L</button>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex space-x-4">
              <button id="modal-add-btn" className="flex-1 bg-vault-cream text-vault-black hover:bg-vault-accent hover:text-white py-3 text-xs tracking-widest uppercase font-semibold transition">
                Acquire Look
              </button>
              <button id="modal-bookmark-btn" className="border border-white/20 hover:border-vault-accent px-4 py-3 text-sm transition text-vault-cream">
                <i className="fa-regular fa-bookmark"></i>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Modal;