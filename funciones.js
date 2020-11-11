function comparar(){
    const val1 = Number(prompt("Ingresa el primer Valor: "));
    const val2 = Number(prompt("Ingresa el segundo Valor: "));
    
    if (val1>val2){
         alert(val1 + " Es Mayor Que " + val2);
    }else{
         alert(val2 + " Es Mayor Que " + val1);
    }
    // Este codigo no considera el caso en el cual los dos numeros sean iguales.
}