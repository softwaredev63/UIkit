import React from "react";
import styled from "styled-components";
import SideBarBody from "./SideBarBody";
import PanelFooter from "./PanelFooter";
import BalanceControl from "./BalanceControl";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL, SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE } from "./config";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  showBalance: boolean;
  totalCost: number;
  toggleBalance: () => void;
  showBalanceContol: boolean;
}

const StyledSideBar = styled.div<{ isPushed: boolean; showMenu: boolean, showBalance: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "120px" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed, showBalance }) => (isPushed ? (showBalance ? `${SIDEBAR_WIDTH_FULL}px` : `${SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE}px`) : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  border-right: ${({ isPushed }) => (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: 2px solid rgba(133, 133, 133, 0.1);
    width: ${({ isPushed, showBalance }) => `${isPushed ? (showBalance ? `${SIDEBAR_WIDTH_FULL}px` : `${SIDEBAR_WIDTH_FULL_WITHOUT_BALANCE}px`) : SIDEBAR_WIDTH_REDUCED}px`};
    margin-left: 20px;
  }
`;

const SideBar: React.FC<Props> = (props) => {
  const { isPushed, showMenu, showBalance, showBalanceContol, toggleBalance, totalCost } = props;
  return (
    <StyledSideBar isPushed={isPushed} showMenu={showMenu} showBalance={showBalance} >
      { showBalanceContol && <BalanceControl show={showBalance} totalCost={totalCost} toggleBalance={toggleBalance}/> }
      <SideBarBody {...props} />
    </StyledSideBar>
  );
};

export default SideBar;
