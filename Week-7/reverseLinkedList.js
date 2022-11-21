/*Given a linked list of N nodes. The task is to reverse this list.
Input:LinkedList: 2->7->8->9->10
Output: 10 9 8 7 2
Explanation: After reversing the list,
elements are 10->9->8->7->2.*/

let head;
class Node{
    constructor(value){
        this.data=value;
        this.next=null;
    }
    
}
 /* Function to reverse the linked list */
function reverse(val){
    let current=val;
    let next=null;
    let prev=null;
    if(current==null){
    return current;
    }else{
        while(current !=null){
            next=current.next;
            current.next=prev;
            prev=current;
            current=next;
        }
        val=prev;
        return prev;
    }
}
//prints content of  linked list
function printLinkedList(val2){
    while(val2!=null){
        console.log(val2.data);
        val2=val2.next;
    }
}
head=new Node(2);
head.next=new Node(7);
head.next.next=new Node(8);
head.next.next.next=new Node(9);
head.next.next.next.next=new Node(10);

head=reverse(head);
printLinkedList(head);


