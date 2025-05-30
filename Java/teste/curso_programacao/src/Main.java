import java.util.Locale;

public class Main {

	public static void main(String[] args) {
		System.out.println("Ola mundo");
		System.out.println("Bom dia");
		
		int y = 32;
		
		System.out.println(y);
		
		
		double x = 10.35784;
		
		System.out.println(x);
		System.out.printf("2 CASAS DECIMAIS: %.2f%n", x); 
		System.out.printf("4 CASAS DECIMAIS: %.4f%n", x);
		
		Locale.setDefault(Locale.US);
		System.out.printf("4 CASAS DECIMAIS PADRAO AMERICANO: %.4f%n", x);
		
		System.out.println("RESULTADO = "+ x + " METROS");
		
		System.out.printf("RESULTADO = %.2f metros%n",x);
		
		String nome = "Maria";
		int idade = 31;
		double renda = 4000.0;
		
		//%f = ponto flutuante
		//%d = inteiro
		//%s = texto
		//%n = quebra de linha1
		
		System.out.printf("%s tem %d anos e ganha RS %.2f reais %n",nome,idade,renda);
	}

}
