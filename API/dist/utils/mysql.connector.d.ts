/**
 * generates pool connection to be used throughout the app
 */
export declare const init: () => void;
/**
 * executes SQL queries in MySQL db
 *
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query
 */
export declare const execute: <T>(query: string, params: string[] | Object) => Promise<T>;
//# sourceMappingURL=mysql.connector.d.ts.map