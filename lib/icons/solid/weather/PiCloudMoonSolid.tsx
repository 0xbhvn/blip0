import React from 'react';

/**
 * PiCloudMoonSolid icon from the solid style in weather category.
 */
interface PiCloudMoonSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudMoonSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-moon icon',
  ...props
}: PiCloudMoonSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M16.5 1a6.5 6.5 0 0 0-6.2 4.539q.395-.039.799-.039a8.13 8.13 0 0 1 7.31 4.566 7.3 7.3 0 0 1 2.341 2.351A6.5 6.5 0 0 0 23 7.5v-.041a1 1 0 0 0-1.5-.86 3 3 0 0 1-4.098-4.098 1 1 0 0 0-.86-1.5zm-6.053 6.283q.323-.033.653-.033a6.385 6.385 0 0 1 5.945 4.053 5.517 5.517 0 0 1-2.478 10.447H5.9a4.65 4.65 0 0 1-1.097-9.17 6.39 6.39 0 0 1 5.644-5.297Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
