import React from 'react';

/**
 * PiAcLeafSolid icon from the solid style in appliances category.
 */
interface PiAcLeafSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcLeafSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-leaf icon',
  ...props
}: PiAcLeafSolidProps): JSX.Element {
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
      <path d="M4 3a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6a3 3 0 0 0-3-3zm11 5a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z" fill="currentColor"/><path d="M17.72 19.755a1 1 0 1 0-1.121-1.656 7.1 7.1 0 0 0-2.143 2.28l-.028-.047c-.5-.866-.493-1.908-.18-2.807a4.35 4.35 0 0 1 1.929-2.32c.98-.565 2.449-.72 3.586-.704a9 9 0 0 1 1.65.165c.235.05.477.118.692.214.173.076.513.248.719.604.206.357.184.737.164.926a3.6 3.6 0 0 1-.16.705 9 9 0 0 1-.683 1.512c-.555.993-1.423 2.188-2.403 2.753a4.35 4.35 0 0 1-2.973.51 4 4 0 0 1-.743-.217c.392-.77.974-1.43 1.694-1.918Z" fill="currentColor"/><path d="M16.026 21.673a5 5 0 0 0-.245.562l-.04.11a1 1 0 0 1-1.878-.69l.04-.109q.226-.611.553-1.166c.366.607.935 1.036 1.57 1.293Z" fill="currentColor"/>
    </svg>
  );
}
