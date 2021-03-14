import { createSelector } from "reselect";
import { initialState } from "./reducer";
import { get } from "lodash";

/**
 * Direct selector to the keeper state domain
 */

const selectGameDomain = (state) => state.gameReducer || initialState;

const makeSelectGame = () => createSelector(selectGameDomain, (substate) => substate);
export const selectPlayers = () =>
  createSelector(selectGameDomain, (substate) => {
    return {
      playerOne: get(substate, "playerOne"),
      playerTwo: get(substate, "playerTwo")
    };
  });
// export const selectStage = () => createSelector(selectGameDomain, (substate) => get(substate, "stage", 1));
export const selectPlayerOneScore = () =>
  createSelector(selectGameDomain, (substate) => get(substate, "playerOneScore", 0));
export const selectPlayerTwoScore = () =>
  createSelector(selectGameDomain, (substate) => get(substate, "playerTwoScore", 0));

export default makeSelectGame;
export { selectGameDomain };
