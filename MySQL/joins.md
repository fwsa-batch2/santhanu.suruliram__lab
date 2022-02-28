# Joins in MySQL:

### Inner Join:
#### Syntax:
``` syntax
SELECT column_name(s)
FROM tableA
INNER JOIN tableB ON tableA.column = tableB.column;
```
#### Example:
``` syntax
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```
***

### Left Join:
#### Syntax:
``` syntax
SELECT column_name(s)
FROM tableA
LEFT JOIN tableB
ON tableA.column = tableB.column;
```
#### Example:
``` syntax
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID
ORDER BY Customers.CustomerName;
```
***

### Right Join:
#### Syntax:
``` syntax
SELECT column_name(s)
FROM tableA
RIGHT JOIN tableB
ON tableA.column = tableB.column;
```
#### Example:
``` syntax
SELECT Orders.OrderID, Employees.LastName, Employees.FirstName
FROM Orders
RIGHT JOIN Employees ON Orders.EmployeeID = Employees.EmployeeID
ORDER BY Orders.OrderID;
```
***

### Full Join:
#### Syntax:
``` syntax
SELECT column_name(s)
FROM tableA
FULL OUTER JOIN tableB
ON tableA.column = tableB.column
WHERE condition;
```
#### Example:
``` syntax
SELECT Customers.CustomerName, Orders.OrderID
FROM Customers
FULL OUTER JOIN Orders ON Customers.CustomerID=Orders.CustomerID
ORDER BY Customers.CustomerName;
```
***

### Self Join:
#### Syntax:
``` syntax
SELECT column_name(s)
FROM table1A, tableB
WHERE condition;
```
#### Example:
``` syntax
SELECT A.CustomerName AS CustomerName1, B.CustomerName AS CustomerName2, A.City
FROM Customers A, Customers B
WHERE A.CustomerID <> B.CustomerID
AND A.City = B.City
ORDER BY A.City;
```
***
