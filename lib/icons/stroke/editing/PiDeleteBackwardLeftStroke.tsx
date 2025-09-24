import React from 'react';

/**
 * PiDeleteBackwardLeftStroke icon from the stroke style in editing category.
 */
interface PiDeleteBackwardLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDeleteBackwardLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'delete-backward-left icon',
  ...props
}: PiDeleteBackwardLeftStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m16 15-3-3m0 0-3-3m3 3 3-3m-3 3-3 3M6.625 6.02a33 33 0 0 0-4.419 5.287A1.24 1.24 0 0 0 2 12c0 .245.069.49.206.693a33 33 0 0 0 4.42 5.287c.357.346.536.518.784.667.207.123.476.232.71.287.282.066.561.066 1.119.066H17c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C21 17.1 21 16.4 21 15V9c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C19.1 5 18.4 5 17 5H9.239c-.558 0-.837 0-1.119.066a2.7 2.7 0 0 0-.71.287c-.248.149-.427.322-.785.667Z" fill="none"/>
    </svg>
  );
}
