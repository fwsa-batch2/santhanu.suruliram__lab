# MySQL Excercise:
``` syntax
mysql> desc students;
+----------+--------------+------+-----+---------+----------------+
| Field    | Type         | Null | Key | Default | Extra          |
+----------+--------------+------+-----+---------+----------------+
| id       | int          | NO   | PRI | NULL    | auto_increment |
| name     | varchar(100) | NO   |     | NULL    |                |
| email    | varchar(100) | NO   |     | NULL    |                |
| mobile   | bigint       | NO   |     | NULL    |                |
| password | varchar(100) | NO   |     | NULL    |                |
| gender   | char(1)      | NO   |     | NULL    |                |
| dob      | date         | NO   |     | NULL    |                |
+----------+--------------+------+-----+---------+----------------+

mysql> desc student_class;
+------------+-------------+------+-----+---------+----------------+
| Field      | Type        | Null | Key | Default | Extra          |
+------------+-------------+------+-----+---------+----------------+
| id         | int         | NO   | PRI | NULL    | auto_increment |
| student_id | int         | NO   | MUL | NULL    |                |
| class      | int         | NO   |     | NULL    |                |
| status     | varchar(20) | NO   |     | NULL    |                |
+------------+-------------+------+-----+---------+----------------+
```
## Feature 1:
### Student Registration:
``` syntax
mysql> insert into students values(11, 'Selvaraj', 'selvaraj.rajendran@fwsa.freshworks.com', 6538469387, 'freshworks2022', 'm', 0000-00-00);
Query OK, 1 row affected (0.01 sec)
```
## Feature 2:
### List all students:
``` syntax
mysql> select * from students;
+----+----------------+-----------------------------------------+------------+----------------+--------+------------+
| id | name           | email                                   | mobile     | password       | gender | dob        |
+----+----------------+-----------------------------------------+------------+----------------+--------+------------+
|  1 | Abisha         | abisha.antony@fwsa.freshworks.com       | 6379481526 | freshworks2022 | f      | 0000-00-00 |
|  2 | Annamalai      | annamalai.shanmugam@fwsa.freshworks.com | 7695883749 | freshworks2022 | m      | NULL       |
|  3 | Aswath         | aswath.kaja@fwsa.freshworks.com         | 7449050819 | freshworks2022 | m      | 0000-00-00 |
|  4 | Haiden         | haiden.arulappan@fwsa.freshworks.com    | 7305499497 | freshworks2022 | m      | NULL       |
|  5 | Jerusheya      | jerusheya.johnson@fwsa.freshworks.com   | 9363232559 | freshworks2022 | f      | 0000-00-00 |
|  6 | Rishi          | rishi.atgondan@fwsa.freshworks.com      | 6381950080 | freshworks2022 | m      | 0000-00-00 |
|  7 | Santhanu       | santhanu.suruliram@fwsa.freshworks.com  | 8870522547 | freshworks2022 | m      | 0000-00-00 |
|  8 | Saranya        | saranya.subbiah@fwsa.freshworks.com     | 7538802252 | freshworks2022 | f      | 0000-00-00 |
|  9 | Swetha         | swetha.saravanan@fwsa.freshworks.com    | 9025336748 | freshworks2022 | f      | 0000-00-00 |
| 10 | Mohammed Riyas | mohammed.riyas@fwsa.freshworks.com      | 8248966539 | freshworks2022 | m      | 0000-00-00 |
| 11 | Selvaraj       | selvaraj.rajendran@fwsa.freshworks.com  | 6538469387 | freshworks2022 | m      | 0000-00-00 |
+----+----------------+-----------------------------------------+------------+----------------+--------+------------+
```

## Feature 3:
### Login with Email and Password:
``` syntax
mysql> select email, password from students where id = 7;
+----------------------------------------+----------------+
| email                                  | password       |
+----------------------------------------+----------------+
| santhanu.suruliram@fwsa.freshworks.com | freshworks2022 |
+----------------------------------------+----------------+
```

## Feature 4:
### Update password:
``` syntax
mysql> update students
    -> set password = 'sanboi236'
    -> where id = 7;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from students where id = 7;
+----+----------+----------------------------------------+------------+-----------+--------+------------+
| id | name     | email                                  | mobile     | password  | gender | dob        |
+----+----------+----------------------------------------+------------+-----------+--------+------------+
|  7 | Santhanu | santhanu.suruliram@fwsa.freshworks.com | 8870522547 | sanboi236 | m      | 0000-00-00 |
+----+----------+----------------------------------------+------------+-----------+--------+------------+
```

