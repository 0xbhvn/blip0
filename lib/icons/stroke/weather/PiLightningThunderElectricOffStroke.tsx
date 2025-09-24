import React from 'react';

/**
 * PiLightningThunderElectricOffStroke icon from the stroke style in weather category.
 */
interface PiLightningThunderElectricOffStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLightningThunderElectricOffStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'lightning-thunder-electric-off icon',
  ...props
}: PiLightningThunderElectricOffStrokeProps): React.ReactElement {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.97 11.676c.975.29 1.507.499 1.749.85.263.382.347.872.229 1.328-.137.526-.772 1.014-2.041 1.99l-5.652 4.342c-1.628 1.25-2.442 1.876-3 1.81-.4-.05-.76-.271-.998-.608m1.048-6.693L2 22m7.305-7.305c.008-.128.002-.24-.02-.349a1.6 1.6 0 0 0-.448-.83c-.26-.248-.653-.36-1.44-.585l-.567-.162c-1.496-.427-2.244-.64-2.546-1.077a1.63 1.63 0 0 1-.234-1.322c.132-.524.756-1.013 2.004-1.99l5.756-4.513c1.638-1.284 2.457-1.926 3.018-1.863.485.055.912.366 1.136.828.26.533-.003 1.58-.53 3.673l-.44 1.753c-.104.411-.182.722-.226.974m-5.463 5.463 5.463-5.463M22 2l-7.232 7.232" fill="none"/>
    </svg>
  );
}
