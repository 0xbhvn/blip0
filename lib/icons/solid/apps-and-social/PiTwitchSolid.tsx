import React from 'react';

/**
 * PiTwitchSolid icon from the solid style in apps-&-social category.
 */
interface PiTwitchSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTwitchSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'twitch icon',
  ...props
}: PiTwitchSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M7.76 2h8.48c.806 0 1.469 0 2.008.042.558.043 1.069.136 1.55.369a3.93 3.93 0 0 1 1.756 1.672c.254.474.355.978.402 1.52C22 6.12 22 6.755 22 7.516v4.48c0 .818 0 1.401-.141 1.961-.125.495-.33.965-.608 1.396-.313.485-.742.892-1.353 1.472l-.415.394c-.614.585-1.04.99-1.547 1.284-.446.26-.931.45-1.437.566-.571.13-1.167.13-2.04.13H12.4l-3.71 3.525A1 1 0 0 1 7 22v-2.802a18 18 0 0 1-1.248-.04c-.558-.043-1.069-.136-1.55-.369a3.93 3.93 0 0 1-1.756-1.673c-.254-.473-.355-.977-.401-1.518C2 15.079 2 14.444 2 13.683V7.517c0-.761 0-1.396.045-1.915.046-.54.147-1.045.4-1.519a3.93 3.93 0 0 1 1.757-1.672c.481-.233.992-.326 1.55-.37C6.292 2 6.954 2 7.76 2ZM12 7.75a1 1 0 1 0-2 0V11a1 1 0 1 0 2 0zm5 0a1 1 0 1 0-2 0V11a1 1 0 1 0 2 0z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
