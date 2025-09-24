import React from 'react';

/**
 * PiPencilScaleSolid icon from the solid style in editing category.
 */
interface PiPencilScaleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPencilScaleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pencil-scale icon',
  ...props
}: PiPencilScaleSolidProps): JSX.Element {
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
      <path d="M5.269.5a1 1 0 0 1 .72.292l1.697 1.693.048.047c.194.193.398.396.55.642q.197.326.287.696c.067.28.066.568.065.844v.066L8.6 20.96v.093a2.41 2.41 0 0 1-1.86 2.277l-.09.02-.062.013a6.55 6.55 0 0 1-2.71-.009A2.38 2.38 0 0 1 2 21.021l.036-16.27v-.063c0-.266 0-.543.064-.815.055-.237.147-.465.27-.675.143-.24.334-.44.518-.633l.044-.046L4.558.81A1 1 0 0 1 5.269.5Z" fill="currentColor"/><path d="M15.162 1c-.528 0-.982 0-1.357.03-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167-.054.658.505 1.195 1.165 1.195H15a1 1 0 1 1 0 2h-3a1 1 0 1 0 0 2h4a1 1 0 1 1 0 2h-4a1 1 0 1 0 0 2h3a1 1 0 1 1 0 2h-3a1 1 0 1 0 0 2h4a1 1 0 1 1 0 2h-3.804c-.66 0-1.22.537-1.165 1.195.032.395.103.789.296 1.167a3 3 0 0 0 1.311 1.311c.378.193.772.264 1.167.296.375.031.83.031 1.357.031h2.677c.527 0 .982 0 1.356-.03.395-.033.789-.104 1.167-.297a3 3 0 0 0 1.311-1.311c.193-.378.264-.772.296-1.167.031-.375.031-.83.031-1.356V5.16c0-.527 0-.981-.03-1.356-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296C18.82 1 18.365 1 17.839 1z" fill="currentColor"/>
    </svg>
  );
}
