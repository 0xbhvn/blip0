import React from 'react';

/**
 * PiFile02SearchStroke icon from the stroke style in files-&-folders category.
 */
interface PiFile02SearchStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02SearchStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-search icon',
  ...props
}: PiFile02SearchStrokeProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 11v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h3m9 9v-1a8 8 0 0 0-8-8h-1m9 9a3 3 0 0 0-3-3h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3m4.5 15.5-1.379-1.379m0 0A2.998 2.998 0 0 0 12 11c-1.659 0-3 1.341-3 3a2.998 2.998 0 0 0 5.121 2.121Z" fill="none"/>
    </svg>
  );
}
