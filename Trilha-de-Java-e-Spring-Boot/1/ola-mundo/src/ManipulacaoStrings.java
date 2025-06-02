public class ManipulacaoStrings {

    public static void  main(String[] args){
        String variavel1 = "Guido cerqueira";
        double numero1 = 13.5;
        //valueOf()
        String variavelConvertida = String.valueOf(numero1);
        //charAt()
        System.out.println(variavelConvertida.charAt(0));
        //startsWith()
        boolean resultado = variavel1.startsWith("Gui");
        boolean resultado2 = variavel1.startsWith("ui",1);
        //endsWith()
        boolean resultado3 = variavel1.endsWith("Gui");
        //length
        int length = variavel1.length();
        //trim
        String trim = variavel1.trim();
        //toLowerCase
        String toLowerCase = variavel1.toLowerCase();
        //toUpperCase
        String toUpperCase= variavel1.toUpperCase();
        //indexOf
        int indexOf = variavel1.indexOf("g",2);
        //replace
        String variavel5 = "banana";
        String replace = variavel5.replace("a","e");
        //substring
        String substring = variavel5.substring(1,4);



      


    }
}
