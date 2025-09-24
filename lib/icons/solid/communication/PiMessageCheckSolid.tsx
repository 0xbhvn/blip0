import React from 'react';

/**
 * PiMessageCheckSolid icon from the solid style in communication category.
 */
interface PiMessageCheckSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMessageCheckSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'message-check icon',
  ...props
}: PiMessageCheckSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M16.2 2c.824 0 1.502-.001 2.052.044.562.046 1.08.144 1.564.392l.276.154a4 4 0 0 1 1.473 1.594l.085.183c.186.432.266.89.306 1.381.045.55.044 1.228.044 2.052v4.4c0 .824.001 1.502-.044 2.052-.04.492-.12.95-.306 1.38l-.085.184a4 4 0 0 1-1.473 1.594l-.276.154c-.485.248-1.002.346-1.564.392-.55.045-1.228.044-2.052.044h-2.848l-4.727 3.781A1.001 1.001 0 0 1 7 21v-3.004c-.475-.003-.891-.01-1.252-.04-.492-.04-.95-.12-1.38-.306l-.184-.085a4 4 0 0 1-1.594-1.473l-.154-.276c-.248-.485-.346-1.002-.392-1.564C1.999 13.702 2 13.024 2 12.2V7.8c0-.824-.001-1.502.044-2.052.046-.562.144-1.08.392-1.564l.154-.276a4 4 0 0 1 1.594-1.472l.183-.086c.432-.186.89-.266 1.381-.306C6.298 1.999 6.976 2 7.8 2zm.126 5.078a1 1 0 0 0-1.303-.314l-.088.052a16.4 16.4 0 0 0-4.273 4.24L9.207 9.602l-.076-.07a1 1 0 0 0-1.406 1.408l.068.077 2.342 2.338.086.077a1 1 0 0 0 1.488-.288l.206-.347a14.3 14.3 0 0 1 4.15-4.328l.08-.063a1 1 0 0 0 .181-1.328Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
