# Indexes in MySQL:
### Clustered Index:
###### Clustered Index are created by creating a Primary key in the Column>
#### Syntax:
``` syntax
CREATE TABLE <table-name> (<column-name> <datatype> PRIMARY KEY);
```
#### Example:
``` syntax
CREATE TABLE studentlist (stud_id int PRIMARY KEY);
```
***

### Non-Clustered Index:
#### Syntax:
``` syntax
CREATE INDEX <index-name> ON <table-name> (<column-name>);
```
#### Example:
``` syntax
CREATE INDEX nc_ix_name ON studentlist(name);
```
***

### Unique Index:
#### Syntax:
``` sytnax
CREATE UNIQUE INDEX <index-name> ON <table-name>(<column-name>);
```
#### Example:
``` syntax
CREATE UNIQUE INDEX un_ix_name ON studentlist(name);
```
***
