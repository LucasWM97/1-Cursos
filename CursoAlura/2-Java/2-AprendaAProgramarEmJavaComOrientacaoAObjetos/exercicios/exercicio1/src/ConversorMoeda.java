public class ConversorMoeda implements  ConversaoFinanceira{


    @Override
    public void converterDolarParaReal( double dolar) {
        double dolarEmReal = 5.40;
        double real = dolar*dolarEmReal;

        System.out.println("O valor em reais é: R$" +real);
    }
}
