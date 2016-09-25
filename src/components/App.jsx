import React from 'react';
import { connect } from "react-redux";
import { changeTile } from "../actions"
import get from "lodash/get";
import { GameGrid } from "./elements";
import { CHECK } from "../enums";

export const App = (props) => {
  return (
    <div className="game-board">
    <GameGrid
    rows={props.rows}
    onTileClick={props.onTileClick}
    currentTurn={props.player}
    gameStatus={props.gameStatus} />
    </div>
  );
}


export const mapStateToProps = (state) => {
  return {
    rows: get(state, "rows.gameRows"),
    player: get(state, "player"),
    gameStatus: get(state, "rows.gameStatus")
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    onTileClick:(row,col,currentTurn, winCondition) => {
      if(winCondition === CHECK){
        dispatch(changeTile(row, col, currentTurn));
      }
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
