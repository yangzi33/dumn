let networkSize;
let nodeSize;
let nodes;
let edges;
let canvasId;
let color;
let canvas;
let context;
let canvasOffset;
let offsetX;
let offsetY;
let startX;
let startY;
let down = false;
let drag;

function nnGenerator(options) {
  networkSize = options.networkSize;
  nodeSize = options.nodeSize;
  canvasId = options.canvasId;
  color = options.color;
  canvas = document.getElementById(options.canvasId);
  context = canvas.getContext("2d");
  canvasOffset = $("#" + options.canvasId).offset();
  offsetX = canvasOffset.left;
  offsetY = canvasOffset.top;
  nodes = [];
  edges = [];
  let edgesInput = options.edgesInput;
  for (let i = 0; i < networkSize; i++) {
    addNode();
  }
  for (let i = 0; i < edgesInput.length; i++) {
    addEdge(edgesInput[i]);
  }
  setDrag();
  draw();
}

function getRandomCoor(max) {
  return Math.floor(Math.random() * max);
}

function addNode() {
  nodes.push({
    x: getRandomCoor(canvas.width),
    y: getRandomCoor(canvas.height),
    w: nodeSize,
    h: nodeSize,
  });
}

function addEdge(edge) {
  let v1 = edge.v1;
  let v2 = edge.v2;
  if (
    !Number.isInteger(parseInt(v1)) ||
    !Number.isInteger(parseInt(v2)) ||
    v1 < 0 ||
    v1 >= nodes.length ||
    v2 < 0 ||
    v2 >= nodes.length
  ) {
    alert("Invalid nodes!");
  } else if (v1 == v2) {
    alert("Looping is not supported.");
  } else {
    edges.push({ v1: v1, v2: v2 });
    draw();
  }
}

function removeEdge(edge) {
  let v1 = edge.v1;
  let v2 = edge.v2;
  for (let i = 0; i < edges.length; i++) {
    let currEdge = edges[i];
    if (
      (currEdge.v1 == v1 && currEdge.v2 == v2) ||
      (currEdge.v1 == v2 && currEdge.v2 == v1)
    ) {
      edges.splice(i, 1);
      draw();
    }
  }
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    context.fillRect(node.x, node.y, node.w, node.h);
    context.fillStyle = color;
    context.font = "18pt Arial";
    context.fillText(i, node.x, node.y);
  }
  for (let i = 0; i < edges.length; i++) {
    let edge = edges[i];
    let v1 = nodes[edge.v1];
    let v2 = nodes[edge.v2];
    context.beginPath();
    context.moveTo(v1.x + v1.w / 2, v1.y + v1.h / 2);
    context.lineTo(v2.x + v2.w / 2, v2.y + v2.h / 2);
    context.stroke();
  }
}

function select(x, y) {
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (
      x >= node.x &&
      x <= node.x + node.w &&
      y >= node.y &&
      y <= node.y + node.h
    ) {
      drag = node;
      return true;
    }
  }
  return false;
}

function dragDown(e) {
  startX = parseInt(e.clientX - offsetX);
  startY = parseInt(e.clientY - offsetY);
  down = select(startX, startY);
}

function dragUp(e) {
  drag = null;
  down = false;
}

function dragOut(e) {
  dragUp(e);
}

function dragMove(e) {
  if (!down) {
    return;
  }

  let mouseX = parseInt(e.clientX - offsetX);
  let mouseY = parseInt(e.clientY - offsetY);

  let dx = mouseX - startX;
  let dy = mouseY - startY;
  startX = mouseX;
  startY = mouseY;
  drag.x += dx;
  drag.y += dy;
  draw();
}

function setDrag() {
  $("#" + canvasId).mousedown(function (e) {
    dragDown(e);
  });
  $("#" + canvasId).mousemove(function (e) {
    dragMove(e);
  });
  $("#" + canvasId).mouseup(function (e) {
    dragUp(e);
  });
  $("#" + canvasId).mouseout(function (e) {
    dragOut(e);
  });
}
