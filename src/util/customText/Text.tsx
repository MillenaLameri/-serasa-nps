import cn from "classnames";
import { ReactNode } from "react";
import "./Index.css";

type CustomTextProps = {
  variant?:
    | "display"
    | "headingL"
    | "headingM"
    | "headingS"
    | "headingSm"
    | "headingXs"
    | "subheading"
    | "bodym";
  children: ReactNode;
  color?:
    | "darklow"
    | "darkmedium"
    | "darkhigh"
    | "magenta"
    | "lightsolid "
    | "lighthigh";
};

const Text = ({ children, variant, color }: CustomTextProps) => {
  const variantsMapping = {
    display: "h1",
    headingL: "h2",
    headingM: "h3",
    headingS: "h4",
    headingSm: "h5",
    headingXs: "h6",
    subheading: "h6",
    bodym: "p",
  };

  const Component = variant ? variantsMapping[variant] : "p";

  return (
    <p
      className={cn({
        [`text--variant-${variant}`]: variant,
        [`text--color-${color}`]: color,
      })}
    >
      {children}
    </p>
  );
};

export default Text;
