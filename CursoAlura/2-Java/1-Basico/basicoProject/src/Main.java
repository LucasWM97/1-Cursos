import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        String userName = "Lucas";
        String accountType = "Corrente";
        double accountSaldo = 2500;
        int opperationNumber=1;
        double newValue=0;

        System.out.printf("""
                *******************************************
                Nome: %s
                Tipo da Conta: %s
                Saldo Inicial: %s
                ********************************************
                
                
                """,userName,accountType,accountSaldo);

        Scanner teclado = new Scanner(System.in);
        while (opperationNumber != 4){
            System.out.println("""
                    
                    Operações
                    
                    1- Consulta saldos
                    2- Receber valor
                    3- Transferir valor
                    4- Sair
                    
                     Digite opção desejada: 
                    """);
            opperationNumber = teclado.nextInt();

            if (opperationNumber == 1){
                System.out.printf("""
                        O Saldo atual é R$ %.2f
                        """,accountSaldo);
            }

            if (opperationNumber == 2){
                System.out.println("""
                        Informe o valor a receber:
                        """);
                newValue = teclado.nextDouble();
                accountSaldo= accountSaldo+newValue;
                System.out.printf("""
                    Saldo atualizado R$ %.2f
                    """,accountSaldo);
            }

            if (opperationNumber==3){
                System.out.println("""
                        Informe o valor que deseja transferir:
                        """);
                newValue=teclado.nextDouble();

                if (newValue > accountSaldo){
                    System.out.println("""
                            Não há saldo suficiente para fazer essa transferencia.
                            """);
                }else{
                    accountSaldo=accountSaldo-newValue;
                    System.out.printf("""
                            Saldo atualizado R$ %.2f
                            """,accountSaldo);
                }
            }
            if (opperationNumber > 4){
                System.out.println("Opção inválida");
            }



        }


    }
}