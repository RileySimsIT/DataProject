function menu(){
    document.getElementById("content").innerHTML= `\
        <h1 style="text-align:center; border-bottom:1px solid #000000; width:80%; margin-left:10%; margin-top:0px;">Main Menu</h1>
        <button id="btnBars" class="menuButton" onclick="barsLoad()" style="width:60%; margin-left: 20%;">Bars</button>
        <button id="btnFactorial" class="menuButton" onclick="factorialLoad()" style="width:60%; margin-left: 20%; ">Factorial</button>
    `;
}