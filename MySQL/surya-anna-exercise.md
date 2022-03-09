# SQL Excercise:
## Table 1:

``` syntax
mysql> select * from user;
+----+-------+
| id | name  |
+----+-------+
|  1 | Surya |
|  2 | Dhaya |
+----+-------+
2 rows in set (0.04 sec)

mysql> desc user;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | NO   | PRI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
```
## Table 2 :

``` syntax
mysql> select * from batch;
+----+------+
| id | name |
+----+------+
|  1 | B1   |
|  2 | B2   |
+----+------+
2 rows in set (0.02 sec)

mysql> desc batch;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | NO   | PRI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
```
## Table 3:

``` syntax
mysql> select * from course;
+----+------+
| id | name |
+----+------+
|  1 | HTML |
|  2 | CSS  |
|  3 | JS   |
+----+------+
3 rows in set (0.02 sec)

mysql> desc course;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | NO   | PRI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
```

## getting username, batch and Course:
``` syntax
mysql> select user.id user_id, user.name name, batch.id batch_id, batch.name batch_name, course.id course_id, course.name course_name
    -> from user
    -> join batch on user.id = batch.id
    -> join course on user.id = course.id;
+---------+-------+----------+------------+-----------+-------------+
| user_id | name  | batch_id | batch_name | course_id | course_name |
+---------+-------+----------+------------+-----------+-------------+
|       1 | Surya |        1 | B1         |         1 | HTML        |
|       2 | Dhaya |        2 | B2         |         2 | CSS         |
+---------+-------+----------+------------+-----------+-------------+
```

## Students who are studying one particular Course:
``` syntax
mysql> select user.id user_id, user.name name, batch.id batch_id, batch.name batch_name, course.id course_id, course.name course_name
    -> from user
    -> join batch on user.id = batch.id
    -> join course on user.id = course.id
    -> where course.name = 'HTML';
+---------+-------+----------+------------+-----------+-------------+
| user_id | name  | batch_id | batch_name | course_id | course_name |
+---------+-------+----------+------------+-----------+-------------+
|       1 | Surya |        1 | B1         |         1 | HTML        |
+---------+-------+----------+------------+-----------+-------------+
```

## Batch and Course details of one Specific student:
``` syntax
mysql> select user.id user_id, user.name name, batch.id batch_id, batch.name batch_name, course.id course_id, course.name course_name
    -> from user
    -> join batch on user.id = batch.id
    -> join course on user.id = course.id
    -> where user.name = 'Surya';
+---------+-------+----------+------------+-----------+-------------+
| user_id | name  | batch_id | batch_name | course_id | course_name |
+---------+-------+----------+------------+-----------+-------------+
|       1 | Surya |        1 | B1         |         1 | HTML        |
+---------+-------+----------+------------+-----------+-------------+
```