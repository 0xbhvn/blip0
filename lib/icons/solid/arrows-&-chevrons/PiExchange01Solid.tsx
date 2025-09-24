import React from 'react';

/**
 * PiExchange01Solid icon from the solid style in arrows-&-chevrons category.
 */
interface PiExchange01SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExchange01Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'exchange-01 icon',
  ...props
}: PiExchange01SolidProps): JSX.Element {
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
      <path d="M4.803 3.419a1.92 1.92 0 0 1 2.394 0c.966.77 1.836 1.646 2.591 2.614a1 1 0 0 1-.887 1.61l-.626-.062A23 23 0 0 0 7 7.491V17a2 2 0 1 0 4 0V7a4 4 0 0 1 8 0v9.51q.639-.028 1.275-.091l.626-.062a1 1 0 0 1 .887 1.61 15.7 15.7 0 0 1-2.59 2.614 1.92 1.92 0 0 1-2.395 0 15.7 15.7 0 0 1-2.591-2.614 1 1 0 0 1 .887-1.61l.626.062q.637.063 1.275.09V7a2 2 0 1 0-4 0v10a4 4 0 0 1-8 0V7.49q-.639.028-1.275.091l-.626.062a1 1 0 0 1-.887-1.61 15.7 15.7 0 0 1 2.59-2.614Z" fill="currentColor"/>
    </svg>
  );
}
