import React from 'react';

/**
 * PiAcWaterSolid icon from the solid style in appliances category.
 */
interface PiAcWaterSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcWaterSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-water icon',
  ...props
}: PiAcWaterSolidProps): JSX.Element {
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
      <path d="M4 3a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3zm11 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z" fill="currentColor"/><path d="M16.16 14.262c.173-.105.475-.262.84-.262s.667.157.84.262c.201.122.395.279.572.442.356.33.728.765 1.064 1.234.337.472.658 1.007.898 1.546.234.524.426 1.128.426 1.716a3.8 3.8 0 1 1-7.6 0c0-.588.192-1.192.426-1.716.24-.539.56-1.074.898-1.546.336-.47.708-.904 1.064-1.234.177-.163.37-.32.572-.442Z" fill="currentColor"/>
    </svg>
  );
}
