/* ============================= */
/* UNIT 3 FULL QUESTION BANK */
/* ============================= */

const allQuestions = [

/* ================= GROUP 1 : COMPLETE ================= */

{q:"If f(x)=x−6 then f(x)=0 when x equals ?",a:"x = 6"},
{q:"The set of all possible input values is called ?",a:"Domain"},
{q:"The set of all output values is called ?",a:"Range"},
{q:"Degree of constant function f(x)=7 ?",a:"0"},
{q:"Every function is a relation but not every relation is a function.",a:"True"},
{q:"If f(x)=4 then f(0)= ?",a:"4"},
{q:"Domain of square root requires ?",a:"Expression ≥ 0"},
{q:"Division by zero is ?",a:"Undefined"},
{q:"General form of linear function ?",a:"f(x)=ax+b"},
{q:"Graph of linear function ?",a:"Straight line"},
{q:"General quadratic form ?",a:"f(x)=ax²+bx+c"},
{q:"Quadratic graph shape ?",a:"Parabola"},
{q:"If a>0 parabola ?",a:"Opens upward"},
{q:"If a<0 parabola ?",a:"Opens downward"},
{q:"Degree of cubic function ?",a:"3"},
{q:"Cubic curve shape ?",a:"S-shaped"},
{q:"Simplest fractional function ?",a:"f(x)=1/x"},
{q:"Fractional forbidden value ?",a:"Denominator = 0"},
{q:"Exponential function form ?",a:"f(x)=a^x"},
{q:"Domain of exponential function ?",a:"All real numbers"},
{q:"Range of exponential function ?",a:"y>0"},

/* ================= GROUP 2 : MCQ ================= */

{q:"Which is a linear function?",a:"2x+3"},
{q:"Range of f(x)=x² ?",a:"y ≥ 0"},
{q:"If f(x)=x+5 then f(-4) ?",a:"1"},
{q:"Which relation is NOT a function?",a:"(1,3),(1,5),(2,4)"},
{q:"Degree of polynomial 2−5x+2 ?",a:"1"},
{q:"Real function when ?",a:"Domain & codomain ⊂ R"},
{q:"Graph representing a function ?",a:"Horizontal line"},
{q:"Relation not function ?",a:"x²+y²=25"},
{q:"Domain means ?",a:"All inputs"},
{q:"Range means ?",a:"All outputs"},
{q:"Domain of rational excludes ?",a:"Denominator zero"},
{q:"Linear function intersects x-axis at ?",a:"(6,0)"},
{q:"Graph of f(x)=-2 ?",a:"Parallel to x-axis"},
{q:"y-intercept of 5-x ?",a:"(0,5)"},
{q:"Slope of x-2 ?",a:"1"},
{q:"Vertex of (x-3)²+5 ?",a:"(3,5)"},
{q:"Degree of cubic ?",a:"3"},
{q:"Graph of x³ passes through ?",a:"(0,0)"},
{q:"Vertical asymptote example ?",a:"x=5"},
{q:"Exponential function example ?",a:"2^x"},
{q:"Exponential condition ?",a:"a>0 , a≠1"},
{q:"Base of 5^x ?",a:"5"},
{q:"Exponential decay ?",a:"(1/2)^x"},
{q:"Domain of 2^x ?",a:"R"},
{q:"Range of 3^x ?",a:"y>0"},
{q:"Exponential graph passes ?",a:"(0,1)"},
{q:"If a>1 exponential ?",a:"Increasing"},
{q:"2^x+3 shift ?",a:"Up 3 units"},

/* ================= GROUP 3 : PROBLEMS ================= */

{q:"If f(x)=3x−4 find f(2)",a:"2"},
{q:"If f(x)=2x+4 find f(-3)",a:"-2"},
{q:"Relation b=2a+1 is function?",a:"Yes, one output for each input"},
{q:"Domain of polynomial function ?",a:"All real numbers"},
{q:"Domain of √(x−1) ?",a:"x ≥ 1"},
{q:"Domain excluding denominator roots ?",a:"Exclude values making denominator zero"},
{q:"Graph f(x)=5−x intercepts ?",a:"(5,0) and (0,5)"},
{q:"Quadratic graph vertex example ?",a:"(-1,0)"},
{q:"Describe exponential 3^x domain & range ?",a:"Domain R , Range y>0"},

/* ================= GROUP 4 : TRUE / FALSE ================= */

{q:"Domain is set of inputs.",a:"True"},
{q:"Range is outputs.",a:"True"},
{q:"Constant function parallel to x-axis.",a:"True"},
{q:"Linear graph is straight line.",a:"True"},
{q:"Piecewise function has more than one rule.",a:"True"},
{q:"Symmetric point of (x−1)³ is (1,0).",a:"True"},
{q:"Exponential base always positive.",a:"True"},
{q:"Domain of a^x is real numbers.",a:"True"},
{q:"If a>1 exponential increasing.",a:"True"},
{q:"0<a<1 exponential decreasing.",a:"True"},

/* ================= GROUP 5 : MATCH (Converted) ================= */

{q:"f(x)=3 represents ?",a:"Parallel to x-axis"},
{q:"f(x)=4−x slope ?",a:"-1"},
{q:"3x+2 transformation ?",a:"Shift up"},
{q:"2x−3 transformation ?",a:"Shift right"},
{q:"(1/2)^x represents ?",a:"Decay"},
{q:"7x exponential type ?",a:"Growth"}

];


/* ================= PAGINATION SYSTEM ================= */

let page = 1;
const perPage = 10;

function showQuestions(){

const start = (page-1)*perPage;
const end = start+perPage;

const container = document.getElementById("questions");
container.innerHTML="";

allQuestions.slice(start,end).forEach(q=>{

container.innerHTML+=`
<div class="question-card">
<p>${q.q}</p>

<button class="answer-btn"
onclick="showAnswer(this,'${q.a}')">
Show Answer
</button>

<div class="answer"></div>
</div>
`;

});

document.getElementById("pageNum")
.innerText=`Page ${page} / ${Math.ceil(allQuestions.length/perPage)}`;

}

function showAnswer(btn,answer){
const ans=btn.nextElementSibling;
ans.innerText=answer;
btn.style.background="#00c896";
btn.innerText="Answered ✓";
}

function nextPage(){
if(page*perPage<allQuestions.length){
page++;
showQuestions();
}
}

function prevPage(){
if(page>1){
page--;
showQuestions();
}
}

showQuestions();