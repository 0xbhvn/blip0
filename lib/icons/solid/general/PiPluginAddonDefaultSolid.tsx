import React from 'react';

/**
 * PiPluginAddonDefaultSolid icon from the solid style in general category.
 */
interface PiPluginAddonDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPluginAddonDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'plugin-addon-default icon',
  ...props
}: PiPluginAddonDefaultSolidProps): React.ReactElement {
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
      <path d="M6.568 3c-.252 0-.498 0-.706.017a2 2 0 0 0-.77.201 2 2 0 0 0-.874.874 2 2 0 0 0-.201.77C4 5.07 4 5.316 4 5.568v1.61q-.183.059-.362.149a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C2 10.18 2 10.635 2 11.161v2.482c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C7.4 21 8.273 21 9.357 21h5.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C22 15.6 22 14.727 22 13.643V11.16c0-.527 0-.981-.03-1.356-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311q-.18-.09-.362-.149v-1.61c0-.252 0-.498-.017-.706a2 2 0 0 0-.201-.77 2 2 0 0 0-.874-.874 2 2 0 0 0-.77-.201C17.93 3 17.684 3 17.432 3h-1.864c-.252 0-.498 0-.706.017a2 2 0 0 0-.77.201 2 2 0 0 0-.874.874 2 2 0 0 0-.201.77C13 5.07 13 5.316 13 5.568V7h-2V5.568c0-.252 0-.498-.017-.706a2 2 0 0 0-.201-.77 2 2 0 0 0-.874-.874 2 2 0 0 0-.77-.201C8.93 3 8.684 3 8.432 3z" fill="currentColor"/>
    </svg>
  );
}
