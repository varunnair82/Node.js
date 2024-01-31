//singleton.js

class Singleton {
    constructor() {
        this.createdAt = new Date();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Singleton();
        }        
        return this.instance;
    }
}

module.exports = Singleton;