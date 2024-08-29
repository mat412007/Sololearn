/* 
Java es uno de los lenguajes de programacion mas populares.
El lema de Java es "Write once, run anywhere". 
Los programas Java pueden ejecutarse en distintas plataformas, como moviles, ordenadores y otros sistemas portatiles. 
Puedes utilizar Java para crear apps, juegos, aplicaciones bancarias, aplicaciones web y mucho mas. 
*/
/* 
Los humanos utilizamos programas informaticos para comunicarnos con las maquinas. 
Sin programas informaticos, no tendriamos smartphones, paginas web ni exploracion del espacio exterior.
La mayoria de los programas informaticos estan disenados para producir salida, como un mensaje en la pantalla.
Los programadores usan salidas todo el tiempo para comprobar que el ordenador sigue las instrucciones dadas y solucionar problemas con el codigo.
*/
/*
java -version 
javac -version 
javac -target 8 -source 8 file.java / javac --release 8 introduction.java
java class_name
*/
import java.util.Scanner;
// -----------------------------------------------------------
class Demo { // En Java, cada linea de codigo que pueda ejecutarse realmente tiene que estar dentro de una class (clase), con cualquier nombre
    public static void main(String[] args) { // main es el punto de entrada o partida para cualquier aplicacion de Java, contiene el codigo que se ejecuta cuando ejecutamos el programa
        System.out.print("\n");
        System.out.println("Hello"); // println imprime una salida con un salto de linea al final
        System.out.print("\n"); // print imprime una salida normal

        // Cada linea de programacion realiza una tarea especifica y se llaman declaraciones
        // Java distingue entre mayusculas y minusculas, System no es lo mismo que system
        // El texto se encierra en comillas dobles, los numeros no
        // Una variable permite almacenar un valor asignándolo a un nombre
        // Cada variable tiene un tipo
        String nombre = "Marco"; // Palabras
        int numero = 10; // Numeros enteros
        double decimal = 8.5; // Numeros decimales (mas almacenamiento, menos velocidad, mas precision)
        float decimal_2 = 4.85f; // Otro tipo de decimal, con el postfijo f (menos almacenamiento, mas velocidad, menos precision)
        char caracter = 'A'; // Un solo caracter, con comillas simples
        boolean verdadero = true; // true or false, si o no

        // Varios programas necesitan que el usuario ingrese informacion
        // Para tomar informacion del usuario, debes importar la clase correspondiente: (import java.util.Scanner;), al principio del codigo
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
        // La declaracion if es una de las declaraciones condicionales mas utilizadas
        // Cuando la declaracion if es falsa, se ejecuta a de else
        // Para comprobar multiples condiciones, debes usar la declaracion else-if
        // Para formar una condicion se usan los operadores de comparacion(>, <, >=, <=, ==, !=)
        if(10 == 10){
            System.out.println("Es lo mismo");
        }
        else if(10 == 10.0){
            System.out.println("Sigue siendo lo mismo");
        }
        else{
            System.out.println("No es lo mismo");
        }
        // Para no tener que identar muchos if dentro uno del otro, usamos operadores logicos(&&, ||, !)
        if(!(10 == 10)){
            System.out.println("Condicion invertida");
        }
        // Cuando deberias usar muchas declaraciones if-else, puedes usar la declaración switch en su lugar
        // Puede tener cualquier cantidad de casos(case) y se detiene el llegar al final o al toparse con un break
        // Si ninguno de los casos aplica, se ejecuta el default
        int dia = 1;
        switch(dia){
            case 1:
                System.out.println("Domingo");
                break;
            case 2:
                System.out.println("Lunes");
                break;
            case 3:
                System.out.println("Martes");
                break;
            case 4:
                System.out.println("Miercoles");
                break;
            case 5:
                System.out.println("Jueves");
                break;
            case 6:
                System.out.println("Viernes");
                break;
            case 7:
                System.out.println("Sabado");
                break;
            default:
                System.out.println("Error");
                break;
        }

        // Los bucles te permiten repetir un bloque de codigo varias veces
        // Una declaracion de bucle while ejecuta repetidamente una declaracion objetivo mientras su condicion sea verdadera
        // Deben tener un contador que aumenta(++) o disminuye(--) en cada bucle para que no sea infinito
        // Todos los bucles se pueden romper con break, tambien se puede saltar a la proxima iteracion con el continue
        // Tambien esta el do-while
        // La condicion del do-while esta al final del bucle, por lo que las declaraciones del bucle se ejecutan una vez antes de ser probadas
        int contador = 10;
        do{
            System.out.println(contador);
            contador--;
        } while (contador != 0);
        // Otro tipo de bucle es el for
        // Tiene 3 partes; variable counter, condicion, alque se ejecuta en cada repeticion
        for(int x = 1; x <= 10; x++){
            if(x % 2 != 0){
                continue;
            }
            System.out.println(x);
        }

        // Una matriz almacena varios valores en una sola variable
        // Para crearla tenemos que declarar su tipo, y tamano tambien con la palabra new
        int[] ages = new int[5];
        // El acceso a los elementos de una matriz se realiza mediante su posicion, tambien llamada indice
        // Con el puedes acceder o declarar el valor de esa posicion 
        ages[2] = 17;
        System.out.println(ages[2]);
        // Si ya sabes que valores almacenar en la matriz, en lugar de asignarlos uno a uno 
        int[] ages_2 = {17, 25, 46, 18, 40};
        // Podemos generar los elementos de una matriz usando un bucle
        // Para obtener el numero de elemntos de una matriz, usamos la propiedad length
        // El mejor bucle para esto es un for
        for(int i = 0; i < ages_2.length; i++){
            System.out.println(ages_2[i]);
        }
        // Java proporciona otra version del bucle for, el bucle for-each, para hacer un bucle sobre las matrices
        for(int a : ages_2){
            System.out.println(x);
        }

    }
}

