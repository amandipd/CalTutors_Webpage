import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: white;
  padding: 0.75rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .ant-row-space-between {
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 40px;
`;

export const LogoText = styled("span")`
  font-size: 1.5rem;
  font-weight: 600;
  color: #18216d;
  display: flex;
  align-items: center;
  line-height: 40px;

  .cal {
    color: #FF6B00;
  }
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const PhoneNumber = styled("a")`
  color: #18216d;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease-in;
  white-space: nowrap;

  &:hover {
    color: #FF6B00;
  }
`;

export const ButtonGroup = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled("button")<{ primary?: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${(p) => (p.primary ? "white" : "#18216d")};
  background: ${(p) => (p.primary ? "#0E1B4D" : "#F5F5F5")};
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: ${(p) => (p.primary ? "#FF6B00" : "#E6E6E6")};
    color: ${(p) => (p.primary ? "white" : "#18216d")};
  }
`;

export const NavMenu = styled("div")`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin: 0 2rem;
  height: 40px;
`;

export const RightSection = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: auto;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1rem;
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  position: relative;

  &:hover {
    color: #FF6B00;
  }

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled("div")`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background: #FF6B00;
    left: 0;
    bottom: -4px;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;
