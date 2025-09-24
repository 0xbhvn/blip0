import React from 'react';

/**
 * PiVercelSolid icon from the solid style in apps-&-social category.
 */
interface PiVercelSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVercelSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'vercel icon',
  ...props
}: PiVercelSolidProps): React.ReactElement {
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
      <path d="M13.724 2.959c-.774-1.315-2.675-1.315-3.448 0L2.025 16.986C1.24 18.32 2.202 20 3.748 20h16.504c1.546 0 2.508-1.68 1.723-3.014z" fill="currentColor"/>
    </svg>
  );
}
