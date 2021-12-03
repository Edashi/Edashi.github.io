let windowForm = document.getElementsByClassName('BtnForm');
windowForm[0].onclick = function(){
    console.log(window);
    let modal = document.getElementsByClassName('Forma');
    let backgr = document.getElementsByClassName('place');
        modal[0].style.display = 'block';
        backgr[0].style.display = 'block';
        let exit = document.getElementsByClassName('Close');
             exit[0].onclick = function (){
             modal[0].style.display = 'none';
             backgr[0].style.display = 'none';
                };
};