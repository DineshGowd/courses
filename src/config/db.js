import mysql from 'mysql2';

//  create the connection to database
export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'BLOG'
});

export async function find(resultCall) {
  connection.query(
    'SELECT * FROM `BLOG`',
    function (err, results, fields) {
      return resultCall(results);
    }
  );
}

