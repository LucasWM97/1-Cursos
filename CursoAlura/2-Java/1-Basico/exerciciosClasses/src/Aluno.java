public class Aluno {
    String nome;
    int idade;

    void showAluno(){
        System.out.printf("""
                Nome: %s
                idade: %d
                """,nome,idade);
    }
}
