import React from 'react';

/**
 * PiMegaphoneAnnouncementShoutSolid icon from the solid style in general category.
 */
interface PiMegaphoneAnnouncementShoutSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMegaphoneAnnouncementShoutSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'megaphone-announcement-shout icon',
  ...props
}: PiMegaphoneAnnouncementShoutSolidProps): JSX.Element {
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
      <path d="M15.27 2.637a1.5 1.5 0 0 1 .831-.589c.771-.206 1.39.273 1.71.585.373.366.723.879 1.042 1.452.644 1.16 1.273 2.78 1.756 4.585s.75 3.522.771 4.85c.012.655-.035 1.274-.176 1.779-.12.43-.417 1.154-1.188 1.36a1.5 1.5 0 0 1-1.015-.093 26.4 26.4 0 0 0-6.508-.37l1.755 5.5A1 1 0 0 1 13.296 23H8.92a1 1 0 0 1-.944-.67l-1.841-5.26-.812.124a1 1 0 0 1-.727-.172 6.126 6.126 0 0 1-2.03-7.576 1 1 0 0 1 .544-.512L7.78 7.11a26.4 26.4 0 0 0 7.49-4.472Zm4.093 11.584q.023-.283.018-.668c-.02-1.12-.249-2.67-.703-4.365-.455-1.696-1.03-3.152-1.574-4.132a7 7 0 0 0-.35-.57c-.026.325-.026.73.006 1.204.07 1.06.295 2.395.68 3.83.384 1.434.857 2.702 1.326 3.656.21.427.412.777.597 1.045ZM9.629 21h2.298l-1.46-4.575-2.319.343z" fill="currentColor"/>
    </svg>
  );
}
