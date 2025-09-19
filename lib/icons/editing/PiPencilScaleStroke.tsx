import React from 'react';

/**
 * PiPencilScaleStroke icon from the stroke style in editing category.
 */
interface PiPencilScaleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPencilScaleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'pencil-scale icon',
  ...props
}: PiPencilScaleStrokeProps): JSX.Element {
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h4m-4-8h4m-4-4h3m-3 8h3m.2 8h2.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 20.48 21 19.92 21 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 2 18.92 2 17.8 2h-2.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C12 3.52 12 4.08 12 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C13.52 22 14.08 22 15.2 22ZM5.282 1.5 6.98 3.193c.243.242.364.363.45.504q.117.189.168.405c.039.161.038.333.038.676L7.6 20.948v.077a1.41 1.41 0 0 1-1.161 1.348l-.053.01a5.55 5.55 0 0 1-2.296-.007A1.38 1.38 0 0 1 3 21.023l.036-16.27c0-.33 0-.496.037-.652q.05-.21.159-.394c.082-.139.196-.259.424-.499z" fill="none"/>
    </svg>
  );
}
