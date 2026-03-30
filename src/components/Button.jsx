import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  onClick,
  onMouseEnter,
  id,
  className,
  to,      
  href, 
  target,
}) {
  // 내부 링크
  if (to) {
    return (
      <button
        id={id}
        className={className}
        onMouseEnter={onMouseEnter}
      >
        <Link
            to={to}            
        >
            {children}
        </Link>
      </button>  
    );
  }
  // 외부 링크
  if (href) {
    return (
    <button
      id={id}
      className={className}
      onMouseEnter={onMouseEnter}
    >
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}        
      >
        {children}
      </a>
    </button>  
    );
  }
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      id={id}
      className={className}
    >
      {children}
    </button>
  );
}