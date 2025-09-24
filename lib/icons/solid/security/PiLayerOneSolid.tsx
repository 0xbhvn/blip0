import React from 'react';

/**
 * PiLayerOneSolid icon from the solid style in security category.
 */
interface PiLayerOneSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLayerOneSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'layer-one icon',
  ...props
}: PiLayerOneSolidProps): React.ReactElement {
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
      <path d="M12.543 6.548a3.1 3.1 0 0 0-1.086 0c-.41.073-.789.252-1.226.46l-6.396 3.024c-.336.159-.647.306-.884.445-.228.133-.571.358-.768.75a1.72 1.72 0 0 0 0 1.545c.197.393.54.617.768.751.237.14.548.286.884.445l6.396 3.025c.437.207.816.386 1.226.46.359.063.727.063 1.086 0 .41-.074.789-.253 1.226-.46l6.396-3.025c.336-.159.647-.306.884-.445.228-.133.571-.358.768-.75a1.72 1.72 0 0 0 0-1.545c-.197-.393-.54-.617-.768-.751-.237-.14-.548-.286-.884-.445l-6.396-3.025c-.437-.207-.816-.386-1.226-.46Z" fill="currentColor"/>
    </svg>
  );
}
