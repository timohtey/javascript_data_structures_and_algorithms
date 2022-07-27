import { PriorityQueue } from './priorityQueue.js';
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

  dijkstra(startVertex, endVertex) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // Initialize
    for (const vertex in this.adjacencyList) {
      if (vertex === startVertex) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    // While there is a vertex to be visited,
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === endVertex) {
        // Found the shortest path
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (const nextNode of this.adjacencyList[smallest]) {
          // Calculate new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.vertex;

          if (candidate < distances[nextNeighbor]) {
            // Updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // Updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // Enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);
console.log(graph.dijkstra('A', 'E'));
// const graph = new WeightedGraph();
// graph.addVertex('Tokyo');
// graph.addVertex('Manila');
// graph.addVertex('Jeddah');
// graph.addVertex('Paris');
// graph.addVertex('Dallas');
// graph.addVertex('Cairo');
// graph.addVertex('Riyadh');
// graph.addEdge('Manila', 'Tokyo', 40);
// graph.addEdge('Manila', 'Jeddah', 100);
// graph.addEdge('Tokyo', 'Paris', 80);
// graph.addEdge('Tokyo', 'Dallas', 120);
// graph.addEdge('Jeddah', 'Cairo', 20);
// graph.addEdge('Dallas', 'Riyadh', 130);
// graph.removeEdge('Manila', 'Tokyo');
