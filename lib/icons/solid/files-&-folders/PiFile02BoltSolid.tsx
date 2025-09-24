import React from 'react';

/**
 * PiFile02BoltSolid icon from the solid style in files-&-folders category.
 */
interface PiFile02BoltSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02BoltSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-bolt icon',
  ...props
}: PiFile02BoltSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M8 1h1.2c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819C13 3.361 13 3.943 13 4.8v.039c0 .527 0 .981.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.356.031h.039c.857 0 1.439 0 1.889.038.438.035.663.1.819.18a2 2 0 0 1 .874.874c.08.156.145.38.18.819.037.45.038 1.032.038 1.889V18a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V6a5 5 0 0 1 5-5Zm4.8 10.1a1 1 0 0 0-1.6-1.2l-1.824 2.433c-.168.223-.331.44-.447.626-.1.164-.307.512-.276.948.034.484.3.922.713 1.175.374.228.778.205.97.19.217-.017.486-.062.76-.108l1.607-.267L11.2 16.9a1 1 0 1 0 1.6 1.2l1.825-2.433c.167-.223.33-.44.446-.626.101-.164.307-.512.277-.948a1.5 1.5 0 0 0-.714-1.174c-.373-.229-.778-.206-.97-.19-.217.016-.486.06-.76.107l-1.606.267z" clipRule="evenodd" fill="currentColor"/><path d="M14.956 2.748c-.04-.48-.117-.925-.292-1.347a9.02 9.02 0 0 1 5.935 5.935c-.422-.175-.868-.253-1.347-.292C18.71 7 18.046 7 17.242 7H17.2c-.577 0-.949 0-1.232-.024-.272-.022-.373-.06-.422-.085a1 1 0 0 1-.437-.437c-.025-.05-.063-.15-.085-.422C15 5.75 15 5.377 15 4.8v-.041c0-.805 0-1.47-.044-2.01Z" fill="currentColor"/>
    </svg>
  );
}
