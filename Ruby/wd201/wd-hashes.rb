books = ["Design as Art", "Anathem", "Shogun"]
authors = ["Bruno Munari", "Neal Stephenson", "James Clavell"]
hash = {}
for i in 0...authors.length do
    author = authors[i]
    arr = author.split(" ")
    arr = arr[0]
    arr = arr.downcase
    arr = arr.to_sym
    data = books[i]
    hash[arr] = [data]
end
puts hash


todos = [
    ["Send invoice", "money"],
    ["Clean room", "organize"],
    ["Pay rent", "money"],
    ["Arrange books", "organize"],
    ["Pay taxes", "money"],
    ["Buy groceries", "food"]
  ]
moneyarr = []
organizearr = []
foodarr = []
for i in 0...todos.length do
    var = todos[i][1]
    if var == "money"
        moneyarr.push(todos[i][0])
    elsif var == "organize"
        organizearr.push(todos[i][0])
    elsif var == "food"
        foodarr.push(todos[i][0])
    end
end
hash = {:money => moneyarr, :organize => organizearr, :food => foodarr}
puts hash
