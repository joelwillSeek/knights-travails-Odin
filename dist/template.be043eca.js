/**
 * create graph factory->
 * ->create build graph
 * ->create print to see graph is correct
 * ->create dfs modified for your specifications
 *
 *///Node
let e,d=e=>({data:e}),t=(e=[],{add_node:t=>{d(t),e.push},print:()=>{let d="";for(let t=0;t<e.length;t++){for(;0<e[0].length;t++)d+=e[t][0];console.log(d)}},add_edge:(d,t)=>{let l=e[d],o=e[t][0];l.push(o)}});for(let e=1;e<=64;e++)t.add_node(e);t.add_edge(4,6),t.print();//import graph_matrix from "./graph";
// let new_graph = graph_matrix();
// createKnightGraph();
// console.log(new_graph.BFS(36, 26));
/**
 * look build a list graph
 * then build the previous kind of graph with 1 to 64 with edge too
 * then find a way to navigate from source to dist
 */// let new_graph = graph_matrix(8, ["A", "B", "C", "D", "E", "F", "G", "H"]);
// let createKnightGraph = (n) => {
//   const dx = [2, 1, -1, -2, -2, -1, 1, 2];
//   const dy = [1, 2, 2, 1, -1, -2, -2, -1];
//   for (let row = 0; row < n; row++) {
//     for (let col = 0; col < n; col++) {
//       let vertix = row * n + col;
//       for (let i = 0; i < 8; i++) {
//         const newRow = row + dx[i];
//         const newCol = col + dy[i];
//         if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < n) {
//           let target = newRow * n + newCol;
//           console.log(vertix, target);
//           new_graph.set_edge(vertix, target);
//         }
//       }
//     }
//   }
// };
// createKnightGraph(8);
// // new_graph.set_edge(5, 5);
// // new_graph.set_edge(5, 6);
// // new_graph.set_edge(6, 7);
// new_graph.get_string_form();
// new_graph.DFS(5);
//# sourceMappingURL=template.be043eca.js.map

//# sourceMappingURL=template.be043eca.js.map
