# API Docs
nnGenerator API v1.0.0

## Options

options to initialize a `nnGenerator` Object 

| **Property** | **Type** | **Description**                                                    |
|--------------|----------|--------------------------------------------------------------------|
| networkSize  | Integer  | The number of nodes in graph, i.e. the size of generated graph.    |
| nodeSize     | Integer  | Size of the nodes in graph.                                        |
| canvasId     | String   | Element id of canvas used to generate graph.                       |
| color        | String   | Color of nodes. Has to be property of CSS (HEX code or color name). |

## Events

* After user generates a graph, user can drag the nodes to any position within the canvas.
* User may add edges between graph nodes by enterring node labels. Note: looping (a node connecting itself) is not supported.

## Methods

Methods to control a `nnGenerator` object

| **Name**      | **Parameters**                   | **Description**                                                                           |
|---------------|----------------------------------|-------------------------------------------------------------------------------------------|
| addNode       | None                             | Increase the size of the graph by adding one node.                                        |
| addEdge       | Object{v1: integer, v2: integer} | Connects nodes v1 and v2 with an edge.                                                    |
| removeEdge    | Object{v1: integer, v2: integer} | Remove edge connecting v1 and v2.                                                         |
| draw          | None                             | Draw the generated graph on canvas.                                                       |
| select        | x: float, y: float               | Point object at position (x, y) by pointer `selected`.                                    |
| dragUp        | Event                            | Handles mouse button release.                                                             |
| dragOut       | Event                            | Handles mouse leaving canvas.                                                             |
| dragMove      | Event                            | Handles mouse dragging within canvas.                                                     |
| dragDown      | Event                            | Handles mouse clicking canvas.                                                            |
| setDrag       | None                             | Handles all mouse events (dragUp, dragOut, dragMove, dragDown).                           |
| getRandomCoor | max: Integer                     | Generates a random float from range (0, max). Used to generate nodes at random positions. |