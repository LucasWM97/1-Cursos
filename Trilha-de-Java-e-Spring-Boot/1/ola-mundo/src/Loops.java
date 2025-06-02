import java.sql.SQLOutput;

public class Loops {

    public static void main(String [] args){

        int [] arraySimples = {1,2,3,4};

        //for Simples
        for (int i=0; i<arraySimples.length;i++){
            System.out.print(arraySimples[i]+ " ");

        }
        //foreach
        for (int numero : arraySimples) {
            System.out.print("foreach "+numero + " ");
        }

        int a = 0;


        //while
        while (a < arraySimples.length){
            System.out.print("while"+arraySimples[a]);
            a++;
        }
        //Do While
        int b = 0;
        do {
            System.out.println(arraySimples[b]);
            b++;
        }while(b<arraySimples.length);

    }
}
