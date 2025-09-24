import React from 'react';

/**
 * PiPointerCursorClickStroke icon from the stroke style in media category.
 */
interface PiPointerCursorClickStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPointerCursorClickStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'pointer-cursor-click icon',
  ...props
}: PiPointerCursorClickStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.998 4.879V2.304m4.888 3.843 1.517-1.407M4.875 11.002H2.3m4.368-4.33L4.503 4.507m.233 12.9 1.407-1.518m11.726.23c-.277.092-.416.138-.54.198a2.16 2.16 0 0 0-1.016 1.015 5 5 0 0 0-.197.54c-.51 1.543-.765 2.314-1.007 2.617a2.165 2.165 0 0 1-3.481-.13c-.218-.32-.415-1.107-.809-2.683l-.884-3.536c-.462-1.848-.693-2.772-.44-3.415a2.17 2.17 0 0 1 1.226-1.227c.643-.252 1.567-.021 3.415.44l3.536.885c1.576.394 2.364.59 2.683.809a2.165 2.165 0 0 1 .13 3.481c-.303.241-1.074.496-2.616 1.006Z" fill="none"/>
    </svg>
  );
}
