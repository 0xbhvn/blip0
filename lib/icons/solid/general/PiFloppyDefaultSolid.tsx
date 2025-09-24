import React from 'react';

/**
 * PiFloppyDefaultSolid icon from the solid style in general category.
 */
interface PiFloppyDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFloppyDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'floppy-default icon',
  ...props
}: PiFloppyDefaultSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M9.357 2h5.59c.577 0 1.108.06 1.626.275.517.214.936.547 1.343.955l2.854 2.854c.408.407.741.826.955 1.343.215.518.275 1.05.275 1.626V17a5 5 0 0 1-4 4.9v-4.141c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C13.71 12 13.046 12 12.242 12h-.483c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C6 16.29 6 16.954 6 17.758V21.9A5 5 0 0 1 2 17V9.357c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.73 2.544c.592-.302 1.233-.428 1.961-.487C7.4 2 8.273 2 9.357 2ZM8 22h8v-4.2c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C13.639 14 13.057 14 12.2 14h-.4c-.857 0-1.439 0-1.889.038-.438.035-.663.1-.819.18a2 2 0 0 0-.874.874c-.08.156-.145.38-.18.819C8 16.361 8 16.943 8 17.8zM7 6a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
