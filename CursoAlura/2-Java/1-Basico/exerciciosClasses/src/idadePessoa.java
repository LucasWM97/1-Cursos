public class idadePessoa {
    private String name;
    private int idade;

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getIdade() {
        return idade;
    }

    public String getName() {
        return name;
    }

    public void verificarIdade(){
        if (idade>= 18){
            System.out.println("Maior de idade");
        }else if (idade<18){
            System.out.println("Menor de idade");
        }
    }


}
