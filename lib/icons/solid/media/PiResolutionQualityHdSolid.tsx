import React from 'react';

/**
 * PiResolutionQualityHdSolid icon from the solid style in media category.
 */
interface PiResolutionQualityHdSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiResolutionQualityHdSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'resolution-quality-hd icon',
  ...props
}: PiResolutionQualityHdSolidProps): React.ReactElement {
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
      <path d="M14.753 14.252V9.748c.213.003.386.009.534.021.272.022.373.06.423.085.189.097.342.25.439.439.025.05.063.15.085.423.023.284.024.657.024 1.234v.1c0 .578 0 .95-.024 1.234-.022.273-.06.374-.085.423-.097.19-.25.343-.439.439-.05.025-.15.063-.423.085a8 8 0 0 1-.534.021Z" fill="currentColor"/><path fillRule="evenodd" d="M9.357 3h5.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C22 8.4 22 9.273 22 10.357v3.286c0 1.084 0 1.958-.058 2.666-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C16.6 21 15.727 21 14.643 21H9.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C2 15.6 2 14.727 2 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 4.73 3.544c.592-.302 1.233-.428 1.961-.487C7.4 3 8.273 3 9.357 3Zm7.261 5.072c-.378-.193-.772-.264-1.168-.296-.375-.03-.83-.03-1.358-.03h-.34a1 1 0 0 0-1 1v6.51a1 1 0 0 0 1 1h.34c.528 0 .983 0 1.358-.032.396-.032.79-.103 1.168-.296a3 3 0 0 0 1.313-1.313c.193-.378.264-.772.296-1.168.031-.375.031-.83.03-1.358v-.178c.001-.527.001-.983-.03-1.358-.032-.396-.103-.79-.296-1.168a3 3 0 0 0-1.313-1.313Zm-8.876.673a1 1 0 1 0-2 0v6.51a1 1 0 1 0 2 0V13.25h1.505v2.005a1 1 0 1 0 2 0v-6.51a1 1 0 1 0-2 0v2.506H7.742z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
