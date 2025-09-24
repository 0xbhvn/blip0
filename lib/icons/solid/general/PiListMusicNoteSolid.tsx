import React from 'react';

/**
 * PiListMusicNoteSolid icon from the solid style in general category.
 */
interface PiListMusicNoteSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListMusicNoteSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'list-music-note icon',
  ...props
}: PiListMusicNoteSolidProps): JSX.Element {
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
      <path d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M19 13.023c0-.763-.38-1.467-1-1.888V17.5a2.5 2.5 0 1 1-2-2.451v-4.228a1.82 1.82 0 0 1 2.634-1.629A4.28 4.28 0 0 1 21 13.023c0 .651-.134 1.295-.4 1.888a1 1 0 0 1-1.824-.822A2.6 2.6 0 0 0 19 13.023Z" fill="currentColor"/><path d="M4 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M4 17a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}
