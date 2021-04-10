import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarWrapper = styled.div`
  display: flex;
  overflow: hidden;
  background-color: #f1f1f1;
  position: fixed;
  top: 0;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  min-height: 70px;
`;

export const NavButton = styled.div`
  display: flex;
  flex: 1;
  height: 70px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 1.7vw;
  font-weight: 500;
  cursor: pointer;
  max-width: 120px;
  background-color: ${(props) => props.active};
  &:hover {
    background-color: grey;
  }
`;
export const NavLink = styled(Link)`
  color: black;
`;
