// Another Dependency
class PostgreSQLDatabaseConnection{
    constructor() {
        this.type ='PostgreSQL Database';
    }

    connect() {
        console.log('Connected to PostgreSQL database');
    }
}

module.exports = PostgreSQLDatabaseConnection;