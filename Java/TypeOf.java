public class TypeOf{
    public static void main(String[] args) {
        int i = 100;
        String mystr = String.valueOf(i);
        System.out.println(mystr + mystr.getClass().getSimpleName());
    }
}
