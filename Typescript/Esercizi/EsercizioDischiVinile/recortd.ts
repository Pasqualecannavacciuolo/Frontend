interface IRecords {
    id: string;
    name: string;
    age?: number;
    description: string;
}

interface IRecordsOperation<Z> {
    loadRecord(): Z;
    printData<Z>(): void;
}

class RecordsImpl implements IRecordsOperation<IRecords> {
    
    record: IRecords;
    constructor({ id, name, age, description }: IRecords) {
        this.record.id = id;
        this.record.name = name;
        this.record.age = age;
        this.record.description = description;
    }
    
    printData<IRecords>(): void {
        throw new Error("Method not implemented.");
    }

    loadRecord(): IRecords {
        throw new Error("Method not implemented.");
    }

}