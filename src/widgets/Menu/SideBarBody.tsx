import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../components/Svg";
import * as IconModule from "./icons";
import SideBarMainAndSubMenu from "./SideBarMainAndSubMenu";
import { MenuEntry, LinkLabel } from "./MenuEntry";
import { MenuEntrySub, LinkLabelSub } from "./MenuEntrySub";
import { MenuEntrySubSub, LinkLabelSubSub } from "./MenuEntrySubSub";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "./types";
import SideBarSubAndSubMenu from "./SideBarSubAndSubMenu";

interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const SideBarBody: React.FC<Props> = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="20px" mr="8px" />;
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.items) {
          return (
            <SideBarMainAndSubMenu
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={entry.initialOpenState}
              className={calloutClass}
            >
              {isPushed &&
                entry.items.map((item) => {
                  const IconSub = Icons[item.icon];
                  const iconElementSub = <IconSub width="20px" mr="8px" />;
                  const itemCalloutClass = item.calloutClass ? item.calloutClass : undefined;
                  if (item.items) {
                    return (
                      <SideBarSubAndSubMenu
                        key={item.label}
                        isPushed={isPushed}
                        pushNav={pushNav}
                        icon={iconElementSub}
                        label={item.label}
                        initialOpenState={item.initialOpenState}
                        className={itemCalloutClass}
                      >
                        {item.items.map((subItem) => {
                          const IconSubSub = Icons[subItem.icon];
                          const iconElementSubSub = <IconSubSub width="20px" mr="8px" />;
                          const itemSubCalloutClass = item.calloutClass ? item.calloutClass : undefined;

                          console.log(
                            "pooh, subItem.href ==",
                            subItem.href,
                            " location.pathname = ",
                            location.pathname
                          );

                          return (
                            <MenuEntrySubSub
                              key={subItem.href}
                              secondary
                              isActive={subItem.href === location.pathname}
                              onClick={handleClick}
                            >
                              <MenuLink href={subItem.href}>
                                {iconElementSubSub}
                                <LinkLabelSub isPushed={isPushed}> {subItem.label}</LinkLabelSub>
                              </MenuLink>
                            </MenuEntrySubSub>
                          );
                        })}
                      </SideBarSubAndSubMenu>
                    );
                  }
                  return (
                    <MenuEntrySub
                      key={item.href}
                      secondary
                      isActive={item.href === location.pathname}
                      onClick={handleClick}
                    >
                      <MenuLink href={item.href}>
                        {iconElementSub}
                        <LinkLabelSub isPushed={isPushed}> {item.label}</LinkLabelSub>
                      </MenuLink>
                    </MenuEntrySub>
                  );
                })}
            </SideBarMainAndSubMenu>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default SideBarBody;
