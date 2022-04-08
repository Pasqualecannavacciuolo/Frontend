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