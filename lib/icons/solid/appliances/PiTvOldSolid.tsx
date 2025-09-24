import React from 'react';

/**
 * PiTvOldSolid icon from the solid style in appliances category.
 */
interface PiTvOldSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTvOldSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'tv-old icon',
  ...props
}: PiTvOldSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M18.446 2.88a1 1 0 0 0-.894-1.787l-5.549 2.774-5.43-2.77a1 1 0 0 0-.91 1.78l2.176 1.11h-.08c-.805 0-1.47 0-2.011.044-.562.046-1.079.145-1.564.392A4 4 0 0 0 2.436 6.17c-.247.485-.346 1.002-.392 1.564C2 8.275 2 8.94 2 9.745v6.484c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.564a4 4 0 0 0 1.748 1.749c.485.247 1.002.346 1.564.392.541.044 1.206.044 2.01.044h8.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01V9.745c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 0 0-1.748-1.748c-.486-.247-1.002-.346-1.564-.392-.542-.044-1.206-.044-2.01-.044h-.006zM7.599 6.988h-.032c-.252 0-.498 0-.706.017a2 2 0 0 0-.77.2 2 2 0 0 0-.874.875c-.117.24-.186.502-.201.77a9 9 0 0 0-.017.706v3.864c0 .252 0 .497.017.705.018.23.063.498.2.77a2 2 0 0 0 .875.874c.271.138.541.182.77.201.208.018.454.018.706.018h8.864c.252 0 .498 0 .706-.018a2 2 0 0 0 .77-.2 2 2 0 0 0 .874-.874 2 2 0 0 0 .2-.77q.023-.354.018-.707V9.556c0-.252 0-.498-.017-.706a2 2 0 0 0-.201-.77 2 2 0 0 0-.874-.874 2 2 0 0 0-.77-.201c-.208-.017-.454-.017-.706-.017zm7.4 10.9a1.1 1.1 0 0 0 0 2.2h.01a1.1 1.1 0 0 0 0-2.2zm1.9 1.1a1.1 1.1 0 0 1 1.1-1.1h.01a1.1 1.1 0 0 1 0 2.2h-.01a1.1 1.1 0 0 1-1.1-1.1Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
