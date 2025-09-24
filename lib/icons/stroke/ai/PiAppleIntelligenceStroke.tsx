import React from 'react';

/**
 * PiAppleIntelligenceStroke icon from the stroke style in ai category.
 */
interface PiAppleIntelligenceStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAppleIntelligenceStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'apple-intelligence icon',
  ...props
}: PiAppleIntelligenceStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeWidth="2" d="M12.004 19.545c.817-.468 1.624-.966 2.46-1.398q.254-.132.514-.248c.86-.384 1.753-.704 2.628-1.052m-5.602 2.698s-2.141 3.05-4.393 1.965c-2.252-1.086-1.21-4.663-1.21-4.663m5.603 2.698c-.901-.516-1.784-1.077-2.72-1.527-.933-.45-1.92-.789-2.883-1.17m5.603 2.697s2.124 3.05 4.38 1.971 1.222-4.669 1.222-4.669m-11.205 0c-.143-.93-.257-1.872-.44-2.796q-.056-.279-.127-.556c-.236-.912-.542-1.809-.816-2.71M6.4 16.847s-3.719.226-4.274-2.216 2.89-3.846 2.89-3.846m0 0S2.53 8.013 4.085 6.064s4.81-.14 4.81-.14m-3.876 4.861c.702-.763 1.445-1.497 2.092-2.308.646-.811 1.198-1.699 1.785-2.554m0 0s.609-3.67 3.109-3.67 3.109 3.67 3.109 3.67m-6.218 0c1.034.074 2.072.197 3.109.197s2.075-.123 3.109-.197m0 0c.586.854 1.137 1.74 1.782 2.55.647.812 1.391 1.548 2.095 2.312m-3.877-4.862s3.244-1.816 4.803.136c1.56 1.952-.926 4.726-.926 4.726m0 0s3.44 1.413 2.883 3.85c-.558 2.437-4.267 2.212-4.267 2.212m1.384-6.062c-.302.992-.653 1.976-.883 2.988-.231 1.01-.342 2.05-.5 3.074" fill="none"/>
    </svg>
  );
}
