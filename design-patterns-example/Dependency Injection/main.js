// Using Dependency Injection

const DatabaseService = require("./databaseservice");
const MySQLDatabaseConnection = require("./mySQLDatabaseConnection");
const PostgreSQLDatabaseConnection = require("./postgreSQLDatabaseConnection");

const mySQLDatabaseConnection = new MySQLDatabaseConnection();
const postgreSQLDatabaseConnection = new PostgreSQLDatabaseConnection();

const databaseServiceMySQL = new DatabaseService(mySQLDatabaseConnection);
const databaseServicePostgres =  new DatabaseService(postgreSQLDatabaseConnection);


databaseServiceMySQL.query('SELEC * FROM users');
databaseServicePostgres.query('SELECT * FROM products');