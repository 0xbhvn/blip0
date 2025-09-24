import React from 'react';

/**
 * PiDeleteDustbin01Solid icon from the solid style in general category.
 */
interface PiDeleteDustbin01SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDeleteDustbin01Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'delete-dustbin-01 icon',
  ...props
}: PiDeleteDustbin01SolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M12 1a4.24 4.24 0 0 0-3.789 2.342L7.382 5H4a1 1 0 0 0 0 2h1v8.036c0 .901 0 1.629.04 2.22.042.61.13 1.148.34 1.657a5 5 0 0 0 2.707 2.706c.51.212 1.048.3 1.656.34.592.041 1.32.041 2.221.041h.072c.901 0 1.629 0 2.22-.04.61-.042 1.148-.13 1.657-.34a5 5 0 0 0 2.706-2.707c.212-.51.3-1.048.34-1.656.041-.592.041-1.32.041-2.222V7h1a1 1 0 1 0 0-2h-3.382l-.83-1.658A4.24 4.24 0 0 0 12 1Zm-2 3.236L9.618 5h4.764L14 4.236a2.236 2.236 0 0 0-4 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
