import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {

        ArrayList<Pessoa> listaDePessoas = new ArrayList<>();
        listaDePessoas.add(new Pessoa("Carlos",34));
        listaDePessoas.add(new Pessoa("Lucas",27));
        listaDePessoas.add(new Pessoa("Elisiane",27));
        System.out.println(listaDePessoas.size());
        System.out.println(listaDePessoas.getFirst());
        System.out.println(listaDePessoas.toString());

    }
}