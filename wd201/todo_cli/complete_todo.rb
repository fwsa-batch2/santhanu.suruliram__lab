require './connect_db.rb'
require './todo.rb'

def start_mark_as_complete
    connect_db!
    puts Todo.to_displayable_list
    puts "Which todo do you want to mark as completed> (Enter id):"
    todo_id = gets.strip.to_i

    todo = Todo.mark_as_completed(todo_id)
    puts "Done! ID[#{todo_id}] is marked as completed"
end
