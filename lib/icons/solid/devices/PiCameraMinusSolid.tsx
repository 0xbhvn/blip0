import React from 'react';

/**
 * PiCameraMinusSolid icon from the solid style in devices category.
 */
interface PiCameraMinusSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCameraMinusSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'camera-minus icon',
  ...props
}: PiCameraMinusSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M22 10.072v5.17c0 .804 0 1.47-.044 2.01-.046.562-.145 1.08-.392 1.564a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.205.044-2.01.044H7.775c-.805 0-1.47 0-2.011-.044-.562-.046-1.079-.145-1.564-.392a4 4 0 0 1-1.748-1.748c-.248-.485-.346-1.002-.392-1.564-.044-.54-.044-1.206-.044-2.01V10.06c-.001-.978-.001-1.706.205-2.326A4 4 0 0 1 4.75 5.206C5.37 5 6.098 5 7.076 5h.17c.114 0 .172 0 .214-.002h.004l.002-.003c.025-.034.057-.083.12-.178l1.107-1.659.036-.055c.134-.2.302-.455.536-.648a2 2 0 0 1 .69-.368c.29-.089.594-.088.836-.087h2.419c.241 0 .545-.002.836.087a2 2 0 0 1 .689.368c.235.193.402.447.536.648l.036.055 1.105 1.657c.064.096.097.145.122.18l.002.003h.004c.043.002.102.002.217.002h.171c.99 0 1.725 0 2.351.21a4 4 0 0 1 2.511 2.51c.211.626.21 1.363.21 2.352ZM9 12a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
