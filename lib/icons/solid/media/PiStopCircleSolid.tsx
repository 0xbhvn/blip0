import React from 'react';

/**
 * PiStopCircleSolid icon from the solid style in media category.
 */
interface PiStopCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStopCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'stop-circle icon',
  ...props
}: PiStopCircleSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M1.85 12C1.85 6.394 6.394 1.85 12 1.85S22.15 6.394 22.15 12 17.606 22.15 12 22.15 1.85 17.606 1.85 12Zm7.26-2.454C9 9.76 9 10.04 9 10.6v2.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C9.76 15 10.04 15 10.6 15h2.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C15 14.24 15 13.96 15 13.4v-2.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C14.24 9 13.96 9 13.4 9h-2.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
