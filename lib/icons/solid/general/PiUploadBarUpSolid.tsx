import React from 'react';

/**
 * PiUploadBarUpSolid icon from the solid style in general category.
 */
interface PiUploadBarUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUploadBarUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'upload-bar-up icon',
  ...props
}: PiUploadBarUpSolidProps): JSX.Element {
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
      <path d="M13 10.429c1.625.038 3.249.169 4.863.392a1 1 0 0 0 .941-1.585 31.2 31.2 0 0 0-5.584-5.807 1.95 1.95 0 0 0-2.44 0 31.2 31.2 0 0 0-5.584 5.807 1 1 0 0 0 .941 1.585A43 43 0 0 1 11 10.429V16a1 1 0 1 0 2 0z" fill="currentColor"/><path d="M5 19a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" fill="currentColor"/>
    </svg>
  );
}
