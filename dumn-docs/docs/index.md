# DUMN: Interactive Graph Generator 


Demo: [https://dumn.herokuapp.com](https://dumn.herokuapp.com)

## Getting Started

### Installation 

To use the API, add the following to your HTML header:

```{html}
<script defer type="text/javascript" src="https://dumn.herokuapp.com/dumn.js"></script>
```

### Usage

To use the API, you need to create a `canvas` element with a unique ID. You will be generating all the graphs on your own canvas element.

An example:
```{html}
<canvas id="myCanvas"></canvas>
```

In your script file, you can pass the following options to the API and generate a graph:

* `networkSize`: size of the graph you want to generate. Here the size refers to the number of nodes.
* `nodeSize`: size of each node within your graph.
* `canvasId`: id of the `canvas` element. In the example above, the id is `myCanvas`.
* `color`: the graph will be generated in this color. The color can be either names (e.g. `black`, `red`) or HEX code (e.g. `#F0F0F0`). If you enter an invalid color or not entering color at all, the graph will be generated in black by default.

After the options are all set, generate the graph by calling `nnGenerator(options)`. An example usage:

```{javascript}
// An example option
options = {"networkSize": 10, "nodeSize": 50, "canvasId": "myCanvas", "color": "black"}
nnGenerator(options)
```

### Adding Edges

To add edges to the graph, 
* `edges`: the edges within the graph. For example, to include edges (1, 3) and (2, 3), the edges will be
```{javascript}
edges = [
    { v1: 1, v2: 3 },
    { v1: 2, v2: 3 }
]
```
    
where `v1` and `v2` are the labels of nodes (see [demo](https://dumn.herokuapp.com/pages/demo/demo.html) for example of node labelling).

In your own canvas，you will be able to drag the nodes around using mouse (see [demo](https://dumn.herokuapp.com/pages/demo/demo.html) for an interactive use). Additionally, the generated graph can be directly saved as an image file.

### Sample Usage

Here is an example of the generated graph using the example from above:

![Sample Usage](example1.png)

### Running Demo Locally

To run demo locally, run the following commands:

```{bash}
$ npm install
$ node server.js
```

### Project layout

    dumn-docs/    # The documentations.
    pub/
        pages/
            ...   # The demo files
    dumn.js       # The main API
    package.json  # Dependencies
    ...           # Other files
