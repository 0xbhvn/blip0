import React from 'react';

/**
 * PiMedicinePillCapsuleSolid icon from the solid style in medical category.
 */
interface PiMedicinePillCapsuleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMedicinePillCapsuleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'medicine-pill-capsule icon',
  ...props
}: PiMedicinePillCapsuleSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M20.485 3.515a6.25 6.25 0 0 0-8.841 0L8.286 6.872l8.842 8.842 3.357-3.358a6.25 6.25 0 0 0 0-8.841Zm-3.159 1.979a2.5 2.5 0 0 0-2.845.488L12.713 7.75a1 1 0 0 0 1.414 1.414l1.768-1.768a.5.5 0 0 1 .57-.098 1 1 0 1 0 .861-1.804Z" clipRule="evenodd" fill="currentColor"/><path d="m3.515 11.644 3.357-3.358 8.842 8.842-3.358 3.357a6.252 6.252 0 1 1-8.841-8.841Z" fill="currentColor"/>
    </svg>
  );
}
