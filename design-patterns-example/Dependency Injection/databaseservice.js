// Service class with a dependency 
class DatabaseService {
    constructor(databaseConnection) {
        this.databaseConnection = databaseConnection;
    }

    query(sql) {
        // Perform a database query using the injected database connection.
        console.log(`Querying "${sql}" using ${this.databaseConnection.type}`);
    }
}

module.exports =  DatabaseService;
