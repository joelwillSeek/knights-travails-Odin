import graph_list from "./graph_list";

let list = graph_list();

let setting_up_graph_for_knight_patterns = () => {
  for (let i = 1; i <= 64; i++) list.add_node(i);

  let knightMoves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ];

  for (let current = 1; current <= 64; current++) {
    const [currentRow, currentCol] = getPosition(current);

    for (const [rowOffset, colOffset] of knightMoves) {
      const newRow = currentRow + rowOffset;
      const newCol = currentCol + colOffset;

      if (isValidPosition(newRow, newCol)) {
        const adjacent = getPositionIndex(newRow, newCol);
        //adjacencyList[current].push(adjacent);
        list.add_edge(current, adjacent);
      }
    }
  }

  function getPositionIndex(row, col) {
    return (row - 1) * 8 + col;
  }

  function getPosition(index) {
    const row = Math.ceil(index / 8);
    const col = ((index - 1) % 8) + 1;
    return [row, col];
  }

  function isValidPosition(row, col) {
    return row >= 1 && row <= 8 && col >= 1 && col <= 8;
  }
};

setting_up_graph_for_knight_patterns();

list.print();

let set = list.get_path(19, 27).reverse();
console.log(set);

//create a matrix form
let string = "  ";

let iterate = 1;

for (let i = 7; i >= 0; i--) {
  if (iterate >= 64) break;
  string = "";
  for (let j = 0; j < 8; j++) {
    //if (set.includes(iterate)) string += "*";
    string += iterate++ + " ";

    if (iterate <= 8) string += " ";
  }
  console.log(string);
}
