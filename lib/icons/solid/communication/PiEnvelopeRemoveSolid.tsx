import React from 'react';

/**
 * PiEnvelopeRemoveSolid icon from the solid style in communication category.
 */
interface PiEnvelopeRemoveSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEnvelopeRemoveSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'envelope-remove icon',
  ...props
}: PiEnvelopeRemoveSolidProps): JSX.Element {
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
      <path d="M14.044 3H9.956c-1.363 0-2.447 0-3.321.071-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.379 2.19.47.47 0 0 0 .16.644l6.185 3.935c1.62 1.03 2.23 1.403 2.859 1.548a4 4 0 0 0 1.798 0c.63-.145 1.24-.517 2.86-1.548l6.184-3.936a.47.47 0 0 0 .16-.643 6 6 0 0 0-2.379-2.19c-.7-.356-1.463-.51-2.359-.583C16.491 3 15.407 3 14.044 3Z" fill="currentColor"/><path d="M22.948 8.905a.392.392 0 0 0-.608-.3l-5.668 3.607c-1.402.893-2.317 1.476-3.324 1.708a6 6 0 0 1-2.697 0c-1.006-.232-1.921-.815-3.323-1.708L1.66 8.605a.392.392 0 0 0-.608.3C1 9.73 1 10.702 1 11.872v.172c0 1.363 0 2.447.071 3.321.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583C7.509 21 8.593 21 9.956 21h3.215A3 3 0 0 1 16 17h5.999q.32 0 .619.064c.17-.518.259-1.076.31-1.699.071-.874.071-1.958.071-3.321v-.172c0-1.17 0-2.143-.052-2.967Z" fill="currentColor"/><path d="M16 19a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}