## Feature 5:
### Enroll Student into Class:
``` syntax
mysql> insert into student_class
    -> values(11, 11, 5, 'ACTIVE');
Query OK, 1 row affected (0.01 sec)

mysql> select * from student_class;
+----+------------+-------+--------+
| id | student_id | class | status |
+----+------------+-------+--------+
|  1 |          1 |    12 | ACTIVE |
|  2 |          2 |    12 | ACTIVE |
|  3 |          3 |    12 | ACTIVE |
|  4 |          4 |    12 | ACTIVE |
|  5 |          5 |    12 | ACTIVE |
|  6 |          6 |    12 | ACTIVE |
|  7 |          7 |    12 | ACTIVE |
|  8 |          8 |    12 | ACTIVE |
|  9 |          9 |    12 | ACTIVE |
| 10 |         10 |    12 | ACTIVE |
| 11 |         11 |     5 | ACTIVE |
+----+------------+-------+--------+
```
## Feature 6:
###  Find Students who are studying in 5th standard.
``` syntax
mysql> select * from student_class where class = 5;
+----+------------+-------+--------+
| id | student_id | class | status |
+----+------------+-------+--------+
| 11 |         11 |     5 | ACTIVE |
+----+------------+-------+--------+
```

## Feature 7:
###  Update Student Class information #
#### Update student from 5th standard to 6th standard.
``` syntax
mysql> update student_class
    -> set class = 6
    -> where id = 11;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> select * from student_class;
+----+------------+-------+--------+
| id | student_id | class | status |
+----+------------+-------+--------+
|  1 |          1 |    12 | ACTIVE |
|  2 |          2 |    12 | ACTIVE |
|  3 |          3 |    12 | ACTIVE |
|  4 |          4 |    12 | ACTIVE |
|  5 |          5 |    12 | ACTIVE |
|  6 |          6 |    12 | ACTIVE |
|  7 |          7 |    12 | ACTIVE |
|  8 |          8 |    12 | ACTIVE |
|  9 |          9 |    12 | ACTIVE |
| 10 |         10 |    12 | ACTIVE |
| 11 |         11 |     6 | ACTIVE |
+----+------------+-------+--------+
```

## Feature 8:
### Student withdrawn from a Class:
``` syntax
mysql> delete from student_class
    -> where id = 11;
Query OK, 1 row affected (0.01 sec)

mysql> select * from student_class;
+----+------------+-------+--------+
| id | student_id | class | status |
+----+------------+-------+--------+
|  1 |          1 |    12 | ACTIVE |
|  2 |          2 |    12 | ACTIVE |
|  3 |          3 |    12 | ACTIVE |
|  4 |          4 |    12 | ACTIVE |
|  5 |          5 |    12 | ACTIVE |
|  6 |          6 |    12 | ACTIVE |
|  7 |          7 |    12 | ACTIVE |
|  8 |          8 |    12 | ACTIVE |
|  9 |          9 |    12 | ACTIVE |
| 10 |         10 |    12 | ACTIVE |
+----+------------+-------+--------+
```

## Feature 9:
### Find student details who have not updated their Date Of Birth #
``` syntax
mysql> select * from students where dob is NULL;
+----+-----------+-----------------------------------------+------------+----------------+--------+------+
| id | name      | email                                   | mobile     | password       | gender | dob  |
+----+-----------+-----------------------------------------+------------+----------------+--------+------+
|  2 | Annamalai | annamalai.shanmugam@fwsa.freshworks.com | 7695883749 | freshworks2022 | m      | NULL |
|  4 | Haiden    | haiden.arulappan@fwsa.freshworks.com    | 7305499497 | freshworks2022 | m      | NULL |
+----+-----------+-----------------------------------------+------------+----------------+--------+------+
```

## Feature 10:
### Find Total no of students actively studying in this school
``` syntax
mysql> select * from student_class where status = 'INACTIVE';
+----+------------+-------+----------+
| id | student_id | class | status   |
+----+------------+-------+----------+
|  7 |          7 |    12 | INACTIVE |
| 10 |         10 |    12 | INACTIVE |
+----+------------+-------+----------+
```

## Feature 11:
### Find Total no of students actively studying in each class:
``` syntax
mysql> select count(student_id) from student_class where status = 'INACTIVE';
+-------------------+
| count(student_id) |
+-------------------+
|                 2 |
+-------------------+
```

## Feature 12:
### Find Total no of students actively studying each class which has less than 5 students:
``` syntax
mysql> select count(id) from student_class where status = 'ACTIVE' group by class having count(class) < 5;
+-----------+
| count(id) |
+-----------+
|         4 |
|         4 |
+-----------+
```

