//constructor have to have args of type 'any[]'
type Constructor<T> = new (...args: any[]) => T;

export function Dumpable<T extends Constructor<{
    getObject(): object;
}>>(Base: T) {
    return class Dumpable extends Base {
        dump() {
            console.log(this.getObject())
        }
    }
}