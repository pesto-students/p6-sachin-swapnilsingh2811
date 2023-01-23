function memoize(fn){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        console.log(cache);
        if(cache.has(key)){
            return cache.get(key);
        }
        cache.set(key,fn(...args));
        return cache.get(key);
    };
}

function add(a,b){
    return a+b;
}
function time(fn){
    console.time();
    fn();
    console.timeEnd();
}

const sum = memoize(add);

time(() => sum(1,2));
time(() => sum(1,2));
time(() => sum(3,4));
time(() => sum(3,4));
time(() => sum(9,9));
time(() => sum(9,9));
time(() => sum(1,2));
time(() => sum(3,3));