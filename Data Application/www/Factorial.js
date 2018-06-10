function factorialLoad(){
    var dhtml = `
        <p style="display:none;" id="count" >0</p>
        <h2 style="text-align:center; width:40%; margin-left: 30%; margin-bottom:0px; margin-top:0px;">Iterative</h2>
        <h1 class="title">Factorial Calculator</h1>
        <div id="input" style="display:block; text-align:center;">
            <label for="numIn">Input a number </label>
            <input type="number" id="numIn" style="border:1px solid black; padding:1px; width:30px;">
            <button id="btnCalc" value="Calculate" onclick="factorial()" style="width:20%;">Calculate!</button> </br>
            <div id="errorBox" style="width:90%; margin-left:5%; text-align:center; border: 1px solid #FF0000; margin-top:10px; display:none; box-shadow: 2px 2px #666666;">
                    <label id="lblError" style="color: #FF0000;">Error: </label>
            </div>
            <div id="output" style="text-align: center; margin-top: 10px; width:80%; margin-left: 10%; display:none;">

            </div>
            <button id="menu" onclick="menu();" class="menuButton" style="position: absolute; top:550px; width:40%; left:30%;">Main Menu</button>
        </div>
    `;
    document.getElementById("content").innerHTML = dhtml;
}

function factorial(){
    var count = document.getElementById("count").innerHTML;
    var n = document.getElementById("numIn").value;
    if(!n){
        document.getElementById("errorBox").style.display = "block";
        document.getElementById("output").style.display = "none";
        document.getElementById("lblError").innerHTML = "ERROR: Input a number to calculate!";
        document.getElementById("output").innerHTML = "";
        count = 0;
        document.getElementById("count").innerHTML = count;
    } else if(n.length > 2){
        document.getElementById("errorBox").style.display = "block";
        document.getElementById("output").style.display = "none";
        document.getElementById("lblError").innerHTML = "ERROR: Numbers must be 2 digits or less!";
        document.getElementById("output").innerHTML = "";
        count = 0;
        document.getElementById("count").innerHTML = count;
    } else{
        document.getElementById("errorBox").style.display = "none";
        document.getElementById("output").style.display = "block";
        var val = n;
        var outVal = val*1;
        for(i=1; i<n; ++i){
            if(n!=1){
                var x = val-1;
                outVal = outVal*x;
                val--;
            }
        }
        if(count<10){
            document.getElementById("output").innerHTML += "<div style='text-align: center; border: 1px solid #888888; margin-top: 10px; width:80%; margin-left: 10%; box-shadow: 2px 3px #666666; padding-left:5px; padding-right:5px;'><p style='font-size:10px;'>"+n+" Factorial: "+outVal+"</p></div>";
            count++;
            document.getElementById("count").innerHTML = count;
        }else{
            document.getElementById("output").innerHTML = "";
            count = 1;
            document.getElementById("count").innerHTML = count;
            document.getElementById("output").innerHTML += "<div style='text-align: center; border: 1px solid #888888; margin-top: 10px; width:80%; margin-left: 10%; box-shadow: 2px 3px #666666; padding-left:5px; padding-right:5px;'><p style='font-size:10px;'>"+n+" Factorial: "+outVal+"</p></div>";
        }
    }
}