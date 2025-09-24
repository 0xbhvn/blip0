import React from 'react';

/**
 * PiArrowLoopSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiArrowLoopSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowLoopSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-loop icon',
  ...props
}: PiArrowLoopSolidProps): React.ReactElement {
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
      <path d="M4 5.153a16 16 0 0 1 3.441-.012l.16.025c.312.063.594.21.819.418l.107.11.085.1c.162.21.277.458.327.728l.02.138.044.49c.072.983.053 1.97-.056 2.95l-.062.49a1 1 0 0 1-1.767.487l-.09-.13-.468-.813a7 7 0 0 0-.341-.53C5.19 11.1 4.588 12.682 4.418 14.128c-.207 1.759.23 3.246 1.219 4.235 1.432 1.432 3.96 1.71 6.725.538a1 1 0 0 1 .78 1.842c-3.174 1.344-6.689 1.266-8.92-.966-1.529-1.528-2.049-3.683-1.79-5.883.226-1.927 1.05-3.944 2.386-5.774a7 7 0 0 0-.602-.425l-.199-.12-.868-.507a1 1 0 0 1 .363-1.853zm7.156-2.018c3.094-1.216 6.46-1.075 8.622 1.087l.274.293c1.316 1.504 1.759 3.525 1.517 5.586-.225 1.927-1.05 3.942-2.385 5.772q.403.319.851.576l.818.47.131.09a1 1 0 0 1-.487 1.767c-1.14.163-2.293.203-3.44.118l-.49-.043c-.375-.04-.715-.2-.977-.442l-.108-.108a1.7 1.7 0 0 1-.413-.831l-.02-.137a16 16 0 0 1 .074-3.93l.035-.155a1 1 0 0 1 1.822-.202l.47.82.237.383.099.139c1.025-1.497 1.628-3.075 1.797-4.519.206-1.758-.23-3.243-1.219-4.232-1.432-1.433-3.961-1.71-6.725-.54l-.097.036a1 1 0 0 1-.684-1.877z" fill="currentColor"/>
    </svg>
  );
}
