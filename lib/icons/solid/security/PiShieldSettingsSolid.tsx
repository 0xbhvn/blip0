import React from 'react';

/**
 * PiShieldSettingsSolid icon from the solid style in security category.
 */
interface PiShieldSettingsSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiShieldSettingsSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'shield-settings icon',
  ...props
}: PiShieldSettingsSolidProps): React.ReactElement {
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
      <path d="M13.26 1.427a4 4 0 0 0-2.717 0L5.155 3.373a4 4 0 0 0-2.638 3.608l-.127 3.31a12 12 0 0 0 6.047 10.885l1.52.867a4 4 0 0 0 2.722.456 3 3 0 0 1-.507-1.64l-.005-.443-.31-.317a3 3 0 0 1 0-4.198l.31-.317.005-.444a3 3 0 0 1 2.968-2.968l.444-.005.317-.31a3 3 0 0 1 4.198 0l.317.31.444.005q.341.004.66.08c.103-.8.126-1.62.062-2.445l-.227-2.95a4 4 0 0 0-2.63-3.456z" fill="currentColor"/><path d="M18 17a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" fill="currentColor"/><path fillRule="evenodd" d="M18.7 13.286a1 1 0 0 0-1.4 0l-.891.873-1.248.013a1 1 0 0 0-.99.99l-.012 1.247-.873.891a1 1 0 0 0 0 1.4l.873.891.013 1.248a1 1 0 0 0 .99.99l1.247.012.891.873a1 1 0 0 0 1.4 0l.891-.873 1.248-.013a1 1 0 0 0 .99-.99l.012-1.247.873-.891a1 1 0 0 0 0-1.4l-.873-.891-.013-1.248a1 1 0 0 0-.99-.99l-1.247-.012zm-1.179 2.583.479-.47.479.47a1 1 0 0 0 .69.285l.67.007.007.67a1 1 0 0 0 .285.69l.47.479-.47.479a1 1 0 0 0-.285.69l-.007.67-.67.007a1 1 0 0 0-.69.285l-.479.47-.479-.47a1 1 0 0 0-.69-.285l-.67-.007-.007-.67a1 1 0 0 0-.285-.69l-.47-.479.47-.479a1 1 0 0 0 .285-.69l.007-.67.67-.007a1 1 0 0 0 .69-.285Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
