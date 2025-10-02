import React from 'react';

/**
 * PiInvoice02Solid icon from the solid style in files-&-folders category.
 */
interface PiInvoice02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiInvoice02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'invoice-02 icon',
  ...props
}: PiInvoice02SolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M10.357 1h3.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C21 6.4 21 7.273 21 8.357v11.206c0 .346 0 .663-.02.922-.022.265-.073.604-.262.92a2 2 0 0 1-1.57.971c-.369.028-.694-.078-.941-.178-.24-.097-.525-.239-.834-.393l-.032-.017c-.646-.323-.838-.412-1.025-.46a2 2 0 0 0-.77-.04c-.19.027-.39.096-1.067.35l-.529.199c-.54.203-.948.356-1.378.418-.38.055-.765.055-1.144 0-.43-.062-.838-.215-1.378-.418l-.53-.199c-.676-.254-.876-.323-1.066-.35a2 2 0 0 0-.77.04c-.187.048-.378.137-1.025.46l-.032.017c-.31.154-.593.296-.834.393-.247.1-.572.206-.94.178a2 2 0 0 1-1.571-.97c-.19-.317-.24-.656-.261-.921C3 20.226 3 19.909 3 19.563V8.357c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.961A5 5 0 0 1 5.73 1.545c.592-.302 1.233-.428 1.961-.487C8.4 1 9.273 1 10.357 1ZM13 6a1 1 0 1 0-2 0v.501c-1.608.042-2.778 1.44-2.778 2.999 0 1.583 1.206 3 2.852 3h1.852c.4 0 .852.374.852 1s-.453 1-.852 1h-1.91c-.342 0-.709-.26-.821-.732a1 1 0 1 0-1.946.464c.298 1.249 1.374 2.26 2.75 2.268v.5a1 1 0 0 0 2 0v-.5c1.609-.043 2.779-1.44 2.779-3 0-1.583-1.206-3-2.852-3h-1.852c-.4 0-.852-.374-.852-1s.453-1 .852-1h1.91c.341 0 .709.26.821.732a1 1 0 1 0 1.946-.464C15.453 7.52 14.377 6.508 13 6.5z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
