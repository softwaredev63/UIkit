import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabelSub = styled.div<{ isPushed: boolean }>`
  color: #4c566c;
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntrySub = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  font: normal normal bold 20px/24px Swis721 BT;
  padding: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  font: normal normal normal 12px/37px Swis721 BT;
  color: #4c566c;

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: #ffffff;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    -webkit-background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 200% 100%;
    font-weight: bold;
  }
`;

MenuEntrySub.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

export { MenuEntrySub, LinkLabelSub };
