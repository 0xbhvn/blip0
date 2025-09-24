import React from 'react';

/**
 * PiVideoRecordingSolid icon from the solid style in media category.
 */
interface PiVideoRecordingSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVideoRecordingSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'video-recording icon',
  ...props
}: PiVideoRecordingSolidProps): JSX.Element {
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
      <path d="M8.415 4a1 1 0 1 0-.038-2c-1.383.027-2.454.118-3.381.59A5.5 5.5 0 0 0 2.59 4.996c-.472.927-.563 1.998-.59 3.38a1 1 0 1 0 2 .04c.026-1.392.13-2.037.372-2.512a3.5 3.5 0 0 1 1.532-1.532c.475-.242 1.12-.346 2.511-.372Z" fill="currentColor"/><path d="M15.623 2a1 1 0 0 0-.038 2c1.39.026 2.036.13 2.511.372a3.5 3.5 0 0 1 1.532 1.532c.242.475.346 1.12.372 2.511a1 1 0 0 0 2-.038c-.027-1.383-.118-2.454-.59-3.381a5.5 5.5 0 0 0-2.406-2.406c-.927-.472-1.998-.563-3.38-.59Z" fill="currentColor"/><path d="M10.159 7.396c-.598 0-1.105 0-1.522.034-.437.036-.862.114-1.267.32a3.25 3.25 0 0 0-1.421 1.422c-.207.405-.285.83-.321 1.267-.034.417-.034.924-.034 1.522v.078c0 .598 0 1.105.034 1.522.036.437.114.862.32 1.267.312.612.81 1.11 1.422 1.422.405.206.83.284 1.267.32.417.034.924.034 1.522.034h.98c.597 0 1.104 0 1.52-.034.438-.036.863-.114 1.268-.32.515-.263.95-.657 1.26-1.14l.13.104c1.245.995 3.089.11 3.089-1.485v-3.458c0-1.594-1.844-2.48-3.089-1.485l-.13.105a3.25 3.25 0 0 0-1.26-1.14c-.405-.207-.83-.285-1.267-.321-.417-.034-.924-.034-1.522-.034z" fill="currentColor"/><path d="M4 15.585a1 1 0 0 0-2 .038c.027 1.383.118 2.454.59 3.381a5.5 5.5 0 0 0 2.406 2.406c.927.472 1.998.563 3.38.59a1 1 0 1 0 .04-2c-1.392-.026-2.037-.13-2.512-.372a3.5 3.5 0 0 1-1.532-1.532c-.242-.475-.346-1.12-.372-2.511Z" fill="currentColor"/><path d="M22 15.623a1 1 0 1 0-2-.038c-.026 1.39-.13 2.036-.372 2.511a3.5 3.5 0 0 1-1.532 1.532c-.475.242-1.12.346-2.511.372a1 1 0 0 0 .038 2c1.383-.027 2.454-.118 3.381-.59a5.5 5.5 0 0 0 2.406-2.406c.472-.927.563-1.998.59-3.38Z" fill="currentColor"/>
    </svg>
  );
}
