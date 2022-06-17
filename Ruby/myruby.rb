require 'date'

print "What is your name?"
name = gets.chomp

print "what is your age?"
age = gets.chomp
int_age = age.to_i
d = Date.today
year = d.year
dob = year - int_age

puts "Your name is #{name} and your age is #{age} and you born in #{dob}"
