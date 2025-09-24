import React from 'react';

/**
 * PiPhoneSolid icon from the solid style in devices category.
 */
interface PiPhoneSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhoneSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'phone icon',
  ...props
}: PiPhoneSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M11.357 1h1.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C20 6.4 20 7.273 20 8.357v7.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C14.6 23 13.727 23 12.643 23h-1.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C4 17.6 4 16.727 4 15.643V8.357c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.961A5 5 0 0 1 6.73 1.545c.592-.302 1.233-.428 1.961-.487C9.4 1 10.273 1 11.357 1ZM12 18a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