## Feature 13:
### Display student and class details # Using Joins (Inner Join):
``` syntax
mysql> select students.id,students.name, students.email,students.mobile, students.password,students.gender,students.dob, student_class.student_id, student_class.class, student_class.status
    -> from students
    -> inner join student_class
    -> on students.id = student_class.id;
+----+----------------+-----------------------------------------+------------+----------------+--------+------------+------------+-------+----------+
| id | name           | email                                   | mobile     | password       | gender | dob        | student_id | class | status   |
+----+----------------+-----------------------------------------+------------+----------------+--------+------------+------------+-------+----------+
|  1 | Abisha         | abisha.antony@fwsa.freshworks.com       | 6379481526 | freshworks2022 | f      | 0000-00-00 |          1 |    12 | ACTIVE   |
|  2 | Annamalai      | annamalai.shanmugam@fwsa.freshworks.com | 7695883749 | freshworks2022 | m      | NULL       |          2 |    12 | ACTIVE   |
|  3 | Aswath         | aswath.kaja@fwsa.freshworks.com         | 7449050819 | freshworks2022 | m      | 0000-00-00 |          3 |    10 | ACTIVE   |
|  4 | Haiden         | haiden.arulappan@fwsa.freshworks.com    | 7305499497 | freshworks2022 | m      | NULL       |          4 |    10 | ACTIVE   |
|  5 | Jerusheya      | jerusheya.johnson@fwsa.freshworks.com   | 9363232559 | freshworks2022 | f      | 0000-00-00 |          5 |    10 | ACTIVE   |
|  6 | Rishi          | rishi.atgondan@fwsa.freshworks.com      | 6381950080 | freshworks2022 | m      | 0000-00-00 |          6 |    10 | ACTIVE   |
|  7 | Santhanu       | santhanu.suruliram@fwsa.freshworks.com  | 8870522547 | sanboi236      | m      | 0000-00-00 |          7 |    12 | INACTIVE |
|  8 | Saranya        | saranya.subbiah@fwsa.freshworks.com     | 7538802252 | freshworks2022 | f      | 0000-00-00 |          8 |    12 | ACTIVE   |
|  9 | Swetha         | swetha.saravanan@fwsa.freshworks.com    | 9025336748 | freshworks2022 | f      | 0000-00-00 |          9 |    12 | ACTIVE   |
| 10 | Mohammed Riyas | mohammed.riyas@fwsa.freshworks.com      | 8248966539 | freshworks2022 | m      | 0000-00-00 |         10 |    12 | INACTIVE |
+----+----------------+-----------------------------------------+------------+----------------+--------+------------+------------+-------+----------+
```
## Feature 14:
### Display Student Details for the given input class # Class : 10th Standard
``` syntax
mysql> select students.id,students.name, students.email,students.mobile, students.password,students.gender,students.dob, student_class.student_id, student_class.class, student_class.status
    -> from students
    -> inner join student_class
    -> on students.id = student_class.id
    -> where student_class.class = 10;
+----+-----------+---------------------------------------+------------+----------------+--------+------------+------------+-------+--------+
| id | name      | email                                 | mobile     | password       | gender | dob        | student_id | class | status |
+----+-----------+---------------------------------------+------------+----------------+--------+------------+------------+-------+--------+
|  3 | Aswath    | aswath.kaja@fwsa.freshworks.com       | 7449050819 | freshworks2022 | m      | 0000-00-00 |          3 |    10 | ACTIVE |
|  4 | Haiden    | haiden.arulappan@fwsa.freshworks.com  | 7305499497 | freshworks2022 | m      | NULL       |          4 |    10 | ACTIVE |
|  5 | Jerusheya | jerusheya.johnson@fwsa.freshworks.com | 9363232559 | freshworks2022 | f      | 0000-00-00 |          5 |    10 | ACTIVE |
|  6 | Rishi     | rishi.atgondan@fwsa.freshworks.com    | 6381950080 | freshworks2022 | m      | 0000-00-00 |          6 |    10 | ACTIVE |
+----+-----------+---------------------------------------+------------+----------------+--------+------------+------------+-------+--------+
```

## Feature 15:
### Find Class for the given student email id # Email: n@fwsa.freshworks.com
``` syntax
mysql> select students.id,students.name, students.email,student_class.class
    -> from students
    -> right join student_class
    -> on students.id = student_class.id
    -> where email like('%n@fwsa.freshworks.com');
+------+-----------+---------------------------------------+-------+
| id   | name      | email                                 | class |
+------+-----------+---------------------------------------+-------+
|    4 | Haiden    | haiden.arulappan@fwsa.freshworks.com  |    10 |
|    5 | Jerusheya | jerusheya.johnson@fwsa.freshworks.com |    10 |
|    6 | Rishi     | rishi.atgondan@fwsa.freshworks.com    |    10 |
|    9 | Swetha    | swetha.saravanan@fwsa.freshworks.com  |    12 |
+------+-----------+---------------------------------------+-------+
```

## Feature 16:
### Find Students who has not enrolled in a class #
``` syntax
mysql> select students.name from students
    -> inner join student_class
    -> on students.id = student_class.id
    -> where class = all(select class from student_class where class is not null);
Empty set (0.00 sec)
```

## Feature 17:
### Display all students name with class - include both enrolled and not enrolled #
``` syntax
mysql> select students.name from students
    -> left join student_class
    -> on students.id = student_class.id
    -> where class = all(select class from student_class where class is not null and null);
+----------------+
| name           |
+----------------+
| Abisha         |
| Annamalai      |
| Aswath         |
| Haiden         |
| Jerusheya      |
| Rishi          |
| Santhanu       |
| Saranya        |
| Swetha         |
| Mohammed Riyas |
| Selvaraj       |
+----------------+
11 rows in set (0.00 sec)
```




