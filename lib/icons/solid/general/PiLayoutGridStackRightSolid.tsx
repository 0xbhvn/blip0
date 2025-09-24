import React from 'react';

/**
 * PiLayoutGridStackRightSolid icon from the solid style in general category.
 */
interface PiLayoutGridStackRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLayoutGridStackRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'layout-grid-stack-right icon',
  ...props
}: PiLayoutGridStackRightSolidProps): React.ReactElement {
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
      <path d="M7.584 1.998c.38 0 .709 0 1.001.058a3 3 0 0 1 2.357 2.357c.059.293.058.62.058 1.001v.168c0 .38 0 .709-.058 1.001A3 3 0 0 1 8.585 8.94c-.292.059-.62.058-1.001.058H5.416c-.38 0-.708 0-1.001-.058a3 3 0 0 1-2.357-2.357c-.059-.292-.058-.62-.058-1v-.169c0-.38 0-.708.058-1.001a3 3 0 0 1 2.357-2.357c.293-.058.62-.058 1.001-.058z" fill="currentColor"/><path d="M17.839 1.998c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.379.264.772.297 1.167.03.375.03.83.03 1.357v11.677c0 .527 0 .982-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.31 1.311c-.38.193-.773.264-1.168.297-.375.03-.83.03-1.356.03h-.677c-.528 0-.982 0-1.357-.03-.395-.033-.788-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.38-.265-.773-.297-1.168-.03-.374-.03-.83-.03-1.356V6.16c0-.528 0-.982.03-1.357.032-.395.103-.788.296-1.167a3 3 0 0 1 1.311-1.31c.379-.194.772-.265 1.167-.297.375-.03.83-.03 1.357-.03z" fill="currentColor"/><path d="M6.839 10.998c.527 0 .982 0 1.356.03.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.379.264.772.297 1.167.03.375.03.83.03 1.357v2.677c0 .527 0 .982-.03 1.356-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.31 1.311c-.38.193-.773.264-1.168.297-.374.03-.83.03-1.356.03h-.677c-.528 0-.982 0-1.357-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.31-1.31c-.194-.38-.265-.773-.297-1.168C2 18.82 2 18.363 2 17.837V15.16c0-.528-.001-.982.03-1.357.032-.395.103-.789.296-1.167a3 3 0 0 1 1.311-1.31c.378-.194.772-.265 1.167-.297.375-.03.83-.03 1.357-.03z" fill="currentColor"/>
    </svg>
  );
}
