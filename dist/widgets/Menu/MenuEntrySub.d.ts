import { DefaultTheme } from "styled-components";
export interface Props {
    secondary?: boolean;
    isActive?: boolean;
    theme: DefaultTheme;
}
declare const LinkLabelSub: import("styled-components").StyledComponent<"div", DefaultTheme, {
    isPushed: boolean;
}, never>;
declare const MenuEntrySub: import("styled-components").StyledComponent<"div", DefaultTheme, Props, never>;
export { MenuEntrySub, LinkLabelSub };
