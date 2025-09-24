import React from 'react';

/**
 * PiLeafSolid icon from the solid style in weather category.
 */
interface PiLeafSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLeafSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'leaf icon',
  ...props
}: PiLeafSolidProps): React.ReactElement {
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
      <path d="M18.345 2.245a1.002 1.002 0 0 1 1.62.496l.142.546c1.41 5.629 1.146 10.724-1.3 13.925-2.48 3.243-6.85 4.152-12.736 2.3q-.07.481-.071.988a1 1 0 0 1-2 0c0-.803.107-1.561.297-2.275l.09.292c.096.295.323.529.614.634l.598.208q.238.078.472.151c.347-2.355 1.892-4.264 3.572-5.682a18 18 0 0 1 3.687-2.38q.038-.016.057-.026l.012-.005h.001v-.001a.999.999 0 1 0-.802-1.831c-.028.014-.058.025-.11.05q-.1.045-.277.132a20 20 0 0 0-3.856 2.531c-1.635 1.38-3.377 3.365-4.058 5.927-1.192-3.826-1.23-6.649-.347-8.754.921-2.192 2.744-3.38 4.677-4.113 1.892-.717 4.096-1.067 5.845-1.45.904-.199 1.699-.406 2.359-.67.662-.265 1.123-.562 1.416-.897z" fill="currentColor"/>
    </svg>
  );
}
