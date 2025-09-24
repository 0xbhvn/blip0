import React from 'react';

/**
 * PiScissorsLeftCutStroke icon from the stroke style in editing category.
 */
interface PiScissorsLeftCutStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScissorsLeftCutStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'scissors-left-cut icon',
  ...props
}: PiScissorsLeftCutStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5.292 19.264 7.388-7.389m0 0L5.292 4.486m7.388 7.389 3.039 3.039m-3.039-3.039 3.039-3.039m0 6.078a3.167 3.167 0 1 1 4.478 4.478 3.167 3.167 0 0 1-4.478-4.478Zm0-6.078a3.167 3.167 0 1 1 4.478-4.478 3.167 3.167 0 0 1-4.478 4.478Zm-8.844 3.039h1m-5 0h1" fill="none"/>
    </svg>
  );
}
