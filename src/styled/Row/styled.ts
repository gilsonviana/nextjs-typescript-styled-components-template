import styled from "styled-components";

export const StyledRow = styled.div.attrs({
  className: `custom__row`,
})`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${(props) => props.theme.containerPadding};
  margin-right: -${(props) => props.theme.containerPadding};
`;
