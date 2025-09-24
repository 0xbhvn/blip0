import React from 'react';

/**
 * PiLightningThunderElectricOnSolid icon from the solid style in weather category.
 */
interface PiLightningThunderElectricOnSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLightningThunderElectricOnSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'lightning-thunder-electric-on icon',
  ...props
}: PiLightningThunderElectricOnSolidProps): React.ReactElement {
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
      <path d="M13.176 1.593c.473-.309 1.092-.658 1.764-.582a2.46 2.46 0 0 1 1.924 1.383c.282.58.215 1.267.116 1.855-.105.63-.31 1.446-.564 2.454l-.453 1.799c-.109.434-.176.705-.212.913-.034.197-.023.256-.02.268.025.126.085.23.16.303 0 0 .027.029.186.09.18.068.426.139.836.256l.558.16c.715.203 1.32.376 1.78.557.46.18.963.433 1.292.91.43.626.562 1.415.373 2.146-.144.552-.518.97-.885 1.309-.368.34-.874.73-1.477 1.193l-5.73 4.403c-.78.599-1.418 1.09-1.932 1.418-.473.301-1.09.64-1.756.56a2.46 2.46 0 0 1-1.91-1.388c-.28-.578-.214-1.257-.116-1.84.104-.623.307-1.43.557-2.424l.406-1.613c.109-.434.176-.705.212-.913.033-.198.023-.257.02-.269a.6.6 0 0 0-.16-.303l-.186-.089-.836-.256-.615-.176c-.708-.202-1.307-.373-1.764-.552-.455-.178-.955-.43-1.283-.904a2.63 2.63 0 0 1-.38-2.136c.138-.55.505-.967.866-1.307.362-.342.86-.733 1.452-1.196l5.834-4.573c.785-.616 1.427-1.12 1.943-1.456Z" fill="currentColor"/>
    </svg>
  );
}
