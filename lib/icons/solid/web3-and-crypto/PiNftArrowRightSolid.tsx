import React from 'react';

/**
 * PiNftArrowRightSolid icon from the solid style in web3-&-crypto category.
 */
interface PiNftArrowRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNftArrowRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'nft-arrow-right icon',
  ...props
}: PiNftArrowRightSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M19.928 10.25c.26.482.395.767.471 1.03q.021.072.036.141c.083.39.087.794.01 1.186-.046.236-.142.497-.373.96a1 1 0 0 0 1.788.895c.259-.517.45-.97.549-1.473a5 5 0 0 0-.09-2.269c-.183-.63-.54-1.269-1.033-2.149l-1.628-2.909c-.593-1.061-1.002-1.794-1.6-2.341a5 5 0 0 0-1.83-1.07C15.46 2 14.618 2 13.395 2h-2.81C9.362 2 8.52 2 7.75 2.252A5 5 0 0 0 5.92 3.32c-.597.547-1.006 1.28-1.6 2.341L2.712 8.538c-.562 1.004-.951 1.7-1.108 2.453a5 5 0 0 0 0 2.018c.157.754.546 1.449 1.108 2.453l1.609 2.876c.593 1.061 1.002 1.794 1.6 2.341a5.05 5.05 0 0 0 1.83 1.07c.367.12.735.18 1.14.212.453.036.991.039 1.649.039a1 1 0 0 0 0-2c-.676 0-1.131-.004-1.492-.032a2.8 2.8 0 0 1-.674-.12q-.075-.025-.149-.053c.006-.248.015-.454.032-.645.415-4.717 4.18-8.451 8.92-8.863.426-.037.923-.037 1.811-.037zM6.961 9c0-1.111.905-2 2.007-2s2.007.889 2.007 2-.905 2-2.007 2a2.003 2.003 0 0 1-2.007-2Z" clipRule="evenodd" fill="currentColor"/><path d="M20.642 17.992a1.6 1.6 0 0 1 0 2.02 14 14 0 0 1-2.452 2.36 1 1 0 0 1-1.2-1.6q.483-.361.927-.77H14a1 1 0 1 1 0-2h3.916a12 12 0 0 0-.926-.772 1 1 0 0 1 1.2-1.6 14 14 0 0 1 2.452 2.362Z" fill="currentColor"/>
    </svg>
  );
}
