public class Produto implements  Vendavel {


    @Override
    public double precoTotal(int quantidadeComprada, double desconto) {
        int valorProduto = 20;
        double precoSemDesconto = (quantidadeComprada*valorProduto);
        double precoComDesconto = precoSemDesconto-(precoSemDesconto*(desconto/100));

        return precoComDesconto;
    }
}
