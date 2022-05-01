public class MethodOverriding {
    public static void main(String[] args) {
        child obj = new child();

        obj.func();
    };
}

class parent {

    void func() {
        System.out.println("This is Parent");
    }
}

class child extends parent {
    @Override
    void func() {
        System.out.println("This is child");
    }
}
