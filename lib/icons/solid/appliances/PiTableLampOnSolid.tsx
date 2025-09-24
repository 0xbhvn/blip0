import React from 'react';

/**
 * PiTableLampOnSolid icon from the solid style in appliances category.
 */
interface PiTableLampOnSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTableLampOnSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'table-lamp-on icon',
  ...props
}: PiTableLampOnSolidProps): JSX.Element {
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
      <path d="M8.612 2a3 3 0 0 0-2.827 1.995l-2.727 7.67A1 1 0 0 0 4 13h7v4h-1a3 3 0 0 0-3 3v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-1v-4h7a1 1 0 0 0 .942-1.335l-2.727-7.67A3 3 0 0 0 15.39 2z" fill="currentColor"/><path d="M6.894 15.447a1 1 0 1 0-1.788-.894l-1 2a1 1 0 1 0 1.788.894z" fill="currentColor"/><path d="M18.894 14.553a1 1 0 1 0-1.788.894l1 2a1 1 0 1 0 1.788-.894z" fill="currentColor"/>
    </svg>
  );
}
