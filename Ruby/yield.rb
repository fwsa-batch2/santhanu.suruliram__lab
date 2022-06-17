def meth
    yield
    yield
end

meth {puts "abc"}
