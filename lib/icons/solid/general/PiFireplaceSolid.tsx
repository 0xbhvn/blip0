import React from 'react';

/**
 * PiFireplaceSolid icon from the solid style in general category.
 */
interface PiFireplaceSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFireplaceSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'fireplace icon',
  ...props
}: PiFireplaceSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v1a2.5 2.5 0 0 1-2 2.45V20h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1V7.95A2.5 2.5 0 0 1 2 5.5zM18 20V8H6v12zm-5.78-9.918a1 1 0 0 1 .914.063c.591.357 1.286.975 1.84 1.751.555.778 1.026 1.795 1.026 2.944 0 .958-.322 1.947-1.006 2.708-.7.78-1.726 1.259-2.994 1.259-1.267 0-2.293-.48-2.994-1.259C8.322 16.787 8 15.798 8 14.84c0-1.161.48-2.189 1.044-2.97a1 1 0 0 1 1.63.01c.138.197.293.393.44.568l.002-.002c.212-.43.39-1.038.522-1.655a1 1 0 0 1 .581-.709Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
