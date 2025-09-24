import React from 'react';

/**
 * PiEraserLineSolid icon from the solid style in editing category.
 */
interface PiEraserLineSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEraserLineSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'eraser-line icon',
  ...props
}: PiEraserLineSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M15.568 2.706a4.2 4.2 0 0 0-2.6 0c-.542.176-.999.486-1.455.873-.44.374-.941.875-1.552 1.485L5.064 9.96c-.61.61-1.11 1.111-1.485 1.552-.387.456-.697.913-.873 1.455a4.2 4.2 0 0 0 0 2.6c.176.542.486 1 .873 1.456.374.44.875.94 1.485 1.55l.335.336q.447.45.814.807A1 1 0 0 0 6.91 20H21a1 1 0 1 0 0-2h-6.025l3.961-3.961c.61-.61 1.11-1.111 1.485-1.552.387-.456.697-.913.873-1.455a4.2 4.2 0 0 0 0-2.6c-.176-.542-.486-1-.873-1.456-.374-.44-.875-.94-1.485-1.55l-.361-.362c-.61-.61-1.11-1.11-1.551-1.485-.457-.387-.914-.697-1.456-.873Zm-2.914 14.787-.51.507H7.32l-.51-.508-.301-.302c-.647-.647-1.09-1.09-1.404-1.46-.307-.362-.434-.589-.496-.78a2.2 2.2 0 0 1 0-1.364c.062-.19.189-.417.496-.78.315-.37.757-.813 1.404-1.46l.92-.921 6.147 6.146z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
