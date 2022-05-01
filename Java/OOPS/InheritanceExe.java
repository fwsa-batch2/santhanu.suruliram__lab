class parent {
        String data = "this is parent data";
}

class child extends parent{
        String data = "this is child's data";
        public void func() {
            System.out.println(super.data);
        }
}

public class InheritanceExe{
    public static void main(String[] args) {
        child obj = new child();
        obj.func();
    }
}

