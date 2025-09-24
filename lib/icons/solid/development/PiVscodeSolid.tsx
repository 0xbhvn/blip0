import React from 'react';

/**
 * PiVscodeSolid icon from the solid style in development category.
 */
interface PiVscodeSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVscodeSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'vscode icon',
  ...props
}: PiVscodeSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M17.447 2.106a1 1 0 0 0-1.116.15L9.161 8.71 4.61 5.207A1 1 0 0 0 3.4 5.2l-2 1.5a1 1 0 0 0-.069 1.543L5.505 12l-4.174 3.757A1 1 0 0 0 1.4 17.3l2 1.5a1 1 0 0 0 1.21-.007l4.55-3.503 7.17 6.452a1 1 0 0 0 1.116.151l3.343-1.67c.53-.265.998-.498 1.353-.86.311-.319.548-.701.693-1.122.166-.48.165-1.002.164-1.595V7.353c0-.593.002-1.115-.164-1.595a3 3 0 0 0-.693-1.121c-.355-.363-.822-.596-1.353-.86zM16 13.969 13.439 12 16 10.029z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
