import React from 'react';

/**
 * PiPhotoImageSettingsSolid icon from the solid style in media category.
 */
interface PiPhotoImageSettingsSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPhotoImageSettingsSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'photo-image-settings icon',
  ...props
}: PiPhotoImageSettingsSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M14.044 2c1.363 0 2.447 0 3.321.071.896.074 1.66.227 2.359.583a6 6 0 0 1 2.622 2.622c.313.614.469 1.277.552 2.036.08.718.095 1.533.1 2.484q.002.542.002 1.158v.394a1 1 0 1 1-2 0V11a228 228 0 0 0-.008-1.75h-.053c-1.335 0-2.067 0-2.692.064a12.25 12.25 0 0 0-10.9 10.654q.314.015.689.021h.004l.16.003c.409.006.867.008 1.384.008h1.593a1 1 0 1 1 0 2H9.704c-.577 0-1.101-.001-1.58-.009l-.126-.002c-.752-.014-1.416-.045-2.015-.133-.624-.09-1.184-.243-1.707-.51a6 6 0 0 1-2.622-2.622c-.356-.7-.51-1.463-.583-2.359C1 15.491 1 14.407 1 13.044v-2.088c0-1.363 0-2.447.071-3.321.074-.896.227-1.66.583-2.359a6 6 0 0 1 2.622-2.622c.7-.356 1.463-.51 2.359-.583C7.509 2 8.593 2 9.956 2zM5.5 8.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" clipRule="evenodd" fill="currentColor"/><path d="M18 17a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" fill="currentColor"/><path fillRule="evenodd" d="M18.7 13.286a1 1 0 0 0-1.4 0l-.891.873-1.248.013a1 1 0 0 0-.99.99l-.012 1.247-.873.891a1 1 0 0 0 0 1.4l.873.891.013 1.248a1 1 0 0 0 .99.99l1.247.012.891.873a1 1 0 0 0 1.4 0l.891-.873 1.248-.013a1 1 0 0 0 .99-.99l.012-1.247.873-.891a1 1 0 0 0 0-1.4l-.873-.891-.013-1.248a1 1 0 0 0-.99-.99l-1.247-.012zm-1.179 2.583.479-.47.479.47a1 1 0 0 0 .69.285l.67.007.007.67a1 1 0 0 0 .285.69l.47.479-.47.479a1 1 0 0 0-.285.69l-.007.67-.67.007a1 1 0 0 0-.69.285l-.479.47-.479-.47a1 1 0 0 0-.69-.285l-.67-.007-.007-.67a1 1 0 0 0-.285-.69l-.47-.479.47-.479a1 1 0 0 0 .285-.69l.007-.67.67-.007a1 1 0 0 0 .69-.285Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
