import React from 'react';

/**
 * PiFile02SettingsSolid icon from the solid style in files-&-folders category.
 */
interface PiFile02SettingsSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02SettingsSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-settings icon',
  ...props
}: PiFile02SettingsSolidProps): JSX.Element {
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
      <path d="M8 1a5 5 0 0 0-5 5v12a5 5 0 0 0 5 5h5.102a3 3 0 0 1-.93-2.14l-.005-.444-.31-.317a3 3 0 0 1 0-4.198l.31-.317.005-.444a3 3 0 0 1 2.968-2.968l.444-.005.317-.31a3 3 0 0 1 4.198 0l.317.31.444.005q.07 0 .14.004a17 17 0 0 0-.038-1.265c-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C18.639 9 18.057 9 17.2 9h-.038c-.528 0-.982 0-1.357-.03-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167C13 5.82 13 5.365 13 4.839V4.8c0-.857 0-1.439-.038-1.889-.035-.438-.1-.663-.18-.819a2 2 0 0 0-.874-.874c-.156-.08-.38-.145-.819-.18C10.639 1 10.057 1 9.2 1z" fill="currentColor"/><path d="M14.664 1.4c.175.423.253.869.292 1.348C15 3.29 15 3.954 15 4.758V4.8c0 .577 0 .949.024 1.232.022.272.06.373.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085C16.25 7 16.623 7 17.2 7h.041c.805 0 1.47 0 2.01.044.48.04.926.117 1.348.292a9.02 9.02 0 0 0-5.935-5.935Z" fill="currentColor"/><path d="M18 17a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" fill="currentColor"/><path fillRule="evenodd" d="M18.7 13.286a1 1 0 0 0-1.4 0l-.891.873-1.248.013a1 1 0 0 0-.99.99l-.012 1.247-.873.891a1 1 0 0 0 0 1.4l.873.891.013 1.248a1 1 0 0 0 .99.99l1.247.012.891.873a1 1 0 0 0 1.4 0l.891-.873 1.248-.013a1 1 0 0 0 .99-.99l.012-1.247.873-.891a1 1 0 0 0 0-1.4l-.873-.891-.013-1.248a1 1 0 0 0-.99-.99l-1.247-.012zm-1.179 2.583.479-.47.479.47a1 1 0 0 0 .69.285l.67.007.007.67a1 1 0 0 0 .285.69l.47.479-.47.479a1 1 0 0 0-.285.69l-.007.67-.67.007a1 1 0 0 0-.69.285l-.479.47-.479-.47a1 1 0 0 0-.69-.285l-.67-.007-.007-.67a1 1 0 0 0-.285-.69l-.47-.479.47-.479a1 1 0 0 0 .285-.69l.007-.67.67-.007a1 1 0 0 0 .69-.285Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
