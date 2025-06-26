public class Pessoa {
    private String  nome;
    private int idade;

    public Pessoa(String nome,int idade){
        this.nome=nome;
        this.idade=idade;
    }

    @Override
    public String toString() {
        return String.format("Nome: %s, Idade: %d \n",nome,idade);
    }
}
