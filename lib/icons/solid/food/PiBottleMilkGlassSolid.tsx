import React from 'react';

/**
 * PiBottleMilkGlassSolid icon from the solid style in food category.
 */
interface PiBottleMilkGlassSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBottleMilkGlassSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'bottle-milk-glass icon',
  ...props
}: PiBottleMilkGlassSolidProps): JSX.Element {
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
      <path d="M14 1a1 1 0 1 1 0 2v2.056c0 .379.002.474.015.562l.025.137q.015.067.038.133l.067.159c.034.074.087.18.171.35l.302.603H10a3 3 0 0 0-2.972 3.413l1.188 8.55.123.853c.043.282.09.555.145.806.118.538.31 1.189.723 1.836l.225.326q.083.11.172.216H8c-.684 0-1.257.001-1.724-.037-.418-.034-.819-.104-1.202-.268l-.163-.077a3.5 3.5 0 0 1-1.394-1.288l-.135-.241c-.22-.432-.306-.887-.345-1.365C3 19.257 3 18.684 3 18v-7.056c0-.325-.002-.582.034-.84l.026-.16q.044-.24.123-.47l.068-.183c.075-.182.168-.365.277-.583l1.156-2.31.171-.351c.035-.074.053-.117.067-.16l.038-.132q.015-.067.025-.137l.012-.172C5 5.364 5 5.246 5 5.056V3a1 1 0 0 1 0-2zm7 8a1 1 0 0 1 .99 1.138l-1.187 8.55c-.083.596-.152 1.099-.242 1.508-.08.37-.187.718-.37 1.047l-.084.14a3.5 3.5 0 0 1-1.267 1.185l-.225.114c-.398.182-.807.254-1.237.287-.418.032-.926.031-1.527.031h-.702c-.601 0-1.11 0-1.527-.031a3.7 3.7 0 0 1-1.087-.224l-.15-.063a3.5 3.5 0 0 1-1.349-1.092l-.143-.207c-.236-.37-.363-.765-.455-1.187-.089-.409-.158-.912-.24-1.509l-1.188-8.55A1 1 0 0 1 10 9zm-9.39 5.325.096-.06c.508-.32.905-.578 1.34-.722l.227-.066a3.5 3.5 0 0 1 1.63-.027l.167.043c.388.112.77.308 1.24.543.717.359.906.444 1.077.477l.112.017a1.5 1.5 0 0 0 .771-.116l.128-.067c.143-.088.353-.254.819-.635l.29-.238.345-2.474h-8.704z" fill="currentColor"/>
    </svg>
  );
}
