import BeforeStart from "./containers/BeforeStart/Loadable";
import GameStart from "./containers/StartGame/Loadable";
import styled from "styled-components";
import React, { useState } from "react";

const CustomContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

function App() {
  const [startGame, setStartGame] = useState(false);
  const handleGameStart = () => {
    setStartGame(!startGame);
  };
  return (
    <CustomContainer>
      {!startGame ? <BeforeStart handleGameStart={handleGameStart} /> : <GameStart handleGameStart={handleGameStart} />}
    </CustomContainer>
  );
}

export default App;
