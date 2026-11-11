import {Graph } from './dijkstra_search'

let graph_data: any = {};
graph_data['Cidade 1'] = {'Cidade 2':3, 'Cidade 3':7, 'Cidade 5':1}
graph_data['Cidade 2'] = {'Cidade 1':3, 'Cidade 3':0.5, 'Cidade 4':9}
graph_data['Cidade 3'] = {'Cidade 1':7, 'Cidade 2':0.5}
graph_data['Cidade 4'] = {'Cidade 2':9}
graph_data['Cidade 5'] = {'Cidade 1':1}

console.log(JSON.stringify(graph_data, null, 2));

let my_graph = new Graph(graph_data);
let path = my_graph.dijkstra_searh('Cidade 1','Cidade 3').reverse();
console.log(path);
console.log(my_graph.costs);
console.log(my_graph.parents);


