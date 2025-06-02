public class Main {
    public static void main(String[] args) {

        //Definindo uma Variavel
        String txt = "Lucas William";
        //Alterando variavel
        txt = "Marinho dos Santos";
        //Imprimindo a variavel
        System.out.println(txt);
        //Definindo uma Constante
        final String txt2 = "Minha rimeira constante";

        //Numeros
        //numero Inteiros
        int numetoInteiro = 12;
        //numeros decimais
        double numeroDecimal = 12.5;
        //Logico
        boolean verdadeiroOuFalso = true;

        // == , >= , <=, != , > , <
        // && , || , !

        //estrutura de decisao if
        int numero1 = 10;
        int numero2 = 10;
        if (numero1>numero2){
            System.out.println("Numero 1 eh maior");
        }else if(numero1 == numero2){
            System.out.println("Numero 1 e 2 sao iguais");
        }else{
            System.out.println("Numero 2 eh maior");
        }
        int numero3 = 19;

        //estrutura de decisao switch
        switch (numero3){
            case 18:
                System.out.println("O numero é 18");
                break;
            case 17:
                System.out.println("O numero é 17");
            break;
            default:
                System.out.println("O numero é desconhecido");
                break;
        }

        //estrutura de decisao ternario
        String ternario = (numero3<=17)?"É menor de idade" : "É maior de idade";
        System.out.println(ternario);




    }
}