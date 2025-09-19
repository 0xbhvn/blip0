import React from 'react';

/**
 * PiCryptoCurrencyUsdtDiamondStroke icon from the stroke style in web3-&-crypto category.
 */
interface PiCryptoCurrencyUsdtDiamondStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoCurrencyUsdtDiamondStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-currency-usdt-diamond icon',
  ...props
}: PiCryptoCurrencyUsdtDiamondStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.425 8H12m0 0h3.575M12 8v3m0 3c2.761 0 5-.672 5-1.5S14.761 11 12 11m0 3c-2.761 0-5-.672-5-1.5S9.239 11 12 11m0 3v3m0-6v.5M7.408 4h9.184c.854 0 1.651.427 2.125 1.137l2.854 4.281a2.554 2.554 0 0 1-.31 3.213l-7.445 7.529a2.554 2.554 0 0 1-3.632 0l-7.446-7.53a2.554 2.554 0 0 1-.31-3.212l2.855-4.28A2.55 2.55 0 0 1 7.408 4Z" fill="none"/>
    </svg>
  );
}
