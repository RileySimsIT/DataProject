function bars(){
    var dhtml = `       
        <h1 style="text-align:center; width:80%; margin-left:10%;">Random Bars</h1>
        <div id="wrap" style="width:80%; margin-left:10%; margin-top:60px; margin-bottom:40px;" >
            <div id="container" style="width:100%; border: 1px solid black; height:50px; background:white; margin-bottom:50px; box-shadow: 2px 5px #888888;">
                <div id="bar1" style="height:50px;"></div>
            </div>
            <div id="container" style="width:100%; border: 1px solid black; height:50px; background:white; margin-bottom:50px; box-shadow: 2px 5px #888888;">
                <div id="bar2" style="height:50px;"></div>
            </div>
            <div id="container" style="width:100%; border: 1px solid black; height:50px; background:white; margin-bottom:50px; box-shadow: 2px 5px #888888;">
                <div id="bar3" style="height:50px;"></div>
            </div>
            <div id="container" style="width:100%; border: 1px solid black; height:50px; background:white; margin-bottom:30px; box-shadow: 2px 5px #888888;">
                <div id="bar4" style="height:50px;"></div>
            </div>
            <button id="btnBars" onclick="bars()" style="margin-bottom:10px; width:40%; margin-left: 5%; float:left;">Refresh</button>
            <button onclick="menu();" style="margin-bottom:10px; width:40%; margin-right: 5%; float:right;">Main Menu</button>
        </div>`;
    document.getElementById("content").innerHTML = dhtml;
    var val = Math.floor((Math.random()*100)+1);
    var color;
    if(val > 66){
        color = "rgb(255,0,0)";
    } else if(val > 33){
        color = "rgb(255,255,0)";
    }else{
        color = "rgb(0,255,0)";
    }
    val = val + "%";
    document.getElementById("bar1").style.background=color;
    document.getElementById("bar1").style.transition = "width 2s";
    document.getElementById("bar1").style.width=val;
    document.getElementById("bar1").style.transition = "width 2s";

    val = Math.floor((Math.random()*100)+1);
    color;
    if(val > 66){
        color = "rgb(255,0,0)";
    } else if(val > 33){
        color = "rgb(255,255,0)";
    }else{
        color = "rgb(0,255,0)";
    }
    val = val + "%";
    document.getElementById("bar2").style.background=color;
    document.getElementById("bar2").style.width=val;


    val = Math.floor((Math.random()*100)+1);
    color;
    if(val > 66){
        color = "rgb(255,0,0)";
    } else if(val > 33){
        color = "rgb(255,255,0)";
    }else{
        color = "rgb(0,255,0)";
    }
    val = val + "%";
    document.getElementById("bar3").style.background=color;
    document.getElementById("bar3").style.width=val;

    val = Math.floor((Math.random()*100)+1);
    color;
    if(val > 66){
        color = "rgb(255,0,0)";
    } else if(val > 33){
        color = "rgb(255,255,0)";
    }else{
        color = "rgb(0,255,0)";
    }
    val = val + "%";
    document.getElementById("bar4").style.background=color;
    document.getElementById("bar4").style.width=val;
}