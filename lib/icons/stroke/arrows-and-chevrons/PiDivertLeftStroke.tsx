import React from 'react';

/**
 * PiDivertLeftStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiDivertLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDivertLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'divert-left icon',
  ...props
}: PiDivertLeftStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8.289a20.8 20.8 0 0 0-5.347-.202.63.63 0 0 0-.386.18m0 0c-.1.1-.166.234-.18.386A20.8 20.8 0 0 0 3.29 14m-.022-5.733 7.612 7.612a3 3 0 0 0 4.242 0L22 9" fill="none"/>
    </svg>
  );
}
