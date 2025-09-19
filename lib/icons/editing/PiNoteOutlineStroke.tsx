import React from 'react';

/**
 * PiNoteOutlineStroke icon from the stroke style in editing category.
 */
interface PiNoteOutlineStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNoteOutlineStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'note-outline icon',
  ...props
}: PiNoteOutlineStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.002 8q-.003.366-.002.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 20 6.12 20 7.8 20h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 17.72 21 16.88 21 15.2V8.8q0-.434-.002-.8M3.002 8c.008-1.165.055-1.831.325-2.362a3 3 0 0 1 1.311-1.311C5.28 4 6.12 4 7.8 4h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.27.53.317 1.197.325 2.362M3.002 8h17.996" fill="none"/>
    </svg>
  );
}
