import React from 'react'

const LinkButton = ({text,href,linkClass}) => {
  return (
    <>
    <a href={href} className={`px-8 py-4 text-xs font-semibold tracking-widest uppercase transition-all duration-300 text-center ${linkClass}`}>
      {text}
    </a>
    </>
    
  )
}

export const Link = ({text,href,linkClass}) => {
  return (
    <>
    <a href={href} className="hover:text-vault-accent transition-colors">
      {text}
    </a>
    </>
  )
}

export default LinkButton