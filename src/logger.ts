export const createLoggerClass = () => {
    return class MyLoggerClass {
        private completeLog: string = "dupa";
        log(str: string){
            console.log('str: ' + str);
            this.completeLog += str + '\n';
        }
        dumpLog(){
            return this.completeLog;
        }
    }
}