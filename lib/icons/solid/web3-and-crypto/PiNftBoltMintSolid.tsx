import React from 'react';

/**
 * PiNftBoltMintSolid icon from the solid style in web3-&-crypto category.
 */
interface PiNftBoltMintSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNftBoltMintSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'nft-bolt-mint icon',
  ...props
}: PiNftBoltMintSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M8.224 19.795q.075.029.149.053c.173.057.375.096.674.12.4.031.91.032 1.7.032h.784a1 1 0 1 1 0 2h-.825c-.739 0-1.329 0-1.817-.039a4.8 4.8 0 0 1-1.14-.213 5 5 0 0 1-1.83-1.069c-.597-.547-1.006-1.28-1.6-2.34l-1.608-2.877c-.562-1.004-.951-1.7-1.108-2.453a5 5 0 0 1 0-2.017c.157-.755.546-1.45 1.108-2.454L4.32 5.662c.593-1.061 1.002-1.794 1.6-2.341a5 5 0 0 1 1.83-1.07C8.518 2 9.36 2 10.583 2h2.81c1.223 0 2.065 0 2.835.252a5 5 0 0 1 1.83 1.069c.597.547 1.006 1.28 1.6 2.341l1.627 2.91c.492.88.85 1.519 1.034 2.148q.04.143.071.285c.14.654.145 1.328.018 1.984-.12.618-.388 1.174-.754 1.87a1 1 0 0 1-1.77-.93c.367-.698.502-1.023.56-1.322a3 3 0 0 0-.046-1.327c-.076-.263-.21-.548-.47-1.03h-.942c-.888 0-1.385 0-1.811.037-4.74.412-8.505 4.145-8.92 8.863a10 10 0 0 0-.032.645ZM6.961 9c0-1.111.905-2 2.007-2s2.007.889 2.007 2-.905 2-2.007 2a2.003 2.003 0 0 1-2.007-2Z" clipRule="evenodd" fill="currentColor"/><path d="M17.524 14.897a1 1 0 0 1 .328 1.376l-1.062 1.726H19a1 1 0 0 1 .852 1.524l-2 3.25a1 1 0 0 1-1.704-1.048l1.062-1.726H15a1 1 0 0 1-.852-1.524l2-3.25a1 1 0 0 1 1.376-.328Z" fill="currentColor"/>
    </svg>
  );
}
