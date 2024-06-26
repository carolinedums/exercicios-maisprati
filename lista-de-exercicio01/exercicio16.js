// 16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

let divisor = 2
let ePrimo = true
let contadorDePrimos = 0
let maiorQueCem = 101

while (contadorDePrimos < 50){
   while(divisor < maiorQueCem){
      if (maiorQueCem % divisor == 0 ){
         ePrimo = false
      }
      divisor++
   }
   if(ePrimo){
      console.log(maiorQueCem, 'É PRIMO')
      contadorDePrimos++
   }  
   divisor=2
   maiorQueCem++
   ePrimo = true
}

