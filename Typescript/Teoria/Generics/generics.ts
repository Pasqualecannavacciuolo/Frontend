interface IRunnable3<T,U> {}

interface IRunnable2<T,U> {
    run<T>(runnable: T);
    runSafe<T extends IRunnable2<T,U>>();
}

let runnable:IRunnable2<string, string>;

runnable.runSafe<IRunnable2<string, string>>();