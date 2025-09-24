import React from 'react';

/**
 * PiMusicBeamNoteSolid icon from the solid style in media category.
 */
interface PiMusicBeamNoteSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMusicBeamNoteSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'music-beam-note icon',
  ...props
}: PiMusicBeamNoteSolidProps): JSX.Element {
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
      <path d="M21 7.967 9 12.682V19a4 4 0 1 1-2-3.465V7.863a3 3 0 0 1 1.903-2.792L19.586.874A2.5 2.5 0 0 1 23 3.201V16a4 4 0 1 1-2-3.465z" fill="currentColor"/>
    </svg>
  );
}
