import React from "react";
import styled from "styled-components";
import CustomContainer from "../../components/Container";
import PropTypes from "prop-types";
import CustomButton from "../../components/Button";
export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 50px;
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
const FONT_SIZES = {
  player_names: "30px",
  win_text: "20px",
  score: "60px"
};
function GameScreen({ handleGameStart }) {
  return (
    <CustomContainer>
      <Flex justifyContent="space-between">
        <CustomText fontSize={FONT_SIZES.player_names}>Steve Rogers</CustomText>
        <WinButtonContainer>
          <CustomButton title="Add Win" />
        </WinButtonContainer>
      </Flex>
      <br />
      <Flex justifyContent="space-around">
        <CustomText fontSize={FONT_SIZES.win_text}>Win:</CustomText>
        <CustomText fontSize={FONT_SIZES.score}>7</CustomText>
      </Flex>
      <br />
      <Flex justifyContent="space-between">
        <CustomText fontSize={FONT_SIZES.player_names}>Tony Stark</CustomText>
        <WinButtonContainer>
          <CustomButton title="Add Win" />
        </WinButtonContainer>
      </Flex>
      <br />
      <Flex justifyContent="space-around">
        <CustomText fontSize={FONT_SIZES.win_text}>Win:</CustomText>
        <CustomText fontSize={FONT_SIZES.score}>3</CustomText>
      </Flex>
      <Flex justifyContent="center">
        <ButtonContainer>
          <CustomButton title="Save Game" onClick={handleGameStart} />
        </ButtonContainer>
      </Flex>
    </CustomContainer>
  );
}
GameScreen.propTypes = {
  handleGameStart: PropTypes.func
};
export default GameScreen;
