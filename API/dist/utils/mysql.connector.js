"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = exports.init = void 0;
var mysql_1 = require("mysql");
var db_config_1 = require("../configs/db.config");
var dataSource = db_config_1.DATA_SOURCES.mySqlDataSource;
var pool;
/**
 * generates pool connection to be used throughout the app
 */
var init = function () {
    try {
        pool = (0, mysql_1.createPool)({
            connectionLimit: dataSource.DB_CONNECTION_LIMIT,
            host: dataSource.DB_HOST,
            user: dataSource.DB_USER,
            password: dataSource.DB_PASSWORD,
            database: dataSource.DB_DATABASE,
        });
        console.debug('MySql Adapter Pool generated successfully');
    }
    catch (error) {
        console.error('[mysql.connector][init][Error]: ', error);
        throw new Error('failed to initialized pool');
    }
};
exports.init = init;
/**
 * executes SQL queries in MySQL db
 *
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query
 */
var execute = function (query, params) {
    try {
        if (!pool)
            throw new Error('Pool was not created. Ensure pool is created when running the app.');
        return new Promise(function (resolve, reject) {
            pool.query(query, params, function (error, results) {
                if (error)
                    reject(error);
                else
                    resolve(results);
            });
        });
    }
    catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed to execute MySQL query');
    }
};
exports.execute = execute;
//# sourceMappingURL=mysql.connector.js.map