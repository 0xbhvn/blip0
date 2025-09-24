import React from 'react';

/**
 * PiNoteOutlineSolid icon from the solid style in editing category.
 */
interface PiNoteOutlineSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNoteOutlineSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'note-outline icon',
  ...props
}: PiNoteOutlineSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M7.8 3h-.041c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.396.776-.426 1.688-.434 2.809q-.003.372-.002.805v6.442c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C6.29 21 6.954 21 7.758 21h8.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V8.797q0-.434-.002-.805c-.008-1.121-.038-2.033-.434-2.809a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C17.71 3 17.046 3 16.242 3zM4 9h16v6.2c0 .857 0 1.439-.038 1.889-.035.438-.1.663-.18.819a2 2 0 0 1-.874.874c-.156.08-.38.145-.819.18-.45.037-1.032.038-1.889.038H7.8c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18a2 2 0 0 1-.874-.874c-.08-.156-.145-.38-.18-.819C4 16.639 4 16.057 4 15.2z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
