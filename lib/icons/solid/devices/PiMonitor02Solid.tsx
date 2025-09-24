import React from 'react';

/**
 * PiMonitor02Solid icon from the solid style in devices category.
 */
interface PiMonitor02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMonitor02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'monitor-02 icon',
  ...props
}: PiMonitor02SolidProps): JSX.Element {
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
      <path d="M4.364 1c-.39 0-.74 0-1.03.024a2.5 2.5 0 0 0-.969.248 2.5 2.5 0 0 0-1.093 1.093 2.5 2.5 0 0 0-.248.968C1 3.625 1 3.975 1 4.363v10.273c0 .39 0 .74.024 1.03.025.313.083.644.248.969a2.5 2.5 0 0 0 1.093 1.092c.325.166.656.224.968.25.292.023.642.023 1.03.023H11v1.913c-1.552.118-3.085.511-4.447 1.193a1 1 0 1 0 .894 1.788c1.346-.672 2.94-1.019 4.553-1.019s3.207.347 4.553 1.02a1 1 0 1 0 .894-1.79c-1.362-.68-2.895-1.074-4.447-1.192V18h6.636c.39 0 .74 0 1.03-.024.313-.025.644-.083.969-.248a2.5 2.5 0 0 0 1.092-1.093 2.5 2.5 0 0 0 .25-.968c.023-.292.023-.642.023-1.03V4.363c0-.39 0-.74-.024-1.03a2.5 2.5 0 0 0-.248-.969 2.5 2.5 0 0 0-1.093-1.093 2.5 2.5 0 0 0-.968-.248C20.375 1 20.025 1 19.637 1z" fill="currentColor"/>
    </svg>
  );
}
