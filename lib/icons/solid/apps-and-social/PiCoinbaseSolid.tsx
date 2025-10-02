import React from 'react';

/**
 * PiCoinbaseSolid icon from the solid style in apps-&-social category.
 */
interface PiCoinbaseSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCoinbaseSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'coinbase icon',
  ...props
}: PiCoinbaseSolidProps): React.ReactElement {
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
      <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75c4.775 0 8.747-3.432 9.587-7.963a.75.75 0 0 0-.738-.887h-5.48a.75.75 0 0 0-.674.42 3 3 0 1 1 0-2.64.75.75 0 0 0 .673.42h5.481a.75.75 0 0 0 .738-.887C20.747 5.682 16.775 2.25 12 2.25Z" fill="currentColor"/>
    </svg>
  );
}
