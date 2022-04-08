// Declaring an Enumerator
enum LEVEL{
    INFO,
    WARN,
    ERROR
}

class Logger {
    name: string;
    level: LEVEL; // Enumerations

    // Constructor
    constructor(name: string, level: LEVEL) {
        this.name = name;
        this.level = level;
    }
}