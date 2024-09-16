const mysqlx = require('@mysql/xdevapi');

mysqlx.getSession({
  user: 'root',
  password: 'password',
  host: 'localhost',
  port: 33060 // Default port for MySQL X Protocol
})
.then(session => {
  const schema = session.getSchema('world');
  const table = schema.getTable('city');

  return table.select()
              .execute()
              .then(rows => {
                console.log(rows.fetchAll());
              });
})
.catch(err => {
  console.error('Error:', err);
});
