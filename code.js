
var isfinished = "false";
var begin = "x";
var img = "url('./images/o.svg')";
var box1 = "a",box2 = "b",box3 = "c",box4 = "d",box5 = "e",box6 = "f",box7 = "g",box8 = "h",box9 = "i";
document.getElementById("circle1").style.fill = "rgb(40 201 109)";
var score1=0,score2=0;
let winboxes = [];
let notwinboxes = [];

function onlod(){
    const box  = document.getElementsByClassName("grid-item");
    for(let i =0;i<9;i=i+1){
        box[i].style.padding = "25px";
        box[i].style.border = "3px solid rgba(0, 0, 0, 0.8)";
    }

    document.getElementById("boxescontainer").style.maxWidth = "300px";
    document.getElementById("boxescontainer").style.height = "300px";
}

function XorO(box){
    if(isfinished == "false"){
        let r = box.id;

        if(box.style.backgroundImage == ""){
            
            //player1 X
            if(img == "url('./images/o.svg')"){
                box.style.backgroundImage = "url('./images/x.svg')";
                box.style.backgroundColor = "white"

                if(r == "box1") box1 = "x";
                if(r == "box2") box2 = "x";
                if(r == "box3") box3 = "x";
                if(r == "box4") box4 = "x";
                if(r == "box5") box5 = "x";
                if(r == "box6") box6 = "x";
                if(r == "box7") box7 = "x";
                if(r == "box8") box8 = "x";
                if(r == "box9") box9 = "x";

                if(isWin()){
                    document.getElementById("result").innerHTML = "Player 1 won";
                    score1++;
                    document.getElementById("score").innerHTML = score1 + " - " + score2;
                    isfinished = "true";

                    document.getElementById("restartbtn").style.opacity = "1";
                    document.getElementById("restartbtn").style.cursor = "pointer";
                    document.getElementById("restartbtn").addEventListener("click",restart);
                }

                else{
                    img = "url('./images/x.svg')";
                    document.getElementById("circle1").style.fill = "black";
                    document.getElementById("circle2").style.fill = "rgb(40 201 109)";
                }
                
            }

            //player2 O
            else {

                box.style.backgroundImage = "url('./images/o.svg')";
                box.style.backgroundColor = "#242222";

                if(r == "box1") box1 = "o";
                if(r == "box2") box2 = "o";
                if(r == "box3") box3 = "o";
                if(r == "box4") box4 = "o";
                if(r == "box5") box5 = "o";
                if(r == "box6") box6 = "o";
                if(r == "box7") box7 = "o";
                if(r == "box8") box8 = "o";
                if(r == "box9") box9 = "o";

                if(isWin()){
                    document.getElementById("result").innerHTML = "Player 2 won";
                    score2++;
                    document.getElementById("score").innerHTML = score1 + " - " + score2;
                    isfinished = "true";

                    document.getElementById("restartbtn").style.opacity = "1";
                    document.getElementById("restartbtn").style.cursor = "pointer";
                    document.getElementById("restartbtn").addEventListener("click",restart);

                }
                else {
                    img = "url('./images/o.svg')";
                    document.getElementById("circle2").style.fill = "black";
                    document.getElementById("circle1").style.fill = "rgb(40 201 109)";
                }
            }

            if(!isWin()){
                if(box1!="a" && box2!="b" && box3!="c" && box4!="d" && box5!="e" && box6!="f" && box7!="g" && box8!="h" && box9!="i" ){
                    document.getElementById("result").innerHTML = "tie !";
                    document.getElementById("restartbtn").style.opacity = "1";
                    document.getElementById("restartbtn").style.cursor = "pointer";
                    document.getElementById("restartbtn").addEventListener("click",restart);
                }
            }

        }
    }

}

