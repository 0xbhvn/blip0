import React from 'react';

/**
 * PiListHeartSolid icon from the solid style in general category.
 */
interface PiListHeartSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListHeartSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'list-heart icon',
  ...props
}: PiListHeartSolidProps): React.ReactElement {
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
      <path d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M19.214 10.827a2.87 2.87 0 0 0-1.503.38 2.94 2.94 0 0 0-1.482-.38C14.644 10.827 13 12.1 13 13.994c0 1.704 1.11 3.04 2.062 3.869a9 9 0 0 0 1.42 1.01c.207.12.403.218.573.29q.127.056.262.099c.064.02.217.065.397.065s.334-.046.398-.065a3 3 0 0 0 .262-.098 6 6 0 0 0 .573-.29c.416-.238.924-.58 1.42-1.011.952-.828 2.062-2.165 2.062-3.87 0-1.905-1.654-3.144-3.215-3.166Z" fill="currentColor"/><path d="M4 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/><path d="M4 17a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}
