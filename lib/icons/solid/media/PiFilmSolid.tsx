import React from 'react';

/**
 * PiFilmSolid icon from the solid style in media category.
 */
interface PiFilmSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFilmSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'film icon',
  ...props
}: PiFilmSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M10.956 2c-1.204 0-2.19 0-3.006.05h-.023l-.292.021c-.896.074-1.66.227-2.359.583a6 6 0 0 0-2.622 2.622c-.356.7-.51 1.463-.583 2.359l-.02.292-.002.023C2 8.766 2 9.752 2 10.956v2.088c0 1.204 0 2.19.05 3.006v.023l.021.292c.074.896.227 1.66.583 2.359a6 6 0 0 0 2.622 2.622c.7.356 1.463.51 2.359.583l.292.02.023.002C8.766 22 9.752 22 10.956 22h2.088c1.204 0 2.19 0 3.006-.05h.023l.292-.021c.896-.074 1.66-.227 2.359-.583a6 6 0 0 0 2.622-2.622c.356-.7.51-1.463.583-2.359l.02-.292.002-.023c.049-.816.049-1.802.049-3.006v-2.088c0-1.204 0-2.19-.05-3.006v-.023l-.021-.292c-.074-.896-.227-1.66-.583-2.359a6 6 0 0 0-2.622-2.622c-.7-.356-1.463-.51-2.359-.583l-.292-.02-.023-.002C15.234 2 14.248 2 13.044 2zM6.184 4.436c.222-.113.48-.201.816-.267V7H4.169a3 3 0 0 1 .267-.816 4 4 0 0 1 1.748-1.748ZM4.011 9H7v2H4c0-.782 0-1.438.011-2ZM4 13h3v2H4.011A118 118 0 0 1 4 13Zm.169 4H7v2.831a3 3 0 0 1-.816-.267 4 4 0 0 1-1.748-1.748A3 3 0 0 1 4.169 17Zm13.647 2.564c-.222.113-.48.201-.816.267V17h2.831a3 3 0 0 1-.267.816 4 4 0 0 1-1.748 1.748ZM19.989 15H17v-2h3c0 .782 0 1.438-.011 2ZM20 11h-3V9h2.989c.01.562.011 1.218.011 2Zm-.169-4H17V4.169c.337.066.594.154.816.267a4 4 0 0 1 1.748 1.748c.113.222.201.48.267.816ZM8.9 11a1 1 0 1 0 0 2h6.2a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
