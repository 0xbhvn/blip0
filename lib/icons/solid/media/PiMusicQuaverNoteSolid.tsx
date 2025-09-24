import React from 'react';

/**
 * PiMusicQuaverNoteSolid icon from the solid style in media category.
 */
interface PiMusicQuaverNoteSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMusicQuaverNoteSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'music-quaver-note icon',
  ...props
}: PiMusicQuaverNoteSolidProps): JSX.Element {
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
      <path d="M13 3.643a.64.64 0 0 1 .926-.573A5.56 5.56 0 0 1 17 8.046c0 1.23-.348 2.41-1.01 3.396a1 1 0 0 0 1.658 1.116A8.06 8.06 0 0 0 19 8.046a7.56 7.56 0 0 0-4.179-6.765C13.065.402 11 1.68 11 3.643v11.889a4 4 0 0 0-6 3.466 4 4 0 1 0 8 0z" fill="currentColor"/>
    </svg>
  );
}
