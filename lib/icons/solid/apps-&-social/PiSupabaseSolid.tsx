import React from 'react';

/**
 * PiSupabaseSolid icon from the solid style in apps-&-social category.
 */
interface PiSupabaseSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSupabaseSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'supabase icon',
  ...props
}: PiSupabaseSolidProps): JSX.Element {
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
      <path d="M10.45.975a1.5 1.5 0 0 1 1.03.35l.138.13.107.134c.223.322.256.689.27.857.022.25.021.57.021.91V8h5.23c1.022 0 1.858 0 2.503.058.55.05 1.114.153 1.588.447l.198.139a3 3 0 0 1 1.143 2.316c.009.651-.285 1.24-.622 1.774-.346.548-.855 1.21-1.477 2.021l-5.35 6.982-.3.388q-.143.182-.27.323c-.13.142-.437.476-.904.556l-.188.02a1.5 1.5 0 0 1-1.031-.349l-.137-.13-.108-.135c-.224-.322-.257-.689-.271-.857-.021-.25-.02-.57-.02-.91V16H6.761c-1.022 0-1.858.002-2.504-.057-.55-.05-1.114-.153-1.589-.448l-.198-.139a3 3 0 0 1-1.135-2.147l-.007-.17c-.009-.65.285-1.24.623-1.774.346-.548.856-1.21 1.478-2.021L8.788 2.26l.3-.387q.144-.183.27-.324c.13-.142.437-.475.904-.555z" fill="currentColor"/>
    </svg>
  );
}
