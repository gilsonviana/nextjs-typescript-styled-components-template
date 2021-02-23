import styled from "styled-components";

import { IText } from "./interface";

export const StyledText = styled.p.attrs({
  className: `custom_text`,
})<IText>`
  font-weight: ${(props) =>
    props.weight
      ? props.theme.font.weight[props.weight]
      : props.theme.font.weight.regular};
  font-size: ${(props) =>
    props.size
      ? props.theme.font.size[props.size]
      : props.theme.font.size.regular};
  color: ${(props) =>
    props.color ? props.theme.color[props.color] : props.theme.color.dark};
  margin: ${(props) => (!props.margin ? `0` : `.5rem`)};
`;
