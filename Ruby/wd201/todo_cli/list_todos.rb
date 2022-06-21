require './connect_db.rb'
require './todo.rb'
require "./add_todo.rb"
require "./complete_todo.rb"
connect_db!
puts "This is Simple Todo CLI program: \n Enter Task to Continue... \n Press [c] to create a new task, [m] to mark a task as completed , [p] to print Todos and [l] to list all Tasks"
command = gets.strip.downcase

create_new_todo if command == "c"
start_mark_as_complete if command == "m"
if command == "p"
    output = Todo.to_displayable_list
    puts output
elsif
end

