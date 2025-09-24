import React from 'react';

/**
 * PiBicepsStroke icon from the stroke style in sports category.
 */
interface PiBicepsStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBicepsStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'biceps icon',
  ...props
}: PiBicepsStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.342 7.244.075.057a2 2 0 0 0 2.614-.186l1.609-1.608a1 1 0 0 0 .125-1.262l-.903-1.354A2 2 0 0 0 10.198 2H6.6a1 1 0 0 0-.938.654L4.058 7.008a30 30 0 0 0-1.809 8.794l-.153 2.921a2 2 0 0 0 1.7 2.083l1.01.151a48 48 0 0 0 13.908.049l1.569-.224A2 2 0 0 0 22 18.802v-4.716a2 2 0 0 0-1.257-1.857l-1.604-.642a5.93 5.93 0 0 0-7.505 2.854l-.366.73-.975 2.439.182-2.544a12.24 12.24 0 0 0-2.133-7.822Zm0 0-.488-.366" fill="none"/>
    </svg>
  );
}
