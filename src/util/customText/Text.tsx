import cn from "classnames";
import { ReactNode } from "react";

import "./Index.css";

type Variant =
  | "display"
  | "headingL"
  | "headingM"
  | "headingS"
  | "headingSm"
  | "headingXs"
  | "subheading"
  | "bodym";

type VariantsMapping = {
  [key in Variant]: keyof JSX.IntrinsicElements;
};

const variantsMapping: VariantsMapping = {
  display: "h1",
  headingL: "h2",
  headingM: "h3",
  headingS: "h4",
  headingSm: "h5",
  headingXs: "h6",
  subheading: "h6",
  bodym: "p",
};

type CustomTextProps = {
  variant: Variant;
  children: ReactNode;
  color?:
    | "darklow"
    | "darkmedium"
    | "darkhigh"
    | "magenta"
    | "lightsolid "
    | "lighthigh";
};

const Text = ({ variant, color, children, ...props }: CustomTextProps) => {
  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <Component
      className={cn({
        [`text--variant-${variant}`]: variant,
        [`text--color-${color}`]: color,
      })}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
