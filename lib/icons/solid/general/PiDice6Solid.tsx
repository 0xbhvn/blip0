import React from 'react';

/**
 * PiDice6Solid icon from the solid style in general category.
 */
interface PiDice6SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDice6Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'dice-6 icon',
  ...props
}: PiDice6SolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M10.956 2h2.088c1.363 0 2.447 0 3.321.071.896.074 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.356.7.51 1.463.583 2.359.071.874.071 1.958.071 3.321v2.088c0 1.363 0 2.447-.071 3.321-.074.896-.227 1.66-.583 2.359a6 6 0 0 1-2.622 2.622c-.7.356-1.463.51-2.359.583-.874.071-1.958.071-3.321.071h-2.088c-1.363 0-2.447 0-3.321-.071-.896-.074-1.66-.227-2.359-.583a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C2 15.491 2 14.407 2 13.044v-2.088c0-1.363 0-2.447.071-3.321.074-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C8.509 2 9.593 2 10.956 2ZM8 6.9a1.1 1.1 0 0 0 0 2.2h.01a1.1 1.1 0 0 0 0-2.2zm8 0a1.1 1.1 0 0 0 0 2.2h.01a1.1 1.1 0 0 0 0-2.2zm-8 8a1.1 1.1 0 0 0 0 2.2h.01a1.1 1.1 0 0 0 0-2.2zm8 0a1.1 1.1 0 0 0 0 2.2h.01a1.1 1.1 0 0 0 0-2.2zM7 12a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm9-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
