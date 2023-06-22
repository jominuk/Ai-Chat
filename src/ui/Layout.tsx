import React, { FC } from "react";
import styled from "styled-components";
import { LayoutProps } from "src/type/type";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <StBackLay>
      <StLayout>{children}</StLayout>
    </StBackLay>
  );
};

export default Layout;

const StBackLay = styled.div`
  background-color: powderblue;
  min-height: 100vh; /* Set the minimum height of the container to 100% of the viewport height */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StLayout = styled.div`
  margin: auto;
  border-radius: 10px;
`;
