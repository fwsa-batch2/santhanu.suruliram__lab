file = File.open("text.txt", "r")
str = file.read()
puts str.include? "Truthfull"
    # puts file.read().include? "Truthfull"
    # puts file.readchar()
    # puts file.readline()
