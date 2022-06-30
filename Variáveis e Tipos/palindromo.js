function verificarPalindromo(array){
    if(array.length % 2 == 0){
        let metadeUm = array.slice(0, array.length/2);
        let metadeDois = array.slice(array.length/2, array.length);
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
        let metadeUm = array.slice(0, array.length/2);
        let centro = array.slice(array.length/2, 1+array.length/2)
        let metadeDois = array.slice(1+array.length/2, array.length);
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