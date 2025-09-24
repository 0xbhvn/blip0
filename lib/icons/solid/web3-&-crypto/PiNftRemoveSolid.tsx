import React from 'react';

/**
 * PiNftRemoveSolid icon from the solid style in web3-&-crypto category.
 */
interface PiNftRemoveSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNftRemoveSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'nft-remove icon',
  ...props
}: PiNftRemoveSolidProps): JSX.Element {
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
      <path d="M8.224 19.795q.075.029.149.053c.427.14.925.152 2.373.152h.777a1 1 0 1 1 0 2h-.939c-1.223 0-2.065 0-2.835-.252a5 5 0 0 1-1.83-1.069c-.596-.546-1.006-1.28-1.599-2.34l-1.61-2.877c-.561-1.004-.95-1.7-1.107-2.453a5 5 0 0 1 0-2.017c.157-.755.546-1.45 1.108-2.454L4.32 5.662c.593-1.061 1.002-1.794 1.6-2.341a5 5 0 0 1 1.83-1.07C8.518 2 9.36 2 10.583 2h2.81c1.223 0 2.065 0 2.835.252a5 5 0 0 1 1.83 1.069c.596.547 1.006 1.28 1.6 2.34L21.3 8.599c.551.985.933 1.667 1.09 2.407.14.654.145 1.328.018 1.984-.145.742-.515 1.43-1.049 2.424l-.099.185a1 1 0 1 1-1.762-.946l.027-.05c.634-1.18.84-1.587.92-1.995a3 3 0 0 0-.011-1.186c-.063-.294-.192-.587-.507-1.17h-.94c-.889 0-1.386 0-1.812.036-4.74.412-8.505 4.146-8.92 8.863a10 10 0 0 0-.032.645ZM10.975 9c0-1.11-.905-2-2.007-2a2.003 2.003 0 0 0-2.007 2c0 1.111.905 2 2.007 2a2.003 2.003 0 0 0 2.007-2ZM14 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z" fill="currentColor"/>
    </svg>
  );
}
