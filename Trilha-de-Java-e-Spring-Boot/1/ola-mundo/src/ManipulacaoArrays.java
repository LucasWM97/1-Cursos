public class ManipulacaoArrays {
    public static void main (String [] args ){

        int[] array = {1,234,987};
        int[] array4 = new int [5];

        String [][] arrayMultidimensional = {
                {"Guido","Joao"},
                {"Maria","Antonia"}
        };
        int [][] arrayMultidimensionalInt = new int [2][2];
        arrayMultidimensionalInt[0][0]= 1;
        arrayMultidimensionalInt[0][1]=2;
        arrayMultidimensionalInt[1][0]=3;
        System.out.println(arrayMultidimensionalInt[0][1]);
    }
}
