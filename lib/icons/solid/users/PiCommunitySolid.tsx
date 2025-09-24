import React from 'react';

/**
 * PiCommunitySolid icon from the solid style in users category.
 */
interface PiCommunitySolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCommunitySolid({
  size = 24,
  color,
  className,
  ariaLabel = 'community icon',
  ...props
}: PiCommunitySolidProps): React.ReactElement {
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
      <path d="M7.328 2A3.596 3.596 0 0 0 4.5 7.815a6.74 6.74 0 0 0-2.66 2.227 1 1 0 1 0 1.635 1.151 4.7 4.7 0 0 1 3.854-2.002c1.593 0 3 .79 3.855 2.002a1 1 0 0 0 1.635 0 4.7 4.7 0 0 1 3.855-2.002c1.592 0 3 .79 3.854 2.002a1 1 0 1 0 1.635-1.151 6.74 6.74 0 0 0-2.66-2.227 3.596 3.596 0 1 0-5.658 0c-.686.32-1.308.75-1.843 1.27a6.7 6.7 0 0 0-1.844-1.27A3.596 3.596 0 0 0 7.328 2Z" fill="currentColor"/><path d="M7.328 12.383A3.596 3.596 0 0 0 4.5 18.198a6.74 6.74 0 0 0-2.66 2.226 1 1 0 0 0 1.635 1.152 4.7 4.7 0 0 1 3.854-2.002c1.593 0 3 .789 3.855 2.002a1 1 0 0 0 1.635 0 4.7 4.7 0 0 1 3.855-2.002c1.592 0 3 .789 3.854 2.002a1 1 0 1 0 1.635-1.152 6.74 6.74 0 0 0-2.66-2.226 3.596 3.596 0 1 0-5.658 0 6.7 6.7 0 0 0-1.843 1.27 6.7 6.7 0 0 0-1.844-1.27 3.596 3.596 0 0 0-2.829-5.815Z" fill="currentColor"/>
    </svg>
  );
}
