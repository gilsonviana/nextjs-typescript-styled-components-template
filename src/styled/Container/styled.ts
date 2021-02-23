import styled from "styled-components";

import { IContainer } from "./interface";

export const StyledContainer = styled.div.attrs({
  className: `custom__container`,
})<IContainer>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${(props) =>
    props.fluid ? `0` : props.theme.containerPadding};
  padding-right: ${(props) =>
    props.fluid ? `0` : props.theme.containerPadding};

  @media (${(props) => props.theme.breakpoints.sm}) {
    width: 320px;
  }

  @media (${(props) => props.theme.breakpoints.md}) {
    width: 745px;
  }

  @media (${(props) => props.theme.breakpoints.lg}) {
    width: 900px;
  }

  @media (${(props) => props.theme.breakpoints.xl}) {
    width: 1100px;
  }
`;
