import React from 'react';

/**
 * PiCloudAISolid icon from the solid style in ai category.
 */
interface PiCloudAISolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudAISolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-ai icon',
  ...props
}: PiCloudAISolidProps): JSX.Element {
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
      <path d="M12.593 13.435a5 5 0 0 0-.496-.435 4.8 4.8 0 0 0 .903-.902 4.8 4.8 0 0 0 .903.902 4.8 4.8 0 0 0-.903.902 5 5 0 0 0-.407-.467Z" fill="currentColor"/><path d="M19.465 8.715a7.502 7.502 0 0 0-14.348 1.46A5.502 5.502 0 0 0 6.5 21h10a6.5 6.5 0 0 0 2.965-12.285Zm-5.535.918c.293.743.566 1.19.896 1.523s.781.614 1.54.914a1 1 0 0 1 0 1.86c-.759.3-1.21.582-1.54.914s-.603.78-.896 1.523a1 1 0 0 1-1.86 0c-.293-.743-.566-1.19-.896-1.523s-.781-.614-1.54-.914a1 1 0 0 1 0-1.86c.759-.3 1.21-.582 1.54-.914s.603-.78.896-1.523a1 1 0 0 1 1.86 0ZM9 16za1 1 0 1 1 0 2h0a1 1 0 1 1 0-2Z" fill="currentColor"/>
    </svg>
  );
}
