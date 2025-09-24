import React from 'react';

/**
 * PiWindowPictureInPictureStroke icon from the stroke style in devices category.
 */
interface PiWindowPictureInPictureStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowPictureInPictureStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'window-picture-in-picture icon',
  ...props
}: PiWindowPictureInPictureStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 9.216V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2.22" fill="none"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.6 13c.84 0 1.26 0 1.581.164a1.5 1.5 0 0 1 .656.655c.163.32.163.74.163 1.581v2.2c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163h-4.2c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.655-.656C12 18.861 12 18.441 12 17.6v-2.2c0-.84 0-1.26.164-1.581a1.5 1.5 0 0 1 .655-.655c.32-.164.74-.164 1.581-.164z" fill="none"/>
    </svg>
  );
}
