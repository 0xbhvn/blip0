import React from 'react';

/**
 * PiWalletCheckSolid icon from the solid style in web3-&-crypto category.
 */
interface PiWalletCheckSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWalletCheckSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'wallet-check icon',
  ...props
}: PiWalletCheckSolidProps): React.ReactElement {
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
      <path d="M18.696 4.47c.223.538.281 1.146.297 1.874q.154.05.303.113a6 6 0 0 1 3.247 3.247c.25.601.356 1.244.407 1.992.038.552.047 1.202.05 1.975a3 3 0 0 0-2.692.352 16.7 16.7 0 0 0-2.82 2.428 3 3 0 0 0-3.898 4.54L14.6 22H9.465c-1.134 0-2.036 0-2.768-.05-.748-.05-1.39-.157-1.992-.407a6 6 0 0 1-3.247-3.247C.999 17.191 1 15.852 1 14.622v-3.666c0-1.363 0-2.447.072-3.321.073-.896.226-1.66.582-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C7.509 2 8.593 2 9.956 2h3.578c.67 0 1.223 0 1.676.03.469.033.903.101 1.32.274a4 4 0 0 1 2.166 2.165ZM13.5 4H10c-1.417 0-2.419 0-3.202.065-.772.063-1.244.182-1.614.371a4 4 0 0 0-1.748 1.748c-.158.31-.267.69-.335 1.256a6 6 0 0 1 1.603-.983c.602-.25 1.244-.356 1.992-.407C7.428 6 8.33 6 9.464 6H14.6c.93 0 1.711 0 2.379.032-.022-.415-.062-.628-.132-.797a2 2 0 0 0-1.083-1.083c-.133-.055-.324-.1-.692-.126C14.698 4.001 14.214 4 13.5 4Zm-.5 8a1 1 0 0 0 1 1h3a1 1 0 1 0 0-2h-3a1 1 0 0 0-1 1Zm9.826 3.936a1 1 0 0 1-.262 1.39 12.66 12.66 0 0 0-3.851 4.17 1 1 0 0 1-1.575.212l-2.135-2.133a1 1 0 0 1 1.414-1.415l1.25 1.25a14.7 14.7 0 0 1 3.769-3.736 1 1 0 0 1 1.39.262Z" fill="currentColor"/>
    </svg>
  );
}
