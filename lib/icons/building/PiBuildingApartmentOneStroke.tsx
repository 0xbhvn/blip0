import React from 'react';

/**
 * PiBuildingApartmentOneStroke icon from the stroke style in building category.
 */
interface PiBuildingApartmentOneStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBuildingApartmentOneStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'building-apartment-one icon',
  ...props
}: PiBuildingApartmentOneStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6h3m-3 4h3m-3 4h3m-3 4h3M9.2 2h4.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C17 3.52 17 4.08 17 5.2v15.2c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C16.24 22 15.96 22 15.4 22H7.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C6 21.24 6 20.96 6 20.4V5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 2 8.08 2 9.2 2Z" fill="none"/>
    </svg>
  );
}
