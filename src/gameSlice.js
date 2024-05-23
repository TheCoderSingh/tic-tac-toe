import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turn: "X",
  board: ["", "", "", "", "", "", "", "", ""],
  winner: "",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    changeTurn: (state) => {
      state.turn = state.turn === "X" ? "O" : "X";
    },
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    setWinner: (state, action) => {
      state.winner = action.payload;
    },
  },
});

export const { changeTurn, setBoard, setWinner } = gameSlice.actions;

export default gameSlice.reducer;
