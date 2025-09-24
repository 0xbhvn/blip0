import React from 'react';

/**
 * PiPresentationBargraphSolid icon from the solid style in chart-&-graph category.
 */
interface PiPresentationBargraphSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPresentationBargraphSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'presentation-bargraph icon',
  ...props
}: PiPresentationBargraphSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M12 1a1 1 0 0 1 1 1h2.643c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C23 7.4 23 8.273 23 9.357v2.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487q-.326.026-.7.039l1.285 2.572a1 1 0 1 1-1.788.894L15.382 19H8.618l-1.724 3.447a1 1 0 1 1-1.788-.894l1.286-2.572a15 15 0 0 1-.7-.039c-.73-.06-1.37-.185-1.962-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C1 13.6 1 12.727 1 11.643V9.357c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 3.73 2.544c.592-.302 1.233-.428 1.961-.487C6.4 2 7.273 2 8.357 2H11a1 1 0 0 1 1-1Zm1 6a1 1 0 1 0-2 0v7a1 1 0 1 0 2 0zm5 3a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0zM8 12a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
