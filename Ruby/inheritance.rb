class Kangaroo
    def func
        puts "work"
    end
end

class Rabit < Kangaroo
    def func
        puts "run"
        super func
    end

end

obj = Rabit.new
puts obj.func
