var choose = document.getElementsByClassName("choose-cont");
var cont1 = document.getElementsByClassName("main-content1")[0];
var cont2 = document.getElementsByClassName("main-content2")[0];
for(var i = 0; i < 2; i++) {
    (function bindX(i){
        switch(i) {
            case 0:
            choose[0].addEventListener('click',function(){
                choose[0].className = "choose-cont choose-cont1 choose-ing";
                choose[1].className = "choose-cont choose-cont2";
                cont1.style.display = "block";
                cont2.style.display = "none";
            })
            break;
            case 1:
            choose[1].addEventListener('click',function(){
                choose[1].className = "choose-cont choose-cont2 choose-ing";
                choose[0].className = "choose-cont choose-cont1";
                cont2.style.display = "block";
                cont1.style.display = "none";
            });
            break;
        }
    })(i);
}