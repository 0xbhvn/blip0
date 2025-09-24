import React from 'react';

/**
 * PiCaptionOffStroke icon from the stroke style in media category.
 */
interface PiCaptionOffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCaptionOffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'caption-off icon',
  ...props
}: PiCaptionOffStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.25 9a3 3 0 0 0-3 3v.5a3 3 0 0 0 1.597 2.653m5.995-.338a3 3 0 0 0 1.908.685m4.238-6.832C21 9.16 21 9.73 21 10.4v3.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 20 16.84 20 14.6 20H9.656m-4.94-.716L2 22m2.716-2.716a4 4 0 0 1-1.28-1.468C3 16.96 3 15.84 3 13.6v-3.2c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 4 7.16 4 9.4 4h5.2c2.24 0 3.36 0 4.216.436q.245.125.468.28M4.716 19.284l4.131-4.131m0 0L19.284 4.716M22 2l-2.716 2.716" fill="none"/>
    </svg>
  );
}
