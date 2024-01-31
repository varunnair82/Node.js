// Dependency to be injected (e.g., a database connection)
class MySQLDatabaseConnection {
    constructor() {
        this.type = 'MySQL Database';
    }

    connect() {
        console.log('Connected to MySQL databas');
    }
}

module.exports = MySQLDatabaseConnection;