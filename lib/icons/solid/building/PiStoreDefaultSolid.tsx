import React from 'react';

/**
 * PiStoreDefaultSolid icon from the solid style in building category.
 */
interface PiStoreDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStoreDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'store-default icon',
  ...props
}: PiStoreDefaultSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="m7.344 2.006-.361-.003c-.513-.006-1.126-.012-1.7.063-.755.1-1.574.35-2.275.995-.69.635-1.01 1.42-1.178 2.15-.127.554-.18 1.152-.224 1.653l-.033.365q-.054.5-.118 1c-.105.832-.22 1.747-.22 2.622A4.25 4.25 0 0 0 3 14.303v4.34c0 .39 0 .74.024 1.03.025.312.083.643.248.968a2.5 2.5 0 0 0 1.093 1.092c.325.166.656.224.968.25.292.023.642.023 1.03.023h11.273c.39 0 .74 0 1.03-.024.313-.025.644-.083.969-.248a2.5 2.5 0 0 0 1.092-1.093c.147-.303.232-.632.25-.968.023-.292.023-.642.023-1.03v-4.337a4.25 4.25 0 0 0 1.77-3.455c0-.87-.117-1.782-.223-2.613a41 41 0 0 1-.12-1.01l-.033-.364c-.044-.5-.097-1.1-.224-1.653-.168-.73-.488-1.515-1.178-2.15-.701-.644-1.52-.895-2.275-.995-.574-.075-1.187-.069-1.7-.063l-.36.003zM5 18.606V15.08a4.25 4.25 0 0 0 3.746-1.487 4.25 4.25 0 0 0 3.256 1.515 4.25 4.25 0 0 0 3.256-1.515A4.25 4.25 0 0 0 19 15.08v3.527c0 .436 0 .704-.017.904a1.3 1.3 0 0 1-.034.215l-.003.007a.5.5 0 0 1-.219.22l-.008.003q-.106.028-.215.034c-.2.016-.468.017-.904.017H6.4c-.437 0-.704 0-.904-.017a1.3 1.3 0 0 1-.215-.034l-.008-.004a.5.5 0 0 1-.222-.226 1.3 1.3 0 0 1-.034-.215A13 13 0 0 1 5 18.606Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
