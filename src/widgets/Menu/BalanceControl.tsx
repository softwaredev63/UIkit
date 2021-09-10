import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { MenuEntrySub, LinkLabelSub } from "./MenuEntrySub";
import { PushedProps } from "./types";
import { HideIcon, ShowIcon } from "./icons";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props {
  show: boolean;
  totalCost?: number;
  toggleBalance: () => void;
}

const BalanceArea = styled.div`
  margin: 5px 20px;
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  font: normal normal bold 20px/24px Swis721 BT;
  color: #4C566C;
  font-size: 15px;
  opacity: 0.5;
`;

const Cost = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  font: normal normal bold 20px/24px Swis721 BT;
  color: #4C566C;
  font-size: 15px;
  opacity: 1;
`;

const BalanceControl: React.FC<Props> = ({ show, totalCost = 0, toggleBalance }) => {
  return (
    <BalanceArea>
      <Title>Total Balance</Title>
      <Cost>${totalCost}</Cost>
      { show ? <HideIcon onClick={toggleBalance} /> : <ShowIcon onClick={toggleBalance} /> }
    </BalanceArea>
  );
};

export default BalanceControl;
