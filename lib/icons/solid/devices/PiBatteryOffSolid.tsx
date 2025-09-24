import React from 'react';

/**
 * PiBatteryOffSolid icon from the solid style in devices category.
 */
interface PiBatteryOffSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBatteryOffSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'battery-off icon',
  ...props
}: PiBatteryOffSolidProps): React.ReactElement {
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
      <path d="M21.707 3.707a1 1 0 0 0-1.414-1.414L17.38 5.205a6.3 6.3 0 0 0-1.124-.165C15.665 5 14.937 5 14.036 5H7.964c-.901 0-1.629 0-2.22.04-.61.042-1.148.13-1.657.34A5 5 0 0 0 1.38 8.088c-.212.51-.3 1.048-.34 1.656-.04.591-.04 1.319-.04 2.22v.072c0 .901 0 1.629.04 2.22.042.61.13 1.148.34 1.657a5 5 0 0 0 2.622 2.67l-1.71 1.71a1 1 0 1 0 1.415 1.414z" fill="currentColor"/><path d="M20.688 9.014a1 1 0 0 0-1.442-.028l-8.307 8.307A1 1 0 0 0 11.646 19h2.39c.901 0 1.629 0 2.22-.04.61-.042 1.148-.13 1.657-.34a5 5 0 0 0 2.706-2.707c.126-.302.207-.615.262-.947a2 2 0 0 0 .266-.051 2.5 2.5 0 0 0 1.768-1.768c.086-.323.086-.685.085-1.054v-.186c0-.369.001-.731-.085-1.054a2.5 2.5 0 0 0-1.768-1.768 2.5 2.5 0 0 0-.46-.071Z" fill="currentColor"/>
    </svg>
  );
}
