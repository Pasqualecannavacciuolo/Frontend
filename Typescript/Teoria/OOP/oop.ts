interface IUser {
    username: string;
    password: string;
    email: string;
    enabled?: boolean; // Opzionale
}

interface IThread {
    start(): void;
}

interface IRunnable extends IThread{
    run(): IUser;
}

abstract class IRunner {
    name: string;

    constructor(name: string){
        this.name = name;
        //this.print()
        //this.set()
    }

    abstract print();
    abstract set();
}

class IRunnerImp extends IRunner {
    name: string;

    constructor(name: string) {
        super(name);
    }

    print() {
        throw new Error("Method not implemented.");
    }
    set() {
        throw new Error("Method not implemented.");
    }
}

interface IPrinterOut<U, V, T, S extends IRunnable> {
    print(param: U, param1: V): void;
    start(param: U, param1?: V, param2?: T): S;
}

class PrinterOut implements IPrinterOut<Object,{},number,IRunnable> {
    print(param: Object, param1: {}): void {
        throw new Error("Method not implemented.");
    }
    start(param: Object, param1?: {}, param2?: number): IRunnable {
        throw new Error("Method not implemented.");
    }
} 

type Obj = IUser; // E' un'alias

declare const globalVar;