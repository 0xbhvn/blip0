import React from 'react';

/**
 * PiUserRectangleSolid icon from the solid style in users category.
 */
interface PiUserRectangleSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserRectangleSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'user-rectangle icon',
  ...props
}: PiUserRectangleSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M11.157 2h1.686c1.224 0 2.203 0 2.994.065.812.066 1.514.205 2.16.534A5.5 5.5 0 0 1 20.4 5.003c.329.646.468 1.348.534 2.16.065.791.065 1.77.065 2.994v3.686c0 1.224 0 2.203-.065 2.994-.066.812-.205 1.514-.534 2.16a5.5 5.5 0 0 1-2.404 2.404c-.646.329-1.348.468-2.16.534-.791.065-1.77.065-2.994.065h-1.686c-1.224 0-2.203 0-2.994-.065-.812-.066-1.514-.205-2.16-.534a5.5 5.5 0 0 1-2.404-2.404c-.329-.646-.468-1.348-.534-2.16C3 16.046 3 15.067 3 13.843v-3.686c0-1.224 0-2.203.065-2.994.066-.812.205-1.514.534-2.16a5.5 5.5 0 0 1 2.404-2.404c.646-.329 1.348-.468 2.16-.534C8.954 2 9.933 2 11.157 2ZM5.058 16.674l-.008-.098A4.36 4.36 0 0 1 8.383 15h7.234c1.338 0 2.535.603 3.334 1.552l-.009.122c-.056.689-.162 1.098-.323 1.415a3.5 3.5 0 0 1-1.53 1.53c-.317.161-.726.267-1.415.323-.7.057-1.597.058-2.874.058h-1.6c-1.277 0-2.174 0-2.874-.058-.689-.056-1.098-.162-1.415-.323a3.5 3.5 0 0 1-1.53-1.53c-.161-.317-.267-.726-.323-1.415ZM8 10a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
