public class ProdutoFisico implements  Calculavel{


    @Override
    public double calcularPrecoFinal(double produto) {
        double taxaDaLoja = 0.2;
        double taxaVendedor = 0.1;
        double precoFinal = produto+(produto*taxaDaLoja)+(produto*taxaVendedor);

        return precoFinal;
    }
}
