import React from 'react';

/**
 * PiSupportHeartSolid icon from the solid style in general category.
 */
interface PiSupportHeartSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSupportHeartSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'support-heart icon',
  ...props
}: PiSupportHeartSolidProps): React.ReactElement {
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
      <path d="M16.276 2.5a2.9 2.9 0 0 0-1.47.358 3 3 0 0 0-1.45-.358c-1.515 0-3.18 1.172-3.18 3.024 0 1.64 1.115 2.909 2.041 3.679.487.404.985.724 1.393.947.203.11.395.203.56.27q.126.052.256.092c.063.018.211.06.383.06s.32-.042.384-.06q.13-.04.255-.091a6 6 0 0 0 .561-.271 9 9 0 0 0 1.392-.947c.927-.77 2.042-2.038 2.042-3.679 0-1.862-1.675-3.004-3.167-3.024Z" fill="currentColor"/><path d="M4 9a3 3 0 0 0-3 3v5a3 3 0 0 0 5.527 1.617c4.848 3.435 11.622 3.135 15.985-.875.55-.48.87-1.094.86-1.781-.01-.654-.317-1.205-.666-1.608-.67-.775-1.802-1.353-2.811-1.353h-4.042c-.68-.632-1.585-1-2.545-1h-1.072a11.5 11.5 0 0 0-5.477-1.181A3 3 0 0 0 4 9Zm3 7.459v-3.646a9.46 9.46 0 0 1 4.387.998c.248.124.521.189.798.189h1.123a1.74 1.74 0 0 1 1.559.971v.002l-.006.014-.01.011h-.002l-.004.002H10a1 1 0 1 0 0 2h4.839a2.03 2.03 0 0 0 2.029-2h3.027c.15 0 .386.051.654.182.263.129.492.303.645.48.158.182.178.298.178.33 0 .01 0 .026-.015.056a.7.7 0 0 1-.165.192l-.024.021C17.316 19.81 11.132 19.917 7 16.46Z" fill="currentColor"/>
    </svg>
  );
}
