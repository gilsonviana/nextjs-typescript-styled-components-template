import styled from "styled-components";

import { ITitleXL } from "./interface";

export const StyledTitleXL = styled.h1.attrs({
  className: `custom__title__xl`,
})<ITitleXL>`
  font-weight: ${(props) =>
    props.weight
      ? props.theme.font.weight[props.weight]
      : props.theme.font.weight.semiBold};
  font-size: ${(props) => props.theme.font.size.extra};
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.dark};
  margin: ${(props) => (!props.margin ? `0` : `.5rem`)};
  text-align: ${(props) => (props.center ? `center` : `left`)};
`;
