import React from 'react';

/**
 * PiDiscountTicketSolid icon from the solid style in general category.
 */
interface PiDiscountTicketSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDiscountTicketSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'discount-ticket icon',
  ...props
}: PiDiscountTicketSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M10.357 1h3.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C21 6.4 21 7.273 21 8.357v12.591c0 .09 0 .188-.004.27v.003c-.003.066-.011.25-.086.442a1.31 1.31 0 0 1-1.814.69 1.4 1.4 0 0 1-.358-.274l-.002-.002c-.058-.058-.123-.132-.182-.199l-.01-.012-.18-.202c-.287-.322-.352-.39-.399-.428a1 1 0 0 0-1.264 0c-.046.037-.111.106-.398.428l-.029.033c-.097.11-.216.244-.343.347a2 2 0 0 1-2.529 0 3 3 0 0 1-.343-.347l-.029-.033c-.286-.322-.352-.39-.398-.428a1 1 0 0 0-1.264 0c-.046.037-.112.106-.398.428l-.029.033c-.098.11-.216.244-.343.347a2 2 0 0 1-2.529 0 3 3 0 0 1-.343-.347l-.029-.033c-.286-.322-.352-.39-.398-.428a1 1 0 0 0-1.265 0c-.046.037-.111.106-.398.428l-.18.202-.01.012c-.06.067-.124.14-.182.2l-.002.002c-.046.047-.174.179-.358.272a1.31 1.31 0 0 1-1.814-.69 1.4 1.4 0 0 1-.086-.441v-.003a6 6 0 0 1-.004-.27V8.357c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.961A5 5 0 0 1 5.73 1.545c.592-.302 1.233-.428 1.961-.487C8.4 1 9.273 1 10.357 1Zm5.603 7.778a1.1 1.1 0 1 0-1.556-1.556L8.04 13.586a1.1 1.1 0 0 0 1.556 1.556zM9.068 6.9a1.35 1.35 0 1 0 0 2.7 1.35 1.35 0 0 0 0-2.7Zm4.514 7.214a1.35 1.35 0 1 1 2.7 0 1.35 1.35 0 0 1-2.7 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
