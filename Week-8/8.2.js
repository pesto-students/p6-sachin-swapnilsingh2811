// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:The left subtree of a node contains only nodes with keys less than the node's key. Theright subtree of a node contains only nodes with 
// keys greater than the node's key. Both the left and right subtrees must also be binary search trees.

// Javascript implementation to
// check if given Binary tree
// is a BST or not

/* Class containing left and right child of current node and key value*/

class Node
{
    constructor(data)
    {
    this.left = null;
    this.right = null;
    this.data = data;
    }
}

let prev;

function isBST2(root)
{

    // traverse the tree  and
    // keep track of prev node
    if (root != null)
    {
        if (!isBST2(root.left))
            return false;

        // Allows only distinct valued nodes
        if (prev != null && root.data <= prev.data)
            return false;

        prev = root;

        return isBST2(root.right);
    }
    return true;
}

function isBST(root)
{
    return isBST2(root);
}

let root = new Node(5);
root.left = new Node(1);
root.right = new Node(4);
root.left.left = new Node(null);
root.left.right = new Node(null);
root.right.left=new Node(3);
root.right.right=new Node(6);

if (isBST(root))
    console.log(true);
else
    console.log(false);

