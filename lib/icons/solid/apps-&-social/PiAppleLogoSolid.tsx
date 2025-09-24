import React from 'react';

/**
 * PiAppleLogoSolid icon from the solid style in apps-&-social category.
 */
interface PiAppleLogoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAppleLogoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'apple-logo icon',
  ...props
}: PiAppleLogoSolidProps): React.ReactElement {
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
      <path d="M12.535 2.836c.882-.97 2.266-1.536 4.22-1.536a.7.7 0 0 1 .7.692A4.7 4.7 0 0 1 16.1 5.37c-.925.931-2.282 1.511-4.003 1.506a.7.7 0 0 1-.698-.691c-.015-1.15.265-2.392 1.136-3.35Z" fill="currentColor"/><path d="M15.791 7.42a5.35 5.35 0 0 1 4.174 2.185 1 1 0 0 1-.273 1.442c-1.112.695-1.532 1.716-1.436 2.682.097.984.747 2.037 2.044 2.696a1 1 0 0 1 .474 1.269 13.5 13.5 0 0 1-1.918 3.229c-.429.525-.926 1.027-1.477 1.406-.548.376-1.21.67-1.946.67-.884 0-1.457-.25-1.898-.443l-.034-.015c-.392-.171-.68-.291-1.207-.291-.526 0-.814.12-1.184.286l-.058.027c-.41.184-.957.431-1.777.436-.843.03-1.638-.402-2.274-.915-.67-.54-1.313-1.287-1.87-2.135-1.106-1.684-1.979-3.932-1.979-6.098 0-4.124 3.004-6.319 5.771-6.337.854-.054 1.604.2 2.143.403l.29.112c.156.06.283.11.418.155.2.068.292.079.324.079.004 0 .03-.003.087-.016q.099-.024.268-.084c.147-.052.266-.1.404-.155.124-.049.263-.104.448-.173.638-.24 1.52-.521 2.486-.415Z" fill="currentColor"/>
    </svg>
  );
}
