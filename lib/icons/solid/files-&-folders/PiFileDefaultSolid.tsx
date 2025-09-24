import React from 'react';

/**
 * PiFileDefaultSolid icon from the solid style in files-&-folders category.
 */
interface PiFileDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFileDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-default icon',
  ...props
}: PiFileDefaultSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M13 3.241c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C17.29 9 17.954 9 18.758 9h2.24q.003.251.002.537v6.106c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 23 14.727 23 13.643 23h-3.286c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C3 17.6 3 16.727 3 15.643V8.357c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 5.73 1.544c.592-.302 1.233-.428 1.961-.487C8.4 1 9.273 1 10.357 1h2.106l.537.001zm2-1.958V3.2c0 .857 0 1.439.038 1.889.035.438.1.663.18.819a2 2 0 0 0 .874.874c.156.08.38.145.819.18C17.361 7 17.943 7 18.8 7h1.918a5 5 0 0 0-.455-.956c-.31-.506-.735-.93-1.35-1.545l-1.412-1.412c-.614-.615-1.04-1.04-1.545-1.35A5 5 0 0 0 15 1.283Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
