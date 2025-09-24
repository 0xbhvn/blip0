import React from 'react';

/**
 * PiNftPlusSolid icon from the solid style in web3-&-crypto category.
 */
interface PiNftPlusSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNftPlusSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'nft-plus icon',
  ...props
}: PiNftPlusSolidProps): JSX.Element {
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
      <path d="M19.928 10.25c.26.482.395.767.471 1.03q.021.072.036.141c.083.39.087.794.01 1.186-.03.16-.086.333-.19.573a1 1 0 0 0 1.832.8 4.7 4.7 0 0 0 .322-.991 5 5 0 0 0-.09-2.269c-.183-.63-.54-1.269-1.033-2.149l-1.628-2.909c-.593-1.061-1.002-1.794-1.6-2.341a5 5 0 0 0-1.83-1.07C15.46 2 14.618 2 13.395 2h-2.81C9.362 2 8.52 2 7.75 2.252A5 5 0 0 0 5.92 3.32c-.597.547-1.006 1.28-1.6 2.341L2.712 8.538c-.562 1.004-.951 1.7-1.108 2.454a5 5 0 0 0 0 2.017c.157.754.546 1.449 1.108 2.453l1.609 2.876c.593 1.061 1.002 1.794 1.6 2.341.527.482 1.15.847 1.83 1.07.367.12.735.18 1.14.212.487.04 1.077.04 1.816.04h.815a1 1 0 1 0 0-2h-.775c-.789 0-1.3-.002-1.699-.033a2.8 2.8 0 0 1-.674-.12q-.075-.024-.149-.053c.006-.248.015-.454.032-.645.415-4.717 4.18-8.451 8.92-8.863.426-.037.923-.037 1.811-.037zM6.961 9c0-1.11.905-2 2.007-2s2.007.89 2.007 2c0 1.111-.905 2-2.007 2a2.003 2.003 0 0 1-2.007-2Z" fill="currentColor"/><path d="M17.99 15a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1Z" fill="currentColor"/>
    </svg>
  );
}
