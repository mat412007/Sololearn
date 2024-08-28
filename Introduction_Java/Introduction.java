/* 
Java es uno de los lenguajes de programación más populares.
El lema de Java es "Write once, run anywhere". 
Los programas Java pueden ejecutarse en distintas plataformas, como móviles, ordenadores y otros sistemas portátiles. 
Puedes utilizar Java para crear apps, juegos, aplicaciones bancarias, aplicaciones web y mucho más. 
*/
/* 
Los humanos utilizamos programas informáticos para comunicarnos con las máquinas. 
Sin programas informáticos, no tendríamos smartphones, páginas web ni exploración del espacio exterior.
La mayoría de los programas informáticos están diseñados para producir salida, como un mensaje en la pantalla.
Los programadores usan salidas todo el tiempo para comprobar que el ordenador sigue las instrucciones dadas y solucionar problemas con el código.
*/
/*
java -version 
javac -version 
javac -target 8 -source 8 file.java / javac --release 8 introduction.java
java class_name
*/
import java.util.Scanner;
// -----------------------------------------------------------
class Demo { // En Java, cada línea de código que pueda ejecutarse realmente tiene que estar dentro de una class (clase), con cualquier nombre
    public static void main(String[] args) { // main es el punto de entrada o partida para cualquier aplicacion de Java, contiene el codigo que se ejecuta cuando ejecutamos el programa
        System.out.print("\n");
        System.out.println("Hello"); // println imprime una salida con un salto de linea al final
        System.out.print("\n"); // print imprime una salida normal

        // Cada linea de programación realiza una tarea especifica y se llaman declaraciones
        // Java distingue entre mayusculas y minusculas, System no es lo mismo que system
        // El texto se encierra en comillas dobles, los numeros no
        // Una variable permite almacenar un valor asignándolo a un nombre
        // Cada variable tiene un tipo
        String nombre = "Marco"; // Palabras
        int numero = 10; // Numeros enteros
        double decimal = 8.5; // Numeros decimales (más almacenamiento, menos velocidad, más precision)
        float decimal_2 = 4.85f; // Otro tipo de decimal, con el postfijo f (menos almacenamiento, más velocidad, menos precision)
        char caracter = 'A'; // Un solo carácter, con comillas simples
        boolean verdadero = true; // true or false, si o no

        // Varios programas necesitan que el usuario ingrese información
        // Para tomar información del usuario, debes importar la clase correspondiente: (import java.util.Scanner;), al principio del código
        // Ahora creamos un objeto Scanner: (Scanner in = new Scanner(System.in);)
        Scanner in = new Scanner(System.in);
        // Hay diferentes tipos de declaraciones para insertar diferentes tipos de datos
        nombre = in.nextString();
        numero = in.nextInt();
        decimal = in.nextDouble();
        decimal_2 = in.nextFloat();
        caracter = in.next();
        verdadero = in.Boolean();

        // Las declaraciones condicionales se utilizan para realizar diferentes acciones bajo ciertas circunstancias diferentes
        // La declaración if es una de las declaraciones condicionales más utilizadas
        // Cuando la declaración if es falsa, se ejecuta a de else
        // Para comprobar múltiples condiciones, debes usar la declaracion else-if
        // Para formar una condición se usan los operadores de comparación(>, <, >=, <=, ==, !=)
        if(10 == 10){
            System.out.println("Es lo mismo");
        }
        else{
            System.out.println("No es lo mismo");
        }

        
    }
}

