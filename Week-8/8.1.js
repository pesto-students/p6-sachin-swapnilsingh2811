// Given the root of a binary tree, 
// return its maximum depth.A binary tree's maximum depth is the number of nodes along the longest path from theroot node down to the farthest leaf node.
// Example 1:Input: root = [3,9,20,null,null,15,7]Output: 3Example 2:Input: root = [1,null,2]Output: 2Constraints:●
// The number of nodes in the tree is in the range [0, 104].●100 <= Node.val <= 100



// A binary tree node
class Node
{
	constructor(item)
	{
		this.data=item;
		this.left=this.right=null;
	}
}

	let root;
	
	/* Compute the "maxDepth" of a tree -- the number of
	nodes along the longest path from the root node
	down to the farthest leaf node.*/
	function maxDepth(node)
	{
		if (node == null)
			return 0;
		else
		{
			/* compute the depth of each subtree */
			let leftDepth = maxDepth(node.left);
			let rightDepth = maxDepth(node.right);

			/* use the larger one */
			if (leftDepth > rightDepth)
				return (leftDepth + 1);
			else
				return (rightDepth + 1);
		}
	}
	
	/* Driver program to test above functions */
	
		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);

		console.log(+maxDepth(root));
