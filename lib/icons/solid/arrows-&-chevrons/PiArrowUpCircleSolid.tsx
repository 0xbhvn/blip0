import React from 'react';

/**
 * PiArrowUpCircleSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowUpCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowUpCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-up-circle icon',
  ...props
}: PiArrowUpCircleSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12 17.606 22.15 12 22.15 1.85 17.606 1.85 12Zm6.959.537c.66-.906 1.393-1.75 2.191-2.523V16a1 1 0 1 0 2 0v-5.986a19.4 19.4 0 0 1 2.192 2.523 1 1 0 0 0 1.616-1.177 21.3 21.3 0 0 0-3.78-3.994 1.626 1.626 0 0 0-2.055 0 21.3 21.3 0 0 0-3.781 3.994 1 1 0 0 0 1.617 1.177Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
