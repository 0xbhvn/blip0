import React from 'react';

/**
 * PiUploadUpSolid icon from the solid style in general category.
 */
interface PiUploadUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUploadUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'upload-up icon',
  ...props
}: PiUploadUpSolidProps): React.ReactElement {
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
      <path d="M12 3c-.38 0-.76.127-1.073.38A16 16 0 0 0 8.2 6.212a1 1 0 0 0 .9 1.595q.46-.048.884-.099c.35-.04.686-.08 1.016-.11V15a1 1 0 1 0 2 0V7.599q.493.045 1.015.11.424.05.885.098a1 1 0 0 0 .9-1.595 16 16 0 0 0-2.727-2.832A1.7 1.7 0 0 0 12 3Z" fill="currentColor"/><path d="M4 15a1 1 0 1 0-2 0 6 6 0 0 0 6 6h8a6 6 0 0 0 6-6 1 1 0 1 0-2 0 4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" fill="currentColor"/>
    </svg>
  );
}
