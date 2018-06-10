function primeLoad(){
    var dhtml = `
        <h1 class="title">Prime Calculator</h1>
        <div id="input" style="text-align: center; display:block;">
            <label for="num1">Find all primes between 1 and </label>
            <input type="number" id="num1" style="width:40px; border: 1px solid #4444; padding-left: 2px;"></input>
        </div>
        <div id="errorBox" style="width:90%; margin-left:5%; text-align:center; border: 1px solid #FF0000; margin-top:10px; display:none; box-shadow: 2px 2px #666666;">
                <label id="lblError" style="color: #FF0000;">Error: </label>
        </div>
        <div id="output" style="width: 90%; margin-left:5%; text-align: left;">

        </div>
        <div id="footer">
            <button id="menu" onclick="menu();" class="menuButton" style="position: absolute; top:555px; width:40%; left:5%;">Main Menu</button>
            <button id="calc" onclick="calcPrime();" class="menuButton" style="position: absolute; top:555px; width:40%; right:5%;">Calculate</button>
        </div>
    `;
    document.getElementById("content").innerHTML = dhtml;
}

function calcPrime(){
    var x = document.getElementById("num1").value;
    x = x*1;
    if(!x || x < 1){
        document.getElementById("errorBox").style.display = "block";
        document.getElementById("lblError").innerHTML = "ERROR: Please input a number greater than 1";
        document.getElementById("output").style.display = "none";
    }else if(!Number.isInteger(x)){
        document.getElementById("errorBox").style.display = "block";
        document.getElementById("lblError").innerHTML = "ERROR: Decimals are not allowed";
        document.getElementById("output").style.display = "none";
    }else if(x > 5520){
        document.getElementById("errorBox").style.display = "block";
        document.getElementById("lblError").innerHTML = "ERROR: Numbers over 5520 are restricted";
        document.getElementById("output").style.display = "none";
    }else{
        document.getElementById("output").innerHTML = "";
        document.getElementById("errorBox").style.display = "none";
        document.getElementById("output").style.display = "block";
        var out = "1, "
        if(x == 1 || x == 2){
            document.getElementById("output").innerHTML = "<p>The only prime number is...</p>";
            document.getElementById("output").innerHTML += "<p>1</p>"
        }else{
            for(var i = 2; i < x; ++i){
                if(isPrime(i)){
                    out += i+", ";
                }
            }
            if(x <= 1620){
                document.getElementById("output").innerHTML+= "<p style='border:1px solid #000000; padding: 5px; font-size:14px; box-shadow: 2px 3px #888888;'>"+out+"</p>";
            }else if(x <= 2170){
                document.getElementById("output").innerHTML+= "<p style='border:1px solid #000000; padding: 5px; font-size:12px; box-shadow: 2px 3px #888888;'>"+out+"</p>";
            }else if (x <= 3450) {
                document.getElementById("output").innerHTML+= "<p style='border:1px solid #000000; padding: 5px; font-size:10px; box-shadow: 2px 3px #888888;'>"+out+"</p>";
            }else{
                document.getElementById("output").innerHTML+= "<p style='border:1px solid #000000; padding: 5px; font-size:8px; box-shadow: 2px 3px #888888;'>"+out+"</p>";
            }
        }
    }
}

function isPrime(num){
    for(var i = 2; i < num; ++i){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}