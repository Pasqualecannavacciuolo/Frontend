// Declaring an Enumerator
enum LEVEL{
    INFO,
    WARN,
    ERROR
}

class Logger {
    private name: string;
    private level: LEVEL; // Enumerations

    // Constructor
    constructor(name: string, level: LEVEL) {
        this.name = name;
        this.level = level;
    }

    // Getter methods
    public getName(): string {
        return this.name;
    }

    public getLevel(): LEVEL {
        return this.level;
    }

    // Setter methods 
    public setName(name : string): void {
        this.name = name;
    }

    public setLevel(level : LEVEL): void {
        this.level = level;
    }
    
}