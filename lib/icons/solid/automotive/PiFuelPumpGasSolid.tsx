import React from 'react';

/**
 * PiFuelPumpGasSolid icon from the solid style in automotive category.
 */
interface PiFuelPumpGasSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFuelPumpGasSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'fuel-pump-gas icon',
  ...props
}: PiFuelPumpGasSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M6.161 2h5.677c.528 0 .982 0 1.357.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167.031.375.031.83.031 1.356v7.874a3.5 3.5 0 0 1 3 3.465v1a.5.5 0 0 0 1 0v-7.55q-.243.05-.5.05a2.5 2.5 0 0 1-.788-4.873l-1.42-1.42a1 1 0 0 1 1.415-1.414l2.414 2.414A3 3 0 0 1 22 7.828V18.5a2.5 2.5 0 0 1-5 0v-1a1.5 1.5 0 0 0-1-1.415v1.753c0 .528 0 .982-.03 1.357-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296-.375.031-.83.031-1.356.031H6.16c-.527 0-.981 0-1.356-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167C2 18.82 2 18.365 2 17.839V6.16c0-.527 0-.981.03-1.356.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C5.18 2 5.635 2 6.161 2ZM20 8.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0ZM6.776 4.9h4.448c.118 0 .264 0 .394.01.151.013.374.045.608.164a1.6 1.6 0 0 1 .7.7c.12.234.151.457.164.608.01.13.01.276.01.394v2.448c0 .118 0 .264-.01.394a1.6 1.6 0 0 1-.164.608 1.6 1.6 0 0 1-.7.7c-.234.12-.457.151-.608.164-.13.01-.276.01-.394.01H6.776c-.118 0-.264 0-.394-.01a1.6 1.6 0 0 1-.608-.164 1.6 1.6 0 0 1-.7-.7 1.6 1.6 0 0 1-.164-.608 5 5 0 0 1-.01-.394V6.776c0-.118 0-.264.01-.394.013-.151.045-.374.164-.608a1.6 1.6 0 0 1 .7-.7c.234-.119.457-.151.608-.164.13-.01.276-.01.394-.01Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
