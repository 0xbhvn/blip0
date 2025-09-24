import React from 'react';

/**
 * PiMusicBeamNoteOffSolid icon from the solid style in media category.
 */
interface PiMusicBeamNoteOffSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMusicBeamNoteOffSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'music-beam-note-off icon',
  ...props
}: PiMusicBeamNoteOffSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M19.586 1.173a2.5 2.5 0 0 1 2.158.157c.333-.087.702-.001.963.256a.977.977 0 0 1 0 1.395l-20 19.73a1.01 1.01 0 0 1-1.414 0 .977.977 0 0 1 0-1.395l.261-.258A3.9 3.9 0 0 1 1 19.054c0-2.18 1.79-3.946 4-3.946.728 0 1.412.193 2 .528V8.068a2.96 2.96 0 0 1 1.903-2.755zm-9.097 11.07L9 13.714v-.892z" clipRule="evenodd" fill="currentColor"/><path d="M21 7.862v4.815a4 4 0 0 0-2-.528c-2.21 0-4 1.766-4 3.946 0 2.179 1.79 3.946 4 3.946s4-1.767 4-3.946V7.862a.993.993 0 0 0-1-.987c-.552 0-1 .442-1 .987Z" fill="currentColor"/>
    </svg>
  );
}
