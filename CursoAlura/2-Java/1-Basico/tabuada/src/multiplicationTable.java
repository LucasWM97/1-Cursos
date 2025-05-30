import java.util.Scanner;

public class multiplicationTable {
    public static void main(String[] args) {

        Scanner keyboard = new Scanner(System.in);
        int myInput = 0;

        System.out.println("Digite um numero para saber a tabuada: ");
        myInput=keyboard.nextInt();

        System.out.printf("""
                A tabuada desse valor é:
                1*%d=%d
                2*%d=%d
                3*%d=%d
                4*%d=%d
                5*%d=%d
                6*%d=%d
                7*%d=%d
                8*%d=%d
                9*%d=%d
                10*%d=%d
                """,
                myInput,1*myInput,
                myInput,2*myInput,
                myInput,3*myInput,
                myInput,4*myInput,
                myInput,5*myInput,
                myInput,6*myInput,
                myInput,7*myInput,
                myInput,8*myInput,
                myInput,9*myInput,
                myInput,10*myInput);


    }
}