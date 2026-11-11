/* A basic graph usage example
**
** Author: Fabrício Galende M. de Carvalho, DSc
*/

import { Graph } from "./graph";

let g = new Graph(['Cidade 1', 'Cidade 2', 'Cidade 3', 'Cidade 4', 'Cidade 5']);

/*
Cidade 1 - Cidade 2 (3)
Cidade 1 - Cidade 3 (7)
Cidade 1 - Cidade 5 (1)
Cidade 2 - Cidade 3 (0.5)
Cidade 2 - Cidade 4 (9)
*/
console.log(g.adj_matrix);
console.log(g.vertices);


g.connect_vertices("Cidade 1", "Cidade 2", 3);
g.connect_vertices("Cidade 1", "Cidade 3", 7);
g.connect_vertices("Cidade 1", "Cidade 5", 1);
g.connect_vertices("Cidade 2", "Cidade 3", 0.5);
g.connect_vertices("Cidade 2", "Cidade 4", 9);
console.log("\n");
g.print();

let adjacency_list: {[city: string]: {[neighbor: string]: number}} = {};
g.vertices.forEach((city)=>{
    adjacency_list[city] = g.get_connected_vertices(city);
});
console.log("\nLista de adjacência (JSON):");
console.log(JSON.stringify(adjacency_list, null, 2));




