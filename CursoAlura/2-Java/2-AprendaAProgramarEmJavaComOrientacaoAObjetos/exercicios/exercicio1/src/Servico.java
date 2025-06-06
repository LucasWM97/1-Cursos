public class Servico implements Vendavel{

    @Override
    public double precoTotal(int quantidadeComprada, double desconto) {
        int valorProduto = 70;
        double precoSemDesconto = (quantidadeComprada*valorProduto);
        double precoComDesconto = precoSemDesconto-(precoSemDesconto*(desconto/100));

        return precoComDesconto;
    }
}
