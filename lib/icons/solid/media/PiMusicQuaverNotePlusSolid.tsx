import React from 'react';

/**
 * PiMusicQuaverNotePlusSolid icon from the solid style in media category.
 */
interface PiMusicQuaverNotePlusSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMusicQuaverNotePlusSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'music-quaver-note-plus icon',
  ...props
}: PiMusicQuaverNotePlusSolidProps): JSX.Element {
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
      <path d="M15.926 3.07a.64.64 0 0 0-.926.573v15.355a4 4 0 1 1-4-4.002 4 4 0 0 1 2 .536V3.643c0-1.962 2.065-3.24 3.821-2.362A7.56 7.56 0 0 1 21 8.046c0 1.607-.455 3.18-1.352 4.512a1 1 0 1 1-1.659-1.116A6.07 6.07 0 0 0 19 8.046a5.56 5.56 0 0 0-3.074-4.976Z" fill="currentColor"/><path d="M8 4a1 1 0 1 0-2 0v2H4a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0V8h2a1 1 0 1 0 0-2H8z" fill="currentColor"/>
    </svg>
  );
}
