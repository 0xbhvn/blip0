import React from 'react';

/**
 * PiLuggageTrolleySolid icon from the solid style in automotive category.
 */
interface PiLuggageTrolleySolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLuggageTrolleySolid({
  size = 24,
  color,
  className,
  ariaLabel = 'luggage-trolley icon',
  ...props
}: PiLuggageTrolleySolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M3 2a1 1 0 0 0 0 2 1 1 0 0 1 1 1v10.126A4.002 4.002 0 0 0 5 23a4 4 0 0 0 3.874-3H21a1 1 0 1 0 0-2H8.874A4.01 4.01 0 0 0 6 15.126V5a3 3 0 0 0-3-3Zm0 17a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" clipRule="evenodd" fill="currentColor"/><path d="M14 4.5v4a1 1 0 1 0 2 0v-4h1.838c.528 0 .982 0 1.357.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356v3.678c0 .527 0 .981-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031h-5.677c-.528 0-.982 0-1.357-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167A18 18 0 0 1 8 12.339V8.66c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296.375-.031.83-.031 1.356-.031z" fill="currentColor"/>
    </svg>
  );
}
