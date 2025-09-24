import React from 'react';

/**
 * PiCloudArrowDownloadSolid icon from the solid style in development category.
 */
interface PiCloudArrowDownloadSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCloudArrowDownloadSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'cloud-arrow-download icon',
  ...props
}: PiCloudArrowDownloadSolidProps): JSX.Element {
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
      <path d="M12.5 2a7.5 7.5 0 0 1 6.627 3.986 44 44 0 0 0 .343.632l.002.003q0 .003 0 0l.006.01a.4.4 0 0 0 .067.068l.125.09c.116.082.278.193.506.35A6.5 6.5 0 0 1 23 12.5a6.47 6.47 0 0 1-1.42 4.055c-.312.391-.468.586-.701.685-.284.12-.35.125-.647.046-.245-.065-.887-.67-2.173-1.881a3 3 0 0 0-.853-.566c-1.18-.519-1.769-.778-1.896-.899-.093-.089-.134-.124-.162-.167-.029-.044-.045-.095-.088-.217-.06-.164-.06-.463-.06-1.059v-.28a3 3 0 0 0-6 0v.28c0 .596 0 .895-.06 1.06-.043.12-.06.172-.088.216-.028.043-.069.078-.162.167-.127.121-.717.38-1.896.899a3 3 0 0 0-1.178.926c-.988 1.29-1.482 1.936-1.728 2.039-.28.117-.39.123-.68.034-.255-.079-.411-.246-.724-.58A5.48 5.48 0 0 1 1 13.5a5.5 5.5 0 0 1 2.609-4.68c.475-.294.824-.51 1.068-.664a11 11 0 0 0 .325-.215.3.3 0 0 0 .046-.055l.004-.005.02-.041c.023-.051.055-.124.099-.228.082-.198.193-.473.344-.848A7.5 7.5 0 0 1 12.5 2Z" fill="currentColor"/><path d="M13.145 21.626a1.94 1.94 0 0 1-2.29 0 20 20 0 0 1-3.625-3.402 1 1 0 0 1 1.54-1.275c.669.807 1.415 1.56 2.23 2.249v-6.981a1 1 0 1 1 2 0v6.98a18 18 0 0 0 2.23-2.248 1 1 0 0 1 1.54 1.275 20 20 0 0 1-3.625 3.402Z" fill="currentColor"/>
    </svg>
  );
}
