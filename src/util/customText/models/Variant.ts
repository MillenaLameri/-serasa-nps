export type Variant =
  | "display"
  | "headingL"
  | "headingM"
  | "headingS"
  | "headingSm"
  | "headingXs"
  | "subheading"
  | "bodym";

export type Colors =
  | "darklow"
  | "darkmedium"
  | "darkhigh"
  | "magenta"
  | "lightsolid"
  | "lighthigh";

export type VariantsMapping = {
  [key in Variant]: keyof JSX.IntrinsicElements;
};
