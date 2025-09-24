import React from 'react';

/**
 * PiMicMicrophoneSolid icon from the solid style in media category.
 */
interface PiMicMicrophoneSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMicMicrophoneSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'mic-microphone icon',
  ...props
}: PiMicMicrophoneSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M20.453 11.015a5.26 5.26 0 0 1-3.382 1.535l-9.633 8.619a3.263 3.263 0 0 1-4.607-4.607l8.62-9.633a5.28 5.28 0 1 1 9.003 4.086Zm-7.972-2.239 2.743 2.743-9.12 8.16a1.263 1.263 0 0 1-1.782-1.783z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
