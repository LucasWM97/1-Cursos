
public class Main {
    public static void main(String[] args) {
        Carro fusca = new Carro();

        fusca.modelo = "Fusca";
        fusca.marca = "Volkswagem";
        fusca.cor = "Preto";
        fusca.ano = 1978;

        Carro celta = new Carro();
        celta.modelo = "Celta";
        celta.marca = "Chevrolet";
        celta.cor = "Preto";
        celta.ano = 2008;

        System.out.println(fusca.modelo + " " + celta.modelo);

    }
}