import React from "react";
import "../styles/elements.css";
import { NONE, CROSS, WIN, DRAW } from "../enums";

export const GameGridRow = (props) => {
  return(
  <div className="game-grid-row">
  {props.row[0] === NONE
     ?  <div className="ttt-game-grid" onClick={() => props.onTileClick(props.rowId, 0, props.currentTurn, props.gameStatus.winCondition)}/>
     :  (props.row[0] === CROSS ?  <Cross /> : <Zero />)}
  {props.row[1] === NONE
     ?  <div className="ttt-game-grid" onClick={() => props.onTileClick(props.rowId, 1, props.currentTurn, props.gameStatus.winCondition)}/>
     :  (props.row[1] === CROSS ?  <Cross /> : <Zero />)}
  {props.row[2] === NONE
     ?  <div className="ttt-game-grid" onClick={() => props.onTileClick(props.rowId, 2, props.currentTurn, props.gameStatus.winCondition)} />
     :(props.row[2] === CROSS ?  <Cross /> : <Zero />)}
  </div>
);
}

export const CurrentTurn = (props) => {
  return (
    <div className="game-current-turn">
    <div>
    <h2> Player 1 = X </h2>
    <h2> Player 2 = O </h2>
    <h3 className="text-center"> Current Player </h3>
    {props.currentPlayer === CROSS ? <Cross/> : <Zero/>}
    </div>
    <WinStatus gameStatus={props.gameStatus} />
    </div>
  );
}

export const WinStatus = (props) => {
  const { winCondition, winner } = props.gameStatus;
  if(winCondition === WIN) {
    return <h1>{`${winner} Wins`}</h1>
  }
  else if(winCondition === DRAW) {
    return <h1>{`It's a draw`}</h1>
  }
  return <div/>;
}

export const GameGrid = (props) => {
  return (
    <div className="game-board">
    <div className="game-grid-container">
    <GameGridRow row={props.rows[0]} rowId={0} onTileClick={props.onTileClick} currentTurn={props.currentTurn} gameStatus={props.gameStatus} />
    <GameGridRow  row={props.rows[1]} rowId={1} onTileClick={props.onTileClick} currentTurn={props.currentTurn} gameStatus={props.gameStatus} />
    <GameGridRow row={props.rows[2]} rowId={2} onTileClick={props.onTileClick} currentTurn={props.currentTurn} gameStatus={props.gameStatus} />
    </div>
    <CurrentTurn currentPlayer={props.currentTurn} gameStatus={props.gameStatus} />
    </div>
  )
};


export const Cross = () => {
  return (
    <div className="ttt-element ttt-cross">X</div>
  )
};

export const Zero = () => {

  return (
    <div className="ttt-element ttt-zero">O</div>
  );
};
