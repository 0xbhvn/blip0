import React from 'react';

/**
 * PiBookmarkRemoveStroke icon from the stroke style in files-&-folders category.
 */
interface PiBookmarkRemoveStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBookmarkRemoveStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'bookmark-remove icon',
  ...props
}: PiBookmarkRemoveStrokeProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10h6m4 12V9c0-1.861 0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C14.792 2 13.861 2 12 2s-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21C5 6.208 5 7.139 5 9v13l1.794-1.537c1.848-1.584 2.771-2.376 3.808-2.678a5 5 0 0 1 2.796 0c1.037.302 1.96 1.094 3.808 2.678z" fill="none"/>
    </svg>
  );
}
