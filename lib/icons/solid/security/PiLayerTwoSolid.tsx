import React from 'react';

/**
 * PiLayerTwoSolid icon from the solid style in security category.
 */
interface PiLayerTwoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLayerTwoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'layer-two icon',
  ...props
}: PiLayerTwoSolidProps): JSX.Element {
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
      <path d="M12.543 4.298a3.1 3.1 0 0 0-1.086 0c-.41.073-.789.252-1.226.46L3.835 7.781c-.336.159-.647.306-.884.445-.228.133-.571.359-.768.75a1.72 1.72 0 0 0 0 1.545c.197.393.54.617.768.751.237.14.548.286.884.445l6.396 3.025c.437.207.816.386 1.226.46.359.063.727.063 1.086 0 .41-.074.789-.253 1.226-.46l6.396-3.025c.336-.159.647-.306.884-.445.228-.133.571-.358.768-.75a1.72 1.72 0 0 0 0-1.545c-.197-.392-.54-.618-.768-.751-.237-.14-.548-.286-.884-.445l-6.396-3.025c-.437-.207-.816-.386-1.226-.46Z" fill="currentColor"/><path d="M2.629 13.68a1 1 0 0 1 1.276.332q.02.014.057.035c.151.09.38.198.765.38l6.271 2.966c.574.271.696.32.808.34a1.1 1.1 0 0 0 .388 0c.112-.02.234-.069.808-.34l6.271-2.966c.386-.182.614-.29.765-.38q.037-.021.057-.035a1 1 0 0 1 1.722 1.01c-.197.392-.54.617-.768.751-.238.14-.548.286-.884.445l-6.396 3.025c-.437.207-.816.386-1.226.46a3.1 3.1 0 0 1-1.086 0c-.41-.074-.789-.253-1.226-.46l-6.396-3.025a12 12 0 0 1-.884-.445c-.228-.134-.571-.359-.768-.751a1 1 0 0 1 .446-1.342Z" fill="currentColor"/>
    </svg>
  );
}
