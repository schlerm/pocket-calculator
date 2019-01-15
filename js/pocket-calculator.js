let symbol = false
let expression = ""
let displayExpression = ""

function operations(operation){
    if(operation == '+' && symbol == true){
        expression+='+';
        document.getElementById("display").innerHTML='0';
        symbol=false;
    }
   
    if(operation == '-' && symbol == true){
        expression+='-';
        document.getElementById("display").innerHTML='0';
        symbol=false;
    }

    if(operation == 'x' && symbol == true){
        expression+='*';
        document.getElementById("display").innerHTML='0';
        symbol=false;
    }

    if(operation == '/' && symbol == true){
        expression+='/';
        document.getElementById("display").innerHTML='0';
        symbol=false;
    }

    if(operation == '.' && symbol == true){
        expression+='.';
        document.getElementById("display").innerHTML=expression;
        symbol=false;
    }
}

function numbers(number){
    if(number == '0'){
        expression+="0";
        document.getElementById("display").innerHTML=expression;
        symbol=true;
    }
    if(number == '1'){
        expression+='1';
        document.getElementById("display").innerHTML=expression;
        symbol=true;
    }
    if(number == '2'){
        expression+='2';
        document.getElementById("display").innerHTML=expression;
        symbol=true;
    }
    if(number == '3'){
        expression+='3';
        document.getElementById("display").innerHTML=expression;
        symbol=true;
    }
    if(number == '4'){
        expression+='4';
        document.getElementById("display").innerHTML=expression;
        symbol=true;
    }
    if(number == '5'){
        expression+='5';
        document.getElementById("display").innerHTML=expression;
        symbol=true;
    }
    if(number == '6'){
        expression+='6';
        document.getElementById("display").innerHTML=expression;
        symbol=true;
    }
    if(number == '7'){
        expression+='7';
        document.getElementById("display").innerHTML=expression;
        symbol=true;
    }
    if(number == '8'){
        expression+='8';
        document.getElementById("display").innerHTML=expression;
        symbol=true;
    }
    if(number == '9'){
        expression+='9';
        document.getElementById("display").innerHTML=expression;
        symbol=true;
    }
} 

function erase(){
    expression='';
    document.getElementById("display").innerHTML='0';
    symbol=true;
}

function equals(input){
    let evaluation = eval(expression);
    if(input == '='){
        if(evaluation==Infinity){
            document.getElementById("display").innerHTML="Error!";
        }
        else if(evaluation>=1000000000){
            let exponent=finalExpression.toString().length-1;
            document.getElementById("display").innerHTML=evaluation/(10**(exponent))+'e'+exponent;
        }
        else{
            document.getElementById("display").innerHTML=evaluation.toLocaleString();
        }        
    }
}

//add answer function
//add displayString functionality



