class Node {
	constructor(val, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root;
	}

	/** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

	insert(val) {
		const node = new Node(val);
		let current = this.root;

		if (!current) {
			this.root = node;
			return this;
		}

		while (current) {
			if (current.val < node.val) {
				if (current.right) {
					current = current.right;
				} else {
					current.right = node;
					return this;
				}
			} else {
				if (current.left) {
					current = current.left;
				} else {
					current.left = node;
					return this;
				}
			}
		}
	}

	/** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

	insertRecursively(val) {
		const node = new Node(val);

		if (!this.root) {
			this.root = node;
			return this;
		}

		function insertRecursivelyHelper(node, current) {
			if (current.val < node.val) {
				if (current.right) {
					insertRecursivelyHelper(node, current.right);
				} else {
					current.right = node;
				}
			} else {
				if (current.left) {
					insertRecursivelyHelper(node, current.left);
				} else {
					current.left = node;
				}
			}
		}

		insertRecursivelyHelper(node, this.root);

		return this;
	}

	/** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

	find(val) {
		if (!this.root) return;
		let current = this.root;

		while (current) {
			if (current.val === val) return current;

			if (current.val < val) {
				if (current.right) {
					current = current.right;
				} else {
					return;
				}
			} else {
				if (current.left) {
					current = current.left;
				} else {
					return;
				}
			}
		}
	}

	/** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

	findRecursively(val) {
		if (!this.root) return;

		function findRecursivelyHelper(val, current) {
			if (current.val === val) return current;

			if (val > current.val) {
				if (current.right) {
					return findRecursivelyHelper(val, current.right);
				} else {
					return;
				}
			} else {
				if (current.left) {
					return findRecursivelyHelper(val, current.left);
				} else {
					return;
				}
			}
		}

		return findRecursivelyHelper(val, this.root);
	}

	/** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

	// pre-order: myself, left, right

	dfsPreOrder() {
		if (!this.root) return;

		let visited = [];
		let current = this.root;

		function dfsPreOrderHelper(node) {
			visited.push(node.val);
			if (node.left) dfsPreOrderHelper(node.left);
			if (node.right) dfsPreOrderHelper(node.right);
		}

		dfsPreOrderHelper(current);
		return visited;
	}

	/** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

	// in-order: left, myself, right

	dfsInOrder() {
		if (!this.root) return;

		let visited = [];
		let current = this.root;

		function dfsInOrderHelper(node) {
			if (node.left) dfsInOrderHelper(node.left);
			visited.push(node.val);
			if (node.right) dfsInOrderHelper(node.right);
		}

		dfsInOrderHelper(current);
		return visited;
	}

	/** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

	// post-order: left, right, myself

	dfsPostOrder() {
		if (!this.root) return;

		let visited = [];
		let current = this.root;

		function dfsPostOrderHelper(node) {
			if (node.left) dfsPostOrderHelper(node.left);
			if (node.right) dfsPostOrderHelper(node.right);
			visited.push(node.val);
		}

		dfsPostOrderHelper(current);
		return visited;
	}

	/** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

	bfs() {
		if (!this.root) return;

		let toVisitQueue = [];
		let result = [];
		let current = this.root;

		toVisitQueue.push(current);

		while (toVisitQueue.length) {
			current = toVisitQueue.shift();
			result.push(current.val);
			if (current.left) toVisitQueue.push(current.left);
			if (current.right) toVisitQueue.push(current.right);
		}

		return result;
	}

	/** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

	remove(val) {}

	/** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

	isBalanced() {}

	/** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

	findSecondHighest() {}
}

module.exports = BinarySearchTree;
