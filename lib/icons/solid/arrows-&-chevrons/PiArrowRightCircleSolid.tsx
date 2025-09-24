import React from 'react';

/**
 * PiArrowRightCircleSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowRightCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowRightCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-right-circle icon',
  ...props
}: PiArrowRightCircleSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M12 1.85c5.605 0 10.15 4.544 10.15 10.15S17.606 22.15 12 22.15 1.85 17.606 1.85 12 6.394 1.85 12 1.85Zm-.537 6.959c.906.66 1.75 1.393 2.523 2.191H8a1 1 0 1 0 0 2h5.986a19.4 19.4 0 0 1-2.523 2.192 1 1 0 1 0 1.177 1.616 21.3 21.3 0 0 0 3.994-3.78 1.626 1.626 0 0 0 0-2.055 21.3 21.3 0 0 0-3.994-3.781 1 1 0 1 0-1.177 1.617Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
