function compute()
{
    var number1 = Number(document.getElementById('num1').value);
    var number2 = Number(document.getElementById('num2').value);
    var ans_add;

    if(document.getElementById('add'))
    {
        ans_add = number1 + number2;
        document.getElementById('ans').value=ans_add;
    }
     /*if(document.getElementById('sub'))
    {
        ans_sub = number1 - number2;
        document.getElementById('ans').value=ans_sub;
    }*/
}