function cotizar(){
    let num = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 3860.35;
    let euro = 4108.03;
    let real = 751.39;
    if(document.getElementById("dolar").checked){
        resultado = num * dolar;
    } else if (document.getElementById("euro").checked){
        resultado = num * euro;
    } else if (document.getElementById("real").checked){
        resultado = num * real;
    }
    document.getElementById("total").value = resultado;  // Corregido el nombre de la variable a 'resultado'
    event.preventDefault();  // Movido dentro de la función
}