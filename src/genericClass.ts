const CreateSimpleMemoryDatabase = <T>() => {
    return class SimpleMemoryDatabase {
        private db: Record<string, T> = {};

        set(id: string, value: T){
            this.db[id] = value;
        }
        get(id: string): T{
            return this.db[id];
        }
        getObject(): object{
            return this.db;
        }
    }
}