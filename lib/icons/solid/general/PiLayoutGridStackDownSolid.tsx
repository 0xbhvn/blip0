import React from 'react';

/**
 * PiLayoutGridStackDownSolid icon from the solid style in general category.
 */
interface PiLayoutGridStackDownSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLayoutGridStackDownSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'layout-grid-stack-down icon',
  ...props
}: PiLayoutGridStackDownSolidProps): React.ReactElement {
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
      <path d="M2 7.582c0 .38 0 .709.058 1.001a3 3 0 0 0 2.357 2.358c.293.058.62.057 1.001.057h.168c.38 0 .709 0 1.001-.057a3 3 0 0 0 2.357-2.358c.059-.292.058-.62.058-1.001V5.414c0-.38 0-.708-.058-1.001a3 3 0 0 0-2.357-2.357c-.292-.058-.62-.058-1.001-.058h-.168c-.38 0-.708 0-1.001.058a3 3 0 0 0-2.357 2.357C1.999 4.706 2 5.033 2 5.414z" fill="currentColor"/><path d="M2 17.837c0 .527 0 .982.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.297.375.03.83.03 1.357.03h11.677c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.31c.193-.38.264-.773.297-1.168.03-.374.03-.83.03-1.356v-.677c0-.528 0-.982-.03-1.357-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.31-1.31c-.38-.194-.773-.265-1.168-.297-.375-.03-.83-.03-1.356-.03H6.162c-.528 0-.982 0-1.357.03-.395.032-.788.103-1.167.296a3 3 0 0 0-1.31 1.311c-.194.379-.265.772-.297 1.167-.031.375-.03.83-.03 1.357z" fill="currentColor"/><path d="M11 6.837c0 .527 0 .982.03 1.356.033.396.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.379.193.772.264 1.167.297.375.03.83.03 1.357.03h2.677c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.31c.193-.38.264-.772.297-1.168.03-.374.03-.83.03-1.356V6.16c0-.528 0-.982-.03-1.357-.033-.395-.104-.788-.297-1.167a3 3 0 0 0-1.31-1.31c-.38-.194-.773-.265-1.168-.297-.375-.03-.83-.03-1.356-.03h-2.677c-.528 0-.982 0-1.357.03-.395.032-.788.103-1.167.296a3 3 0 0 0-1.31 1.311c-.194.379-.265.772-.297 1.167-.03.375-.03.83-.03 1.357z" fill="currentColor"/>
    </svg>
  );
}
