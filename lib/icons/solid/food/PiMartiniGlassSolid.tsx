import React from 'react';

/**
 * PiMartiniGlassSolid icon from the solid style in food category.
 */
interface PiMartiniGlassSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMartiniGlassSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'martini-glass icon',
  ...props
}: PiMartiniGlassSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M3 3a1 1 0 0 0-.707 1.707L11 13.414V20H7a1 1 0 1 0 0 2h10.5a1 1 0 1 0 0-2H13v-6.586l8.707-8.707A1 1 0 0 0 21 3zm14.553 3.033a71 71 0 0 1-11.106 0L5.414 5h13.172z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
