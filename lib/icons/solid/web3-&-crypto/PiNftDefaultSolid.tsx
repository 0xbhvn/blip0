import React from 'react';

/**
 * PiNftDefaultSolid icon from the solid style in web3-&-crypto category.
 */
interface PiNftDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiNftDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'nft-default icon',
  ...props
}: PiNftDefaultSolidProps): JSX.Element {
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
      <path fillRule="evenodd" d="M16.229 2.252C15.459 1.999 14.617 2 13.394 2h-2.81c-1.223 0-2.065 0-2.835.252A5 5 0 0 0 5.92 3.32c-.597.547-1.006 1.28-1.6 2.341L2.712 8.538c-.562 1.004-.951 1.7-1.108 2.454a5 5 0 0 0 0 2.017c.157.754.546 1.449 1.108 2.453l1.609 2.876c.593 1.061 1.002 1.794 1.6 2.341.527.482 1.15.847 1.83 1.07C8.518 22 9.36 22 10.583 22h2.866c1.205 0 2.035 0 2.796-.245a5 5 0 0 0 1.814-1.044c.594-.534 1.008-1.251 1.607-2.289a112 112 0 0 0 1.693-3.008c.534-.994.904-1.682 1.049-2.425a5 5 0 0 0-.018-1.984c-.157-.74-.539-1.422-1.09-2.407l-1.643-2.936c-.593-1.061-1.002-1.794-1.6-2.341a5 5 0 0 0-1.83-1.07ZM19.79 10h-.817c-.875 0-1.382 0-1.82.038-4.86.422-8.721 4.25-9.147 9.09-.015.17-.024.35-.03.559q.192.093.396.161c.427.14.925.152 2.373.152h2.544c1.427 0 1.918-.012 2.34-.148a3 3 0 0 0 1.093-.629c.328-.294.581-.71 1.292-1.94l1.022-1.77.49-.912c.633-1.18.839-1.586.918-1.994a3 3 0 0 0-.01-1.186c-.07-.334-.228-.666-.644-1.42ZM6.961 9c0-1.11.905-2 2.007-2s2.007.89 2.007 2c0 1.111-.905 2-2.007 2a2.003 2.003 0 0 1-2.007-2Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
