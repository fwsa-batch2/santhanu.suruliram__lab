# Basic Database Queries:
### Listing Databases:
``` syntax
SHOW DATABASES;
```
#### Output:
| Database           |
|:-----|
| information_schema |
| mysql              |
| performance_schema |
| san                |
| sys                |
***

### Creating a Database :
``` syntax
CREATE DATABASE;
```
***

### Deleting a Database:
``` syntax
DROP DATABASE *DATABASE_NAME*
```
***

### Granting Access to the Users:
#### Syntax:
``` syntax
GRANT <database-name> TO <username>@<localhost>;
```
#### Example;
``` sytnax
GRANT myapp TO sanboi@localhost;
```
***
### Granting All Permissions to the User:
#### Syntax:
``` syntax
GRANT ALL PRIVILEGES ON <database-name> * TO <username>@<localhost>;
```
#### Example:
``` syntax
 GRANT ALL PRIVILEGES ON myapp * TO sanboi@localhost;
```
***

### Revoking (Removing) Permission for a User:
#### Example:
``` syntax
REVOKE SELECT ON *.* FROM sanboi@localhost;
```
***
