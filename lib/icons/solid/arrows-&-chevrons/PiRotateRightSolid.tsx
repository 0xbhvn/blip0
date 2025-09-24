import React from 'react';

/**
 * PiRotateRightSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiRotateRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRotateRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'rotate-right icon',
  ...props
}: PiRotateRightSolidProps): JSX.Element {
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
      <path d="M16.872 2.26a1 1 0 0 1 1.831.017 16 16 0 0 1 1.119 3.975 1.42 1.42 0 0 1-.408 1.235c-.25.247-.548.37-.703.429l-.123.046a16 16 0 0 1-3.685.897 1 1 0 0 1-.931-1.577l.346-.48q.388-.54.744-1.099a7 7 0 1 0 3.718 8.048 1 1 0 0 1 1.936.498C19.717 18.131 16.195 21 12 21a9 9 0 1 1 4.063-17.033q.3-.576.566-1.168z" fill="currentColor"/>
    </svg>
  );
}
