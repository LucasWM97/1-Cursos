public class ConversorTemperaturaPadrao implements  ConversorTemperatura {
    @Override
    public void celsiusParaFahrenheit(double celsius) {
        double fahrenheit = (celsius*1.8)+32;
        System.out.printf("A temperatura em Celsius é de: %.2f  o seu valor convertido em Fahrenheit é de : %.2f \n",celsius, fahrenheit);
    }

    @Override
    public void fahrenheitParaCelsius(double fahrenheit) {
        double celsius = (fahrenheit-32)*5/9;
        System.out.printf("A temperatura Fahrenheit é de: %.2f o seu valor convertido em Celsius é de : %.2f \n",fahrenheit,celsius);
    }
}
