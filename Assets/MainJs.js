
//*  Функция отвечающуя за вывод скрытого блока с формой авторизации *\\
let Autorisation = document.getElementById('LogInto');
Autorisation.onclick = function(){
    let Background = document.getElementsByClassName('dark');
    let Forms = document.getElementsByClassName('View');
        Background[0].style.display = 'block';
        Forms[0].style.display = 'block';
        
    Background[0].onclick = function(){
        Background[0].style.display = 'none';
        Forms[0].style.display = 'none';
}
    
};

