public class TabuadaMultiplicacao implements  Tabuada{


    @Override
    public void mostrarTabuada(int numero) {
        System.out.printf("""
                        A tabuada do numero ${%d} é:
                        """,(numero));

        for (int i = 0; i < 11; i++) {
            int valor=numero*i;
            System.out.printf("%d * %d = %d \n",numero,i,valor);

        }
    }
}
