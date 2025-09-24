import React from 'react';

/**
 * PiFileStarSolid icon from the solid style in files-&-folders category.
 */
interface PiFileStarSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFileStarSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-star icon',
  ...props
}: PiFileStarSolidProps): React.ReactElement {
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
      <path d="M11.642 14q.19-.168.358-.358.168.19.358.358a4 4 0 0 0-.358.358 4 4 0 0 0-.358-.358Z" fill="currentColor"/><path fillRule="evenodd" d="M13 3.241v-2.24L12.463 1h-2.106C9.273 1 8.4 1 7.691 1.058c-.728.06-1.369.185-1.96.487A5 5 0 0 0 3.544 3.73c-.302.592-.428 1.233-.487 1.961C3 6.4 3 7.273 3 8.357v7.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C8.4 23 9.273 23 10.357 23h3.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C21 17.6 21 16.727 21 15.643V9.537L20.999 9h-2.24c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C13 4.71 13 4.046 13 3.242Zm0 7.722a1 1 0 0 0-2 0l-.006.166a2 2 0 0 1-1.865 1.865L8.963 13a1 1 0 0 0 0 1.998l.166.007a2 2 0 0 1 1.865 1.865l.007.166a1 1 0 0 0 1.998 0l.007-.166a2 2 0 0 1 1.865-1.865l.166-.007a1 1 0 0 0 0-1.998l-.166-.007a2 2 0 0 1-1.865-1.865z" clipRule="evenodd" fill="currentColor"/><path d="M15 3.2V1.283q.501.176.956.454c.506.31.93.735 1.544 1.348L18.913 4.5c.615.614 1.04 1.04 1.35 1.545q.278.455.454.956H18.8c-.857 0-1.439 0-1.889-.037-.438-.036-.663-.101-.819-.18a2 2 0 0 1-.874-.875c-.08-.156-.145-.38-.18-.819C15 4.639 15 4.057 15 3.2Z" fill="currentColor"/>
    </svg>
  );
}
