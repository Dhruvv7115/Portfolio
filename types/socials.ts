import React from "react";

export type Social = {
  name: string;
  href: string;
  icon:
    | React.ComponentType<
        React.SVGProps<SVGSVGElement> & { color?: string; size?: number }
      >
    | React.ForwardRefExoticComponent<{ color?: string; size?: number }>;
  color?: string;
};
