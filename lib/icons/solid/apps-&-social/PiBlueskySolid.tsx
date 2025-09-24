import React from 'react';

/**
 * PiBlueskySolid icon from the solid style in apps-&-social category.
 */
interface PiBlueskySolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBlueskySolid({
  size = 24,
  color,
  className,
  ariaLabel = 'bluesky icon',
  ...props
}: PiBlueskySolidProps): JSX.Element {
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
      <path d="M19.707 14.33c.322.293.583.624.773.995.767 1.491.16 3.092-1.096 4.385-1.137 1.17-2.248 1.825-3.35 1.94-1.143.117-2.059-.367-2.729-1-.561-.53-.987-1.195-1.305-1.807-.318.612-.744 1.278-1.305 1.808-.67.632-1.586 1.116-2.728.998-1.103-.114-2.214-.768-3.35-1.939-1.257-1.293-1.864-2.894-1.097-4.385.19-.37.451-.702.773-.995-1.242-.55-2.264-1.566-2.7-3.13-.078-.277-.145-.785-.204-1.3a72 72 0 0 1-.185-1.871C1.093 6.742 1 5.406 1 5.047c0-.89.192-1.681.687-2.257.521-.604 1.228-.8 1.875-.79 1.2.019 2.496.729 3.375 1.39 1.25.941 2.503 2.328 3.545 3.688A29 29 0 0 1 12 9.26a28 28 0 0 1 1.518-2.182c1.042-1.36 2.296-2.747 3.545-3.688.879-.661 2.175-1.371 3.375-1.39.647-.01 1.354.186 1.875.79.495.576.687 1.366.687 2.257 0 .36-.093 1.695-.204 2.982a72 72 0 0 1-.185 1.872c-.059.514-.126 1.022-.203 1.298-.437 1.565-1.459 2.581-2.7 3.131Z" fill="currentColor"/>
    </svg>
  );
}
