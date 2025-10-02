import React from 'react';

/**
 * PiRedditNewSolid icon from the solid style in apps-&-social category.
 */
interface PiRedditNewSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRedditNewSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'reddit-new icon',
  ...props
}: PiRedditNewSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M15.441 2.281a2.347 2.347 0 0 1 4.44 1.067 2.348 2.348 0 0 1-4.497.947c-1.368.158-2.399 1.337-2.465 2.656 2.073.141 3.982.755 5.51 1.717a3.426 3.426 0 1 1 3.538 5.804c-.03 2.152-1.254 4.01-3.04 5.299-1.812 1.306-4.264 2.083-6.927 2.083s-5.115-.777-6.927-2.083c-1.786-1.288-3.01-3.147-3.041-5.3A3.426 3.426 0 1 1 5.57 8.669c1.489-.937 3.338-1.543 5.348-1.705.067-2.391 1.967-4.555 4.523-4.682Zm-7.824 9.16c-1.243 0-1.96 1.147-2.007 2.155-.027.59.165 1.145.61 1.533.413.36.922.47 1.343.47.405 0 .905-.095 1.318-.457.428-.375.605-.897.629-1.424.045-.976-.558-2.277-1.893-2.277Zm8.766 0c-1.335 0-1.938 1.3-1.893 2.277.024.527.2 1.05.63 1.424.412.362.912.456 1.317.456.421 0 .93-.109 1.343-.47.445-.387.637-.941.61-1.532-.047-1.008-.764-2.155-2.007-2.155Zm-6.81 4.565a1 1 0 0 0-.741 1.67c1.715 1.899 4.493 1.844 6.301.037a1 1 0 0 0-.706-1.707z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
