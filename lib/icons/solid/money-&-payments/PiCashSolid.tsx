import React from 'react';

/**
 * PiCashSolid icon from the solid style in money-&-payments category.
 */
interface PiCashSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCashSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cash icon',
  ...props
}: PiCashSolidProps): JSX.Element {
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
      <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" fill="currentColor"/><path fillRule="evenodd" d="M5.161 4H18.84c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356v7.678c0 .527 0 .981-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H5.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167C1 16.82 1 16.365 1 15.839V8.16c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C4.18 4 4.635 4 5.161 4ZM3 10v4c.459 0 .86.003 1.195.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.028.336.03.736.031 1.195h10c0-.459.003-.86.03-1.195.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296.336-.028.736-.03 1.195-.031v-4c-.459 0-.86-.003-1.195-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167A16 16 0 0 1 17 6H7c0 .459-.003.86-.03 1.195-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296C3.859 9.997 3.459 10 3 10Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
