# Basic Table Queries:
### Creating a Table:
#### Syntax:
``` syntax
CREATE TABLE _table_name_(_column_name_ _datatype_);
```
#### Example:
``` syntax
CREATE TABLE studentlist (id int);
```
***

### Altering/Editng a Table (Editing Columns and Constrains):
#### Syntax:
``` syntax
ALTER TABLE _table_name_ _options_;
```
#### Example:
``` syntax
ALTER TABLE studentlist add column address varchar(50) not null;
```
***

#### Adding new Columns to a table:
#### Syntax:
``` syntax
ALTER TABLE _table_name_ ADD COLUMN  _column_name_ _datatype_;
```
#### Example:
``` syntax
ALTER TABLE studentlist add column address varchar(50) not null;
```
***

#### Modifying Existing columns in a table:
#### Syntax:
``` syntax
ALTER TABLE _table_name_ MODIFY _column_name_ _new_datatype_);
```
#### Example:
``` syntax
ALTER TABLE studentlist MODIFY age int;
```
***

#### Renaming Columns in table:
#### Syntax:
``` syntax
ALTER TABLE _table_name_ RENAME COLUMN old_column_name TO new_column_name;
```
#### Example:
``` syntax
ALTER TABLE studentlist RENAME COLUMN phone_number TO mobile;
```
***

#### Droping (deleting) a Column in a Table:
#### Syntax:
``` syntax
ALTER TABLE _table_name_ DROP _column_name_ ;
```
#### Example:
``` syntax
ALTER TABLE studentlist DROP marks;
```
***

### Renaming Tables:
#### Syntax:
``` syntax
ALTER TABLE <table-name> RENAME <old-table-name> TO <new-table-name>;
```
#### Example:
``` sytnax
ALTER TABLE studentlist RENAME studentlist TO studentDetails;
```
***

### Deleting (Droping) a Table:
#### Syntax :
``` syntax
DROP TABLE <table-name>;
```
#### Example:
``` syntax
DROP TABLE studentDetails;
```
***

### Emptying Data in a Table(TRUNCATE-ing):
#### Syntax :
``` syntax
TRUNCATE TABLE <table-name>;
```
#### Example:
``` syntax
TRUNCATE TABLE studentDetails;
```
***
