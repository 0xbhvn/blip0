import React from 'react';

/**
 * PiTvSolid icon from the solid style in appliances category.
 */
interface PiTvSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTvSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'tv icon',
  ...props
}: PiTvSolidProps): React.ReactElement {
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
      <path d="M4.364 3c-.39 0-.74 0-1.03.024a2.5 2.5 0 0 0-.969.248 2.5 2.5 0 0 0-1.093 1.093 2.5 2.5 0 0 0-.248.968C1 5.625 1 5.975 1 6.363v9.273c0 .39 0 .74.024 1.03.025.313.083.644.248.969a2.5 2.5 0 0 0 1.093 1.092c.325.166.656.224.968.25.232.018.502.022.799.023l-.964 1.445a1 1 0 0 0 1.664 1.11L6.535 19h10.93l1.703 2.555a1 1 0 0 0 1.664-1.11L19.868 19c.297 0 .567-.005.799-.024.312-.025.643-.083.968-.248a2.5 2.5 0 0 0 1.092-1.093 2.5 2.5 0 0 0 .25-.968c.023-.292.023-.642.023-1.03V6.363c0-.39 0-.74-.024-1.03a2.5 2.5 0 0 0-.248-.969 2.5 2.5 0 0 0-1.093-1.093 2.5 2.5 0 0 0-.968-.248C20.375 3 20.025 3 19.637 3z" fill="currentColor"/>
    </svg>
  );
}
