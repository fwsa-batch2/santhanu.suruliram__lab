interface myInter {
    final int num = 5;
    void bro();
}

class myClass implements myInter {
    public void bro() {
        System.out.println("Bro function is Running...");
    }
}

public class InterfaceInJava {
    public static void main(String[] args) {
        myClass myObj = new myClass();
        myObj.bro();
        System.out.println(myObj.num);
    }
}
