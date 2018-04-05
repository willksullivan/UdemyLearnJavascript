var number1 = 3;
var number2 = 1;
var number3 = 1;

if(number1 < number2 && number2 < number3){
    document.write(number1 + " ");
    if(number2 < number3){
        document.write(number2 + " "+ number3);
    }else{
        document.write(number3 + " " + number2);
    }
}else if(number2 < number1 && number2 < number3){
    document.write(number2 + " ");
    if(number1 < number3){
        document.write(number1 + " " + number3);
    }else{
        document.write(number3 + " " + number1);
    }
}else if (number3 < number1 && number3 < number2){
    document.write(number3 + " ");
    if(number1 < number2){
        document.write(number1 + " " + number2);
    }
}else if (number1 == number2){
    if(number3 < number1){
        document.write(number3 + " " + number1 + " " + number2);
    }else{
        document.write(number1 + " " + number2 + " " + number3);
    }
}else if (number1 == number3){
    if(number2 < number1){
        document.write(number2 + " " + number1 + " " + number3);
    }else{
        document.write(number1 + " " + number3 + " " + number2);
    }
}else if (number3 == number2){
    if(number1 < number3){
        document.write(number1 + " " + number3 + " " + number2);
    }else{
        document.write(number3 + " " + number2 + " " + number1);
    }
}else{
    alert("please enter valid numbers");
}



//switch
/*
var test = "A";
switch(test){
    case "A":
        document.write("A");
        break;
    case "B":
        document.write("B");
        break;
    default:
        document.write("Error");
}*/

//loop
// var x = 1;
// while(x < 5){
//     document.write(x + "<br>");
//     x++;
// }

// do{

// }while(x < 8);