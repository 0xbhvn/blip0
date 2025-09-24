import React from 'react';

/**
 * PiTinderSolid icon from the solid style in apps-&-social category.
 */
interface PiTinderSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTinderSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'tinder icon',
  ...props
}: PiTinderSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M13.11 1.058c-.888-.296-1.502.477-1.502 1.103q0 .078.012.153c.216 1.394.163 2.757-.294 3.874-.363.888-1 1.67-2.08 2.217a5 5 0 0 1-.143-.511 8 8 0 0 1-.173-1.157c-.038-.932-1.063-1.327-1.742-.903a8.717 8.717 0 0 0 4.903 16.158c5.371-.012 9.08-4.252 9.08-9.026 0-6.08-4.27-10.064-7.938-11.857q-.06-.03-.123-.05ZM6.935 6.873l.001.017z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
