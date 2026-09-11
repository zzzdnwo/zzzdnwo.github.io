import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  target,
  rel,
  type = 'button',
  ...props
}) {
  if (to) {
    return (
      <Link to={to} target={target} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}
