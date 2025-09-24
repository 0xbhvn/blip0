import React from 'react';

/**
 * PiVolumeTwoSolid icon from the solid style in media category.
 */
interface PiVolumeTwoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVolumeTwoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'volume-two icon',
  ...props
}: PiVolumeTwoSolidProps): JSX.Element {
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
      <path d="M15 5.087c0-2.524-2.853-3.992-4.907-2.525L7.28 4.572a3.9 3.9 0 0 1-1.514.655A5.93 5.93 0 0 0 1 11.04v1.918a5.93 5.93 0 0 0 4.766 5.814 3.9 3.9 0 0 1 1.514.656l2.813 2.009c2.054 1.468 4.907 0 4.907-2.524z" fill="currentColor"/><path d="M18.436 4.1a1 1 0 0 0-.872 1.8c.655.317 1.26.787 1.778 1.392a6.8 6.8 0 0 1 1.222 2.142c.287.81.436 1.682.436 2.566s-.149 1.756-.436 2.566a6.8 6.8 0 0 1-1.222 2.142 5.5 5.5 0 0 1-1.778 1.392 1 1 0 1 0 .872 1.8 7.5 7.5 0 0 0 2.426-1.892 8.8 8.8 0 0 0 1.587-2.775A9.7 9.7 0 0 0 23 12a9.7 9.7 0 0 0-.55-3.233 8.8 8.8 0 0 0-1.588-2.775A7.5 7.5 0 0 0 18.436 4.1Z" fill="currentColor"/><path d="M17.638 9.23a1 1 0 0 0-1.276 1.54c.218.18.379.385.484.595S17 11.789 17 12s-.05.426-.154.635a1.9 1.9 0 0 1-.484.595 1 1 0 0 0 1.276 1.54 3.9 3.9 0 0 0 .996-1.24c.24-.478.366-.998.366-1.53s-.127-1.052-.366-1.53a3.9 3.9 0 0 0-.996-1.24Z" fill="currentColor"/>
    </svg>
  );
}
