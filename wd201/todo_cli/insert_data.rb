require "./connect_db.rb"
require "./todo.rb"
connect_db!
def insert_into_table(todo_text, due_date)
    Todo.create!(todo_text: todo_text, due_date: due_date, completed: false)
end
