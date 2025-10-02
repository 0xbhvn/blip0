import React from 'react';

/**
 * PiTrezorWalletSolid icon from the solid style in apps-&-social category.
 */
interface PiTrezorWalletSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTrezorWalletSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'trezor-wallet icon',
  ...props
}: PiTrezorWalletSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M17 7v1.05a2.5 2.5 0 0 1 2 2.45v6.6a2.5 2.5 0 0 1-1.323 2.206l-4.5 2.402a2.5 2.5 0 0 1-2.354 0l-4.5-2.402A2.5 2.5 0 0 1 5 17.1v-6.6a2.5 2.5 0 0 1 2-2.45V7a5 5 0 0 1 10 0ZM9 7a3 3 0 1 1 6 0v1H9z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
