//Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,where k is a given positive integer smaller than or equal to length of the linked list.



let head; // head of list

	/* Linked list Node */
	class Node {
		constructor(val) {
			this.value = val;
			this.next = null;
		}
	}

//This function rotates the linked list in clockwise direction or for left shifting.
	function rotate(k) {
		let i;
		let current = head;
		let count = 1;
		if (k == 0)
			return;


		while (count < k && current != null) {
			current = current.next;
			count++;
		}

		
		if (current == null)
			return;

	
		 i = current;

		
		while (current.next != null)
			current = current.next;

		

		current.next = head;

		head = i.next;

		i.next = null;
	}





	function printList() {
let temp = head;
		while (temp != null) {
			console.log(temp.value + " ");
			temp = temp.next;
		}
		
	}


		
		
    head=new Node(2);
    head.next=new Node(4);
    head.next.next=new Node(7);
    head.next.next.next=new Node(8);
    head.next.next.next.next=new Node(9);

		

    rotate(4);

		
    printList();





