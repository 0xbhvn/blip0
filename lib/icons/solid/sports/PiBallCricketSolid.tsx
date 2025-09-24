import React from 'react';

/**
 * PiBallCricketSolid icon from the solid style in sports category.
 */
interface PiBallCricketSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBallCricketSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'ball-cricket icon',
  ...props
}: PiBallCricketSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M10.552 1.951a10.15 10.15 0 0 0-8.356 7.422 10.15 10.15 0 0 0 3.69 10.732.999.999 0 0 1 1.605.99q.45.224.93.404l5.228-19.515q-.503-.084-1.004-.115l-.247.92a1 1 0 1 1-1.932-.518zm1.07 3.736a1 1 0 0 0-1.932-.518l-.26.966a1 1 0 0 0 1.933.518zM10.585 9.55a1 1 0 0 0-1.932-.518l-.259.966a1 1 0 1 0 1.932.518zM9.55 13.413a1 1 0 1 0-1.932-.517l-.259.966a1 1 0 1 0 1.932.517zm-1.035 3.864a1 1 0 1 0-1.932-.518l-.26.966a1 1 0 1 0 1.933.518z" clipRule="evenodd" fill="currentColor"/><path fillRule="evenodd" d="M13.087 19.538a1 1 0 0 1 .707 1.225l-.26.966a1 1 0 0 1-.156.33 10.15 10.15 0 0 0 8.426-7.432c1.364-5.089-1.392-10.31-6.223-12.125l-5.229 19.514q.746.123 1.484.135a1 1 0 0 1-.233-.94l.259-.966a1 1 0 0 1 1.224-.707Zm4.14-15.455a1 1 0 0 1 .708 1.225l-.26.966a1 1 0 1 1-1.931-.518l.259-.966a1 1 0 0 1 1.225-.707Zm-1.035 3.864a1 1 0 0 1 .707 1.225l-.258.966a1 1 0 0 1-1.932-.518l.259-.966a1 1 0 0 1 1.224-.707Zm-1.035 3.864a1 1 0 0 1 .707 1.224l-.259.966a1 1 0 1 1-1.931-.517l.258-.966a1 1 0 0 1 1.225-.707Zm-1.035 3.863a1 1 0 0 1 .707 1.225l-.259.966a1 1 0 0 1-1.932-.518l.259-.966a1 1 0 0 1 1.225-.707Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
