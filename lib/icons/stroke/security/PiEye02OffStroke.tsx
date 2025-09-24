import React from 'react';

/**
 * PiEye02OffStroke icon from the stroke style in security category.
 */
interface PiEye02OffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEye02OffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'eye-02-off icon',
  ...props
}: PiEye02OffStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m22 2-5.831 5.831m0 0L12.87 11.13m3.3-3.3C15.008 7.32 13.623 7 12 7c-6.3 0-9 4.813-9 7m9.872-2.871L9.128 14.87m3.742-3.742a3 3 0 0 0-3.743 3.743m0 0L2 22m17.391-11.735C20.49 11.598 21 13.048 21 14m-8.249 2.905a3 3 0 0 0 2.154-2.154" fill="none"/>
    </svg>
  );
}
