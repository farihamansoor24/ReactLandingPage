import React from 'react'

 const Footer = () => {
  return (
    <div>

         {/* <!-- FOOTER --> */}
    <footer className="bg-vault-black py-16 px-6 md:px-12 border-t border-white/10 text-xs text-vault-muted">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
            
            {/* <!-- Brand Column --> */}
            <div className="md:col-span-4 space-y-4">
                <a href="#" className="text-2xl font-serif tracking-widest font-bold uppercase text-vault-cream block">
                    VOGUE<span className="text-vault-accent italic font-normal">VAULT</span>
                </a>
                <p className="text-xs leading-relaxed font-light max-w-sm">
                    An editorial lookbook & archival showcase celebrating haute couture craftsmanship, modern minimalism, and visionary sartorial culture.
                </p>
                <p className="text-[10px] font-mono text-vault-beige">
                    © 2026 VOGUEVAULT INC. ALL RIGHTS RESERVED.
                </p>
            </div>

            {/* <!-- Navigation Links --> */}
            <div className="md:col-span-2 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-vault-cream font-semibold">Collections</p>
                <ul className="space-y-2">
                    <li><a href="#lookbook" className="hover:text-vault-cream transition">Autumn/Winter '26</a></li>
                    <li><a href="#lookbook" className="hover:text-vault-cream transition">Spring/Summer '26</a></li>
                    <li><a href="#lookbook" className="hover:text-vault-cream transition">Archival Drops</a></li>
                    <li><a href="#lookbook" className="hover:text-vault-cream transition">Limited Accessories</a></li>
                </ul>
            </div>

            {/* <!-- Editorial Links --> */}
            <div className="md:col-span-2 space-y-3">
                <p className="text-xs font-mono uppercase tracking-widest text-vault-cream font-semibold">Magazine</p>
                <ul className="space-y-2">
                    <li><a href="#stories" className="hover:text-vault-cream transition">Runway Reports</a></li>
                    <li><a href="#stories" className="hover:text-vault-cream transition">Designer Interviews</a></li>
                    <li><a href="#stories" className="hover:text-vault-cream transition">Textile Essays</a></li>
                    <li><a href="#stories" className="hover:text-vault-cream transition">Sartorial Ethics</a></li>
                </ul>
            </div>

            {/* <!-- Social & Inquiries --> */}
            <div className="md:col-span-4 space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-vault-cream font-semibold">Editorial Contact</p>
                <p className="text-xs">Press & Curatorial Inquiries: <a href="mailto:curator@voguevault.com" className="text-vault-beige underline">curator@voguevault.com</a></p>
                
                <div className="flex space-x-5 text-base text-vault-cream pt-2">
                    <a href="#" className="hover:text-vault-accent transition"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" className="hover:text-vault-accent transition"><i className="fa-brands fa-pinterest"></i></a>
                    <a href="#" className="hover:text-vault-accent transition"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#" className="hover:text-vault-accent transition"><i className="fa-brands fa-vimeo-v"></i></a>
                </div>
            </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] uppercase font-mono tracking-wider space-y-4 sm:space-y-0">
            <span>Designed with Precision & Editorial Aesthetic</span>
            <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
                <a href="#" className="hover:text-white transition">Terms of Access</a>
                <a href="#" className="hover:text-white transition">Cookies Preferences</a>
            </div>
        </div>
    </footer>
    </div>
  )
}
export default Footer
