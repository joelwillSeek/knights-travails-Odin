/**
 * create graph factory->
 * ->create build graph
 * ->create print to see graph is correct
 * ->create dfs modified for your specifications
 *
 */

//Node
let node = (data) => ({ data });

let graph_list = () => {
  let list_nodes = [];

  let add_node = (value) => {
    let path_array = [];
    path_array.push(node(value));
    list_nodes.push(path_array);
  };

  let add_edge = (src, dist) => {
    let current = list_nodes[src - 1];
    let dist_node = list_nodes[dist - 1][0];
    current.push(dist_node);
  };

  let print = () => {
    let string = "";
    for (let i = 0; i < list_nodes.length; i++) {
      string = "";
      for (let j = 0; j < list_nodes[i].length; j++) {
        string += list_nodes[i][j].data + "->";
      }
      console.log(string);
    }
  };

  let get_path = (src, dist) => {
    var visited = new Set();

    let path = [];

    get_path_helper(path, visited, src, dist);

    return path;
  };

  let get_path_helper = (path, visited, src, dist) => {
    if (src == dist) {
      path.push(src);
      return true;
    } else if (visited.has(src)) {
      return false;
    } else {
      visited.add(src);
    }

    for (let i = 0; i < list_nodes[src - 1].length; i++) {
      if (get_path_helper(path, visited, list_nodes[src - 1][i].data, dist)) {
        break;
      }
    }

    path.push(src);

    return path;
  };

  return { add_node, print, add_edge, get_path };
};

export default graph_list;
