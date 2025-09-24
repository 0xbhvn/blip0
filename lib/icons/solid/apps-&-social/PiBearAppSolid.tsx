import React from 'react';

/**
 * PiBearAppSolid icon from the solid style in apps-&-social category.
 */
interface PiBearAppSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBearAppSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'bear-app icon',
  ...props
}: PiBearAppSolidProps): JSX.Element {
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
      <path d="M8.158 2.072c.385-.109.769-.077 1.071-.016.36.072.714.21 1.027.367.315.158.617.351.876.556q.128.103.256.225c.928-.064 1.805-.085 2.591.021.95.13 1.84.452 2.558 1.16l.262.249a11 11 0 0 0 1.975 1.42c.766.43 1.416.666 1.802.73l.17.017c.06.003.138.006.266.015.174.013.57.045.925.303.408.296.566.732.616 1.126.036.28.025.598-.016.951l-.051.364c-.198 1.23-1.17 2.745-2.943 3.55l-.367.15c-.458.171-1.045.236-1.499.286-.514.056-.969.102-1.364.195-.412.098-.572.209-.62.264a.1.1 0 0 0-.026.055.8.8 0 0 0 .03.338l.148.562a11.6 11.6 0 0 0 1.248 2.889c.27.45.531.84.817 1.287.277.434.56.899.817 1.425A1 1 0 0 1 17.83 22H2.424a1 1 0 0 1-.993-1.114c.738-6.411 1.977-9.614 3.162-12.256l.313-.67c.642-1.308 1.065-1.74 1.888-2.853-.003-.487-.005-.996.06-1.405.085-.548.339-1.259 1.139-1.574z" fill="currentColor"/>
    </svg>
  );
}
