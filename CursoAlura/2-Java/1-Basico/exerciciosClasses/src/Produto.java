public class Produto {

    private String nome;
    private double preco;

    public Produto(String nome,double preco){
        this.nome=nome;
        this.preco=preco;

    }

    public String getNome() {
        return nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public double aplicarDesconto(double desconto){
        double precoDesconto = preco*(desconto/100);
        return preco-=precoDesconto;
    }
}
