import React from 'react';

/**
 * PiSettings03Solid icon from the solid style in general category.
 */
interface PiSettings03SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSettings03Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'settings-03 icon',
  ...props
}: PiSettings03SolidProps): JSX.Element {
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
      <path d="M10.899 2.116a5.3 5.3 0 0 1 2.203 0c.823.175 1.58.611 2.695 1.256l1.78 1.027c1.117.644 1.874 1.08 2.437 1.705a5.3 5.3 0 0 1 1.102 1.907c.26.8.26 1.674.26 2.961v2.056c0 1.287 0 2.16-.26 2.96a5.3 5.3 0 0 1-1.102 1.908c-.563.625-1.32 1.061-2.436 1.705l-1.781 1.027c-1.116.645-1.872 1.081-2.696 1.256a5.3 5.3 0 0 1-2.202 0c-.823-.175-1.58-.611-2.696-1.256l-1.78-1.027c-1.117-.644-1.874-1.08-2.437-1.705a5.3 5.3 0 0 1-1.102-1.907c-.26-.8-.26-1.674-.259-2.961v-2.056c0-1.287 0-2.16.26-2.96a5.3 5.3 0 0 1 1.101-1.908C4.55 5.48 5.306 5.043 6.422 4.4l1.781-1.027C9.32 2.727 10.076 2.29 10.9 2.116ZM12 9.9a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Z" fill="currentColor"/>
    </svg>
  );
}
