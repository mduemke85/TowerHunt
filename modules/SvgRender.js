/**
 * @module SvgRender
 * @file js/modules/SvgRender.js
 * @copyright 2025-06-29 Magnus Dümke
 * @license MIT
 * @author Magnus Dümke
 * @version 1.0.0
 * @since 2025-06-29
 * @description This module provides functions to create SVG elements for rendering a tower,
 * which is a piece on the board that changes its layout at gameplay.
 * It includes functions to create circles and a complete SVG structure for visual representations.
 * @property SVG_NS - The namespace for SVG elements, used to create SVG elements correctly.
 * @exports {function} svgTowerVector - A function that creates and returns an SVG element.
 */

const SVG_NS = "http://www.w3.org/2000/svg";

/**
 * Creates an SVGCircleElement element with the specified attributes.
 * @private
 * @param {number} cx - The x-coordinate of the center of the circle.
 * @param {number} cy - The y-coordinate of the center of the circle.
 * @param {number} r - The radius of the circle.
 * @param {string} fillColor - The fill color of the circle (CSS color value).
 * @param {string} strokeColor - The stroke color of the circle (CSS color value).
 * @returns {SVGCircleElement} The created SVG circle element.
 */
function createSvgCircle(cx, cy, r, fillColor, strokeColor) {
  const circle = document.createElementNS(SVG_NS, "circle");
  circle.setAttribute("cx", cx);
  circle.setAttribute("cy", cy);
  circle.setAttribute("r", r);
  circle.setAttribute("fill", fillColor);
  circle.setAttribute("stroke", strokeColor);
  return circle;
}

/**
 * Creates an SVGSVGElement element containing various tower vector graphics as grouped <g> elements.
 * Each group represents a different tower configuration, distinguished by stack size, color and a top dot pattern.
 * The groups are initially hidden and can be shown/hidden via their CSS classes.
 *
 * @returns {SVGSVGElement} An SVG element with multiple grouped tower vector graphics.
 */
