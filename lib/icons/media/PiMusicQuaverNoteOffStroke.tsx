import React from 'react';

/**
 * PiMusicQuaverNoteOffStroke icon from the stroke style in media category.
 */
interface PiMusicQuaverNoteOffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMusicQuaverNoteOffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'music-quaver-note-off icon',
  ...props
}: PiMusicQuaverNoteOffStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18.998a3 3 0 0 1-4.127 2.783M12 18.998a3 3 0 0 0-.218-1.126M12 18.998v-1.344M12 12V3.643a1.64 1.64 0 0 1 2.374-1.468A6.56 6.56 0 0 1 17.75 6.25M12 12l5.75-5.75M12 12l-4.285 4.285M22 2l-4.25 4.25M7.715 16.285a3 3 0 0 0-1.426 1.426m1.426-1.426-1.426 1.426m0 0L2 22" fill="none"/>
    </svg>
  );
}
