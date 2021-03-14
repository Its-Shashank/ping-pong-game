import React from "react";
import styled from "styled-components";
import Input from "../../../components/Input";
import CustomContainer from "../../../components/Container";
import CustomButton from "../../../components/Button";
import PropTypes from "prop-types";
import { FONT_SIZES } from "../../../utils/fonts";
import { Flex, ButtonContainer } from "../StartGame/index";
const ErrorContainer = styled.div`
  position: absolute;
  top: 2vh;
`;
const CustomText = styled.p`
  margin: 0;
  font-size: ${(props) => props.fontSize};
  color: red;
`;
function BeforeStart({ handleGameStart, handlePlayerOne, handlePlayerTwo, player1, player2, error }) {
  return (
    <CustomContainer>
      {error && (
        <ErrorContainer>
          <CustomText fontSize={FONT_SIZES.win_text}>Player name cannot be left empty.</CustomText>
        </ErrorContainer>
      )}
      <h2>Player 1 Name</h2>
      <Input value={player1} onChange={(e) => handlePlayerOne(e.target.value)} />
      <br />
      <h2>Player 2 Name</h2>
      <Input value={player2} onChange={(e) => handlePlayerTwo(e.target.value)} />
      <Flex justifyContent="center">
        <ButtonContainer>
          <CustomButton title="Continue" onClick={handleGameStart} />
        </ButtonContainer>
      </Flex>
    </CustomContainer>
  );
}
BeforeStart.propTypes = {
  handleGameStart: PropTypes.func,
  handlePlayerOne: PropTypes.func,
  handlePlayerTwo: PropTypes.func,
  player1: PropTypes.string,
  player2: PropTypes.string,
  error: PropTypes.bool
};
export default BeforeStart;