function createSvgTowerVector() {
  const svgTowerVector = document.createElementNS(SVG_NS, "svg");
  svgTowerVector.setAttribute("viewBox", "0 0 100 100");
  svgTowerVector.setAttribute("width", "100%");
  svgTowerVector.setAttribute("height", "100%");
  const tower_red = document.createElementNS(SVG_NS, "g");
  tower_red.classList.add("overlay", "svgHide", "svgTower", "tower_red");
  const tower_red_dot = document.createElementNS(SVG_NS, "g");
  tower_red_dot.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_red_dot"
  );
  const tower_red_blue = document.createElementNS(SVG_NS, "g");
  tower_red_blue.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_red_blue"
  );
  const tower_red_blue_dot = document.createElementNS(SVG_NS, "g");
  tower_red_blue_dot.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_red_blue_dot"
  );
  const tower_red_blue_red = document.createElementNS(SVG_NS, "g");
  tower_red_blue_red.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_red_blue_red"
  );
  const tower_red_blue_red_dot = document.createElementNS(SVG_NS, "g");
  tower_red_blue_red_dot.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_red_blue_red_dot"
  );
  const tower_red_red_blue = document.createElementNS(SVG_NS, "g");
  tower_red_red_blue.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_red_red_blue"
  );
  const tower_red_red_blue_dot = document.createElementNS(SVG_NS, "g");
  tower_red_red_blue_dot.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_red_red_blue_dot"
  );
  const tower_blue = document.createElementNS(SVG_NS, "g");
  tower_blue.classList.add("overlay", "svgHide", "svgTower", "tower_blue");
  const tower_blue_dot = document.createElementNS(SVG_NS, "g");
  tower_blue_dot.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_blue_dot"
  );
  const tower_blue_red = document.createElementNS(SVG_NS, "g");
  tower_blue_red.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_blue_red"
  );
  const tower_blue_red_dot = document.createElementNS(SVG_NS, "g");
  tower_blue_red_dot.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_blue_red_dot"
  );
  const tower_blue_red_blue = document.createElementNS(SVG_NS, "g");
  tower_blue_red_blue.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_blue_red_blue"
  );
  const tower_blue_red_blue_dot = document.createElementNS(SVG_NS, "g");
  tower_blue_red_blue_dot.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_blue_red_blue_dot"
  );
  const tower_blue_blue_red = document.createElementNS(SVG_NS, "g");
  tower_blue_blue_red.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_blue_blue_red"
  );
  const tower_blue_blue_red_dot = document.createElementNS(SVG_NS, "g");
  tower_blue_blue_red_dot.classList.add(
    "overlay",
    "svgHide",
    "svgTower",
    "tower_blue_blue_red_dot"
  );

  tower_red.appendChild(createSvgCircle(50, 50, 35, "red", "none"));
  tower_red_dot.appendChild(createSvgCircle(50, 50, 35, "red", "none"));
  tower_red_dot.appendChild(createSvgCircle(50, 50, 10, "black", "none"));
  tower_red_blue.appendChild(createSvgCircle(45, 55, 35, "red", "none"));
  tower_red_blue.appendChild(createSvgCircle(55, 45, 35, "blue", "none"));
  tower_red_blue_dot.appendChild(createSvgCircle(45, 55, 35, "red", "none"));
  tower_red_blue_dot.appendChild(createSvgCircle(55, 45, 35, "blue", "none"));
  tower_red_blue_dot.appendChild(createSvgCircle(55, 45, 10, "black", "none"));
  tower_red_blue_red.appendChild(createSvgCircle(40, 60, 35, "red", "none"));
  tower_red_blue_red.appendChild(createSvgCircle(50, 50, 35, "blue", "none"));
  tower_red_blue_red.appendChild(createSvgCircle(60, 40, 35, "red", "none"));
  tower_red_blue_red_dot.appendChild(
    createSvgCircle(40, 60, 35, "red", "none")
  );
  tower_red_blue_red_dot.appendChild(
    createSvgCircle(50, 50, 35, "blue", "none")
  );
  tower_red_blue_red_dot.appendChild(
    createSvgCircle(60, 40, 35, "red", "none")
  );
  tower_red_blue_red_dot.appendChild(
    createSvgCircle(60, 40, 10, "black", "none")
  );
  tower_red_red_blue.appendChild(createSvgCircle(40, 60, 35, "red", "none"));
  tower_red_red_blue.appendChild(createSvgCircle(50, 50, 35, "red", "black"));
  tower_red_red_blue.appendChild(createSvgCircle(60, 40, 35, "blue", "none"));
  tower_red_red_blue_dot.appendChild(
    createSvgCircle(40, 60, 35, "red", "none")
  );
  tower_red_red_blue_dot.appendChild(
    createSvgCircle(50, 50, 35, "red", "black")
  );
  tower_red_red_blue_dot.appendChild(
    createSvgCircle(60, 40, 35, "blue", "none")
  );
  tower_red_red_blue_dot.appendChild(
    createSvgCircle(60, 40, 10, "black", "none")
  );
  tower_blue.appendChild(createSvgCircle(50, 50, 35, "blue", "none"));
  tower_blue_dot.appendChild(createSvgCircle(50, 50, 35, "blue", "none"));
  tower_blue_dot.appendChild(createSvgCircle(50, 50, 10, "black", "none"));
  tower_blue_red.appendChild(createSvgCircle(45, 55, 35, "blue", "none"));
  tower_blue_red.appendChild(createSvgCircle(55, 45, 35, "red", "none"));
  tower_blue_red_dot.appendChild(createSvgCircle(45, 55, 35, "blue", "none"));
  tower_blue_red_dot.appendChild(createSvgCircle(55, 45, 35, "red", "none"));
  tower_blue_red_dot.appendChild(createSvgCircle(55, 45, 10, "black", "none"));
  tower_blue_red_blue.appendChild(createSvgCircle(40, 60, 35, "blue", "none"));
  tower_blue_red_blue.appendChild(createSvgCircle(50, 50, 35, "red", "none"));
  tower_blue_red_blue.appendChild(createSvgCircle(60, 40, 35, "blue", "none"));
  tower_blue_red_blue_dot.appendChild(
    createSvgCircle(40, 60, 35, "blue", "none")
  );
  tower_blue_red_blue_dot.appendChild(
    createSvgCircle(50, 50, 35, "red", "none")
  );
  tower_blue_red_blue_dot.appendChild(
    createSvgCircle(60, 40, 35, "blue", "none")
  );
  tower_blue_red_blue_dot.appendChild(
    createSvgCircle(60, 40, 10, "black", "none")
  );
  tower_blue_blue_red.appendChild(createSvgCircle(40, 60, 35, "blue", "none"));
  tower_blue_blue_red.appendChild(createSvgCircle(50, 50, 35, "blue", "black"));
  tower_blue_blue_red.appendChild(createSvgCircle(60, 40, 35, "red", "none"));
  tower_blue_blue_red_dot.appendChild(
    createSvgCircle(40, 60, 35, "blue", "none")
  );
  tower_blue_blue_red_dot.appendChild(
    createSvgCircle(50, 50, 35, "blue", "black")
  );
  tower_blue_blue_red_dot.appendChild(
    createSvgCircle(60, 40, 35, "red", "none")
  );
  tower_blue_blue_red_dot.appendChild(
    createSvgCircle(60, 40, 10, "black", "none")
  );
  svgTowerVector.appendChild(tower_red);
  svgTowerVector.appendChild(tower_red_dot);
  svgTowerVector.appendChild(tower_red_blue);
  svgTowerVector.appendChild(tower_red_blue_dot);
  svgTowerVector.appendChild(tower_red_blue_red);
  svgTowerVector.appendChild(tower_red_blue_red_dot);
  svgTowerVector.appendChild(tower_red_red_blue);
  svgTowerVector.appendChild(tower_red_red_blue_dot);
  svgTowerVector.appendChild(tower_blue);
  svgTowerVector.appendChild(tower_blue_dot);
  svgTowerVector.appendChild(tower_blue_red);
  svgTowerVector.appendChild(tower_blue_red_dot);
  svgTowerVector.appendChild(tower_blue_red_blue);
  svgTowerVector.appendChild(tower_blue_red_blue_dot);
  svgTowerVector.appendChild(tower_blue_blue_red);
  svgTowerVector.appendChild(tower_blue_blue_red_dot);
  return svgTowerVector;
}

function createIconSidebarZone() {
  const iconSidebar = document.createElementNS(SVG_NS, "svg");
  iconSidebar.setAttribute("viewBox", "0 0 100 100");
  iconSidebar.classList.add("icon", "overlay");
  iconSidebar.appendChild(createSvgCircle(50, 50, 35, "red", "none"));
  iconSidebar.appendChild(createSvgCircle(50, 50, 10, "black", "none"));
  return iconSidebar;
}

function createIconSidebarVault(color) {
  const iconSidebar = document.createElementNS(SVG_NS, "svg");
  iconSidebar.setAttribute("viewBox", "0 0 100 100");
  iconSidebar.classList.add("icon", "overlay");
  iconSidebar.appendChild(createSvgCircle(50, 50, 35, color, "none"));
  return iconSidebar;
}

export { createSvgTowerVector, createIconSidebarZone, createIconSidebarVault };
