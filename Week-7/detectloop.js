    let head;
    class Node{
        constructor(data){
            this.value=data;
            this.next=null;
        }
    }
    function detectLoop(h) {
        var s = new Set();
        while (h != null) {
           
            if (s.has(h))
                return true;
 
           
            s.add(h);
 
            h = h.next;
        }
 
        return false;
    }
    head=new Node(2);
    head.next=new Node(4);
    head.next.next=new Node(7);
    head.next.next.next=new Node(8);
    head.next.next.next.next=new Node(9);
    head.next.next.next.next.next=head.next;
   //head.value=1;
    //console.log(head.next.next.next.next);
   let loop=detectLoop(head);
   if(loop){
       console.log(loop);
   }else{
       console.log(loop);
   }