function isWin(){
    if((box1 == box2 && box2 == box3) || (box4 == box5 && box5 == box6) || (box7 == box8 && box8 == box9) || (box1 == box4 && box4 == box7) || (box2 == box5 && box5 == box8) || (box3 == box6 && box6 == box9) || (box1 == box5 && box5 == box9) || (box3 == box5 && box5 == box7)){
        if(box1 == box2 && box2 == box3){
            //first hori
            winboxes = [
                "box1","box2","box3"
            ];
            notwinboxes = [
                "box4","box5","box6","box7","box8","box9"
            ];
        } 
        if(box4 == box5 && box5 == box6){
            //second hori
            winboxes = [
                "box4","box5","box6"
            ];
            notwinboxes = [
                "box1","box2","box3","box7","box8","box9"
            ];
        } 
        if(box7 == box8 && box8 == box9){
            //third hori
            winboxes = [
                "box7","box8","box9"
            ];
            notwinboxes = [
                "box4","box5","box6","box1","box2","box3"
            ];
        } 
        if(box1 == box4 && box4 == box7){
            //first virti
            winboxes = [
                "box1","box4","box7"
            ];
            notwinboxes = [
                "box2","box3","box5","box6","box8","box9"
            ];
        }
        if(box2 == box5 && box5 == box8){
            //second virti
            winboxes = [
                "box2","box5","box8"
            ];
            notwinboxes = [
                "box1","box3","box4","box6","box7","box9"
            ];
        }
        if(box3 == box6 && box6 == box9){
            //third virti
            winboxes = [
                "box3","box6","box9"
            ];
            notwinboxes = [
                "box1","box2","box4","box5","box7","box8"
            ];
        }
        if(box1 == box5 && box5 == box9){
            //first ob
            winboxes = [
                "box1","box5","box9"
            ];
            notwinboxes = [
                "box2","box3","box4","box6","box7","box8"
            ];
        }
        if(box3 == box5 && box5 == box7){
            //second ob
            winboxes = [
                "box3","box5","box7"
            ];
            notwinboxes = [
                "box1","box2","box4","box6","box8","box9"
            ];
        }

        document.getElementById(winboxes[0]).style.backgroundColor = "rgb(40 201 109)";
        document.getElementById(winboxes[1]).style.backgroundColor = "rgb(40 201 109)";
        document.getElementById(winboxes[2]).style.backgroundColor = "rgb(40 201 109)";
        document.getElementById(notwinboxes[0]).style.opacity = "0.5";
        document.getElementById(notwinboxes[1]).style.opacity = "0.5";
        document.getElementById(notwinboxes[2]).style.opacity = "0.5";
        document.getElementById(notwinboxes[3]).style.opacity = "0.5";
        document.getElementById(notwinboxes[4]).style.opacity = "0.5";
        document.getElementById(notwinboxes[5]).style.opacity = "0.5";

        return true;
    }

    return false;
}

function restart(){
    isfinished = "false";
    box1 = "a",box2 = "b",box3 = "c",box4 = "d",box5 = "e",box6 = "f",box7 = "g",box8 = "h",box9 = "i";
    document.getElementById("result").innerHTML = "";
    if(begin == "o"){
        begin = "x";
        img = "url('./images/o.svg')";
        document.getElementById("circle1").style.fill = "rgb(40 201 109)";
        document.getElementById("circle2").style.fill = "black";
    }
    else {
        begin = "o";
        img = "url('./images/x.svg')";
        document.getElementById("circle2").style.fill = "rgb(40 201 109)";
        document.getElementById("circle1").style.fill = "black";
    }

    for(i=1;i<10;i++){
        var s = "box"+i;
        document.getElementById(s).style.backgroundImage = "";
        document.getElementById(s).style.backgroundColor= "#00ffff";
        document.getElementById(s).style.opacity= "1";
    }

    document.getElementById("restartbtn").style.opacity = "0.4";
    document.getElementById("restartbtn").style.cursor = "not-allowed";
    document.getElementById("restartbtn").removeEventListener("click",restart);

}