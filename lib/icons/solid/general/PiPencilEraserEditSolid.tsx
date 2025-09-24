import React from 'react';

/**
 * PiPencilEraserEditSolid icon from the solid style in general category.
 */
interface PiPencilEraserEditSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPencilEraserEditSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'pencil-eraser-edit icon',
  ...props
}: PiPencilEraserEditSolidProps): React.ReactElement {
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
      <path d="M16.154 2.757a2.57 2.57 0 0 1 3.215-.346 7.3 7.3 0 0 1 2.146 2.132l.038.06.056.085a2.6 2.6 0 0 1-.32 3.16l-.073.073-.975.98a.3.3 0 0 1-.425 0l-4.689-4.688a.3.3 0 0 1 0-.424z" fill="currentColor"/><path d="M13.717 5.631a.3.3 0 0 0-.425 0L3.052 15.918c-.216.217-.428.428-.586.684a2.6 2.6 0 0 0-.309.722c-.075.291-.082.59-.089.898L2 20.97a1 1 0 0 0 .998 1.024l2.8.005c.316.001.627.002.93-.07.265-.064.518-.17.75-.312.265-.163.484-.384.707-.609l10.221-10.265a.3.3 0 0 0 0-.424z" fill="currentColor"/>
    </svg>
  );
}
