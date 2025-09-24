import React from 'react';

/**
 * PiHomeAltSolid icon from the solid style in building category.
 */
interface PiHomeAltSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHomeAltSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'home-alt icon',
  ...props
}: PiHomeAltSolidProps): React.ReactElement {
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
      <path d="M10.51 2.23a5 5 0 0 1 2.98 0c.61.19 1.136.525 1.681.963.528.425 1.132.996 1.88 1.702l2.716 2.565c.657.62 1.111 1.049 1.443 1.567.293.458.51.96.642 1.488.148.598.148 1.222.148 2.125v2.003c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.96a5 5 0 0 1-2.185 2.186c-.556.284-1.154.411-1.827.475-.421.04-.9.057-1.443.064V16a4 4 0 0 0-8 0v5.994a18 18 0 0 1-1.443-.064c-.673-.064-1.27-.192-1.827-.475a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C2 16.6 2 15.727 2 14.643V12.64c0-.903 0-1.527.148-2.125a5 5 0 0 1 .642-1.488c.332-.518.786-.947 1.443-1.567l2.716-2.565c.748-.706 1.352-1.277 1.88-1.702.545-.438 1.071-.773 1.68-.964Z" fill="currentColor"/><path d="M14 22h-4v-6a2 2 0 1 1 4 0z" fill="currentColor"/>
    </svg>
  );
}
