import React from 'react';

/**
 * PiFile02CodeSolid icon from the solid style in files-&-folders category.
 */
interface PiFile02CodeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02CodeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-code icon',
  ...props
}: PiFile02CodeSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M8 1h1.2c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819C13 3.361 13 3.943 13 4.8v.039c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h.039c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819.037.45.038 1.032.038 1.889V18a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V6a5 5 0 0 1 5-5Zm2.874 12.073a1 1 0 1 0-1.176-1.618 12.6 12.6 0 0 0-2.417 2.297 1.27 1.27 0 0 0 0 1.595 12.6 12.6 0 0 0 2.417 2.297 1 1 0 1 0 1.175-1.618c-.6-.436-1.151-.931-1.644-1.477a10.7 10.7 0 0 1 1.645-1.476Zm3.428-1.618a1 1 0 1 0-1.175 1.618c.6.436 1.151.931 1.644 1.476a10.7 10.7 0 0 1-1.645 1.477 1 1 0 1 0 1.176 1.618 12.6 12.6 0 0 0 2.416-2.297 1.27 1.27 0 0 0 0-1.595 12.6 12.6 0 0 0-2.416-2.297Z" clipRule="evenodd" fill="currentColor"/><path d="M14.956 2.748c-.04-.48-.117-.925-.292-1.347a9.02 9.02 0 0 1 5.935 5.935c-.422-.175-.868-.253-1.347-.292C18.71 7 18.046 7 17.242 7H17.2c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422C15 5.75 15 5.377 15 4.8v-.041c0-.805 0-1.47-.044-2.01Z" fill="currentColor"/>
    </svg>
  );
}
