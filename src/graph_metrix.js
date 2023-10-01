let node = (data) => {
  return { data };
};

//graph implemented in matrix form
/**
 *
 * @param {Number} size
 * @param {Array} nodes_array
 */
let graph_matrix = (size, nodes_array) => {
  let matrix = [];

  let nodes = [];

  let create_graph = () => {
    if (nodes_array.length != size)
      return "size and length of nodes is not the same";

    for (let i = 1; i <= size; i++) {
      add_node(nodes_array[i - 1]);
      let array = [];

      for (let j = 1; j <= size; j++) array.push(0);

      matrix.push(array);
    }
  };

  let check_edge = (src, dist) => (matrix[src][dist] == 1 ? true : false);

  let set_edge = (src, dist) => (matrix[src][dist] = 1);

  let add_node = (value) => nodes.push(node(value));

  let get_string_form = () => {
    let string = "  ";

    nodes.forEach((value) => (string += value.data + " "));

    console.log(string);

    for (let i = 0; i < matrix.length; i++) {
      string = `${nodes[i].data} `;

      for (let j = 0; j < matrix[i].length; j++) {
        string += matrix[i][j] + " ";
      }
      console.log(string);
    }
  };

  let DFS = (src) => {
    let visited = new Set();

    DFS_helper(visited, src);
  };

  /**
   *
   * @param {Set} visited
   * @param {Number} source
   */

  let DFS_helper = (visited, source) => {
    if (visited.has(source)) {
      return;
    } else {
      visited.add(source);
      console.log(source);
    }

    for (let i = 0; i < matrix[source].length; i++) {
      if (matrix[source][i] == 1) {
        DFS_helper(visited, i);
      }
    }
  };

  create_graph();

  return { add_node, set_edge, check_edge, get_string_form, DFS };
};

export default graph_matrix;
