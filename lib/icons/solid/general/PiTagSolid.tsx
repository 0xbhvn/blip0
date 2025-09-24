import React from 'react';

/**
 * PiTagSolid icon from the solid style in general category.
 */
interface PiTagSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTagSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'tag icon',
  ...props
}: PiTagSolidProps): React.ReactElement {
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
      <path d="M8.565 2.069c1.44-.076 2.345-.124 3.214.05a7 7 0 0 1 2.18.837c.763.451 1.403 1.092 2.423 2.112l2.66 2.66c1.18 1.18 1.944 1.943 2.377 2.792a6 6 0 0 1 0 5.448c-.433.849-1.196 1.612-2.377 2.792l-.282.282c-1.18 1.18-1.943 1.944-2.792 2.377a6 6 0 0 1-5.448 0c-.849-.433-1.612-1.196-2.792-2.377l-2.66-2.66c-1.02-1.02-1.66-1.66-2.112-2.423a7 7 0 0 1-.836-2.18c-.175-.869-.127-1.774-.051-3.214l.052-.998c.038-.729.07-1.334.135-1.828.068-.514.179-.986.418-1.43a4 4 0 0 1 1.634-1.635c.445-.239.917-.35 1.431-.418.494-.065 1.099-.097 1.828-.135zM8.49 6.488a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" fill="currentColor"/>
    </svg>
  );
}
