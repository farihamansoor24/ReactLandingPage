import React from 'react';

 const Button = ({text,btnID,isIcon,iconClass,btnClass,ariaLabel,title,dataProps,onClick}) => {
  return (
    <>
      <button id={btnID} className={btnClass} aria-label={ariaLabel ?ariaLabel:''} title={title ? title:''} {...dataProps} onClick={onClick ? onClick : null}>
        {text?text:''}
        {isIcon? <i className={iconClass}></i>:''}
       </button>  
    </>
  )
}
export  default Button