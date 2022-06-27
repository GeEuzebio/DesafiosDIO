function verifica(a, b){
    if(a === b){
        if(a+b < 10){
            console.log(`Os números ${a} e ${b} são iguais e sua soma é ${a+b} que é menor que 10`);
        } else if(10 < a + b && a + b < 20 ){
            console.log(`Os números ${a} e ${b} são iguais e sua soma é ${a+b} que é maior que 10 e menor que 20`);
        } else if( a + b > 20){
            console.log(`Os números ${a} e ${b} são iguais e sua soma é ${a+b} que é maior que 20`);
        }
    } else{
        if(a+b < 10){
            console.log(`Os números ${a} e ${b} são diferentes e sua soma é ${a+b} que é menor que 10`);
        } else if(10 < a + b && a + b < 20 ){
            console.log(`Os números ${a} e ${b} são diferentes e sua soma é ${a+b} que é maior que 10 e menor que 20`);
        } else if( a + b > 20){
            console.log(`Os números ${a} e ${b} são diferentes e sua soma é ${a+b} que é maior que 20`);
        }
    }
}

verifica(5, 3);

verifica(6, 6);

verifica(10, 13);