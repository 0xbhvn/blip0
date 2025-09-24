import React from 'react';

/**
 * PiGithubSolid icon from the solid style in apps-&-social category.
 */
interface PiGithubSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGithubSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'github icon',
  ...props
}: PiGithubSolidProps): JSX.Element {
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
      <path d="M18.247 2.195c-.407-.204-.85-.214-1.198-.18a5 5 0 0 0-1.117.262 10 10 0 0 0-1.893.916q-1.017-.143-2.043-.134-1.024 0-2.037.151a10 10 0 0 0-1.856-.921 4.7 4.7 0 0 0-1.129-.267c-.367-.034-.807-.012-1.216.19-.472.233-.747.645-.907 1a4.1 4.1 0 0 0-.305 1.183 7.7 7.7 0 0 0 .087 2.227A7.3 7.3 0 0 0 4 9.762c.003 1.722.574 3.339 1.964 4.504q1.005.842 2.477 1.279A4.7 4.7 0 0 0 8 17.585v.736a4.7 4.7 0 0 1-1.586.109.8.8 0 0 1-.316-.211 1.2 1.2 0 0 1-.214-.389c-.031-.08-.059-.16-.093-.257l-.024-.07a6 6 0 0 0-.16-.414c-.132-.299-.343-.67-.737-.957l-.008-.006a3.37 3.37 0 0 0-1.82-.626 1 1 0 0 0-.083 1.998c.263.011.517.098.733.25l.018.021a1 1 0 0 1 .067.127c.031.07.062.154.103.27l.02.055c.033.098.075.218.12.335.114.29.283.655.585.993.311.35.72.625 1.251.806a1 1 0 0 0 .2.046A6.7 6.7 0 0 0 8 20.362V21a1 1 0 1 0 2 0v-3.431a2.72 2.72 0 0 1 .524-1.635Q11.225 16 12 16q.774 0 1.477-.066c.344.472.53 1.045.523 1.635V21a1 1 0 1 0 2 0v-3.414a4.7 4.7 0 0 0-.44-2.04q1.47-.436 2.476-1.28c1.39-1.164 1.961-2.78 1.964-4.502a7.3 7.3 0 0 0-.634-3.162 7.6 7.6 0 0 0 .06-2.25 4.3 4.3 0 0 0-.303-1.163c-.146-.333-.407-.759-.876-.993Z" fill="currentColor"/>
    </svg>
  );
}
