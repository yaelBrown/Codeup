##Prepared Statements

### Definition

Prepared statements are a way to precompile SQL queries.
Prepared statements offer three main advantages:

1. Security - binding values protects against SQL injection
2. Performance - query caching is possible 
3. Convenience - quotes and other punctuation does not need to be escaped


### Using a Prepared Statement

1. Create sql query string with `?` placeholders for any values
1. Create PreparedStatement object with the connection object method ```prepareStatement()```
1. Bind all values
1. Execute query with preferred method

Example...

```
String query = "SELECT * FROM fads WHERE id = ?";
PreparedStatement ps = conn.prepareStatement(query);
ps.setLong(1, 5);
ResultSet rs = ps.executeQuery();
// rs.next() in a loop may be now used to retrieve any number of fad records
```

### Executing a Prepared Statement

Once a statement has been prepared, use one of following methods:

- .executeQuery() - for selects (returns ResultSet object)
- .executeUpdate() - for inserts, updates, deletes (returns number of rows effected)

  ALTERNATIVELY

- .execute() for all prepared queries
  - if .execute() returns true, use .getResultSet() to retrieve the ResultSet object 
  - if .execute() returns false, use .getUpdateCount() to get the number of rows effected

### Getting Generated Key from Insert

When inserting a record, use the syntax from slide 5 and on the PreparedStatement object, use the .getGeneratedKeys() on the PreparedStatement object after executing the query. This returns a ResultSet of the ids created in your database (just one if you only inserted a single record).

To get the generated key/id from the database, use the following syntax:

```
ResultSet rs = ps.getGeneratedKeys(); (where ps is the PreparedStatement object)
rs.next();
long (or int) lastInsertedId = rs.getInt(1);  
```




