class Graph {
  constructor() {
    this.adjacenyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacenyList[vertex]) {
      this.adjacenyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    // make sure vertices are already in the graph
    if (!this.adjacenyList[vertex1]) {
      console.log(`${vertex1} is not a valid vertex`);
      return;
    }

    if (!this.adjacenyList[vertex2]) {
      console.log(`${vertex2} is not a valid vertex`);
      return;
    }

    this.adjacenyList[vertex1].push(vertex2);
    this.adjacenyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );

    this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    const edges = this.adjacenyList[vertex];
    for (const edge of edges) {
      this.removeEdge(edge, vertex);
    }

    delete this.adjacenyList[vertex];
  }

  dfsRecursive(start) {
    const adjacenyList = this.adjacenyList;
    const visited = {};
    const results = [];

    function dfsHelper(vertex) {
      if (adjacenyList[vertex].length === 0) {
        return;
      }

      results.push(vertex);
      visited[vertex] = true;

      for (const edge of adjacenyList[vertex]) {
        if (!visited[edge]) {
          dfsHelper(edge);
        }
      }
    }

    dfsHelper(start);
    return results;
  }

  dfsIterative(start) {
    const visited = {};
    const stack = [];
    const results = [];
    stack.push(start);

    while (stack.length > 0) {
      const vertex = stack.pop();

      if (!visited[vertex]) {
        results.push(vertex);
        visited[vertex] = true;

        for (const edge of this.adjacenyList[vertex]) {
          if (!visited[edge]) {
            stack.push(edge);
          }
        }
      }
    }

    return results;
  }
}

const graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('Manila');
graph.addVertex('Jeddah');
graph.addVertex('Paris');
graph.addVertex('Dallas');
graph.addVertex('Cairo');
graph.addEdge('Manila', 'Tokyo');
graph.addEdge('Manila', 'Jeddah');
graph.addEdge('Tokyo', 'Paris');
graph.addEdge('Tokyo', 'Dallas');
graph.addEdge('Tokyo', 'Cairo');
console.log(graph.dfsRecursive('Manila'));
console.log(graph.dfsIterative('Manila'));
