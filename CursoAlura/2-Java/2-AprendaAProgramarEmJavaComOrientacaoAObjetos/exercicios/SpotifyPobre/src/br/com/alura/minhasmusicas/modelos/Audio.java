package br.com.alura.minhasmusicas.modelos;


public class Audio {

    private int totalReproducoes;
    private int totalCurtidas;
    private int classificao;
    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    private String titulo;

    public int getTotalReproducoes() {
        return totalReproducoes;
    }

    public double getClassificao() {
        return classificao;
    }

    public int getTotalCurtidas() {
        return totalCurtidas;
    }





    public void curte(){
        this.totalCurtidas++;
    }

    public void reproduz(){
        this.totalReproducoes++;
    }
}
