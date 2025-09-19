import React from 'react';

/**
 * PiCommunityStroke icon from the stroke style in users category.
 */
interface PiCommunityStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCommunityStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'community icon',
  ...props
}: PiCommunityStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.328 8.191a2.596 2.596 0 1 1 0-5.191 2.596 2.596 0 0 1 0 5.191Zm0 0c1.932 0 3.639.959 4.673 2.426a5.7 5.7 0 0 1 4.672-2.426m-9.345 0a5.7 5.7 0 0 0-4.672 2.426m14.017-2.426a2.596 2.596 0 1 1 0-5.191 2.596 2.596 0 0 1 0 5.191Zm0 0c1.93 0 3.638.959 4.672 2.426M7.328 18.575a2.596 2.596 0 1 1 0-5.192 2.596 2.596 0 0 1 0 5.192Zm0 0c1.932 0 3.639.958 4.673 2.426a5.7 5.7 0 0 1 4.672-2.426m-9.345 0A5.7 5.7 0 0 0 2.656 21m14.017-2.426a2.596 2.596 0 1 1 0-5.192 2.596 2.596 0 0 1 0 5.192Zm0 0c1.93 0 3.638.958 4.672 2.426" fill="none"/>
    </svg>
  );
}
