import React from 'react';

/**
 * PiDrawPencilSolid icon from the solid style in editing category.
 */
interface PiDrawPencilSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDrawPencilSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'draw-pencil icon',
  ...props
}: PiDrawPencilSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M.85 11C.85 5.394 5.394.85 11 .85S21.15 5.394 21.15 11a10.15 10.15 0 1 1-20.3 0ZM11 6a1 1 0 0 1 .858.487l2.99 5 1.01 1.693a1 1 0 0 1 .142.513v3.234a1 1 0 0 1-2 0V13.97l-.87-1.456-.307-.513H9.177l-.307.513L8 13.97v2.958a1 1 0 1 1-2 0v-3.234a1 1 0 0 1 .142-.513l1.012-1.693 2.988-5A1 1 0 0 1 11 6Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
