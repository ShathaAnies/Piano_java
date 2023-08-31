
function play(num)
{
    
    var audio = new Audio("audio/note"+num+".wav");
    // document.getElementById("text").innerText+=num;
    audio.play();
    print(num)


}
function print(num){
    if (num == "1")
    {
        document.getElementById("text").innerHTML+="do ";
    }
    else if (num == "2")
    {
        document.getElementById("text").innerHTML+="re ";
    }
    else if (num == "3")
    {
        document.getElementById("text").innerHTML+="me ";
    }
    else if (num == "4")
    {
        document.getElementById("text").innerHTML+="fa ";
    }
    else if (num == "5")
    {
        document.getElementById("text").innerHTML+="so ";
    }
    else if (num == "6")
    {
        document.getElementById("text").innerHTML+="la ";
    }
    else if (num == "7")
    {
        document.getElementById("text").innerHTML+="si ";
    }
}



