import React from 'react';

/**
 * PiNftRemoveStroke icon from the stroke style in web3-&-crypto category.
 */
interface PiNftRemoveStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNftRemoveStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'nft-remove icon',
  ...props
}: PiNftRemoveStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.989 21h-.235c-.767 0-1.32 0-1.765-.035m0 0c0-.905 0-1.363.034-1.75a9 9 0 0 1 8.181-8.18C17.596 11 18.06 11 18.99 11h2.306M8.989 20.965a3.8 3.8 0 0 1-.902-.167 4 4 0 0 1-1.455-.856c-.474-.437-.807-1.036-1.472-2.234l-1.445-2.6c-.63-1.134-.945-1.702-1.069-2.302a4 4 0 0 1 0-1.612c.124-.6.44-1.168 1.07-2.302l1.444-2.6c.665-1.198.998-1.797 1.472-2.233a4 4 0 0 1 1.455-.857C8.7 3 9.384 3 10.754 3h2.469c1.37 0 2.056 0 2.667.202a4 4 0 0 1 1.456.857c.473.436.806 1.035 1.471 2.233l1.48 2.663c.543.978.848 1.526.998 2.045m0 0q.03.107.053.213a4 4 0 0 1 .014 1.585c-.112.578-.4 1.128-.973 2.202m-5.4 4h6m-12-9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" fill="none"/>
    </svg>
  );
}
