import React from 'react';

/**
 * PiArrowLeftCircleSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowLeftCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowLeftCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-left-circle icon',
  ...props
}: PiArrowLeftCircleSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M12 22.15C6.394 22.15 1.85 17.606 1.85 12S6.394 1.85 12 1.85 22.15 6.394 22.15 12c0 5.605-4.544 10.15-10.15 10.15Zm.537-6.959A19.4 19.4 0 0 1 10.014 13H16a1 1 0 1 0 0-2h-5.986a19.4 19.4 0 0 1 2.523-2.192 1 1 0 0 0-1.177-1.617 21.3 21.3 0 0 0-3.994 3.782 1.626 1.626 0 0 0 0 2.054 21.3 21.3 0 0 0 3.994 3.781 1 1 0 1 0 1.177-1.617Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
