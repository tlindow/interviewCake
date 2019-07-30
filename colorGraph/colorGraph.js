class GraphNode {
  constructor(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
  }
}

function colorGraph(graph, colors) {

  // Create a valid coloring for the graph
  
  graph.forEach(node => {
    let illegalColors = {};
    node.neighbors.forEach(neighbor => {
      if (node === neighbor) {
        throw new Error("It's a loop");
      }
      
      if (neighbor.color) {
        illegalColors[neighbor.color] = true;
      }
    });
    
    for (let i = 0; i < colors.length; i++) {
      if (!illegalColors[colors[i]]) {
        node.color = colors[i];
        break
      }
    }
  });
}
