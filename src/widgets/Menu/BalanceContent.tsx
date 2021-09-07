import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "./config";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { MenuEntrySub, LinkLabelSub } from "./MenuEntrySub";
import { PushedProps } from "./types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../components/Svg";

interface Props {
  balance?: number;
  price?: number;
}

const BalanceArea = styled.div`
  width: 170px;
  margin: auto 10px;
  display: flex;
  flex-direction: row;
`;

const Balance = styled.div`
  font: normal normal bold 20px/24px Swis721 BT;
  color: #4C566C;
  font-size: 15px;
  opacity: 1;
`;

const Cost = styled.div`
  margin-left: 10px;
  font: normal normal bold 20px/24px Swis721 BT;
  color: #4C566C;
  font-size: 15px;
  opacity: 0.5;
`;

const BalanceContent: React.FC<Props> = ({ balance, price }) => {
  console.log("pooh, balance = ", balance)
  console.log("pooh, price = ", price)
  return (
    <BalanceArea>
      <Balance>1.4224231</Balance>
      <Cost>$62289.31</Cost>
    </BalanceArea>
  );
};

export default BalanceContent;
