def salute(name, salutation)
    namearr = name.split(" ")
    lastname = namearr.last
    salutation = salutation.capitalize
    return "#{salutation} Mr. #{lastname}"
end

puts salute("Nelson Rolihlahla Mandela", "hello")
puts salute("Sir Alan Turing", "welcome")

