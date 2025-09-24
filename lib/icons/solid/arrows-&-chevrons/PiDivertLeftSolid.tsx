import React from 'react';

/**
 * PiDivertLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiDivertLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDivertLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'divert-left icon',
  ...props
}: PiDivertLeftSolidProps): JSX.Element {
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
      <path d="M3.56 7.091c1.859-.172 3.743-.1 5.605.211a1 1 0 0 1 .46 1.767l-1.1.88q-.599.48-1.163.998l4.224 4.225a2 2 0 0 0 2.828 0l6.879-6.88a1 1 0 1 1 1.414 1.415l-6.879 6.879a4 4 0 0 1-5.656 0l-4.225-4.224a23 23 0 0 0-.997 1.164l-.88 1.1a1 1 0 0 1-1.768-.46 21.8 21.8 0 0 1-.21-5.605A1.625 1.625 0 0 1 3.56 7.09Z" fill="currentColor"/>
    </svg>
  );
}
