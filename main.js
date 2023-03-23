var i = 0;
var col = new Array("red","green","aqua", "orange", "blue", "yellow");

function change(){
    document.getElementById("text").style.color = col[i];
    document.getElementById("text").style.transition = "4s";
    i++;
    if(i>col.length){
        i=0;
    }
    window.setTimeout("change()",3000);
};

document.getElementById("text").addEventListener("",change());;