import React from 'react';

/**
 * PiArrowDownCircleSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowDownCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowDownCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-down-circle icon',
  ...props
}: PiArrowDownCircleSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M22.15 12c0 5.605-4.544 10.15-10.15 10.15S1.85 17.606 1.85 12 6.394 1.85 12 1.85 22.15 6.394 22.15 12Zm-6.958-.537A19.4 19.4 0 0 1 13 13.986V8a1 1 0 1 0-2 0v5.986a19.4 19.4 0 0 1-2.191-2.523 1 1 0 1 0-1.617 1.177 21.3 21.3 0 0 0 3.78 3.994 1.626 1.626 0 0 0 2.056 0 21.3 21.3 0 0 0 3.78-3.994 1 1 0 0 0-1.616-1.177Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
