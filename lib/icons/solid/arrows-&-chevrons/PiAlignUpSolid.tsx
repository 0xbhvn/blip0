import React from 'react';

/**
 * PiAlignUpSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiAlignUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'align-up icon',
  ...props
}: PiAlignUpSolidProps): React.ReactElement {
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
      <path d="M11 20a1 1 0 1 0 2 0v-7.124q1.503.03 3.003.152a1 1 0 0 0 .886-1.59 21.8 21.8 0 0 0-3.853-4.069 1.64 1.64 0 0 0-2.072 0 21.8 21.8 0 0 0-3.853 4.069 1 1 0 0 0 .886 1.59q1.5-.122 3.003-.152z" fill="currentColor"/><path d="M19 5a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2z" fill="currentColor"/>
    </svg>
  );
}
