import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import AccordionHorizontal from "./AccordionHorizontal";
import { MenuEntryHorizontal, LinkLabel } from "./MenuEntryHorizontal";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const PanelBodyHorizontal: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <AccordionHorizontal
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
              href={entry.href}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntryHorizontal
                    key={item.href}
                    secondary
                    isActive={item.href === location.pathname}
                    onClick={handleClick}
                  >
                    <MenuLink href={item.href}>{item.label}</MenuLink>
                  </MenuEntryHorizontal>
                ))}
            </AccordionHorizontal>
          );
        }
        return (
          <MenuEntryHorizontal key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntryHorizontal>
        );
      })}
    </Container>
  );
};

export default PanelBodyHorizontal;
