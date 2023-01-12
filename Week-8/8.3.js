// Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e.,from left to right, level by level).



/* Class containing left and right child of current
node and key value*/
class Node {
		constructor(val) {
			this.data = val;
			this.left = null;
			this.right = null;
		}
	}


	// Root of the Binary Tree
	let root= null;
	
	/* function to print level order traversal of tree */
	function printLevelOrder() {
		let h = height(root);
		let i;
		for (i = 1; i <= h; i++)
			printCurrentLevel(root, i);
	}

	
	function height(root) {
		if (root == null)
			return 0;
		else {
			let lheight = height(root.left);
			let rheight = height(root.right);

			if (lheight > rheight)
				return (lheight + 1);
			else
				return (rheight + 1);
		}
	}

	/* Print nodes at the current level */
	function printCurrentLevel(root , level) {
		if (root == null)
			return;
		if (level == 1)
			console.log(root.data + " ");
		else if (level > 1) {
			printCurrentLevel(root.left, level - 1);
			printCurrentLevel(root.right, level - 1);
		}
	}
	
		root = new Node(3);
		root.left = new Node(9);
		root.right = new Node(20);
		root.left.left = new Node(null);
		root.left.right = new Node(null);
        root.right.left=new Node(15);
        root.right.right=new Node(7);

	printLevelOrder();


