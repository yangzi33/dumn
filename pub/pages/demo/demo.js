"use strict";
// import { nnGenerator } from "./dumn";
// require("./dumn.js");

// Helper function to get random coordinate within canvas

let options = {
  networkSize: 0,
  nodeSize: 50,
  canvasId: "nnContainer",
  edgesInput: [],
  color: "#000000",
};

$("#generateButton").live("click", function () {
  options.networkSize = $("#networkSizeInput").val();
  options.nodeSize = $("#nodeSizeInput").val();
  console.log(options.nodeSize);
  let newColor = $("#nodeColorInput").val();
  if (newColor == "" || CSS.supports("color", newColor)) {
    options.color = newColor;
  } else {
    options.color = "#000000";
    $("#color").text("Invalid color, rendering in black");
  }
  //   options.color = $()
  nnGenerator(options);
});

$("#addEdgeButton").live("click", function () {
  let v1 = $("#e1").val();
  let v2 = $("#e2").val();
  addEdge({ v1: v1, v2: v2 });
});

$("#removeEdgeButton").live("click", function () {
  let v1 = $("#e1").val();
  let v2 = $("#e2").val();
  console.log(v1);
  console.log(v2);
  removeEdge({ v1: v1, v2: v2 });
});

$("#nodeSizeInput").on("input", function () {
  $("#nodeSizeP").text("Node size: " + $("#nodeSizeInput").val());
});

nnGenerator(options);
draw();
setDrag();
