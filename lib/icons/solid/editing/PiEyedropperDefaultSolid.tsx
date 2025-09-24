import React from 'react';

/**
 * PiEyedropperDefaultSolid icon from the solid style in editing category.
 */
interface PiEyedropperDefaultSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEyedropperDefaultSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'eyedropper-default icon',
  ...props
}: PiEyedropperDefaultSolidProps): React.ReactElement {
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
      <path fillRule="evenodd" d="M14.306 3.172a4 4 0 0 1 5.657 5.656l-.707.708.117.117a2.834 2.834 0 0 1 0 4.008l-1.275 1.274a1.308 1.308 0 0 1-1.989-.164q-.45-.63-.926-1.235L9.49 19.229l-.063.063c-.305.305-.572.574-.892.765a3 3 0 0 1-1.401.425c-.372.017-.744-.057-1.166-.142l-.023-.005-1.412.47-.033.012a8 8 0 0 1-.624.19c-.183.043-.525.109-.89-.022a1.5 1.5 0 0 1-.91-.909c-.13-.365-.063-.707-.02-.89.044-.187.117-.409.19-.624l.01-.033.47-1.412-.004-.023c-.085-.422-.16-.793-.142-1.166a3 3 0 0 1 .425-1.4c.192-.32.46-.588.765-.893l.063-.063 5.685-5.684a33 33 0 0 0-1.155-.863A1.308 1.308 0 0 1 8.2 5.036l1.274-1.274a2.835 2.835 0 0 1 4.009 0l.117.117zm-3.244 6-5.815 5.814c-.404.404-.479.49-.527.57a1 1 0 0 0-.142.467c-.004.094.011.207.123.767.062.31.044.596-.056.896l-.365 1.096 1.096-.365c.3-.1.586-.118.896-.056.56.112.673.127.767.123a1 1 0 0 0 .467-.142c.08-.048.166-.123.57-.527l5.819-5.82a33 33 0 0 0-2.833-2.823Z" clipRule="evenodd" fill="currentColor"/>
    </svg>
  );
}
