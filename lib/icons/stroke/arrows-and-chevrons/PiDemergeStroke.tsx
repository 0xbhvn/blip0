import React from 'react';

/**
 * PiDemergeStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiDemergeStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDemergeStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'demerge icon',
  ...props
}: PiDemergeStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.943 4.286a20.6 20.6 0 0 0-5.296-.2.62.62 0 0 0-.383.178m.022 5.679a20.6 20.6 0 0 1-.2-5.296.62.62 0 0 1 .178-.383m0 0L12 12v8m2.057-15.714a20.6 20.6 0 0 1 5.296-.2c.15.014.284.079.383.178m-.022 5.679a20.6 20.6 0 0 0 .2-5.296.62.62 0 0 0-.178-.383m0 0L15 9" fill="none"/>
    </svg>
  );
}
