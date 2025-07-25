var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM studentdata", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });