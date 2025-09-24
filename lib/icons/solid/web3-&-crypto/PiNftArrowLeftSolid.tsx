import React from 'react';

/**
 * PiNftArrowLeftSolid icon from the solid style in web3-&-crypto category.
 */
interface PiNftArrowLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNftArrowLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'nft-arrow-left icon',
  ...props
}: PiNftArrowLeftSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M8.224 19.795q.075.028.149.053c.173.057.375.096.674.12.346.027.78.031 1.415.032a1 1 0 1 1-.002 2c-.62 0-1.134-.004-1.57-.039a4.8 4.8 0 0 1-1.14-.213 5 5 0 0 1-1.83-1.069c-.598-.547-1.007-1.28-1.6-2.341l-1.61-2.876c-.561-1.004-.95-1.7-1.107-2.453a5 5 0 0 1 0-2.018c.157-.754.546-1.449 1.108-2.453L4.32 5.662c.593-1.061 1.002-1.794 1.6-2.341a5 5 0 0 1 1.83-1.07C8.518 2 9.36 2 10.583 2h2.81c1.223 0 2.065 0 2.835.252a5 5 0 0 1 1.83 1.069c.597.547 1.006 1.28 1.6 2.341l1.627 2.91c.492.879.85 1.518 1.034 2.148q.04.143.071.285c.14.654.145 1.328.018 1.984-.145.742-.515 1.43-1.049 2.425l-.097.18a1 1 0 1 1-1.762-.946l.025-.047c.634-1.18.84-1.586.92-1.994a3 3 0 0 0-.047-1.327c-.076-.263-.21-.548-.47-1.03h-.942c-.888 0-1.385 0-1.811.037-4.74.412-8.505 4.145-8.92 8.863a10 10 0 0 0-.032.645ZM8.968 7a2.003 2.003 0 0 0-2.007 2c0 1.111.905 2 2.007 2a2.003 2.003 0 0 0 2.007-2c0-1.111-.905-2-2.007-2Z" clipRule="evenodd" fill="currentColor"/><path d="M13.358 17.992a1.6 1.6 0 0 0 0 2.02c.717.884 1.54 1.677 2.452 2.36a1 1 0 0 0 1.2-1.6 12 12 0 0 1-.927-.77H20a1 1 0 1 0 0-2h-3.916q.443-.41.926-.772a1 1 0 0 0-1.2-1.6 14 14 0 0 0-2.452 2.362Z" fill="currentColor"/>
    </svg>
  );
}
