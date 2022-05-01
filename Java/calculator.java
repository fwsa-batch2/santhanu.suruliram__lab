import java.util.Scanner;

public class calculator {

    public static int num = 34;

    public static void main(String[] args) {
        System.out.print("Enter the first Number:  ");
        Scanner sc1 = new Scanner(System.in);
        int num1 = sc1.nextInt();

        System.out.print("Enter the second Number:  ");
        Scanner sc2 = new Scanner(System.in);
        int num2 = sc2.nextInt();

        System.out.print(num);
        System.out.print("Enter the Operation:  ");
        Scanner sc3 = new Scanner(System.in);
        String operation = sc3.nextLine();
        int out = 0;

        switch (operation) {
            case "+":
                out = add(num1, num2);

                break;
            case "-":
                out = sub(num1, num2);
                break;
            case "*":
                out = mul(num1, num2);
                break;
            case "/":
                out = div(num1, num2);
                break;
        }
        System.out.println(out);

    }

    public static int add(int num1, int num2) {
        int out = num1 + num2;
        return out;
    }

    public static int sub(int num1, int num2) {
        int out = num1 - num2;
        return out;
    }

    public static int mul(int num1, int num2) {
        int out = num1 * num2;
        return out;
    }

    public static int div(int num1, int num2) {
        int out = num1 / num2;
        return out;
    }
}
