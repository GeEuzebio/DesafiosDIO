function substituirPares(array){
    if(array.length == 0){
        console.log('-1');
    }else{
        for (i = 0; i < array.length; i++){
            if (array[i] % 2 == 0 && array[i] != 0){
                array[i] = 0;
            }
        }
        console.log(array);
    }
}

substituirPares([]);