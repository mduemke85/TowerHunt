function createBoard(board, board_size) {
  const fragment = document.createDocumentFragment();
  // Create the board using a document fragment for better performance
  for (let i = 0; i < board_size; i++) {
    const cell1 = document.createElement("div");
    const cell2 = document.createElement("div");
    const cell3 = document.createElement("div");
    const cell4 = document.createElement("div");
    const cell5 = document.createElement("div");
    const cell6 = document.createElement("div");
    cell1.innerHTML = "cell1";
    cell2.innerHTML = "cell2";
    cell3.innerHTML = "cell3";
    cell4.innerHTML = "cell4";
    cell5.innerHTML = "cell5";
    cell6.innerHTML = "cell6";
    fragment.appendChild(cell1);
    fragment.appendChild(cell2);
    fragment.appendChild(cell3);
    fragment.appendChild(cell4);
    fragment.appendChild(cell5);
    fragment.appendChild(cell6);
    cell1.classList.add("cell1");
    cell2.classList.add("cell2");
    cell3.classList.add("cell3");
    cell4.classList.add("cell4");
    cell5.classList.add("cell5");
    cell6.classList.add("cell6");
    if (i % 2 === 0) {
      cell1.classList.add("light");
      cell2.classList.add("dark");
      cell3.classList.add("light");
      cell4.classList.add("dark");
      cell5.classList.add("light");
      cell6.classList.add("dark");
    } else {
      cell1.classList.add("dark");
      cell2.classList.add("light");
      cell3.classList.add("dark");
      cell4.classList.add("light");
      cell5.classList.add("dark");
      cell6.classList.add("light");
    }
  }
  board.appendChild(fragment);
}

window.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  createBoard(board, 6);
});
