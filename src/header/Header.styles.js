import styled from "styled-components";
import { Flex, Box } from "grid-styled";

export const StyledHeader = styled(Flex)`
  background-color: #ccffff;
  margin: 2% 5%;
  padding-left: 1%;
  justify-content: space-between;
`;

export const StyledTitle = styled(Box)`
  margin: 0.5%;
  font-weight: bold;
  font-size: 1.2em;
`;

export const StyledFilter = styled(Box)`
  margin: 0.5%;
  flex-direction: column;
`;
