import React from 'react';

/**
 * PiScaleStroke icon from the stroke style in editing category.
 */
interface PiScaleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiScaleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'scale icon',
  ...props
}: PiScaleStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4.222 12.707 3.536 3.535M9.879 7.05l3.536 3.536m-.707-6.364 2.121 2.12M7.05 9.88 9.172 12m-5.516 5.8 2.546 2.545c.792.792 1.188 1.188 1.645 1.336.401.13.834.13 1.236 0 .457-.148.853-.544 1.645-1.336l9.616-9.617c.792-.792 1.188-1.188 1.337-1.645a2 2 0 0 0 0-1.236c-.149-.456-.545-.852-1.337-1.644L17.8 3.656c-.792-.792-1.188-1.188-1.645-1.336a2 2 0 0 0-1.236 0c-.457.148-.853.544-1.645 1.336l-9.617 9.617c-.792.792-1.188 1.188-1.336 1.644a2 2 0 0 0 0 1.236c.148.457.544.853 1.336 1.645Z" fill="none"/>
    </svg>
  );
}
