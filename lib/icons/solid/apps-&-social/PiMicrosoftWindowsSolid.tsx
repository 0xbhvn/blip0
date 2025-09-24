import React from 'react';

/**
 * PiMicrosoftWindowsSolid icon from the solid style in apps-&-social category.
 */
interface PiMicrosoftWindowsSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMicrosoftWindowsSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'microsoft-windows icon',
  ...props
}: PiMicrosoftWindowsSolidProps): JSX.Element {
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
      <path d="m10 3.982-5.331.592A3 3 0 0 0 2 7.556v3.21h8z" fill="currentColor"/><path d="M2 12.766v3.21a3 3 0 0 0 2.669 2.981L10 19.55v-6.784z" fill="currentColor"/><path d="m11.993 19.771 6.676.742A3 3 0 0 0 22 17.53v-4.765H12v6.889q0 .06-.007.116Z" fill="currentColor"/><path d="M22 10.766V6a3 3 0 0 0-3.331-2.981l-6.676.741q.007.059.007.117v6.889z" fill="currentColor"/>
    </svg>
  );
}
