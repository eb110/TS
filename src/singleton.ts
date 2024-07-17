export class SingletonCounter {
    private static _instance: SingletonCounter;
    private count = 0;
    private constructor(){}
    public static getInstance():SingletonCounter{
          return SingletonCounter._instance || (SingletonCounter._instance = new SingletonCounter());
      };
    
    public inc(){
     return ++this.count;
    }
  }