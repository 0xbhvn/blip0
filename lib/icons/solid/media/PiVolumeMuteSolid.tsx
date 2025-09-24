import React from 'react';

/**
 * PiVolumeMuteSolid icon from the solid style in media category.
 */
interface PiVolumeMuteSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVolumeMuteSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'volume-mute icon',
  ...props
}: PiVolumeMuteSolidProps): React.ReactElement {
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
      <path d="M15 5.087c0-2.524-2.853-3.992-4.907-2.525L7.28 4.572a3.9 3.9 0 0 1-1.514.655A5.93 5.93 0 0 0 1 11.04v1.918a5.93 5.93 0 0 0 4.766 5.814 3.9 3.9 0 0 1 1.514.656l2.813 2.009c2.054 1.468 4.907 0 4.907-2.524z" fill="currentColor"/><path d="M22.707 10.707a1 1 0 0 0-1.414-1.414L19.5 11.086l-1.793-1.793a1 1 0 1 0-1.414 1.414l1.793 1.793-1.793 1.793a1 1 0 0 0 1.414 1.414l1.793-1.793 1.793 1.793a1 1 0 0 0 1.414-1.414L20.914 12.5z" fill="currentColor"/>
    </svg>
  );
}
