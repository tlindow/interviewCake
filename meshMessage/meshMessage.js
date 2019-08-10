function getPath(graph, startNode, endNode) {
  if (startNode === endNode) {
    return [startNode];
  }
  
  if (!graph[startNode] || !graph[endNode]) {
    throw new Error('start or end node not present');
  }
  
  const shortestPaths = {};
  const path = [];
  const queue = [startNode];
  let node;
  let neighbor;
  
  while (queue.length && !shortestPaths[endNode]) {
    node = queue.shift();
    for (let i = 0; i < graph[node].length; i++) {
      neighbor = graph[node][i];
      if (!shortestPaths[neighbor]) {
        shortestPaths[neighbor] = node;
        queue.push(neighbor);
      }
    }
  }
  
  if (!shortestPaths[endNode]) {
    return null;
  }
  
  node = endNode;
  while (node !== startNode) {
    path.push(node);
    node = shortestPaths[node];
  }
  path.push(startNode)
  return path.reverse();
}
