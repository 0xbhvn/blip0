import React from 'react';

/**
 * PiSendPlaneHorizontalSolid icon from the solid style in communication category.
 */
interface PiSendPlaneHorizontalSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSendPlaneHorizontalSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'send-plane-horizontal icon',
  ...props
}: PiSendPlaneHorizontalSolidProps): JSX.Element {
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
      <path d="M2.13 6.015c-.703-2.391 1.538-4.632 3.93-3.863a55 55 0 0 1 12.875 6.073c.112.072.244.152.387.24.45.272 1.016.616 1.46 1.005C21.43 10.04 22 10.844 22 12c0 1.157-.57 1.961-1.219 2.53-.443.39-1.01.733-1.459 1.006-.143.087-.275.167-.387.24a55 55 0 0 1-12.874 6.073c-2.393.768-4.634-1.472-3.93-3.863l1.255-4.268a1 1 0 0 1 .96-.718h5.489a1 1 0 1 0 0-2h-5.49a1 1 0 0 1-.959-.717z" fill="currentColor"/>
    </svg>
  );
}
