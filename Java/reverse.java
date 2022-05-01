
public class reverse {
    public static void main(String[] args) {
        
        int num=72638; // int number
        int myvar = 0;
        while (num > 0) {
            myvar = myvar * 10;
            myvar += num % 10;
            
            num = num / 10;
        }
        System.out.println(myvar);
    }
    
}
