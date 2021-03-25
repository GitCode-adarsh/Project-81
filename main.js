canvas = document.getElementById("logo_canvas");
cad = canvas.getContext("2d");

cad.beginPath();
cad.lineWidth = 5;
cad.strokeStyle = "blue";
cad.arc(250 , 210 , 40 , 0,2*Math.PI);
cad.stroke();

cad.beginPath();
cad.lineWidth = 5;
cad.strokeStyle = "gold";
cad.arc(300 , 250 , 40 , 0,2*Math.PI);
cad.stroke();

cad.beginPath();
cad.lineWidth = 5;
cad.strokeStyle = "black";
cad.arc(350 , 210 , 40 , 0,2*Math.PI);
cad.stroke();

cad.beginPath();
cad.lineWidth = 5;
cad.strokeStyle = "green";
cad.arc(400 , 250 , 40 , 0,2*Math.PI);
cad.stroke();

cad.beginPath();
cad.lineWidth = 5;
cad.strokeStyle = "red";
cad.arc(450 , 210 , 40 , 0,2*Math.PI);
cad.stroke();

cad.beginPath();
cad.lineWidth = 2;
cad.strokeStyle = "black";
cad.rect(150 , 143 , 430 , 200);
cad.stroke();

canvas.addEventListener("mousedown", mdown);

function mdown(e){

    color = document.getElementById("newcolor").value;
    xcoord = e.clientX - canvas.offsetLeft;
    ycoord = e.clientY - canvas.offsetTop;

    circle(xcoord , ycoord);
}

function circle(xcoord,ycoord){

    cad.beginPath();
    cad.lineWidth = 5;
    cad.strokeStyle = color;
    cad.arc(xcoord , ycoord , 40 , 0 ,2*Math.PI);
    cad.stroke();
}

function cleararea(){
    cad.clearRect(0 , 0 , canvas.width , canvas.height);
}
