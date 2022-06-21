require "aes"
file = ARGV[0]
password  = AES.key
encrypted_file = AES.encrypt(File.read(file), password)

output_file = "#{file}.enc"
File.open(output_file, "wb") {|f| f.write(encrypted_file)}
puts "output : #{output_file} \n password : #{password}"
