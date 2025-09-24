import React from 'react';

/**
 * PiTrainSolid icon from the solid style in automotive category.
 */
interface PiTrainSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrainSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'train icon',
  ...props
}: PiTrainSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M13.6 2c1.103 0 1.991-.001 2.709.058.728.06 1.368.185 1.96.487a5 5 0 0 1 2.186 2.185l.106.224c.227.53.33 1.1.381 1.737.059.718.058 1.606.058 2.71V15.8c0 .543.001 1.012-.03 1.395-.028.346-.086.69-.23 1.025l-.067.142a3 3 0 0 1-1.105 1.196l-.206.115c-.378.193-.771.264-1.167.297a8 8 0 0 1-.335.017l.972 1.458a1 1 0 1 1-1.664 1.11L15.465 20h-6.93l-1.703 2.555a1 1 0 1 1-1.664-1.11l.97-1.458a8 8 0 0 1-.333-.017 3.2 3.2 0 0 1-1.025-.23l-.142-.067a3 3 0 0 1-1.31-1.31c-.194-.379-.265-.772-.298-1.168C3 16.812 3 16.343 3 15.8V9.4c0-1.103-.001-1.991.058-2.709.06-.728.185-1.368.487-1.96A5 5 0 0 1 5.73 2.544c.593-.302 1.233-.428 1.961-.487C8.41 1.999 9.297 2 10.401 2zM7 15a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm9 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zM10.4 4c-1.136 0-1.929 0-2.546.05-.605.05-.953.143-1.216.277a3 3 0 0 0-1.31 1.31c-.135.264-.228.612-.277 1.217C5 7.471 5 8.264 5 9.4V12h6V4zm2.6 8h6V9.4c0-1.136 0-1.929-.05-2.546-.044-.529-.12-.862-.228-1.113l-.05-.103a3 3 0 0 0-1.31-1.31c-.263-.135-.611-.228-1.216-.277C15.528 4 14.735 4 13.6 4H13z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
