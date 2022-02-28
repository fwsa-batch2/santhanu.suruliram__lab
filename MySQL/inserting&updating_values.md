# Inserting & Updating Values in MySQL Tables:

### Inserting Rows:
### Inserting Row values without selecting Columns
###### Warning : No. of values must match the No. of Columns.
#### Syntax:
``` syntax
INSERT INTO <table-name> VALUES(<value1>, <value2>, <value3>);
```
#### Example:
``` syntax
INSERT INTO studentlist VALUES(3, "SanBoi", 19);
```
***
### Inserting Row Values By selecting Columns:
###### The Selected Columns are filled with the respective values:
#### Syntax:
``` syntax
INSERT INTO <table-name> (<column1>, <column2>, <column3>) VALUES(<value1>, <value2>, <value3>);
```
#### Example:
``` syntax
INSERT INTO studentlist (id, name, age) VALUES(3, "SanBoi", 19);
```
***

### Updating Values in a Row:
###### It is used to Update some Specific Value in a Row.
#### Syntax
``` syntax
UPDATE <table-name> 
SET <column-name> = <value>
WHERE <condition>;
```
#### Example:
``` syntax
UPDATE  studentlist
SET age = 20
WHERE id = 3;
```
***

### Deleting a Row:
#### Syntax
``` syntax
DELETE FROM <table-name> WHERE <condition>;
```
#### Example:
``` syntax
DELETE FROM studentDetails WHERE id = 7;
```
***
