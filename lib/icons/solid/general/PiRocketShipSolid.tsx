import React from 'react';

/**
 * PiRocketShipSolid icon from the solid style in general category.
 */
interface PiRocketShipSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRocketShipSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'rocket-ship icon',
  ...props
}: PiRocketShipSolidProps): JSX.Element {
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
      <path d="M21.387 2.612c-.409-.409-.991-.527-1.396-.573-.458-.054-.984-.044-1.512-.004-1.196.091-1.871.144-3.292.622-1 .338-2.665 1.228-3.5 1.873-.26.202-.5.405-.731.618H6.98c-.508 0-.902.109-1.338.37L3.8 6.625c-.19.114-.388.232-.541.344-.151.11-.42.324-.558.681a1.5 1.5 0 0 0 .086 1.273c.186.335.48.51.645.6.167.09.379.18.583.268l2.412 1.034q-.039.082-.073.167a4 4 0 0 0 .209 3.449c.273.492.708.926 1.29 1.507l.198.199c.582.582 1.016 1.016 1.508 1.29a4 4 0 0 0 3.616.135l1.034 2.413c.087.204.177.415.268.583.089.164.264.459.6.645a1.5 1.5 0 0 0 1.272.086c.357-.139.57-.407.681-.558.113-.154.23-.35.345-.541l1.106-1.844c.262-.436.37-.83.37-1.338v-3.974c.214-.23.417-.47.619-.732.644-.835 1.535-2.5 1.872-3.5.479-1.42.531-2.095.622-3.291.04-.529.05-1.054-.003-1.513-.047-.404-.164-.986-.574-1.396ZM6.981 7.148h2.19C8.642 7.812 8.122 8.483 7.6 9.15L5.195 8.12l1.478-.888a.54.54 0 0 1 .31-.085Zm8.898 11.658L14.85 16.4c.668-.524 1.339-1.044 2.003-1.572v2.19a.54.54 0 0 1-.086.308z" fill="currentColor"/><path d="M4.417 15.34a1 1 0 0 0-1.415 0l-.707.707a1 1 0 0 0 1.415 1.415l.707-.707a1 1 0 0 0 0-1.415Z" fill="currentColor"/><path d="M6.538 18.876a1 1 0 1 0-1.414-1.414L2.295 20.29a1 1 0 1 0 1.415 1.414z" fill="currentColor"/><path d="M8.66 20.997a1 1 0 1 0-1.415-1.414l-.707.707a1 1 0 1 0 1.414 1.414z" fill="currentColor"/>
    </svg>
  );
}
