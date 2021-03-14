import React from "react";
import styled from "styled-components";
import CustomContainer from "../../../components/Container";
import PropTypes from "prop-types";
import CustomButton from "../../../components/Button";
import { FONT_SIZES } from "../../../utils/fonts";
import { compose } from "redux";

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 4vh;
  width: 50%;
  height: 50px;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: center;
`;
const WinButtonContainer = styled.div`
  height: 40px;
  width: 40%;
`;
const CustomText = styled.p`
  margin: 0;
  font-size: ${(props) => props.fontSize};
`;

const ResetButtonContainer = styled.div`
  height: 5vh;
  margin-bottom: 8vh;
`;

function GameScreen({
  handleGameStart,
  player1,
  player2,
  playerOneScore,
  incrementPlayerOneScore,
  playerTwoScore,
  incrementPlayerTwoScore,
  handleReset
}) {
  return (
    <CustomContainer>
      <ResetButtonContainer>
        <CustomButton title="Reset" onClick={handleReset} color="#e63900" />
      </ResetButtonContainer>
      <Flex justifyContent="space-between">
        <CustomText fontSize={FONT_SIZES.player_names}>{player1}</CustomText>
        <WinButtonContainer>
          <CustomButton title="Add Win" onClick={incrementPlayerOneScore} color="green" />
        </WinButtonContainer>
      </Flex>
      <br />
      <Flex justifyContent="space-around">
        <CustomText fontSize={FONT_SIZES.win_text}>Win:</CustomText>
        <CustomText fontSize={FONT_SIZES.score}>{playerOneScore}</CustomText>
      </Flex>
      <br />
      <Flex justifyContent="space-between">
        <CustomText fontSize={FONT_SIZES.player_names}>{player2}</CustomText>
        <WinButtonContainer>
          <CustomButton title="Add Win" onClick={incrementPlayerTwoScore} color="green" />
        </WinButtonContainer>
      </Flex>
      <br />
      <Flex justifyContent="space-around">
        <CustomText fontSize={FONT_SIZES.win_text}>Win:</CustomText>
        <CustomText fontSize={FONT_SIZES.score}>{playerTwoScore}</CustomText>
      </Flex>
      <hr style={{ width: "100%" }} />
      <div style={{ margin: "0 20px" }}>
        <br />
        <Flex justifyContent="space-between">
          <CustomText fontSize={FONT_SIZES.win_text}>Current Winner: </CustomText>
          <CustomText fontSize={FONT_SIZES.player_names}>
            {playerTwoScore > playerOneScore ? player2 : playerOneScore === playerTwoScore ? "Equal" : player1}
          </CustomText>
        </Flex>
        <Flex justifyContent="space-between">
          <CustomText fontSize={FONT_SIZES.win_text}>Win difference: </CustomText>
          <CustomText fontSize={FONT_SIZES.player_names}>{Math.abs(playerOneScore - playerTwoScore)}</CustomText>
        </Flex>
      </div>
      <Flex justifyContent="center">
        <ButtonContainer>
          <CustomButton title="Change player name" onClick={handleGameStart} />
        </ButtonContainer>
      </Flex>
    </CustomContainer>
  );
}
GameScreen.propTypes = {
  handleGameStart: PropTypes.func,
  player1: PropTypes.string,
  player2: PropTypes.string,
  playerOneScore: PropTypes.number,
  incrementPlayerOneScore: PropTypes.func,
  incrementPlayerTwoScore: PropTypes.func,
  playerTwoScore: PropTypes.number,
  handleReset: PropTypes.func
};

export default GameScreen;

export const GameTest = compose()(GameScreen);
