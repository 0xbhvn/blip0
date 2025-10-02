import React from 'react';

/**
 * PiWalletArrowRightSolid icon from the solid style in web3-&-crypto category.
 */
interface PiWalletArrowRightSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWalletArrowRightSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'wallet-arrow-right icon',
  ...props
}: PiWalletArrowRightSolidProps): React.ReactElement {
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
      <path d="M18.696 4.47c.223.538.281 1.146.297 1.874q.154.05.303.113a6 6 0 0 1 3.247 3.247c.25.601.356 1.244.407 1.992.05.732.05 1.634.05 2.768v.161c0 .57 0 1.164-.045 1.746a16 16 0 0 0-1.565-1.341 3 3 0 0 0-4.77 1.971H16A3 3 0 0 0 13.763 22h-4.3c-1.133 0-2.035 0-2.767-.05-.748-.05-1.39-.157-1.992-.407a6 6 0 0 1-3.247-3.247C.999 17.191 1 15.852 1 14.622v-3.666c0-1.363 0-2.447.072-3.321.073-.896.226-1.66.582-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C7.509 2 8.593 2 9.956 2h3.578c.67 0 1.223 0 1.676.03.469.033.903.101 1.32.274a4 4 0 0 1 2.166 2.165Zm-2.93-.318c-.134-.055-.325-.1-.693-.126C14.698 4.001 14.214 4 13.5 4H10c-1.417 0-2.419 0-3.202.065-.772.063-1.244.182-1.614.371a4 4 0 0 0-1.748 1.748c-.158.31-.267.69-.335 1.256a6 6 0 0 1 1.603-.983c.602-.25 1.244-.356 1.992-.407C7.428 6 8.33 6 9.463 6h5.138c.93 0 1.711 0 2.379.032-.022-.415-.062-.628-.132-.797a2 2 0 0 0-1.083-1.083ZM17 11h-3a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2Zm5.642 7.992a1.6 1.6 0 0 1 0 2.02 14 14 0 0 1-2.452 2.36 1 1 0 0 1-1.2-1.6q.483-.361.927-.77H16a1 1 0 0 1 0-2h3.916a12 12 0 0 0-.926-.772 1 1 0 1 1 1.2-1.6 14 14 0 0 1 2.452 2.362Z" fill="currentColor"/>
    </svg>
  );
}
