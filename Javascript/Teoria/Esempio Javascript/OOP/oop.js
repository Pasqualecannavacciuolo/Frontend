export default class Logger {
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