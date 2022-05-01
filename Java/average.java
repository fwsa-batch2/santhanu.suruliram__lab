import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;
    
public class average {
    public static void main(String[] args) {
        List<Integer> myList = Arrays.asList(5, 7, 9, 3);
        System.out.println(myList);
        int value = 0;
        for (int i = 0; i < myList.size(); i++){
            value = value + myList.get(i);
        }
        int out = value / myList.size();
        System.out.println(out);
    }
}
