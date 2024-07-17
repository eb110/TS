//get two objects and return a new object with props that both objects share (attach value from the first one)

export function intersect<T extends Object, U extends Object>(first: T, second: U): T & U {
    let result = <T & U>{};
    var fp = Object.keys(first)
    var sp = Object.keys(second)
    fp.forEach(p => {
        if(sp.includes(p))
        (<any>result)[p] = (<any>first)[p]
    })
    return result;
}