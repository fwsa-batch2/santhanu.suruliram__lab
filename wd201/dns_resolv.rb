def get_command_line_argument
  if ARGV.empty?
    puts "Usage: ruby lookup.rb <domain>"
    exit
  end
  ARGV.first
end

domain = get_command_line_argument
dns_raw = File.readlines("zone.txt")

def parse_dns(dns_raw)
  dns_records = { RECORD_TYPE: [] , SOURCE: [] , DESTINATION: [] }
  for i in (dns_raw.filter {|x| (x[0] != "#") && (x != "\n")})
      dns_records[:RECORD_TYPE].push((i.split(","))[0].strip())
      dns_records[:SOURCE].push((i.split(","))[1].strip())
      dns_records[:DESTINATION].push((i.split(","))[2].strip())
  end
  dns_records
end

def resolve( dns_records , lookup_chain , domain )
  if (dns_records[:SOURCE].include? domain)
      index = (dns_records[:SOURCE]).find_index(domain)
      if ((dns_records[:RECORD_TYPE][index]) == "A")
       lookup_chain.push((dns_records[:DESTINATION])[index])
      elsif ((dns_records[:RECORD_TYPE][index]) == "CNAME")
       new_domain = (dns_records[:DESTINATION])[index]
       lookup_chain.push(new_domain)
       resolve( dns_records , lookup_chain , new_domain )
     end
  else
      lookup_chain.push("IP Address not found for the given domain")
  end
  lookup_chain
end

dns_records = parse_dns(dns_raw)
lookup_chain = [domain]
lookup_chain = resolve(dns_records, lookup_chain, domain)
puts lookup_chain.join(" => ")
