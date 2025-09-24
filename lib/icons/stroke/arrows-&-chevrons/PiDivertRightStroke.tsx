import React from 'react';

/**
 * PiDivertRightStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiDivertRightStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDivertRightStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'divert-right icon',
  ...props
}: PiDivertRightStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 8.289a20.8 20.8 0 0 1 5.347-.202c.152.014.287.08.386.18m0 0c.1.1.166.234.18.386A20.8 20.8 0 0 1 20.71 14m.023-5.733-7.613 7.612a3 3 0 0 1-4.242 0L2 9" fill="none"/>
    </svg>
  );
}
