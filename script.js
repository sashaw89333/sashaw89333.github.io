var counter = 0;
var out5 = document.querySelector(".out5");
var question1 = document.querySelector(".question1");
var out1 = document.querySelector(".out1");
function answer1(){
    var radios = document.getElementsByName("question1");
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            console.log(radios[i]);
            if(radios[i].value == "Gina Linetti"){
                out1.innerHTML = "correct";
                counter++;
            }
            else{
                out1.innerHTML = "wrong";
            }
            //out1.innerHTML = radios[i].value;
            break;
        }
    }
}
var question2 = document.querySelector(".question2");
var out2 = document.querySelector(".out2");
function answer2(){
    var radios = document.getElementsByName("question2");
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            if(radios[i].value == "7"){
                out2.innerHTML = "correct";
                counter++;
            }
            else{
                out2.innerHTML = "wrong";
            }
            //out2.innerHTML = radios[i].value;
            break;
        }
    }
}
var question3 = document.querySelector(".question3");
var out3 = document.querySelector(".out3");
function answer3(){
    var radios = document.getElementsByName("question3");
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            if(radios[i].value == "Die Hard"){
                out3.innerHTML = "correct";
                counter++;
            }
            else{
                out3.innerHTML = "wrong";
            }
            //out3.innerHTML = radios[i].value;
            break;
        }
    }
}
var question4 = document.querySelector(".question4");
var out4 = document.querySelector(".out4");
function answer4(){
    var radios = document.getElementsByName("question4");
    for(var i = 0; i < radios.length; i++){
        if(radios[i].checked){
            if(radios[i].value == "Taylor Swift"){
                out4.innerHTML = "correct";
                counter++;
            }
            else{
                out4.innerHTML = "wrong";
            }
            //out4.innerHTML = radios[i].value;
            break;
        }
    }
}
out5.addEventListener("click", out5);
question1.addEventListener("click", answer1);
question2.addEventListener("click", answer2);
question3.addEventListener("click", answer3);
question4.addEventListener("click", answer4);
