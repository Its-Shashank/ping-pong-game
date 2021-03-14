import produce from "immer";
import { createActions } from "reduxsauce";
// import { fromJS } from "immutable";
export const initialState = {
  playerOne: "",
  playerTwo: "",
  playerOneScore: 0,
  playerTwoScore: 0
};

export const { Types: gameTypes, Creators: gameCreators } = createActions({
  setPlayers: ["payload"],
  setPlayerOneScore: ["payload"],
  setPlayerTwoScore: ["payload"],
  clearPlayersData: [],
  resetScore: []
});

const gameReducer = (state = initialState, action) =>
  produce(state, (draft = state) => {
    console.log(action);
    switch (action.type) {
      case gameTypes.SET_PLAYERS:
        draft.playerOne = action.payload.player1;
        draft.playerTwo = action.payload.player2;
        break;
      // return draft.set("playerOne", action.players.playerOne).set("playerTwo", action.players.playerTwo);
      case gameTypes.SET_PLAYER_ONE_SCORE:
        draft.playerOneScore = action.payload;
        break;
      // return draft.set("playerOneScore", action.playerOneScore);
      case gameTypes.SET_PLAYER_TWO_SCORE:
        draft.playerTwoScore = action.payload;
        break;
      // return draft.set("playerTwoScore", action.playerTwoScore);
      case gameTypes.CLEAR_PLAYERS_DATA:
        draft = initialState;
        break;
      // return draft.set("playerOne", "").set("playerTwo", "").set("playerOneScore", 0).set("playerTwoScore", 0);
      case gameTypes.RESET_SCORE:
        draft.playerOneScore = 0;
        draft.playerTwoScore = 0;
        break;
      // return draft.set("playerOneScore", 0).set("playerTwoScore", 0);
      default:
        return state;
    }
  });

export default gameReducer;
