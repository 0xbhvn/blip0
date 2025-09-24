import React from 'react';

/**
 * PiLayoutGridStackLeftSolid icon from the solid style in general category.
 */
interface PiLayoutGridStackLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLayoutGridStackLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'layout-grid-stack-left icon',
  ...props
}: PiLayoutGridStackLeftSolidProps): React.ReactElement {
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
      <path d="M16.416 2c-.38 0-.708 0-1.001.058a3 3 0 0 0-2.357 2.357c-.059.293-.058.62-.058 1.001v.168c0 .38 0 .709.058 1.001a3 3 0 0 0 2.357 2.357c.293.059.62.058 1.001.058h2.168c.38 0 .708 0 1.001-.058a3 3 0 0 0 2.357-2.357c.059-.292.058-.62.058-1.001v-.168c0-.38 0-.708-.058-1.001a3 3 0 0 0-2.357-2.357c-.293-.059-.62-.058-1.001-.058z" fill="currentColor"/><path d="M6.161 2c-.527 0-.981 0-1.356.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C2 5.18 2 5.635 2 6.162v11.677c0 .527 0 .982.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.297.375.03.83.03 1.356.03h.678c.527 0 .981 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.31c.193-.38.264-.773.296-1.168.031-.375.031-.83.031-1.356V6.162c0-.528 0-.982-.03-1.357-.033-.395-.104-.788-.297-1.167a3 3 0 0 0-1.311-1.31c-.378-.194-.772-.265-1.167-.297C7.82 2 7.365 2 6.839 2z" fill="currentColor"/><path d="M17.162 11c-.528 0-.982 0-1.357.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.379-.264.772-.296 1.167-.031.375-.031.83-.031 1.357v2.677c0 .527 0 .982.03 1.356.033.395.104.789.297 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.297.375.03.83.03 1.356.03h.678c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.31c.193-.38.264-.773.296-1.168.031-.375.031-.83.031-1.356v-2.677c0-.528 0-.982-.03-1.357-.033-.395-.104-.788-.297-1.167a3 3 0 0 0-1.311-1.31c-.378-.194-.772-.265-1.167-.297-.375-.03-.83-.03-1.356-.03z" fill="currentColor"/>
    </svg>
  );
}
