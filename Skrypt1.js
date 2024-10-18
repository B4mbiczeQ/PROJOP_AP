    function Calculate(){

        var Liczba_Pierwsza = parseFloat(document.getElementById('PierwszaLiczba').value); //Użytkownik podaje Pierwszą liczbę które będzie po przecinku.
        var Liczba_Druga = parseFloat(document.getElementById('DrugaLiczba').value);
        var Opcja_wyboru = document.getElementById('Wybór').value; // Użytkownik podaje operację jaką chciałby dokonać na 2 liczbach przez niego wybranych.
        
        

        PodajWynik(Liczba_Pierwsza,Liczba_Druga,Opcja_wyboru); // Funkcja, dzięki której użytkownik zobaczy operację na jego dwóch wybranych liczbach i wybranej przez niego operacji arytmetycznej (Dodawania/Odejmowania/Mnożenie/Dzielenia).
    }
    
    function PodajWynik(ValueFirst,ValueSecond,Operator){

        var Result; // Tworzymy zmienną, która później wyświetli wynik pomiędzy 2 liczbami wybranymi przez użytkownika.
        

        switch(Operator){
            case "+":
                Result = (ValueFirst + ValueSecond); // Za pomocą "switch" ustawiemy zmiennej wartość, która obliczy 2 liczby wybrane przez użytkownika.
                break;
            case "-":
                Result = (ValueFirst - ValueSecond);
                break;
            case "*":
                Result = (ValueFirst * ValueSecond);
                break;
            case "/":
                Result = (ValueFirst / ValueSecond);
                break;
        }       

        ValueSecond = document.getElementById('Wynik').value = ValueFirst + ` ${Operator} ` + ValueSecond + " = " + (Result); // Końcowo to będzie przykładowy wynik operacji na 2 liczbach przez użytkownika: 2 + 2 = 4 lub 7 / 7 = 1. 

    } 