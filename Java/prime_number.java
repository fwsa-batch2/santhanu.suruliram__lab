public class prime_number {
    public static void main(String[] args) {
        int num = 3;
        int num1 = num / 2;
        boolean isPrime = false;
        if (num == 0 | num == 1) {
            System.out.println("not a prime number");
        }
        else {
            for(int i = 2; i<= num1; i++) {
                if(num % i == 0){
                    System.out.println("not a prime number");
                    isPrime = true;
                    break;
                }
            }
            if (isPrime == false) {
                System.out.println("prime number");
            }
        }
    }
}
