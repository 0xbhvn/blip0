import React from 'react';

/**
 * PiVolumeOneSolid icon from the solid style in media category.
 */
interface PiVolumeOneSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVolumeOneSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'volume-one icon',
  ...props
}: PiVolumeOneSolidProps): React.ReactElement {
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
      <path d="M15 5.087c0-2.524-2.853-3.992-4.907-2.525L7.28 4.572a3.9 3.9 0 0 1-1.514.655A5.93 5.93 0 0 0 1 11.04v1.918a5.93 5.93 0 0 0 4.766 5.814 3.9 3.9 0 0 1 1.514.656l2.813 2.009c2.054 1.468 4.907 0 4.907-2.524z" fill="currentColor"/><path d="M18.638 9.23a1 1 0 0 0-1.276 1.54c.218.18.379.385.484.595S18 11.789 18 12s-.05.426-.154.635a1.9 1.9 0 0 1-.484.595 1 1 0 0 0 1.276 1.54 3.9 3.9 0 0 0 .996-1.24c.24-.478.366-.998.366-1.53s-.127-1.052-.366-1.53a3.9 3.9 0 0 0-.996-1.24Z" fill="currentColor"/>
    </svg>
  );
}
