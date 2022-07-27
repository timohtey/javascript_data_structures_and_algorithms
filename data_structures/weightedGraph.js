class Vertex {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    // make sure vertices are already in the graph
    if (!this.adjacencyList[vertex1]) {
      console.log(`${vertex1} is not a valid vertex`);
      return;
    }

    if (!this.adjacencyList[vertex2]) {
      console.log(`${vertex2} is not a valid vertex`);
      return;
    }

    this.adjacencyList[vertex1].push(new Vertex(vertex2, weight));
    this.adjacencyList[vertex2].push(new Vertex(vertex1, weight));
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex.vertex !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex.vertex !== vertex1
    );
  }

  removeVertex(vertex) {
    const edges = this.adjacencyList[vertex];
    for (const edge of edges) {
      this.removeEdge(edge, vertex);
    }

    delete this.adjacencyList[vertex];
  }
}

const graph = new WeightedGraph();
graph.addVertex('Tokyo');
graph.addVertex('Manila');
graph.addVertex('Jeddah');
graph.addVertex('Paris');
graph.addVertex('Dallas');
graph.addVertex('Cairo');
graph.addVertex('Riyadh');
graph.addEdge('Manila', 'Tokyo', 40);
graph.addEdge('Manila', 'Jeddah', 100);
graph.addEdge('Tokyo', 'Paris', 80);
graph.addEdge('Tokyo', 'Dallas', 120);
graph.addEdge('Jeddah', 'Cairo', 20);
graph.addEdge('Dallas', 'Riyadh', 130);
graph.removeEdge('Manila', 'Tokyo');
console.log(graph.adjacencyList);
