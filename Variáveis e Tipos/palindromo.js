function verificarPalindromo(palavra){
    if(palavra.length % 2 == 0){
        let metadeUm = palavra.slice(0, palavra.length/2);
        let metadeDois = palavra.slice(palavra.length/2, palavra.length);
        metadeDois = metadeDois.split('');
        let metadeDoisInvertida = [];
        for(i = 0; i < metadeDois.length; i++){
            metadeDoisInvertida[i] = metadeDois[metadeDois.length-i-1];
        }
        metadeDois = metadeDoisInvertida.join('');
        if (metadeUm == metadeDois){
            console.log('Palíndromo!');
        } else{
            console.log('Não Palíndromo!');
        }
    }else{
        let metadeUm = palavra.slice(0, palavra.length/2);
        let centro = palavra.slice(palavra.length/2, 1+palavra.length/2)
        let metadeDois = palavra.slice(1+palavra.length/2, palavra.length);
        metadeDois = metadeDois.split('');
        let metadeDoisInvertida = [];
        for(i = 0; i < metadeDois.length; i++){
            metadeDoisInvertida[i] = metadeDois[metadeDois.length-i-1];
        }
        metadeDois = metadeDoisInvertida.join('');
        if (metadeUm == metadeDois){
            console.log('Palíndromo!');
        } else{
            console.log('Não Palíndromo!');
        }
    }
}
 verificarPalindromo('arra area');