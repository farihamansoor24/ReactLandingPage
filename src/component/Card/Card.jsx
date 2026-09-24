import React from 'react'
 const Card = ({ imgSrc, readtime, title1, title2, desc, readBy } ) => {

  return (
    <>
       <article  className=" group bg-vault-black/40 border border-white/10 overflow-hidden hover:border-vault-accent flex flex-col justify-between">
                <div>
                    <div className="relative overflow-hidden h-64">
                        <img src={imgSrc} 
                             alt="Story" 
                             className="w-full h-full object-cover parallax-bg"
                             />
                        <span className="absolute top-4 left-4 bg-vault-black/80 text-vault-cream text-[10px] tracking-widest uppercase px-2.5 py-1 font-mono">
                            {readtime}
                        </span>
                    </div>
                    <div className="p-6">
                        <span className="text-xs text-vault-accent tracking-widest uppercase font-semibold">
                            {title1}
                        </span>
                        <h3 className="text-xl font-serif font-semibold mt-2 group-hover:text-vault-beige transition leading-snug">
                            {title2}
                        </h3>
                        <p className="text-vault-muted text-xs mt-3 leading-relaxed font-light">
                           {desc}
                        </p>
                    </div>
                </div>
                <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-vault-cream font-medium">
                    <span>By {readBy}</span>
                    <span className="group-hover:translate-x-1 transition transform text-vault-accent">Read Feature &rarr;</span>
                </div>
            </article> 
    </>
  )
}
export default Card