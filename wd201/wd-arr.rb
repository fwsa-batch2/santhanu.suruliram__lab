# names = [["Jhumpa", "Lahiri"], ["J. K", "Rowling"], ["Devdutt", "Pattanaik"]]
# newarr = Array.new
# for i in 0...names.length do
#     list = names[i]
#     newarr.push(list.join(" "))
# end


# books = ["Design as Art", "Anathem", "Shogun"]
# authors = ["Bruno Munari", "Neal Stephenson", "James Clavell"]
# for i in 0...books.length do
#     curbook = books[i]
#     curauthor = authors[i]
#     puts "#{curbook} #{curauthor}"
# end


todos = [
    ["Send invoice", "money"],
    ["Clean room", "organize"],
    ["Pay rent", "money"],
    ["Arrange books", "organize"],
    ["Pay taxes", "money"],
    ["Buy groceries", "food"]
  ]
puts "money:"
moneyarr = Array.new
organizearr = Array.new
foodarr = Array.new
for i in 0...todos.length do
    var = todos[i][1]
    if var == "money"
        moneyarr.push(todos[i][0])
    end
end
puts moneyarr
puts "organize:"
for i in 0...todos.length do
    var = todos[i][1]
    if var == "organize"
        organizearr.push(todos[i][0])
    end
end
puts organizearr
puts "food:"
for i in 0...todos.length do
    var = todos[i][1]
    if var == "food"
        foodarr.push(todos[i][0])
    end
end
puts foodarr


