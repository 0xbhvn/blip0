import React from 'react';

/**
 * PiFirstAidSolid icon from the solid style in medical category.
 */
interface PiFirstAidSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFirstAidSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'first-aid icon',
  ...props
}: PiFirstAidSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M11.162 2h1.677c.527 0 .981 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.297 1.167.029.36.03.796.03 1.298.307.043.588.104.854.19a6 6 0 0 1 3.852 3.853c.295.906.294 1.985.294 3.654v.4c0 1.669 0 2.748-.294 3.654a6 6 0 0 1-3.852 3.852c-.906.295-1.985.294-3.654.294H9.8c-1.669 0-2.748 0-3.654-.294a6 6 0 0 1-3.852-3.852C1.999 16.948 2 15.87 2 14.2v-.4c0-1.669 0-2.748.294-3.654a6 6 0 0 1 3.852-3.852c.266-.087.547-.148.854-.191 0-.502.001-.937.03-1.298.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C10.18 2 10.635 2 11.162 2ZM9 6.001 9.8 6h4.4l.8.001c0-.466-.004-.784-.024-1.033-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C13.75 4 13.377 4 12.8 4h-1.6c-.576 0-.949 0-1.232.024-.272.022-.372.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422-.02.25-.023.567-.024 1.033Zm4 4.899a1 1 0 1 0-2 0V13H8.9a1 1 0 1 0 0 2H11v2.1a1 1 0 1 0 2 0V15h2.1a1 1 0 1 0 0-2H13z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
