import React from 'react';

/**
 * PiExchangeSolid icon from the solid style in general category.
 */
interface PiExchangeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExchangeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'exchange icon',
  ...props
}: PiExchangeSolidProps): JSX.Element {
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
      <path d="M7 1.85a4.15 4.15 0 1 0 0 8.3 4.15 4.15 0 0 0 0-8.3Z" fill="currentColor"/><path d="M18 3a1 1 0 1 0-2 0v4.407c-.332-.03-.668-.07-1.02-.113q-.42-.052-.876-.1a1 1 0 0 0-.904 1.594 16 16 0 0 0 2.727 2.831 1.7 1.7 0 0 0 2.146 0A16 16 0 0 0 20.8 8.79a1 1 0 0 0-.903-1.596q-.457.05-.876.1c-.352.043-.69.084-1.02.114z" fill="currentColor"/><path d="M7 12c-.38 0-.76.127-1.073.38A16 16 0 0 0 3.2 15.211a1 1 0 0 0 .903 1.595q.457-.05.877-.1c.352-.043.688-.083 1.02-.113V21a1 1 0 1 0 2 0v-4.407c.332.03.668.07 1.02.112q.42.053.877.1a1 1 0 0 0 .903-1.594 16 16 0 0 0-2.727-2.831A1.7 1.7 0 0 0 7 12Z" fill="currentColor"/><path d="M17 13.85a4.15 4.15 0 1 0 0 8.3 4.15 4.15 0 0 0 0-8.3Z" fill="currentColor"/>
    </svg>
  );
}
