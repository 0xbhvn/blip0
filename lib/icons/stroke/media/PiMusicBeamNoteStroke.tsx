import React from 'react';

/**
 * PiMusicBeamNoteStroke icon from the stroke style in media category.
 */
interface PiMusicBeamNoteStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMusicBeamNoteStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'music-beam-note icon',
  ...props
}: PiMusicBeamNoteStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12V7.863a2 2 0 0 1 1.269-1.861l10.683-4.197A1.5 1.5 0 0 1 22 3.2v3.3M8 12v7m0-7 14-5.5M8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM22 6.5V16m0 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fill="none"/>
    </svg>
  );
}
