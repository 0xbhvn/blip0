import React from 'react';

/**
 * PiVideoCallPlusSolid icon from the solid style in devices category.
 */
interface PiVideoCallPlusSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVideoCallPlusSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'video-call-plus icon',
  ...props
}: PiVideoCallPlusSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M17.704 7.302A5 5 0 0 0 13 4H6a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h7a5 5 0 0 0 4.704-3.302l.366.307c1.952 1.64 4.93.252 4.93-2.297V9.292c0-2.55-2.978-3.937-4.93-2.297zm.297 2.778v3.835a1 1 0 0 0 .356.719l1 .84A1 1 0 0 0 21 14.708V9.292a1 1 0 0 0-1.643-.766l-1 .84a1 1 0 0 0-.356.714ZM10.5 9a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
