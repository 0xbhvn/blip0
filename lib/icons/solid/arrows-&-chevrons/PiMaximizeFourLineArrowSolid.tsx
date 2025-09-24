import React from 'react';

/**
 * PiMaximizeFourLineArrowSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiMaximizeFourLineArrowSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMaximizeFourLineArrowSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'maximize-four-line-arrow icon',
  ...props
}: PiMaximizeFourLineArrowSolidProps): JSX.Element {
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
      <path d="M8.165 2.254a1 1 0 0 1 .477 1.754l-.953.796q-.4.334-.784.687l2.802 2.801a1 1 0 0 1-1.414 1.415L5.49 6.905q-.353.384-.687.784l-.796.953a1 1 0 0 1-1.754-.477 18.3 18.3 0 0 1-.177-4.713 1.52 1.52 0 0 1 1.375-1.375 18.3 18.3 0 0 1 4.713.177Z" fill="currentColor"/><path d="M15.035 2.978a1 1 0 0 1 .8-.724 18.3 18.3 0 0 1 4.713-.177 1.52 1.52 0 0 1 1.375 1.375 18.3 18.3 0 0 1-.177 4.713 1 1 0 0 1-1.753.477l-.797-.953a23 23 0 0 0-.687-.784l-2.802 2.802a1 1 0 0 1-1.414-1.415l2.802-2.801a23 23 0 0 0-.784-.687l-.953-.796a1 1 0 0 1-.323-1.03Z" fill="currentColor"/><path d="M21.022 15.035a1 1 0 0 1 .724.8c.262 1.566.322 3.15.177 4.713a1.52 1.52 0 0 1-1.375 1.375 18.3 18.3 0 0 1-4.713-.177 1 1 0 0 1-.477-1.753l.953-.797q.4-.335.784-.687l-2.802-2.802a1 1 0 0 1 1.414-1.415l2.802 2.803q.353-.385.687-.784l.796-.953a1 1 0 0 1 1.03-.323Z" fill="currentColor"/><path d="M8.965 21.022a1 1 0 0 1-.8.724c-1.566.262-3.15.322-4.713.177a1.52 1.52 0 0 1-1.375-1.375 18.3 18.3 0 0 1 .177-4.713 1 1 0 0 1 1.754-.477l.796.953q.334.4.687.784l2.802-2.802a1 1 0 1 1 1.414 1.414l-2.802 2.802q.384.353.784.687l.953.796a1 1 0 0 1 .323 1.03Z" fill="currentColor"/>
    </svg>
  );
}
