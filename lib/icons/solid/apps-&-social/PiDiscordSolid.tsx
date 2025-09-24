import React from 'react';

/**
 * PiDiscordSolid icon from the solid style in apps-&-social category.
 */
interface PiDiscordSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDiscordSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'discord icon',
  ...props
}: PiDiscordSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="m13.383 5 .54-1.09a1.476 1.476 0 0 1 1.729-.77c.682.196 2.185.685 3.42 1.536l.032.024c2.231 1.672 3.175 4.323 3.581 6.575.375 2.074.322 3.978.299 4.8l-.006.207a1.5 1.5 0 0 1-.194.71c-1.124 1.985-2.678 2.995-3.958 3.5a7.6 7.6 0 0 1-1.614.441 6 6 0 0 1-.649.065l-.029.001h-.042l-.001-1v1a1 1 0 0 1-.901-.566l-.805-1.674q.404-.1.828-.228c.55-.165 1.127-.364 1.742-.595a1 1 0 0 0-.702-1.873c-.586.22-1.12.403-1.616.553-2.256.678-3.814.678-6.07 0-.497-.15-1.03-.333-1.615-.553a1 1 0 0 0-.702 1.873c.615.23 1.191.43 1.74.595q.425.127.827.228l-.807 1.675a1 1 0 0 1-.901.566v-1l-.001 1h-.025a3 3 0 0 1-.195-.01 6 6 0 0 1-.5-.057 7.6 7.6 0 0 1-1.614-.44c-1.28-.506-2.834-1.516-3.958-3.5a1.5 1.5 0 0 1-.194-.711l-.006-.206c-.023-.823-.076-2.727.298-4.801.407-2.252 1.35-4.903 3.582-6.575l.032-.024c1.235-.852 2.74-1.34 3.421-1.536.71-.204 1.42.152 1.727.767L10.621 5zM7 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm6.002 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
