function insert(num){
    var texto = document.getElementById('texto').innerHTML;
    if (texto === '0') {
        document.getElementById('texto').innerHTML = num;
    } else {
        document.getElementById('texto').innerHTML = texto + num;
    }
}
function clean(){
    document.getElementById('texto').innerHTML= '0';
    document.getElementById('texto2').innerHTML = '0';
}
function back(){
    var texto = document.getElementById('texto').innerHTML;
    document.getElementById('texto').innerHTML= texto.substring(0,texto.length -1);
}
function calcular(){
    var texto = document.getElementById('texto').innerHTML;
    var texto = eval(texto);
    document.getElementById('texto2').innerHTML = texto; 
    document.getElementById('texto').innerHTML = '0';
    
}

document.addEventListener('keydown', function(event) {
    event.preventDefault();

   
    var key = event.key;

    if (key >= '0' && key <= '9') {
        insert(key);
    } else if (key === '/') {
        insert('/');
    } else if (key === '*') {
        insert('*');
    } else if (key === '-') {
        insert('-');
    } else if (key === '+') {
        insert('+');
    } else if (key === '.') {
        insert('.');
    } else if (key === 'Backspace') {
        back();
    } else if (key === 'Enter' || key === '=') {
        calcular();
    } else if (key === 'c' || key === 'C') {
        clean();
    }
});
