import java.text.SimpleDateFormat;
import java.util.Date;

public class Carro {

    String modelo;
    int ano;
    String cor;

    void fichaTecnica(){
        System.out.printf("""
                Modelo do carro: %s
                Ano do carro: %s
                Cor do carro: %s
                """,modelo,ano,cor);
    }

    Date date = new Date();
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
    int currentYear = Integer.parseInt(sdf.format(date));
    void idadeDoCaro(){
        System.out.println(currentYear-ano);
    }
}

