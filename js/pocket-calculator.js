let symbol = false
let expression = ''
let displayExpression = ''
let answer = ''
let decimalCount = 0

//The displayExpression variable combined with the expression variable allows for the calculator to clear the screen
//afer you enter an operation or compute an answer, or evaluation.

function operations(operation){
    if(operation == '+' && symbol == true){
        expression+='+';
        displayExpression='';
        decimalCount=0;
        document.getElementById("display").innerHTML='0';
        symbol=false;
    }
    if(operation == '-' && symbol == true){
        expression+='-';
        displayExpression='';
        decimalCount=0;
        document.getElementById("display").innerHTML='0';
        symbol=false;
    }
    if(operation == 'x' && symbol == true){
        expression+='*';
        displayExpression='';
        decimalCount=0;
        document.getElementById("display").innerHTML='0';
        symbol=false;
    }
    if(operation == '/' && symbol == true){
        expression+='/';
        displayExpression='';
        decimalCount=0;
        document.getElementById("display").innerHTML='0';
        symbol=false;
    }
}

function numbers(number){
    if(number == '.' && decimalCount==0){
        expression+='.';
        displayExpression+='.';
        decimalCount++;
        document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
        symbol=true;
    }
    if(number == '0'){
        expression+='0';
        displayExpression+='0';
        document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
        symbol=true;
    }
    if(number == '1'){
        expression+='1';
        displayExpression+='1';
        document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
        symbol=true;
    }
    if(number == '2'){
        expression+='2';
        displayExpression+='2';
        document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
        symbol=true;
    }
    if(number == '3'){
        expression+='3';
        displayExpression+='3';
        document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
        symbol=true;
    }
    if(number == '4'){
        expression+='4';
        displayExpression+='4';
        document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
        symbol=true;
    }
    if(number == '5'){
        expression+='5';
        displayExpression+='5';
        document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
        symbol=true;
    }
    if(number == '6'){
        expression+='6';
        displayExpression+='6';
        document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
        symbol=true;
    }
    if(number == '7'){
        expression+='7';
        displayExpression+='7';
        document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
        symbol=true;
    }
    if(number == '8'){
        expression+='8';
        displayExpression+='8';
        document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
        symbol=true;
    }
    if(number == '9'){
        expression+='9';
        displayExpression+='9';
        document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
        symbol=true;
    }
} 

function erase(){
    expression='';
    displayExpression=''
    decimalCount=0;
    document.getElementById("display").innerHTML='0';
    symbol=true;
}

function ans(){
    displayExpression+=answer
    expression+=answer
    document.getElementById("display").innerHTML=Number(displayExpression).toLocaleString('en', {maximumFractionDigits: 12});
    console.log(answer)
}

function percent(){
    if (expression==''){
        expression=answer
        expression+='/100';
        equals('=');
    }
    else{
        expression+='/100';
        equals('=');
    }
}

function negate(){
    expression+='*(-1)';
    displayExpression=-displayExpression;
    document.getElementById("display").innerHTML=displayExpression.toLocaleString('en', {maximumFractionDigits: 12});
}

function pi(){
    expression='3.14159265';
    displayExpression='3.14159265';
    document.getElementById("display").innerHTML=displayExpression.toLocaleString('en', {maximumFractionDigits: 12});
}

function square(){
    displayExpression=Math.pow((Number(displayExpression)),2);
    expression+='**2'
    document.getElementById("display").innerHTML=displayExpression.toLocaleString('en', {maximumFractionDigits: 12});
}

function cube(){
    displayExpression=Math.pow((Number(displayExpression)),3);
    expression+='**3';
    document.getElementById("display").innerHTML=displayExpression.toLocaleString('en', {maximumFractionDigits: 12});    
}

function equals(input){
    let evaluation = eval(expression);
    if(input == '='){
        if(evaluation==Infinity){
            document.getElementById("display").innerHTML="W͟͢h̵͘y̕͜?̨͠";
        }
        else if(evaluation>=1000000000 || evaluation<=-1000000000){
            let exponent=evaluation.toString().length-1;
            evaluation=evaluation/(10**(exponent))+'e'+exponent;
            document.getElementById("display").innerHTML=evaluation;
            displayExpression='';
            expression='';
            answer=evaluation;
        }
        else{
            document.getElementById("display").innerHTML=evaluation.toLocaleString('en', {maximumFractionDigits: 6});
            displayExpression='';
            expression='';
            answer=evaluation;
        }     
        try{
            evaluation;
        }
        catch(err){
            document.getElementById("display").innerHTML="Error!";            
        }
    }
    console.log(evaluation);
}