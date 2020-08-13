function comment()
{
    let impvalue= document.querySelector("#msg").value;
    let colneValue=document.querySelector("#placeCommentUser1").cloneNode(true);
    colneValue.innerHTML=impvalue;


    let commentsDiv = document.querySelector('#commentDiv');
    commentsDiv.insertBefore(colneValue,commentsDiv.lastChild)
    


    let impvalue1= document.querySelector("#msg").value;
    let colneValue1=document.querySelector("#placeCommentOther").cloneNode(true);
    colneValue1.innerHTML=impvalue1;


    let commentsDiv1 = document.querySelector('#commentDiv1');
    commentsDiv1.insertBefore(colneValue1,commentsDiv1.lastChild)
    document.querySelector("#msg").value=" ";

}

function comment1()
{


    let impvalue1= document.querySelector("#msg1").value;
    let colneValue1=document.querySelector("#placeCommentUser2").cloneNode(true);
    colneValue1.innerHTML=impvalue1;


    let commentsDiv1 = document.querySelector('#commentDiv1');
    commentsDiv1.insertBefore(colneValue1,commentsDiv1.lastChild)
  
    let impvalue= document.querySelector("#msg1").value;
    let colneValue=document.querySelector("#placeCommentOtherUser2").cloneNode(true);
    colneValue.innerHTML=impvalue;


    let commentsDiv = document.querySelector('#commentDiv');
    commentsDiv.insertBefore(colneValue,commentsDiv.lastChild)
    document.querySelector("#msg1").value=" ";

}