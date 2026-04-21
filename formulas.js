const formulas = [

/* ================= LINEAR FUNCTION ================= */

{
title:"Linear Function",
law:"f(x)=mx+b",
desc:"General form of a linear function."
},

{
title:"Slope Formula",
law:"m = (y2 - y1)/(x2 - x1)",
desc:"Used to calculate slope between two points."
},

{
title:"Intercept Form",
law:"y - y1 = m(x - x1)",
desc:"Equation of line through known point."
},

{
title:"Parallel Lines",
law:"m1 = m2",
desc:"Parallel lines have equal slopes."
},

{
title:"Perpendicular Lines",
law:"m1 × m2 = -1",
desc:"Product of slopes equals -1."
},

/* ================= QUADRATIC FUNCTION ================= */

{
title:"Quadratic Standard Form",
law:"f(x)=ax²+bx+c",
desc:"General quadratic equation."
},

{
title:"Vertex Formula",
law:"x = -b / 2a",
desc:"Find vertex x-coordinate."
},

{
title:"Discriminant",
law:"Δ = b² - 4ac",
desc:"Determines nature of roots."
},

{
title:"Quadratic Formula",
law:"x = (-b ± √(b²-4ac)) / 2a",
desc:"Find solutions of quadratic."
},

{
title:"Axis of Symmetry",
law:"x = -b / 2a",
desc:"Line dividing parabola."
},

/* ================= CUBIC FUNCTION ================= */

{
title:"Cubic Function",
law:"f(x)=ax³+bx²+cx+d",
desc:"General cubic equation."
},

{
title:"End Behaviour",
law:"Depends on leading coefficient a",
desc:"Determines graph direction."
},

{
title:"Turning Points",
law:"Maximum 2 turning points",
desc:"Cubic graphs properties."
},

/* ================= FRACTIONAL FUNCTION ================= */

{
title:"Fractional Function",
law:"f(x)=1/x",
desc:"Basic rational function."
},

{
title:"Vertical Asymptote",
law:"Denominator = 0",
desc:"Where function undefined."
},

{
title:"Horizontal Asymptote",
law:"y=0",
desc:"Graph approaches but never touches."
},

{
title:"Domain Restriction",
law:"x ≠ 0",
desc:"Denominator cannot equal zero."
},

/* ================= EXPONENTIAL FUNCTION ================= */

{
title:"Exponential Function",
law:"f(x)=a^x",
desc:"Base a greater than 0."
},

{
title:"Growth Property",
law:"a>1 → growth",
desc:"Increasing exponential."
},

{
title:"Decay Property",
law:"0<a<1 → decay",
desc:"Decreasing exponential."
},

{
title:"Exponent Rule",
law:"a^m × a^n = a^(m+n)",
desc:"Multiplying same bases."
},

{
title:"Power Rule",
law:"(a^m)^n = a^(mn)",
desc:"Power of power rule."
},

{
title:"Negative Exponent",
law:"a^-n = 1/a^n",
desc:"Inverse power rule."
}

];



const box = document.getElementById("formulaBox");

formulas.forEach(f => {

const card = document.createElement("div");
card.className="formula-card";

card.innerHTML=`
<h2>${f.title}</h2>
<p>${f.desc}</p>

<button onclick="showLaw(this)">
Show Formula
</button>

<div class="law">${f.law}</div>
`;

box.appendChild(card);

});


function showLaw(btn){

const law = btn.nextElementSibling;

law.classList.toggle("show");
btn.classList.toggle("active");

if(btn.classList.contains("active")){
btn.innerText="Hide Formula";
}else{
btn.innerText="Show Formula";
}

}