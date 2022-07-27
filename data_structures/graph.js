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
}

const graph = new Graph();
graph.addVertex('Tokyo');
graph.addVertex('Manila');
graph.addVertex('Jeddah');
graph.addEdge('Manila', 'Tokyo');
graph.addEdge('Manila', 'Jeddah');
graph.removeVertex('Manila');
console.log(graph.adjacenyList);
