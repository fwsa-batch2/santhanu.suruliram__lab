require "active_record"

def connect_db!
    ActiveRecord::Base.establish_connection(
        host: "localhost",
        adapter: "mysql2",
        database: "wd201_todo",
        user: "root",
        password: "san0075"
    )

end
