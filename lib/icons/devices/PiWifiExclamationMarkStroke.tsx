import React from 'react';

/**
 * PiWifiExclamationMarkStroke icon from the stroke style in devices category.
 */
interface PiWifiExclamationMarkStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWifiExclamationMarkStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'wifi-exclamation-mark icon',
  ...props
}: PiWifiExclamationMarkStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19.5h.01M15 4.78a15.95 15.95 0 0 1 7.806 3.92m-21.613 0A15.95 15.95 0 0 1 9 4.78m-4.268 7.463A11 11 0 0 1 9 9.914m6 0a11 11 0 0 1 4.268 2.329M15 15.303a6 6 0 0 1 .698.472m-7.443.037a6 6 0 0 1 .745-.51M12 4v12" fill="none"/>
    </svg>
  );
}
