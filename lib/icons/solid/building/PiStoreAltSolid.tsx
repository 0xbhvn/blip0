import React from 'react';

/**
 * PiStoreAltSolid icon from the solid style in building category.
 */
interface PiStoreAltSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStoreAltSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'store-alt icon',
  ...props
}: PiStoreAltSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M7.34 2c-1.758 0-3.198.29-4.216 1.24-1.011.944-1.391 2.342-1.555 3.983l-.315 3.145-.004.054c-.067 1.503.563 2.98 1.75 3.867v4.347c0 .39 0 .74.024 1.03.025.313.083.644.248.969a2.5 2.5 0 0 0 1.093 1.092c.325.166.656.224.968.25.292.023.642.023 1.03.023h5.273c.39 0 .74 0 1.03-.024.313-.025.644-.083.969-.248a2.5 2.5 0 0 0 1.092-1.093 2.5 2.5 0 0 0 .25-.968c.023-.292.023-.642.023-1.03v-4.771q.135-.134.257-.278A4.25 4.25 0 0 0 19 15.075V21a1 1 0 0 0 2 0v-6.71c1.188-.886 1.826-2.364 1.748-3.875q0-.024-.003-.047l-.315-3.145c-.164-1.641-.544-3.039-1.555-3.983C19.857 2.29 18.416 2 16.659 2zM5 18.6v-3.524a4.25 4.25 0 0 0 3.745-1.488A4.25 4.25 0 0 0 13 14.984V18.6c0 .436 0 .704-.017.904a1.3 1.3 0 0 1-.034.215l-.002.005-.002.003a.5.5 0 0 1-.218.218l-.008.004q-.106.026-.215.034c-.2.016-.467.017-.904.017H6.4c-.437 0-.704 0-.904-.017a1.3 1.3 0 0 1-.215-.034l-.008-.004a.5.5 0 0 1-.218-.218l-.004-.008a1.3 1.3 0 0 1-.034-.215A13 13 0 0 1 5 18.6Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
