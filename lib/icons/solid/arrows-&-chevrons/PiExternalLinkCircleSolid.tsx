import React from 'react';

/**
 * PiExternalLinkCircleSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiExternalLinkCircleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExternalLinkCircleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'external-link-circle icon',
  ...props
}: PiExternalLinkCircleSolidProps): React.ReactElement {
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
      <path d="M19.561 3.103a19.8 19.8 0 0 0-5.174.15 1 1 0 0 0-.49 1.749l1.347 1.146q.322.275.634.56l-6.585 6.585a1 1 0 1 0 1.414 1.414l6.585-6.585q.285.313.56.634l1.146 1.347a1 1 0 0 0 1.749-.49c.276-1.718.326-3.458.15-5.174a1.496 1.496 0 0 0-1.336-1.336Z" fill="currentColor"/><path d="M10.585 5.022a1 1 0 0 0-.17-1.993A8.11 8.11 0 0 0 3 11.111V12a9 9 0 0 0 9 9h.889a8.11 8.11 0 0 0 8.082-7.415 1 1 0 1 0-1.993-.17A6.11 6.11 0 0 1 12.888 19H12a7 7 0 0 1-7-7v-.889a6.11 6.11 0 0 1 5.585-6.089Z" fill="currentColor"/>
    </svg>
  );
}
