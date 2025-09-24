import React from 'react';

/**
 * PiAppleWatchSolid icon from the solid style in devices category.
 */
interface PiAppleWatchSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAppleWatchSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'apple-watch icon',
  ...props
}: PiAppleWatchSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M10.815 1h-.127c-.519-.001-1.039-.003-1.5.186a2.5 2.5 0 0 0-1.022.773c-.308.393-.448.894-.588 1.394l-.034.122-.403 1.423a5 5 0 0 0-1.76 2.189c-.212.51-.3 1.048-.34 1.656C5 9.335 5 10.063 5 10.964v2.072c0 .901 0 1.629.04 2.22.042.61.13 1.148.34 1.657a5 5 0 0 0 1.761 2.19l.403 1.422.034.122c.14.5.28 1.001.588 1.394a2.5 2.5 0 0 0 1.021.773c.462.189.982.188 1.502.186h2.623c.519.002 1.039.003 1.5-.186a2.5 2.5 0 0 0 1.022-.773c.308-.393.448-.894.588-1.394l.034-.122.403-1.423a5 5 0 0 0 1.76-2.189c.212-.51.3-1.048.34-1.656.041-.592.041-1.32.041-2.221V12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-.026l-.014-.257c-.042-.608-.13-1.147-.34-1.656a5 5 0 0 0-1.761-2.19l-.403-1.422-.034-.122c-.14-.5-.28-1.001-.588-1.394a2.5 2.5 0 0 0-1.021-.773C14.35.997 13.83 1 13.312 1zM8.852 6.228c.225-.093.52-.158 1.027-.192C10.395 6 11.054 6 12 6s1.605 0 2.12.036c.508.034.803.099 1.028.192a3 3 0 0 1 1.624 1.624c.093.225.158.52.192 1.027C17 9.395 17 10.054 17 11v2c0 .945 0 1.605-.036 2.12-.034.507-.099.803-.192 1.028a3 3 0 0 1-1.624 1.624c-.225.093-.52.158-1.027.192C13.605 18 12.946 18 12 18s-1.605 0-2.12-.036c-.507-.034-.803-.099-1.028-.192a3 3 0 0 1-1.624-1.624c-.093-.225-.158-.52-.192-1.027C7 14.605 7 13.945 7 13v-2c0-.946 0-1.605.036-2.12.034-.507.099-.803.192-1.028a3 3 0 0 1 1.624-1.624Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
