function getPath(graph, startNode, endNode) {

  // Find the shortest route in the network between the two users
  const queue = [startNode];
  const paths = {startNode: null};
  const path = [endNode];
  let node;
  
  if (!(startNode in graph) || !(endNode in graph)) {
    throw new Error('Input nodes are not in graph');
  }
  
  
  while (queue.length) {
    node = queue.shift();
    
    if (node === endNode) {
      break;
    }
    
    for (let i = 0; i < graph[node].length; i++) {
      if (!paths[graph[node][i]]) {
        queue.push(graph[node][i]);
        paths[graph[node][i]] = node;
      }
    }
  }
  
  if (node !== endNode) {
    return null;
  }
  
  let nextNode = path[0];
  while (true) {
    if (nextNode === startNode) {
      return path;
    }
    nextNode = paths[path[0]];
    path.unshift(nextNode);
  }
}
