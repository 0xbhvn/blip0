import React from 'react';

/**
 * PiOfficeDeskSolid icon from the solid style in building category.
 */
interface PiOfficeDeskSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiOfficeDeskSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'office-desk icon',
  ...props
}: PiOfficeDeskSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M22 4a1 1 0 1 1 0 2v9.8c0 .543.001 1.012-.03 1.395-.028.346-.086.69-.23 1.025l-.067.142a3 3 0 0 1-1.105 1.196l-.206.115c-.378.193-.771.264-1.167.297-.383.031-.852.03-1.395.03h-1.6c-.543 0-1.012.001-1.395-.03a3.2 3.2 0 0 1-1.025-.23l-.142-.067a3 3 0 0 1-1.196-1.105l-.115-.206c-.193-.378-.264-.771-.297-1.167-.03-.383-.03-.852-.03-1.395V10H4v9a1 1 0 1 1-2 0V6a1 1 0 0 1 0-2zm-6 8a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm0-4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zM4 8h8V6H4z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
