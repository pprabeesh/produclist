import styled from "styled-components";
import { Flex, Box } from "grid-styled";

export const StyledContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  min-height: 320px;
  height: 33%;
  min-width: 305px;
  width: 33%;
  border: 0.02px solid grey;
`;

export const StyledImage = styled(Box)`
  background: no-repeat center ${props => `url(${props.bground})`};
  height: 80%;
  max-height: 280px;
  min-width: 280px;
  margin-top: 5px;
`;

export const StyledTags = styled(Flex)`
  justify-content: space-between;
`;

export const StyledTag = styled(Box)`
  width: 100px;
  height: 40px;
  padding: 2%;
  margin: 1%;
  color: white;
  background-color: ${props => props.bground};
`;

export const StyledProductName = styled(Box)`
  margin: 2% 0 0 2%;
  font-size: 1.5em;
`;

export const StyledPrice = styled(Box)`
  font-weight: bold;
  margin: 2%;
  font-size: 1.5em;
`;
