import React from 'react';

/**
 * PiExternalLinkSquareSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiExternalLinkSquareSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiExternalLinkSquareSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'external-link-square icon',
  ...props
}: PiExternalLinkSquareSolidProps): JSX.Element {
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
      <path d="M19.561 3.103a19.8 19.8 0 0 0-5.174.15 1 1 0 0 0-.49 1.749l1.347 1.146q.322.275.634.56l-6.585 6.585a1 1 0 1 0 1.414 1.414l6.585-6.585q.285.313.56.634l1.146 1.347a1 1 0 0 0 1.749-.49c.276-1.718.326-3.458.15-5.174a1.496 1.496 0 0 0-1.336-1.336Z" fill="currentColor"/><path d="M10.504 5.001a1 1 0 1 0-.009-2c-1.642.008-2.8.045-3.791.456a6 6 0 0 0-3.247 3.247c-.25.602-.356 1.244-.407 1.992C3 9.428 3 10.33 3 11.464V12l-.001.51c-.003.952-.005 1.907.072 2.856.073.895.227 1.659.583 2.358a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.358.583.875.071 1.959.071 3.322.071h1.694c1.25 0 2.058 0 2.75-.166a6 6 0 0 0 4.434-4.433C21 15.709 21 14.9 21 13.65v-.15a1 1 0 1 0-2 0c0 1.452-.007 2.003-.11 2.434a4 4 0 0 1-2.956 2.956c-.432.103-.982.11-2.434.11H12c-1.417 0-2.42 0-3.203-.065-.772-.063-1.243-.182-1.613-.37a4 4 0 0 1-1.748-1.749c-.189-.37-.308-.841-.371-1.613C5 14.419 5 13.417 5 12v-.5c0-1.178 0-2.012.045-2.668.044-.646.128-1.045.26-1.363a4 4 0 0 1 2.164-2.164c.563-.234 1.31-.296 3.035-.304Z" fill="currentColor"/>
    </svg>
  );
}
