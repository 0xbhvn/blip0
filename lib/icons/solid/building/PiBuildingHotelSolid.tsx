import React from 'react';

/**
 * PiBuildingHotelSolid icon from the solid style in building category.
 */
interface PiBuildingHotelSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBuildingHotelSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'building-hotel icon',
  ...props
}: PiBuildingHotelSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M20 6q.195.14.386.29a1 1 0 0 0 1.228-1.58 15.67 15.67 0 0 0-19.228 0 1 1 0 0 0 1.228 1.58Q3.804 6.14 4 6v13.5A2.5 2.5 0 0 0 6.5 22H9v-3.814a1 1 0 0 1-.535-1.692 5 5 0 0 1 7.07 0A1 1 0 0 1 15 18.186V22h2.5a2.5 2.5 0 0 0 2.5-2.5zM8 5.9A1.1 1.1 0 0 1 9.1 7v.01a1.1 1.1 0 1 1-2.2 0V7A1.1 1.1 0 0 1 8 5.9Zm4 0A1.1 1.1 0 0 1 13.1 7v.01a1.1 1.1 0 0 1-2.2 0V7A1.1 1.1 0 0 1 12 5.9Zm4 0A1.1 1.1 0 0 1 17.1 7v.01a1.1 1.1 0 0 1-2.2 0V7A1.1 1.1 0 0 1 16 5.9Zm-8 3A1.1 1.1 0 0 1 9.1 10v.01a1.1 1.1 0 1 1-2.2 0V10A1.1 1.1 0 0 1 8 8.9Zm4 0a1.1 1.1 0 0 1 1.1 1.1v.01a1.1 1.1 0 1 1-2.2 0V10A1.1 1.1 0 0 1 12 8.9Zm4 0a1.1 1.1 0 0 1 1.1 1.1v.01a1.1 1.1 0 1 1-2.2 0V10A1.1 1.1 0 0 1 16 8.9Zm-8 3A1.1 1.1 0 0 1 9.1 13v.01a1.1 1.1 0 1 1-2.2 0V13A1.1 1.1 0 0 1 8 11.9Zm4 0a1.1 1.1 0 0 1 1.1 1.1v.01a1.1 1.1 0 1 1-2.2 0V13a1.1 1.1 0 0 1 1.1-1.1Zm4 0a1.1 1.1 0 0 1 1.1 1.1v.01a1.1 1.1 0 1 1-2.2 0V13a1.1 1.1 0 0 1 1.1-1.1Zm-5 5.3V22h2v-4.8a3 3 0 0 0-2 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
