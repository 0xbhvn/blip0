import React from 'react';

/**
 * PiProductHuntSolid icon from the solid style in apps-&-social category.
 */
interface PiProductHuntSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiProductHuntSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'product-hunt icon',
  ...props
}: PiProductHuntSolidProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M12.813 12.625H11V9h1.813a1.813 1.813 0 0 1 0 3.625Z" fill="currentColor"/><path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12 17.606 22.15 12 22.15 1.85 17.606 1.85 12ZM10 7a1 1 0 0 0-1 1v9a1 1 0 1 0 2 0v-2.375h1.813a3.812 3.812 0 1 0 0-7.625z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
