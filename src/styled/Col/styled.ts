import styled from "styled-components";

export const StyledCol = styled.div.attrs({
  className: `custom__col`,
})`
  position: relative;
  width: 100%;
  padding-right: ${(props) => props.theme.containerPadding};
  padding-left: ${(props) => props.theme.containerPadding};
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
`;
