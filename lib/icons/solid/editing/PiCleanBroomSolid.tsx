import React from 'react';

/**
 * PiCleanBroomSolid icon from the solid style in editing category.
 */
interface PiCleanBroomSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCleanBroomSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'clean-broom icon',
  ...props
}: PiCleanBroomSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M19.574 3.38a1 1 0 1 0-1.849-.761l-2.709 6.574c-1.059-.157-1.93-.041-2.728.405-.782.437-1.421 1.174-2.058 1.909l-.26.298c-2.035 2.32-4.425 4.289-7.074 5.959-.303.19-.685.498-.835.98-.184.589.073 1.077.339 1.36.24.258.553.433.812.553.277.128.585.236.889.327 1.107.331 2.469.526 2.826.577l.065.01a39 39 0 0 0 5.794.425c.783.008 1.88.018 2.88-.118.57-.077 1.17-.209 1.698-.448s1.069-.627 1.37-1.26c.845-1.771 1.296-3.637 1.264-5.577a12 12 0 0 0-.215-2.066c-.217-1.134-.92-1.861-1.688-2.323a6 6 0 0 0-1.12-.514zM11.06 13.586l6.922 1.794c-.083 1.337-.441 2.647-1.053 3.931-.027.057-.113.172-.391.298-.279.127-.665.224-1.14.289a10 10 0 0 1-.75.071c.522-.687 1.058-1.467 1.45-2.207a1 1 0 1 0-1.767-.936c-.588 1.11-1.612 2.401-2.278 3.163q-1.126-.02-2.247-.109a18.3 18.3 0 0 0 2.746-3.025 1 1 0 0 0-1.629-1.16c-1.263 1.77-2.953 3.23-3.975 3.848-.524-.079-1.487-.239-2.274-.474l-.074-.023c2.368-1.558 4.547-3.365 6.46-5.46Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
