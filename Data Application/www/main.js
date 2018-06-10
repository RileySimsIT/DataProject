function menu(){
    document.getElementById("content").innerHTML= `\
        <h1 class="title">Main Menu</h1>
        <button id="btnBars" class="menuButton" onclick="barsLoad()" style="width:60%; margin-left: 20%;">Bars</button>
        <button id="btnFactorial" class="menuButton" onclick="factorialLoad()" style="width:60%; margin-left: 20%; ">Factorial</button>
        <button id="btnPrime" class="menuButton" onclick="primeLoad()" style="width:60%; margin-left: 20%;">Prime</button>
    `;
}