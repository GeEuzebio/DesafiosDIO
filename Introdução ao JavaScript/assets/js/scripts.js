var currentNumber = document.getElementById('currentNumber');

var adicionar = document.getElementById('adicionar');
adicionar.addEventListener('click', () => {
    if(currentNumber.innerHTML < 10){
        currentNumber.innerHTML++;
    }
});

var subtrair = document.getElementById('subtrair');
subtrair.addEventListener('click', () => {
    if (currentNumber.innerHTML > 0){
        currentNumber.innerHTML--;
    }
});