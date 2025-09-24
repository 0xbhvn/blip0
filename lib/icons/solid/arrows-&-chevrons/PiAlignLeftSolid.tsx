import React from 'react';

/**
 * PiAlignLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiAlignLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'align-left icon',
  ...props
}: PiAlignLeftSolidProps): JSX.Element {
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
      <path d="M20 11a1 1 0 1 1 0 2h-7.124q.03 1.503.152 3.003a1 1 0 0 1-1.59.886 21.8 21.8 0 0 1-4.069-3.853 1.64 1.64 0 0 1 0-2.072 21.8 21.8 0 0 1 4.069-3.853 1 1 0 0 1 1.59.886q-.122 1.5-.152 3.003z" fill="currentColor"/><path d="M5 19a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0z" fill="currentColor"/>
    </svg>
  );
}
