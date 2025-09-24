import React from 'react';

/**
 * PiTroubleshootSolid icon from the solid style in general category.
 */
interface PiTroubleshootSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTroubleshootSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'troubleshoot icon',
  ...props
}: PiTroubleshootSolidProps): JSX.Element {
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
      <path d="M12 2c2.4 0 4.605.847 6.329 2.257l-4.297 4.297A4 4 0 0 0 12 8c-.742 0-1.437.202-2.032.554L5.671 4.257A9.96 9.96 0 0 1 12 2Z" fill="currentColor"/><path d="M2 12c0-2.4.847-4.605 2.257-6.329l4.297 4.297A4 4 0 0 0 8 12c0 .741.202 1.436.554 2.032l-4.297 4.297A9.96 9.96 0 0 1 2 12Z" fill="currentColor"/><path d="M12 22c-2.4 0-4.605-.847-6.329-2.257l4.297-4.297c.595.352 1.29.554 2.032.554.741 0 1.436-.202 2.032-.554l4.297 4.297A9.96 9.96 0 0 1 12 22Z" fill="currentColor"/><path d="M22 12c0 2.4-.847 4.605-2.257 6.329l-4.297-4.297c.352-.596.554-1.29.554-2.032 0-.741-.202-1.436-.554-2.032l4.297-4.297A9.96 9.96 0 0 1 22 12Z" fill="currentColor"/>
    </svg>
  );
}
