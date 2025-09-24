import React from 'react';

/**
 * PiMaximizeLineArrowSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiMaximizeLineArrowSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMaximizeLineArrowSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'maximize-line-arrow icon',
  ...props
}: PiMaximizeLineArrowSolidProps): React.ReactElement {
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
      <path d="M15.07 6.473q.282.24.553.49l-8.66 8.659q-.25-.273-.49-.554L5.05 13.413a1 1 0 0 0-.64-.348 1 1 0 0 0-1.11.827 21.6 21.6 0 0 0-.21 5.554 1.62 1.62 0 0 0 1.464 1.463c1.842.17 3.708.1 5.554-.208a.997.997 0 0 0 .821-1.152 1 1 0 0 0-.341-.599l-1.656-1.422q-.28-.242-.554-.492l8.66-8.66q.25.274.492.556l1.386 1.613a1 1 0 0 0 1.07.36 1 1 0 0 0 .717-.797c.31-1.846.38-3.712.21-5.554a1.62 1.62 0 0 0-1.465-1.464 21.7 21.7 0 0 0-5.556.21 1 1 0 0 0-.44 1.781z" fill="currentColor"/>
    </svg>
  );
}
