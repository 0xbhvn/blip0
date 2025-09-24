import React from 'react';

/**
 * PiWalletArrowUpSolid icon from the solid style in web3-&-crypto category.
 */
interface PiWalletArrowUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWalletArrowUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'wallet-arrow-up icon',
  ...props
}: PiWalletArrowUpSolidProps): JSX.Element {
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
      <path d="M18.696 4.47c.223.538.281 1.146.297 1.874q.154.05.303.113a6 6 0 0 1 3.247 3.247c.25.601.356 1.244.407 1.992.05.726.05 1.619.05 2.74a16 16 0 0 0-.731-.63 3.6 3.6 0 0 0-4.538 0 16 16 0 0 0-2.703 2.806A3 3 0 0 0 17 21.382v.586c-.674.032-1.482.032-2.464.032H9.464c-1.134 0-2.036 0-2.768-.05-.748-.05-1.39-.157-1.992-.407a6 6 0 0 1-3.247-3.247C.999 17.191 1 15.852 1 14.622v-3.666c0-1.363 0-2.447.072-3.321.073-.896.226-1.66.582-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C7.509 2 8.593 2 9.956 2h3.578c.67 0 1.223 0 1.676.03.469.033.903.101 1.32.274a4 4 0 0 1 2.166 2.165Zm-2.93-.318c-.134-.055-.325-.1-.693-.126C14.698 4.001 14.214 4 13.5 4H10c-1.417 0-2.419 0-3.202.065-.772.063-1.244.182-1.614.371a4 4 0 0 0-1.748 1.748c-.158.31-.267.69-.335 1.256a6 6 0 0 1 1.603-.983c.602-.25 1.244-.356 1.992-.407C7.428 6 8.33 6 9.463 6h5.138c.93 0 1.711 0 2.379.032-.022-.415-.062-.628-.132-.797a2 2 0 0 0-1.083-1.083ZM17 11h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Zm4.01 4.36a1.6 1.6 0 0 0-2.02 0 14 14 0 0 0-2.361 2.452 1 1 0 0 0 1.6 1.2q.362-.485.771-.927v3.917a1 1 0 1 0 2 0v-3.917q.41.443.772.927a1 1 0 0 0 1.6-1.2 14 14 0 0 0-2.362-2.452Z" fill="currentColor"/>
    </svg>
  );
}
