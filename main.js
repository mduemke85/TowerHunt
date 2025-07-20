import {
  createIconSidebarVault,
  createIconSidebarZone,
  createSvgTowerVector,
} from "./modules/SvgRender.js";

function createBoard(board, board_size, svgElement) {
  const fragment = document.createDocumentFragment();
  const securedBotSvg = document
    .getElementById("securedBotSvg")
    .cloneNode(true);
  securedBotSvg.classList.remove("icon");
  securedBotSvg.classList.add("boardIcon");
  // Create the board using a document fragment for better performance
  for (let i = 0; i < board_size; i++) {
    const cell1 = document.createElement("div");
    const cell2 = document.createElement("div");
    const cell3 = document.createElement("div");
    const cell4 = document.createElement("div");
    const cell5 = document.createElement("div");
    const cell6 = document.createElement("div");
    if ((i === 0) | (i === board_size - 1)) {
      cell1.appendChild(securedBotSvg.cloneNode(true));
      cell2.appendChild(securedBotSvg.cloneNode(true));
      cell3.appendChild(securedBotSvg.cloneNode(true));
      cell4.appendChild(securedBotSvg.cloneNode(true));
      cell5.appendChild(securedBotSvg.cloneNode(true));
      cell6.appendChild(securedBotSvg.cloneNode(true));
    }
    cell1.appendChild(svgElement.cloneNode(true));
    cell2.appendChild(svgElement.cloneNode(true));
    cell3.appendChild(svgElement.cloneNode(true));
    cell4.appendChild(svgElement.cloneNode(true));
    cell5.appendChild(svgElement.cloneNode(true));
    cell6.appendChild(svgElement.cloneNode(true));
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
      cell1.querySelector(".tower_red").classList.remove("svgHide");
      cell2.querySelector(".tower_blue").classList.remove("svgHide");
      cell3.querySelector(".tower_red").classList.remove("svgHide");
      cell4.querySelector(".tower_blue").classList.remove("svgHide");
      cell5.querySelector(".tower_red").classList.remove("svgHide");
      cell6.querySelector(".tower_blue").classList.remove("svgHide");
    } else {
      cell1.classList.add("dark");
      cell2.classList.add("light");
      cell3.classList.add("dark");
      cell4.classList.add("light");
      cell5.classList.add("dark");
      cell6.classList.add("light");
      cell1.querySelector(".tower_blue_dot").classList.remove("svgHide");
      cell2.querySelector(".tower_red_dot").classList.remove("svgHide");
      cell3.querySelector(".tower_blue_dot").classList.remove("svgHide");
      cell4.querySelector(".tower_red_dot").classList.remove("svgHide");
      cell5.querySelector(".tower_blue_dot").classList.remove("svgHide");
      cell6.querySelector(".tower_red_dot").classList.remove("svgHide");
    }
  }
  board.appendChild(fragment);
}

window.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("board");
  const svgElement = createSvgTowerVector();
  createBoard(board, 6, svgElement);
  const securedTowerBot = document.querySelector(".securedTowerBot");
  securedTowerBot.appendChild(createIconSidebarZone().cloneNode(true));
  const vaultBlueBot = document.querySelector(".vaultBlueBot");
  const vaultRedBot = document.querySelector(".vaultRedBot");
  vaultBlueBot.appendChild(createIconSidebarVault("blue").cloneNode(true));
  vaultRedBot.appendChild(createIconSidebarVault("red").cloneNode(true));
});
