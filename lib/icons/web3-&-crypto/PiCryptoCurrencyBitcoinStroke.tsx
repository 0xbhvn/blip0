import React from 'react';

/**
 * PiCryptoCurrencyBitcoinStroke icon from the stroke style in web3-&-crypto category.
 */
interface PiCryptoCurrencyBitcoinStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCryptoCurrencyBitcoinStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'crypto-currency-bitcoin icon',
  ...props
}: PiCryptoCurrencyBitcoinStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 4H9.222M13 4a4 4 0 0 1 0 8H9.222c-.206 0-.31 0-.396-.008a2 2 0 0 1-1.818-1.818C7 10.087 7 9.984 7 9.778V6.222c0-.206 0-.31.008-.396A2 2 0 0 1 9 4m4 0V2M9.222 4H9m.222 0H9m1.2 16H15a4 4 0 1 0 0-8h-4.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C7 13.52 7 14.08 7 15.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C8.52 20 9.08 20 10.2 20Zm0 0H9M7 4v16M7 4H5m2 0h2M5 20h2m2 2v-2M9 2v2m4 18v-2m-6 0h2" fill="none"/>
    </svg>
  );
}
