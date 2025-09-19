import React from 'react';

/**
 * PiCryptoCurrencyUsdtStroke icon from the stroke style in web3-&-crypto category.
 */
interface PiCryptoCurrencyUsdtStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoCurrencyUsdtStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-currency-usdt icon',
  ...props
}: PiCryptoCurrencyUsdtStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5h7m0 0h7m-7 0v6m0 3v5m0-5c4.97 0 10-1.12 10-2.5S16.97 9 12 9 2 10.12 2 11.5 7.03 14 12 14Z" fill="none"/>
    </svg>
  );
}
