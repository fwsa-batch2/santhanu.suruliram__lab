# Getting Values/Data from a table:

### SELECT Query:
#### Syntax:
``` sytnax
SELECT column1, column2, ...
FROM table_name;
```
#### Example:
``` syntax
SELECT id, name, age
FROM studentlist;
```
***

### Order-by Query:
#### Syntax:
``` syntax
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```
#### Example:
``` syntax
SELECT name
FROM studentlist
ORDER BY name ASC;
```
***

### Group-by Query:
#### Syntax:
``` syntax
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s);
```
#### Example:
``` syntax
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;
```
***

### Having Query:
#### Syntax:
``` syntax
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition;
```
#### Example:
``` syntax
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;
```
***
