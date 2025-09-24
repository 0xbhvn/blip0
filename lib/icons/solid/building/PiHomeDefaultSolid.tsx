import React from 'react';

/**
 * PiHomeDefaultSolid icon from the solid style in building category.
 */
interface PiHomeDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHomeDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'home-default icon',
  ...props
}: PiHomeDefaultSolidProps): JSX.Element {
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
      <path d="M13.49 2.23a5 5 0 0 0-2.98 0c-.61.19-1.136.525-1.68.963-.529.425-1.133.996-1.88 1.702L4.232 7.46c-.657.62-1.111 1.049-1.443 1.567a5 5 0 0 0-.642 1.488C2 11.113 2 11.737 2 12.64v3.84c0 .942 0 1.61.153 2.185a4.5 4.5 0 0 0 3.182 3.182C5.91 22 6.578 22 7.52 22c.332 0 .674.019.998-.068a2 2 0 0 0 1.414-1.414c.07-.261.069-.549.068-.784V17c0-.503.003-.638.018-.735a1.5 1.5 0 0 1 1.247-1.247c.097-.015.232-.018.735-.018s.638.003.735.018a1.5 1.5 0 0 1 1.247 1.247c.015.097.018.232.018.735v2.734c0 .235-.002.523.068.784a2 2 0 0 0 1.414 1.414c.324.087.666.068.998.068.942 0 1.61 0 2.185-.153a4.5 4.5 0 0 0 3.182-3.182C22 18.09 22 17.422 22 16.48v-3.84c0-.903 0-1.527-.148-2.125a5 5 0 0 0-.642-1.488c-.332-.518-.786-.947-1.443-1.567l-2.716-2.565c-.748-.706-1.352-1.277-1.88-1.702-.545-.438-1.07-.773-1.68-.964Z" fill="currentColor"/>
    </svg>
  );
}
