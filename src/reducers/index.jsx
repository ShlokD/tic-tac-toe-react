import { combineReducers } from "redux";
import { CHANGE_TILE} from "../actions";
import assign from "lodash/assign";
import { NONE, CROSS, ZERO } from "../enums";
import { checkGameStatus, defaultGameStatus } from "../helpers";

export const initState = {
  gameRows: [[NONE, NONE, NONE],
  [NONE, NONE, NONE],
  [NONE, NONE, NONE]],
  gameStatus: defaultGameStatus
};

export const rows = (state = initState, action) => {
  switch(action.type) {
    case CHANGE_TILE:
    const { row, col, currentTurn } = action.params;
    const newState = state;
    newState.gameRows[row][col] = currentTurn;
    newState.gameStatus = checkGameStatus(newState.gameRows);
    return assign({}, state, newState);
    default: return state;
  }
}

export const player = (state =  CROSS, action) => {
  switch(action.type){
    case CHANGE_TILE:
    return state === CROSS ? ZERO : CROSS;
    default: return state;
  }
}

const ticTacToe = combineReducers({
  rows,
  player
});


export default ticTacToe;
