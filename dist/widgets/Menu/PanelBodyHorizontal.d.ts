import React from "react";
import { PanelProps, PushedProps } from "./types";
interface Props extends PanelProps, PushedProps {
    isMobile: boolean;
}
declare const PanelBodyHorizontal: React.FC<Props>;
export default PanelBodyHorizontal;
