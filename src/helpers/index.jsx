import { CHECK, WIN, DRAW, NONE } from "../enums";
import find from "lodash/find";

export const defaultGameStatus = {
  winCondition: CHECK,
  winner: ""
};

export const areThreeEqual = (a,b,c) => {
  return a===b && a===c && a!==null && a!==NONE
};

export const diagonalCheck  = (gameRows) => {
  return areThreeEqual(gameRows[0][0], gameRows[1][1], gameRows[2][2]) || areThreeEqual(gameRows[0][2], gameRows[1][1], gameRows[2][0])
}

export const topLeftCheck = (gameRows) => {
  return areThreeEqual(gameRows[0][0], gameRows[0][1], gameRows[0][2]) || areThreeEqual(gameRows[0][0], gameRows[1][0], gameRows[2][0]);
};


export const middleCenterCheck = (gameRows) => {
  return areThreeEqual(gameRows[1][1], gameRows[1][0], gameRows[1][2]) || areThreeEqual(gameRows[0][1], gameRows[1][1], gameRows[2][1]);
};

export const bottomRightCheck = (gameRows) => {
  return areThreeEqual(gameRows[2][2], gameRows[2][1], gameRows[2][0]) || areThreeEqual(gameRows[2][2], gameRows[1][2], gameRows[0][2]);
};

export const createWinConditionObject = (winStatus, winningRow) =>{
  return {
    winCondition: winStatus,
    winner: winningRow
  }
}

export const checkGameStatus = (gameRows) => {
if(diagonalCheck(gameRows)){
    return createWinConditionObject(WIN, gameRows[1][1])
  } else if(topLeftCheck(gameRows)){
    return createWinConditionObject(WIN, gameRows[0][0])
  } else if (middleCenterCheck(gameRows)){
    return createWinConditionObject(WIN, gameRows[1][1])
  } else if (bottomRightCheck(gameRows)){
    return createWinConditionObject(WIN, gameRows[2][2])
  } else if(!find([].concat.apply([], gameRows), (flatRow) => flatRow === NONE)){
    return createWinConditionObject(DRAW, "")
  }
  return defaultGameStatus;
}
