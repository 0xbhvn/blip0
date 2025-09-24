import React from 'react';

/**
 * PiFile02ShieldSolid icon from the solid style in files-&-folders category.
 */
interface PiFile02ShieldSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02ShieldSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-shield icon',
  ...props
}: PiFile02ShieldSolidProps): JSX.Element {
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
      <path d="M11.951 12.003a.04.04 0 0 1 .03 0l1.902.687q.026.01.03.038l.079 1.027a2.83 2.83 0 0 1-1.474 2.704L12 16.74a.04.04 0 0 1-.043 0l-.53-.302a2.83 2.83 0 0 1-1.425-2.566l.044-1.152a.05.05 0 0 1 .03-.04z" fill="currentColor"/><path fillRule="evenodd" d="M8 1h1.2c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819C13 3.361 13 3.943 13 4.8v.039c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h.039c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819.037.45.038 1.032.038 1.889V18a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V6a5 5 0 0 1 5-5Zm4.66 9.122a2.05 2.05 0 0 0-1.388 0l-1.876.677a2.04 2.04 0 0 0-1.348 1.844l-.044 1.152a4.83 4.83 0 0 0 2.433 4.38l.53.302c.613.35 1.364.358 1.986.022l.518-.281a4.83 4.83 0 0 0 2.515-4.616l-.08-1.027a2.04 2.04 0 0 0-1.343-1.766z" clipRule="evenodd" fill="currentColor"/><path d="M14.956 2.748c-.04-.48-.117-.925-.292-1.347a9.02 9.02 0 0 1 5.935 5.935c-.422-.175-.868-.253-1.347-.292C18.71 7 18.046 7 17.242 7H17.2c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422C15 5.75 15 5.377 15 4.8v-.041c0-.805 0-1.47-.044-2.01Z" fill="currentColor"/>
    </svg>
  );
}
