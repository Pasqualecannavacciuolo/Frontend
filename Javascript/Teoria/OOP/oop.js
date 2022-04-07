export default class Logger extends Object {
    name = new String();
    data = new Date();

    // Potremmo ometterlo esiste di default
    constructor() {}

    /**
     * 
     * @param {*} name 
     * @param {*} data 
     */
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }

    // Getter & Setter
    getData() { return this.data }
    setData(data) { this.data = data }

    getName() { return this.name }
    setName(name) { this.name = name }


    setup(...options) {
        [...options].forEach(o => {
            // Make something

        });
    }

    /**
     * 
     * @param {*} message 
     */
    info(message) { console.info(message) }


    /**
     * 
     * @param {*} message 
     */
    debug(message) { console.debug(message) }


    /**
     * 
     * @param {*} message 
     */
    inwarnfo(message) { console.warn(message) }


    /**
     * 
     * @param {*} message 
     */
    error(message) { console.error(message) }
}

const L = new Logger();
L.data = new Date('2022', '04', '06');
L.info(L.data.getDate);