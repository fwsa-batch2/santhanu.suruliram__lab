class parent{
    void parentFunction(){System.out.println("I'm Parent");};
}
class son1 extends parent{
    void son1Function(){System.out.println("I'm son1");};
}
class son2 extends parent{
    void son2Function(){System.out.println("I'm son2");};
}
class son3 extends parent{
    void son3Function(){System.out.println("I'm son3");};
}
public class Hierarchy {
    public static void main(String[] args) {
        son1 obj1 = new son1();
        son2 obj2 = new son2();
        son3 obj3 = new son3();
        obj1.parentFunction();
        obj1.son1Function();
        obj2.parentFunction();
        obj2.son2Function();
        obj3.parentFunction();
        obj3.son3Function();
    }
}
