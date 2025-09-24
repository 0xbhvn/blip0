import React from 'react';

/**
 * PiWindowBrowserSolid icon from the solid style in devices category.
 */
interface PiWindowBrowserSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowBrowserSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'window-browser icon',
  ...props
}: PiWindowBrowserSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M22 9.27v-.04c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392-.541-.044-1.206-.044-2.01-.044H7.758c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C2 7.759 2 8.425 2 9.229v.043c0 .11.09.2.2.2h19.6a.2.2 0 0 0 .2-.2zm-20 6.4v-3.4c0-.28 0-.42.054-.526a.5.5 0 0 1 .219-.218c.107-.055.247-.055.527-.055h18.4c.28 0 .42 0 .527.055a.5.5 0 0 1 .218.218c.055.107.055.247.055.527v3.44c0 .806 0 1.47-.044 2.01-.046.564-.145 1.08-.392 1.566a4 4 0 0 1-1.748 1.748c-.485.247-1.002.346-1.564.392-.541.044-1.206.044-2.01.044H7.758c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C2 17.182 2 16.517 2 15.713zm4-10.3a1.1 1.1 0 0 0 0 2.2h.01a1.1 1.1 0 1 0 0-2.2zm1.9 1.1A1.1 1.1 0 0 1 9 5.37h.01a1.1 1.1 0 0 1 0 2.2H9a1.1 1.1 0 0 1-1.1-1.1Zm4.1-1.1a1.1 1.1 0 0 0 0 2.2h.01a1.1 1.1 0 0 0 0-2.2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
