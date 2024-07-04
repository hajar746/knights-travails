// MAKE CHESSBOARD
function ChessBoard() {
  const rows = 8;
  const columns = 8;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Square(i, j));
    }
  }

  const moveKnight = (startPos, endPos) => {
    board[startPos[0]][startPos[1]].addKnight(endPos);
  };

  return {
    moveKnight,
    board,
  };
}

// THIS IS THE VALUE OF EACH SQUARE, IT WILL BE ABLE GO ACCESS IT USING CLOSURE
function Square(i, j) {
  // all possible squares that knight can move to
  const possiblePositions = [
    [i + 1, j + 2],
    [i - 1, j + 2],
    [i + 1, j - 2],
    [i - 1, j - 2],
    [i + 2, j + 1],
    [i + 2, j - 1],
    [i - 2, j + 1],
    [i - 2, j - 1],
  ];

  // create an edge list using valid positions
  const edgeList = () => {
    let list = [];
    for (let i = 0; i < 8; i++) {
      if (
        possiblePositions[i][0] >= 0 &&
        possiblePositions[i][1] >= 0 &&
        possiblePositions[i][0] < 8 &&
        possiblePositions[i][1] < 8
      ) {
        list.push(possiblePositions[i]);
      }
    }
    return list;
  };

  // value of each square on board, data tells whether square is empty(null) or has knight
  let squareValue = {
    data: null,
    currentPos: [i, j],
    allowedPos: edgeList(),
  };

  //  move knight to possible position
  const addKnight = (endPos) => {
    squareValue.data = knight;
    squareValue.currentPos = findShortestPath(endPos);
  };

  return {
    addKnight,
    squareValue,
  };
}
