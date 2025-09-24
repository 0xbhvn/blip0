import React from 'react';

/**
 * PiArrowBigRightSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowBigRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowBigRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-big-right icon',
  ...props
}: PiArrowBigRightSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M14.791 4.195a1 1 0 0 0-1.588.92q.167 1.439.264 2.884H4.571c-.253 0-.499 0-.707.017a2 2 0 0 0-.77.201 2 2 0 0 0-.874.874 2 2 0 0 0-.2.77c-.018.208-.018.454-.018.706v2.864c0 .252 0 .498.017.706.015.268.084.53.2.77a2 2 0 0 0 .875.874c.24.117.503.186.77.201.209.017.455.017.708.017h8.895a60 60 0 0 1-.264 2.885 1 1 0 0 0 1.588.92 36.3 36.3 0 0 0 6.744-6.487 2.11 2.11 0 0 0 0-2.636 36.3 36.3 0 0 0-6.744-6.486Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
