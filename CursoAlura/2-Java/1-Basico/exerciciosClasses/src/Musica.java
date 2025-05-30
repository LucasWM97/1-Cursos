public class Musica {
    String titulo;
    String artista;
    int anoLancamento;
    double avaliacao;
    int numAvaliacoes;


    void fichaTecnica(){
        System.out.printf("""
                Titulo da musica: %s
                Artista: %s
                Ano de lançamento: %d
                """,titulo,artista,anoLancamento);
    }

    void avaliarMusica(double nota){
        avaliacao+=nota;
        numAvaliacoes++;
    }

    double calcularMedia(){
        return avaliacao/numAvaliacoes;
    }



}
