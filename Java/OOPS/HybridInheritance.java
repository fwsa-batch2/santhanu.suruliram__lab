class hybridA{
    String hybridA = "hybrid A is running";
}
class hybridA1 extends hybridA{
    String hybridA1 = "hybrid A1 is running";
}
class hybridA2{
    String hybridA2 = "hybrid A2 is running";
}
class hyrbidB extends hybridA2{
    String hybridB = "hyrbid B is running";
}

public class HybridInheritance {
    public static void main(String[] args) {
        hybridA1 obj1 = new hybridA1();
        hyrbidB obj2 = new hyrbidB();
    }
}
