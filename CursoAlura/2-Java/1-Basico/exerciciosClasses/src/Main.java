
public class Main {
    public static void main(String[] args) {

        //Classe Conta Bancaria

        ContaBancaria conta = new ContaBancaria();

        conta.setNumeroConta(123);
        conta.setSaldo(1000);
        conta.titular="João";


        System.out.println("Numero da conta: "+conta.getNumeroConta());
        System.out.println("Saldo: "+conta.getSaldo());
        System.out.println("Titular: "+conta.titular);

        conta.setSaldo(1500);

        System.out.println("Novo saldo: " + conta.getSaldo());

        //Classe Idade Pessoa
        idadePessoa pessoa1 = new idadePessoa();
        pessoa1.setName("Lucas");
        pessoa1.setIdade(27);
        System.out.println("O nome da pessoa é: "+pessoa1.getName());
        System.out.println("A idade da pessoa é: "+pessoa1.getIdade());
        pessoa1.verificarIdade();

        idadePessoa pessoa2 = new idadePessoa();
        pessoa2.setName("Pietro");
        pessoa2.setIdade(12);
        System.out.println("O nome da pessoa é: "+pessoa2.getName());
        System.out.println("A idade da pessoa é: "+pessoa2.getIdade());
        pessoa2.verificarIdade();

        //Classe Produto

        Produto produto = new Produto("Celular",2000.0);
        System.out.println("Nome do Produto: "+produto.getNome());
        System.out.println("Preço: "+produto.getPreco());;

        produto.aplicarDesconto(10);

        System.out.println("Novo preço após desconto: "+produto.getPreco());







    }
}