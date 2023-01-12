// All Path from source to target
// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, 
// find all possiblepaths from node 0 to node n - 1 and return them in any order.
// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e.,there is a directed edge from node i to node graph[i][j]).
// Example 1:Input: graph = [[1,2],[3],[3],[]]Output: [[0,1,3],[0,2,3]]Explanation: There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.

let allPathsSourceTarget = function(graph, path = [], i = 0, ret = []) {
    if (i >= graph.length) return ret; // base case

    for (const e of graph[i]) { // iter over all nodes
        allPathsSourceTarget(graph, [...path, i], e, ret);
    }

    if (i === graph.length - 1) ret.push([...path, i]); // if target push to results

    return ret;
};
const graph = [[1,2],[3],[3],[]];

console.log(allPathsSourceTarget(graph));
