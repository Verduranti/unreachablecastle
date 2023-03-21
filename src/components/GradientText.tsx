import type { ReactNode } from 'react';

type IGradientTextProps = {
  children: ReactNode;
};

const GradientText = (props: IGradientTextProps) => (
  <span className="bg-gradient-to-br from-yellow-500 to-yellow-100 bg-clip-text text-transparent">
    {props.children}
  </span>
);

export { GradientText };
