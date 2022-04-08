interface IRecords {
    id: string;
    name: string;
    age?: number;
    description: string;
}

interface IRecordsOperation<Z> {
    loadRecord(): Z;
}

class RecordsImpl implements IRecordsOperation<IRecords> {

    loadRecord(): IRecords {
        throw new Error("Method not implemented.");
    }
    
}