import React from 'react';

/**
 * PiStarHalfFilledStroke icon from the stroke style in general category.
 */
interface PiStarHalfFilledStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiStarHalfFilledStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'star-half-filled icon',
  ...props
}: PiStarHalfFilledStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3c.359 0 .718.093 1.039.28.549.32.97 1.203 1.812 2.967.25.523.374.785.553.993.21.244.473.436.77.56.254.105.54.143 1.115.219 1.939.255 2.908.383 3.382.807.554.495.8 1.249.642 1.975-.135.621-.844 1.294-2.262 2.64-.42.4-.63.599-.773.833a2.1 2.1 0 0 0-.294.906c-.022.273.03.558.136 1.128.356 1.922.534 2.884.277 3.465a2.06 2.06 0 0 1-1.68 1.221c-.633.064-1.492-.402-3.21-1.335-.51-.276-.764-.414-1.03-.478a2 2 0 0 0-.477-.055M12 3c-.359 0-.717.093-1.038.28-.55.32-.97 1.203-1.813 2.967-.25.523-.374.785-.553.993-.21.244-.473.436-.77.56-.253.105-.54.143-1.115.219-1.938.255-2.907.383-3.382.807a2.06 2.06 0 0 0-.642 1.975c.135.621.844 1.294 2.262 2.64.42.4.63.599.773.833.167.275.268.585.294.906.023.273-.03.558-.136 1.128-.356 1.922-.534 2.884-.277 3.465.3.68.941 1.146 1.68 1.221.633.064 1.492-.402 3.21-1.335.51-.276.764-.414 1.03-.478q.236-.055.477-.055M12 3v16.126" fill="none"/>
    </svg>
  );
}
