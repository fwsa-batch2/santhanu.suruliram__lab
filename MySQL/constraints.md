# Constraints in MySQL:

## Types of Constraints:
#### NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK .
***

### "NOT NULL" Constraint:
#### Syntax:
``` syntax
ALTER TABLE <table-name> ADD COLUMN <column-name> <datatype> NOT NULL;
```
#### Example:
``` syntax
ALTER TABLE studentlist ADD COLUMN name varchar(20) NOT NULL;
```
***

### "UNIQUE" Constraint:
#### Syntax:
``` syntax
ALTER TABLE <table-name> ADD COLUMN <column-name> <datatype> UNIQUE;
```
#### Example:
``` syntax
ALTER TABLE studentlist ADD COLUMN phone-number int UNIQUE;
```
***

### "PRIMARY KEY" Constraint:
#### Syntax:
``` syntax
ALTER TABLE <table-name> ADD COLUMN <column-name> <datatype> PRIMARY KEY;
```
#### Example:
``` syntax
ALTER TABLE studentlist ADD COLUMN id int PRIMARY KEY;
```
***

### "FOREIGN KEY" Constraint:
#### Syntax:
``` syntax
ALTER TABLE <table-name> ADD COLUMN <column-name> <datatype> FOREIGN KEY (<column-name>) REFERENCES <table-name>(<foreign-column-name>);
```
#### Example:
``` syntax
ALTER TABLE studentlist ADD COLUMN name varchar(20) FOREIGN KEY (name) REFERENCES marklist(stud_name);
```
***

### "CHECK" Constraint:
#### Syntax:
``` syntax
ALTER TABLE <table-name> ADD COLUMN <column-name> <datatype> CHECK(<column-name> <comparitive-operator> <value>);
```
#### Example:
``` syntax
ALTER TABLE studentlist ADD COLUMN age int CHECK(age > 18);
```
***
