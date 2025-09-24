import React from 'react';

/**
 * PiMedicalFacemaskSolid icon from the solid style in medical category.
 */
interface PiMedicalFacemaskSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMedicalFacemaskSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'medical-facemask icon',
  ...props
}: PiMedicalFacemaskSolidProps): React.ReactElement {
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
      <g clipPath="url(#a)"><path fillRule="evenodd" d="M10.007 3.582a17 17 0 0 1 3.987 0c1.137.134 2.255.412 3.367.689l.703.173c.607.147 1.138.275 1.571.557a3 3 0 0 1 1.196 1.52q.079.231.116.48c.235.004.448.017.646.057a3 3 0 0 1 2.348 2.347c.06.297.06.63.06 1.016 0 .349.01.701-.036 1.048a4 4 0 0 1-1.512 2.633c-.21.163-.447.301-.763.485l-.791.462a4 4 0 0 1-1.101 1.963c-.313.306-.684.544-1.052.78l-.218.14c-1.551 1.013-2.474 1.615-3.446 1.97a9 9 0 0 1-6.164 0c-.972-.355-1.895-.957-3.446-1.97l-.217-.14c-.368-.236-.74-.474-1.052-.78a4 4 0 0 1-1.101-1.963l-.792-.462c-.315-.184-.553-.322-.763-.485a4 4 0 0 1-1.512-2.633C-.01 11.122 0 10.77 0 10.421c0-.386 0-.719.06-1.016a3 3 0 0 1 2.347-2.347A3.6 3.6 0 0 1 3.053 7q.036-.245.117-.48A3 3 0 0 1 4.365 5c.434-.282.964-.41 1.571-.557l.703-.173c1.113-.277 2.23-.555 3.368-.689ZM3 9.002c-.11.004-.16.009-.197.016a1 1 0 0 0-.783.783c-.015.073-.02.185-.02.704 0 .452.002.585.018.7A2 2 0 0 0 3 12.673zm18 0v3.67c.529-.32.9-.845.983-1.466.015-.116.017-.25.017-.7 0-.52-.005-.632-.02-.705a1 1 0 0 0-.782-.783A1 1 0 0 0 21 9.003ZM7.8 9a1 1 0 0 0 0 2h8.4a1 1 0 1 0 0-2zm1.388 4a1 1 0 1 0 0 2h5.6a1 1 0 1 0 0-2z" clipRule="evenodd" fill="currentColor"/></g><defs><clipPath id="a"><path d="M0 0h24v24H0z" fill="currentColor"/></clipPath></defs>
    </svg>
  );
}
