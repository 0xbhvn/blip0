import React from 'react';

/**
 * PiTextCursorStroke icon from the stroke style in editing category.
 */
interface PiTextCursorStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTextCursorStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'text-cursor icon',
  ...props
}: PiTextCursorStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 22c.93 0 1.395 0 1.776-.102a3 3 0 0 0 2.122-2.122C12 19.396 12 18.93 12 18m0 0c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.121 2.122C14.606 22 15.07 22 16 22m-4-4v-6M8 2c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C12 4.605 12 5.07 12 6m0 0c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.121-2.122C14.606 2 15.07 2 16 2m-4 4v6m0 0h2.008M12 12h-2" fill="none"/>
    </svg>
  );
}
