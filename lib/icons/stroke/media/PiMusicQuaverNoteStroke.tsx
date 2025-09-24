import React from 'react';

/**
 * PiMusicQuaverNoteStroke icon from the stroke style in media category.
 */
interface PiMusicQuaverNoteStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMusicQuaverNoteStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'music-quaver-note icon',
  ...props
}: PiMusicQuaverNoteStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18.998V3.643a1.64 1.64 0 0 1 2.374-1.468A6.56 6.56 0 0 1 18 8.046 7.07 7.07 0 0 1 16.819 12M12 18.998a3 3 0 1 1-3-3.002 3 3 0 0 1 3 3.002Z" fill="none"/>
    </svg>
  );
}
