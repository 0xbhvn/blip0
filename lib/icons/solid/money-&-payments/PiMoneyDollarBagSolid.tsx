import React from 'react';

/**
 * PiMoneyDollarBagSolid icon from the solid style in money-&-payments category.
 */
interface PiMoneyDollarBagSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMoneyDollarBagSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'money-dollar-bag icon',
  ...props
}: PiMoneyDollarBagSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M16.182 6.442c3.016 1.5 4.984 4.973 5.407 8.203.237 1.813.01 3.684-.9 5.202-.934 1.556-2.522 2.633-4.757 2.91a32 32 0 0 1-7.864 0c-2.345-.29-3.972-1.462-4.881-3.129-.885-1.623-1.035-3.61-.694-5.504.597-3.32 2.821-6.85 6.134-8.028L7.459 3.469a1 1 0 0 1 1.11-1.387l.977.195a2.98 2.98 0 0 0 2.233-.442 4.97 4.97 0 0 1 4.607-.48l.65.26a1 1 0 0 1 .557 1.3zm-.823-3.327a2.97 2.97 0 0 0-2.47.385 4.97 4.97 0 0 1-2.857.834l.606 1.364q.162-.008.326-.008h2.073q.64.001 1.246.114zm-6.662 9.676c0-1.325.96-2.531 2.316-2.65a1 1 0 0 1 1.974-.003 2.52 2.52 0 0 1 1.945 1.186 1 1 0 1 1-1.692 1.067.51.51 0 0 0-.424-.259h-1.584c-.708 0-.708 1.317 0 1.317h1.536c1.471 0 2.535 1.264 2.535 2.658 0 1.324-.959 2.53-2.316 2.649a1 1 0 0 1-1.973.004 2.52 2.52 0 0 1-1.945-1.186 1 1 0 1 1 1.691-1.068c.114.18.276.26.424.26h1.584c.708 0 .708-1.317 0-1.317h-1.536c-1.47 0-2.535-1.264-2.535-2.658Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
