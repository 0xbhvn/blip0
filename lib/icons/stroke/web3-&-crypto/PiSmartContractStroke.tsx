import React from 'react';

/**
 * PiSmartContractStroke icon from the stroke style in web3-&-crypto category.
 */
interface PiSmartContractStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSmartContractStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'smart-contract icon',
  ...props
}: PiSmartContractStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 8h8m-8 4h5m-1 9H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6V9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4V11m-5.28 7.96 1 1.333c.434.58.651.869.918.972a1 1 0 0 0 .724 0c.267-.103.484-.393.918-.972l1-1.333c.258-.344.387-.516.437-.705a1 1 0 0 0 0-.51c-.05-.189-.179-.36-.437-.705l-1-1.333c-.434-.58-.651-.869-.918-.972a1 1 0 0 0-.724 0c-.267.103-.484.393-.918.972l-1 1.333c-.258.344-.387.516-.437.705a1 1 0 0 0 0 .51c.05.189.179.36.437.705Z" fill="none"/>
    </svg>
  );
}
