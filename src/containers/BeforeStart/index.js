import React from "react";
import Input from "../../components/Input";
import CustomContainer from "../../components/Container";
import CustomButton from "../../components/Button";
import PropTypes from "prop-types";
import { Flex, ButtonContainer } from "../StartGame/index";

function BeforeStart({ handleGameStart }) {
  return (
    <CustomContainer>
      <h2>Player 1 Name</h2>
      <Input />
      <br />
      <h2>Player 2 Name</h2>
      <Input />
      <Flex justifyContent="center">
        <ButtonContainer>
          <CustomButton title="Continue" onClick={handleGameStart} />
        </ButtonContainer>
      </Flex>
    </CustomContainer>
  );
}
BeforeStart.propTypes = {
  handleGameStart: PropTypes.func
};
export default BeforeStart;
