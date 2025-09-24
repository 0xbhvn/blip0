import React from 'react';

/**
 * PiIdCardHorizontalSolid icon from the solid style in users category.
 */
interface PiIdCardHorizontalSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiIdCardHorizontalSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'id-card-horizontal icon',
  ...props
}: PiIdCardHorizontalSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M22 8.8v-.041c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C17.71 3 17.046 3 16.242 3H7.758c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C2 7.29 2 7.954 2 8.758v6.484c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C6.29 21 6.954 21 7.758 21h8.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01zM5 15.333A2.333 2.333 0 0 1 7.333 13h2.334A2.333 2.333 0 0 1 12 15.333c0 .92-.746 1.667-1.667 1.667H6.667C5.747 17 5 16.254 5 15.333ZM8.5 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm3.5 2a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1Zm3 3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
