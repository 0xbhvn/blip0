import React from 'react';

/**
 * PiSnowflakeStroke icon from the stroke style in weather category.
 */
interface PiSnowflakeStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSnowflakeStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'snowflake icon',
  ...props
}: PiSnowflakeStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 3 3 3m0 0 3-3m-3 3v6m3 9-3-3m0 0-3 3m3-3v-6m0 0 5.196-3M12 12l-5.196 3M12 12 6.804 9M12 12l5.196 3m1.098-10.098L17.197 9m0 0 4.098 1.098m-15.588 9L6.804 15m0 0-4.098-1.098m0-3.804L6.804 9m0 0L5.706 4.902m15.588 9L17.197 15m0 0 1.098 4.098" fill="none"/>
    </svg>
  );
}
