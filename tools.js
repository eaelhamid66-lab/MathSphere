const tools = [

{
title:"Calculator",
description:"Simple math calculator",
content:`
<input class="tool-input" id="calcInput" placeholder="2+3*5">
<button onclick="calculate()">Calculate</button>
<div class="result" id="calcResult"></div>
`
},

{
title:"Distance Between Two Points",
description:"Find distance using coordinates",
content:`
<input class="tool-input" id="x1" placeholder="x1">
<input class="tool-input" id="y1" placeholder="y1">
<input class="tool-input" id="x2" placeholder="x2">
<input class="tool-input" id="y2" placeholder="y2">
<button onclick="distance()">Solve</button>
<div class="result" id="distanceResult"></div>
`
},

{
title:"Quadratic Equation Solver",
description:"Solve ax² + bx + c = 0",
content:`
<input class="tool-input" id="a" placeholder="a">
<input class="tool-input" id="b" placeholder="b">
<input class="tool-input" id="c" placeholder="c">
<button onclick="quadratic()">Solve</button>
<div class="result" id="quadResult"></div>
`
},

{
title:"Percentage Calculator",
description:"Calculate percentages easily",
content:`
<input class="tool-input" id="percent" placeholder="Percent">
<input class="tool-input" id="number" placeholder="Number">
<button onclick="percentage()">Calculate</button>
<div class="result" id="percentResult"></div>
`
}

];

const box=document.getElementById("toolsBox");

tools.forEach(tool=>{
box.innerHTML+=`
<div class="formula-card">
<h2>${tool.title}</h2>
<p>${tool.description}</p>
${tool.content}
</div>
`;
});

function calculate(){
let input=document.getElementById("calcInput").value;
document.getElementById("calcResult").innerText=eval(input);
}

function distance(){
let x1=+document.getElementById("x1").value;
let y1=+document.getElementById("y1").value;
let x2=+document.getElementById("x2").value;
let y2=+document.getElementById("y2").value;

let d=Math.sqrt((x2-x1)**2+(y2-y1)**2);

document.getElementById("distanceResult").innerText="Distance = "+d.toFixed(2);
}

function quadratic(){
let a=+document.getElementById("a").value;
let b=+document.getElementById("b").value;
let c=+document.getElementById("c").value;

let d=b*b-4*a*c;

if(d<0){
document.getElementById("quadResult").innerText="No Real Solutions";
return;
}

let x1=(-b+Math.sqrt(d))/(2*a);
let x2=(-b-Math.sqrt(d))/(2*a);

document.getElementById("quadResult").innerText=`x₁=${x1.toFixed(2)} , x₂=${x2.toFixed(2)}`;
}

function percentage(){
let p=+document.getElementById("percent").value;
let n=+document.getElementById("number").value;

document.getElementById("percentResult").innerText=(p/100*n);
}

