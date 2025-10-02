import React from 'react';

/**
 * PiArchiveLockedSolid icon from the solid style in files-&-folders category.
 */
interface PiArchiveLockedSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArchiveLockedSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'archive-locked icon',
  ...props
}: PiArchiveLockedSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M3 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm8.637 3.016c.221-.035.505-.035.726 0a.5.5 0 0 1 .41.376c.043.179.069.38.087.618h-1.72c.018-.237.044-.44.088-.618a.5.5 0 0 1 .409-.376Zm3.229 1.024c.007.123.013.231.017.333a2.55 2.55 0 0 1 1.192 1.993c.043.746-.215 1.675-.513 2.267a2.5 2.5 0 0 1-1.685 1.316c-.275.062-.57.061-.866.061H10.99c-.297 0-.591 0-.866-.06a2.5 2.5 0 0 1-1.685-1.317c-.298-.592-.556-1.521-.513-2.267a2.55 2.55 0 0 1 1.192-1.993c.004-.102.01-.21.017-.333a6.4 6.4 0 0 1 .15-1.118 2.5 2.5 0 0 1 2.045-1.882 4.6 4.6 0 0 1 1.342 0 2.5 2.5 0 0 1 2.045 1.882c.095.389.129.779.149 1.118Zm-4.59 1.992c.085-.017.243-.022.786-.022h1.876c.543 0 .7.005.786.022.155.031.34.22.354.45.018.311-.12.89-.303 1.253a.5.5 0 0 1-.337.263c-.027.006-.078.012-.5.012h-1.876c-.422 0-.473-.006-.5-.012a.5.5 0 0 1-.337-.263c-.183-.363-.321-.942-.303-1.254.013-.229.199-.418.354-.449Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
