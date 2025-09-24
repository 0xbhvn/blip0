import React from 'react';

/**
 * PiGlobeNetworkSolid icon from the solid style in development category.
 */
interface PiGlobeNetworkSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGlobeNetworkSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'globe-network icon',
  ...props
}: PiGlobeNetworkSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M8.661 2.778a11.6 11.6 0 0 1 .574 6.71 11 11 0 0 0 2.188.118A13.47 13.47 0 0 0 8.66 2.778Zm2.83 8.827a13.3 13.3 0 0 1-2.848-.187 11.5 11.5 0 0 1-1.633 2.8 16.8 16.8 0 0 0 4.021.41c.263-.969.42-1.981.46-3.024Zm1.642 2.854c.221-.998.347-2.033.366-3.094q1.186-.236 2.287-.674c.234.975.381 1.984.434 3.018-.99.343-2.023.597-3.087.75Zm-2.817 2.168a18.8 18.8 0 0 1-4.901-.757 11.6 11.6 0 0 1-2.085 1.41 10.2 10.2 0 0 0 3.89 3.676 13.6 13.6 0 0 0 3.096-4.33Zm.46-14.344a16.55 16.55 0 0 1 4.422 6.487q-.864.36-1.792.57a15.45 15.45 0 0 0-2.63-7.057ZM9.238 21.769a15.5 15.5 0 0 0 3.274-5.222c1.268-.12 2.5-.367 3.683-.727a16.4 16.4 0 0 1-1.629 6.003c-.82.213-1.68.327-2.566.327a10.2 10.2 0 0 1-2.762-.38ZM17.62 9.79q.402 1.508.546 3.102a16.8 16.8 0 0 0 3.836-2.623 10.1 10.1 0 0 0-1.128-3.197 13.2 13.2 0 0 1-3.254 2.719Zm2.066-4.418a10.13 10.13 0 0 0-6.422-3.443c1.586 1.7 2.857 3.7 3.717 5.905a11.2 11.2 0 0 0 2.705-2.462Zm-1.452 9.695a18.5 18.5 0 0 1-1.042 5.656 10.15 10.15 0 0 0 4.928-7.949 18.8 18.8 0 0 1-3.886 2.293ZM7.292 9.01a9.57 9.57 0 0 0-.569-5.683 10.2 10.2 0 0 0-3.357 3.334A11.15 11.15 0 0 0 7.292 9.01ZM2.46 8.528a13.1 13.1 0 0 0 4.224 2.388 9.5 9.5 0 0 1-1.774 2.68 16.7 16.7 0 0 1-3.058-1.501V12c0-1.22.214-2.39.608-3.472Zm.716 6.524a19 19 0 0 1-.994-.472q.12.457.28.897.368-.197.714-.425Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
