import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { Login } from "../WalletModal/types";

const StyledButton = styled(Button)`
  background: transparent linear-gradient(180deg, #53a8f0 0%, #2d7fc4 100%) 0% 0% no-repeat padding-box;
  border-radius: 12px;
  font: normal normal bold 16px/6px Swis721 BT;
  color: white;
  height: 46px;
  margin-right: 20px;
`;

const StyledLink = styled.a`
  background: transparent linear-gradient(180deg, #53a8f0 0%, #2d7fc4 100%) 0% 0% no-repeat padding-box;
  border-radius: 12px;
  font: normal normal bold 16px/6px Swis721 BT;
  color: white;
  height: 46px;
  margin-right: 20px;
  padding: 14px;
`;

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  onBuyCryptoWithSimplex: () => void;
}

const UserBlock: React.FC<Props> = ({ account, login, logout, onBuyCryptoWithSimplex }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      <StyledButton
          size="sm"
          variant="tertiary"
          onClick={() => {
            onBuyCryptoWithSimplex();
          }}
      >
        Buy Crypto
      </StyledButton>
      {account ? (
        <StyledButton
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </StyledButton>
      ) : (
        <StyledButton
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </StyledButton>
      )}
    </div>
  );
};

export default UserBlock;
