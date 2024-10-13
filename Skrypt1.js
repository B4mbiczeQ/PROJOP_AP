function Calculate(){
var Liczba1=parseFloat(document.getElementById('liczba1').value)
var Liczba2=parseFloat(document.getElementById('liczba2').value)
var Wynik1 = document.getElementById('opcje').value
switch(Wynik1){
case "+":
var Liczba2=document.getElementById('Wynik').value = Liczba1 + " + " + Liczba2 + " = " + (Liczba1 + Liczba2)
break;
case "-":
var Liczba2=document.getElementById('Wynik').value = Liczba1 + " - " + Liczba2 + " = " + (Liczba1 - Liczba2)
break;
case "*":
var Liczba2=document.getElementById('Wynik').value = Liczba1 + " * " + Liczba2 + " = " + (Liczba1 * Liczba2)
break;
case "/":
var Liczba2=document.getElementById('Wynik').value = Liczba1 + " / " + Liczba2 + " = " + (Liczba1 / Liczba2)
break;
}
}