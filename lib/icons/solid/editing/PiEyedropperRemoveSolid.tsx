import React from 'react';

/**
 * PiEyedropperRemoveSolid icon from the solid style in editing category.
 */
interface PiEyedropperRemoveSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEyedropperRemoveSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'eyedropper-remove icon',
  ...props
}: PiEyedropperRemoveSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M21.963 3.172a4 4 0 0 0-5.657 0l-.707.707-.117-.117a2.835 2.835 0 0 0-4.009 0L10.2 5.036a1.308 1.308 0 0 0 .164 1.989q.587.42 1.155.863L5.77 13.636c-.305.304-.573.572-.765.891a3 3 0 0 0-.425 1.401c-.017.373.057.744.142 1.166l.005.023-.482 1.445a8 8 0 0 0-.19.624c-.042.183-.109.525.022.89a1.5 1.5 0 0 0 .909.91c.365.13.707.064.89.02a7 7 0 0 0 .62-.188l.004-.001.033-.011 1.412-.47.023.004c.422.085.794.16 1.166.142a3 3 0 0 0 1.401-.425c.32-.191.587-.46.892-.765l5.756-5.756q.477.606.926 1.235c.47.657 1.418.736 1.99.164l1.274-1.274a2.834 2.834 0 0 0 0-4.008l-.117-.117.707-.708a4 4 0 0 0 0-5.656ZM7.247 14.987l5.815-5.815q1.501 1.327 2.833 2.824l-5.82 5.819c-.403.404-.489.48-.57.527a1 1 0 0 1-.466.142c-.094.004-.207-.011-.767-.123a1.7 1.7 0 0 0-.896.056l-1.096.365.365-1.096c.1-.3.118-.586.056-.896-.112-.56-.127-.673-.123-.767a1 1 0 0 1 .142-.467c.048-.08.123-.166.527-.57Z" clipRule="evenodd" fill="currentColor"/><path d="M2 6a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2z" fill="currentColor"/>
    </svg>
  );
}
