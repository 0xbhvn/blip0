import React from 'react';

/**
 * PiLayoutGridStackUpSolid icon from the solid style in general category.
 */
interface PiLayoutGridStackUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLayoutGridStackUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'layout-grid-stack-up icon',
  ...props
}: PiLayoutGridStackUpSolidProps): React.ReactElement {
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
      <path d="M2 16.414c0-.38 0-.708.058-1.001a3 3 0 0 1 2.357-2.357c.293-.059.62-.058 1.001-.058h.168c.38 0 .709 0 1.001.058a3 3 0 0 1 2.357 2.357c.059.293.058.62.058 1.001v2.168c0 .38 0 .709-.058 1.001a3 3 0 0 1-2.357 2.357c-.292.059-.62.058-1.001.058h-.168c-.38 0-.708 0-1.001-.058a3 3 0 0 1-2.357-2.357c-.059-.292-.058-.62-.058-1.001z" fill="currentColor"/><path d="M2 6.16c0-.528 0-.982.03-1.357.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296.375-.031.83-.031 1.357-.03h11.677c.527-.001.982-.001 1.356.03.395.032.789.103 1.167.296a3 3 0 0 1 1.311 1.311c.193.378.264.772.297 1.167.03.375.03.83.03 1.356v.678c0 .527 0 .982-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.31 1.311c-.38.193-.773.264-1.168.297-.375.03-.83.03-1.356.03H6.162c-.528 0-.982 0-1.357-.03-.395-.033-.788-.104-1.167-.297a3 3 0 0 1-1.31-1.311c-.194-.378-.265-.772-.297-1.167C2 7.82 2 7.363 2 6.837z" fill="currentColor"/><path d="M11 17.16c0-.528 0-.982.03-1.357.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.379-.193.772-.264 1.167-.296.375-.031.83-.031 1.357-.031h2.677c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.379.264.772.297 1.167.03.375.03.83.03 1.357v.677c0 .527 0 .982-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.31 1.311c-.38.193-.773.264-1.168.297-.375.03-.83.03-1.356.03h-2.677c-.528 0-.982 0-1.357-.03-.395-.033-.788-.104-1.167-.297a3 3 0 0 1-1.31-1.311c-.194-.378-.265-.772-.297-1.167-.03-.375-.03-.83-.03-1.356z" fill="currentColor"/>
    </svg>
  );
}
