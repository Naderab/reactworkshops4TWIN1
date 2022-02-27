import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <HeaderFrame>
      <ul id="nav">
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </HeaderFrame>
  );
}
const HeaderFrame = styled.div`
  min-height: 50px;
  min-width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  & > ul {
    list-style: none;
    display: flex;
    & > li:not(:nth-child(1)) {
      margin-left: 10px;
    }
  }
`;