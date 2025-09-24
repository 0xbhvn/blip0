import React from 'react';

/**
 * PiMediaGifSolid icon from the solid style in media category.
 */
interface PiMediaGifSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMediaGifSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'media-gif icon',
  ...props
}: PiMediaGifSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M9.357 3h5.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C22 8.4 22 9.273 22 10.357v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C16.6 21 15.727 21 14.643 21H9.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C2 15.6 2 14.727 2 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.73 3.544c.592-.302 1.233-.428 1.961-.487C7.4 3 8.273 3 9.357 3ZM8 7.75a3 3 0 0 0-3 3v2.5a3 3 0 0 0 3 3h1.5a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-.713a1 1 0 0 0-.287 1.958v1.292H8a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1h1.5a1 1 0 1 0 0-2zm5.847 1a1 1 0 0 0-2 0v6.5a1 1 0 0 0 2 0zm3.195-1a2 2 0 0 0-2 2v5.5a1 1 0 0 0 2 0v-2.244h1a1 1 0 0 0 0-2h-1V9.75h1a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
