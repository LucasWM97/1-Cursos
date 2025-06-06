
public class Main {
    public static void main(String[] args) {
        //Conversor de real para dolar
        ConversorMoeda conversorMoeda = new ConversorMoeda();
        conversorMoeda.converterDolarParaReal(4);

        //Calculadora de Sala Retangular
        CalculadoraSalaRetangular calculadoraSalaRetangular = new CalculadoraSalaRetangular();
        calculadoraSalaRetangular.calcularArea(5,8);
        calculadoraSalaRetangular.calcularPerimetro(5,8);


        //Tabuada de Multiplicação
        TabuadaMultiplicacao tabuadaMultiplicacao = new TabuadaMultiplicacao();
        tabuadaMultiplicacao.mostrarTabuada(5);

        //Conversosr de Temperatura
        ConversorTemperaturaPadrao conversorTemperaturaPadrao = new ConversorTemperaturaPadrao();
        conversorTemperaturaPadrao.celsiusParaFahrenheit(25);
        conversorTemperaturaPadrao.fahrenheitParaCelsius(77);

        //Calcular Preço ProdutoFisico e Loja
        ProdutoFisico produtoFisico = new ProdutoFisico();

        System.out.println(produtoFisico.calcularPrecoFinal(30));


        //Produtos e serviço com desconto
        Produto produto = new Produto();
        Servico servico = new Servico();

        System.out.println(produto.precoTotal(30,20));
        System.out.println(servico.precoTotal(30,20));






    }
}
