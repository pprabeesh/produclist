import styled from "styled-components";
import { Flex, Box } from "grid-styled";

export const StyledContainer = styled(Flex)`
  flex-direction: column;
  height: 20%;
  width: 20%;
`;

export const StyledImage = styled(Box)`
  background: no-repeat center/50% ${props => `url(${props.bground})`};
  height: 100%;
`;

export const StyledTags = styled(Flex)`
  margin-left: 1px;
`;
