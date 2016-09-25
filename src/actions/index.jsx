export const CHANGE_TILE = "CHANGE_TILE";
export const changeTile = (row, col, currentTurn) => {
  return {
    type: CHANGE_TILE,
    params: { row, col, currentTurn }
  }
};
