import React from 'react';

/**
 * PiFileBoltSolid icon from the solid style in files-&-folders category.
 */
interface PiFileBoltSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFileBoltSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-bolt icon',
  ...props
}: PiFileBoltSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M13 3.241v-2.24L12.463 1h-2.106C9.273 1 8.4 1 7.691 1.058c-.728.06-1.369.185-1.96.487A5 5 0 0 0 3.544 3.73c-.302.592-.428 1.233-.487 1.961C3 6.4 3 7.273 3 8.357v7.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C8.4 23 9.273 23 10.357 23h3.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C21 17.6 21 16.727 21 15.643V9.537L20.999 9h-2.24c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 0 1-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C13 4.71 13 4.046 13 3.242Zm-.2 7.859a1 1 0 0 0-1.6-1.2l-1.824 2.433c-.168.223-.331.44-.447.626-.1.164-.307.512-.276.948.034.484.3.922.713 1.175.374.228.778.205.97.19.217-.017.486-.062.76-.108l1.607-.267L11.2 16.9a1 1 0 1 0 1.6 1.2l1.825-2.433c.167-.223.33-.44.446-.626.101-.164.307-.512.277-.948a1.5 1.5 0 0 0-.714-1.174c-.373-.229-.778-.206-.97-.19-.217.016-.486.06-.76.107l-1.606.267z" clipRule="evenodd" fill="currentColor"/><path d="M15 3.2V1.283q.501.176.956.454c.506.31.93.735 1.544 1.348L18.913 4.5c.615.614 1.04 1.04 1.35 1.545q.278.455.454.956H18.8c-.857 0-1.439 0-1.889-.037-.438-.036-.663-.101-.819-.18a2 2 0 0 1-.874-.875c-.08-.156-.145-.38-.18-.819C15 4.639 15 4.057 15 3.2Z" fill="currentColor"/>
    </svg>
  );
}
