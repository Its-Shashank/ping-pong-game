import React, { useState } from "react";
import BeforeStart from "./containers/BeforeStart/Loadable";
import GameStart from "./containers/StartGame/Loadable";
import { gameCreators } from "./reducer";
import makeSelectGame, { selectPlayers, selectPlayerOneScore, selectPlayerTwoScore } from "./selectors";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

const CustomContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;

function App({
  players,
  playerOneScore,
  playerTwoScore,
  dispatchResetScore,
  dispatchSetPlayers,
  dispatchSetPlayerOneScore,
  dispatchSetPlayerTwoScore
}) {
  const [startGame, setStartGame] = useState(false);
  const [player1, setPlayer1] = useState(players.playerOne);
  const [player2, setPlayer2] = useState(players.playerTwo);
  const [error, setError] = useState(false);
  const handleGameStart = () => {
    if (player2 !== "" && player1 !== "") {
      setError(false);
      setStartGame(!startGame);
      dispatchSetPlayers({ player1, player2 });
    } else {
      setError(true);
    }
  };
  const toggleGameStart = () => {
    setStartGame(!startGame);
  };
  const handlePlayerOne = (e) => {
    setError(false);
    setPlayer1(e);
  };
  const handlePlayerTwo = (e) => {
    setError(false);
    setPlayer2(e);
  };
  const incrementPlayerOneScore = () => {
    console.log({ playerOneScore, playerTwoScore, players });
    dispatchSetPlayerOneScore(playerOneScore + 1);
  };
  const incrementPlayerTwoScore = () => {
    dispatchSetPlayerTwoScore(playerTwoScore + 1);
  };
  const handleReset = () => {
    dispatchResetScore();
  };
  return (
    <CustomContainer>
      {!startGame ? (
        <BeforeStart
          handleGameStart={handleGameStart}
          handlePlayerOne={handlePlayerOne}
          handlePlayerTwo={handlePlayerTwo}
          player1={player1}
          player2={player2}
          error={error}
        />
      ) : (
        <GameStart
          handleGameStart={toggleGameStart}
          player1={player1}
          player2={player2}
          incrementPlayerOneScore={incrementPlayerOneScore}
          incrementPlayerTwoScore={incrementPlayerTwoScore}
          playerOneScore={playerOneScore}
          playerTwoScore={playerTwoScore}
          handleReset={handleReset}
        />
      )}
    </CustomContainer>
  );
}
App.propTypes = {
  dispatchResetScore: PropTypes.func,
  dispatchSetPlayers: PropTypes.func,
  dispatchSetPlayerOneScore: PropTypes.func,
  dispatchSetPlayerTwoScore: PropTypes.func,
  playerOneScore: PropTypes.number,
  playerTwoScore: PropTypes.number,
  players: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  game: makeSelectGame(),
  players: selectPlayers(),
  playerOneScore: selectPlayerOneScore(),
  playerTwoScore: selectPlayerTwoScore()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatchSetPlayerOneScore: (score) => dispatch(gameCreators.setPlayerOneScore(score)),
    dispatchSetPlayerTwoScore: (score) => dispatch(gameCreators.setPlayerTwoScore(score)),
    dispatchSetPlayers: (names) => dispatch(gameCreators.setPlayers(names)),
    dispatchResetScore: () => dispatch(gameCreators.resetScore()),
    dispatchClearPlayersData: () => dispatch(gameCreators.clearPlayersData())
  };
}
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(App);
export const AppTest = compose()(App);
