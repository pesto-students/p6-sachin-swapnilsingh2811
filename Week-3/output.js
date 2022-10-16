function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message='Count is ${ count }';
    function log() {
        console.log(message);
    }
    return[increment,log];
}
    
    const[increment,log] =createIncrement();
    increment();
    increment();
    increment();
    log();// What is logged?

    // output=> Count is 0//
    //cause we are not updating the message only is count getting incremented //