import React from "react";
import styled from "styled-components";
import PanelBodyHorizontal from "./PanelBodyHorizontal";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  top: 0;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  height: 52px;
  transition: padding-top 0.2s, width 0.2s;
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
`;

const PanelHorizontal: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <PanelBodyHorizontal {...props} />
    </StyledPanel>
  );
};

export default PanelHorizontal;
