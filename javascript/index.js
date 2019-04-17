/*function mySign()
{
    document.write("my first blog");
}
 table(5);
function table(a){
    for(var i=1; i<=10; i++)
    document.write("<br/>"+a*i);
}
rest(1,2,4,6,8);
function rest(...args){
    for(event of args){
        console.log(event);
    }

}
/*const colors = ['red' , 'green', 'blue' ];
for(let i=0; i<=colors.length; i++){
    console.log('colors at position ${i} is ${colors[i]}');
}

const colors = ['red', 'green', 'blue'];
colors.forEach( (color, index)) =>
console.log(`colors at position ${index} are ${color[index]}`);*/
/*
function sing(song, callback){
    console.log(song);
    callback();
    //if(typeof(callback) === 'function'){
       // callback();
   // }
}

function dance(){
    console.log('wanna dance with my salaar');
}
sing('let me love you',dance);


function add(a,b,callback){
    console.log(a,b);
    callback();
}
function multiply(){
    console.log("kkkk");
}
add(2,3,multiply);

['red', 'green', 'blue'].map((index, color, array) => 
'elements are position ${index} are ${color}. there are ${array.length}'
);
var fruit = ["banana", "mango"];
document.getElementById("demo").innerHTML = fruit;

function myfunction(){
    fruit.reverse();
    document.getElementById("demo").innerHTML = fruit;

}

var str = "apple";
document.getElementById("palat").innerHTML = str;
function ppalat(){
    str.reverse();
    document.getElementById("palat").innerHTML = str;
    for(var i=str.length; i>=0; i--){
        document.getElementById("palat").innerHTML = str[i];
    }
}
var number = [1,2,3].map(x => 2*x);
document.write(number);

var colors = [10, 20, 30, 40];
var newarray = colors.map((color,index) => {             //function(color,index)
    color++;
    return(color);
});
console.log(colors);
console.log(newarray);

/*var pricess = [
    {price = "100"},
    {price = "200"},
    {price = "300"},
    {price = "400"}
];
pricess.map(function(value){
    console.log(value);
});*/   
/*const myName = 'sana';
var name1 = myName.split("");
console.log(name1)
const greeting = `hello, i am ${name1.reverse().join("")}`;
console.log(greeting);

// const lit = ${hello("world");
// function hello(value){
// return `hello ${value}`
// }
const fruits = ["apples", "bananas", "mango"];
let vegetables = ["carrot", "potato"];
console.log(vegetables)
let another = [...fruits,...vegetables]
console.log(another);
var another1 = fruits.concat(vegetables)
console.log(another1)

//const produce = [...fruits, vegetables];
//console.log(produce);
function average(...y)
{
    var i=0;
    var len = y.length
    for(const a of y)
    {
        i+=a
    }
    var num= i/len
    return num? num:0;
}
console.log(average());
function sqr(value)
{
    return value*value
}
var one = [1,2,3,4,5];
var name2 = one.map(function(value,index,array){
    return sqr(value)
})
 console.log(name2);*/
 /*var name4 = ["wajiha" , "sana" , "baby"].reduce((a,b) => a+b.length,0 )
 console.log(name4)*/
 //const colors = ['red', 'green', 'blue'];
//colors.forEach( (color, index)) =>
//console.log(`colors at position ${index} are ${color[index]}`);

//const upperSized = ['sana', 'bhensa', 'wajiha'].map(name => name.toUpperCase());
//arrow functions
/*const squares = [1,2,3,4,5,6,7,8,9,10].map( square => {
    console.log(square);
    const mul = square*square;
    console.log(mul);
    return mul;
   // console.log(...squares);
})*/
/*console.log(...squares);*/
//var x = "sana";
//document.getElementById(third).innerHTML = x;

/*const orderIcecream = (flavor, cone) => console.log (`here is your ${flavor} in ${cone}`);
orderIcecream('chocolate', 'waffle');*/

//const name5 = (name1, name2) => console.log = (`${name1} and ${name2} hate each other`);
//name5('sana', 'bhensa');

/*function greet(name, daughter){
    name = (typeof name !== "undefined") ? name : 'Dont know u';
    daughter = (daughter !== "undefined") ? daughter : 'welcome';
    console.log(name);
    console.log(daughter);
    const i = `${name} and ${daughter}`;
    return i;                              //console.log(i) aesy bhi krskty hain bagair return kyh
}
var x = greet('sana', 'saleem');
console.log(x);

function buildHouse(quantity, color, quality){
    return `${quantity} ${color} ${quality}`;

}
var y = buildHouse(1, "red", "brick");
console.log(y);
var one = ["sana", "wajiha", "numair"];
var [two, three, four] = one;
console.log(two, three, four);

var one1 = {
    foo: "sana",
    boo: "hello",
    baz: "goodbye",
}*/
/*var foo1 = one1.boo;
var boo1 = one1.foo;
var baz1 = one1.baz;
console.log(foo1);
console.log(boo1);
console.log(baz1);*/

/*var {foo, boo, baz} = one1;
console.log(foo, boo, baz);

const name = 'sana';
const realName =  'saleem';
const ironMan = {name, realName};
console.log(name,realName);

const hulk = {name: 'hulk', ['catch' + 'phrase']: 'hulk smashjee!'};
console.log({name: 'hulk', ['catch' + 'phrase']: 'hulk smashjee!'})
console.log(hulk.name, hulk.catch);
const supergirl = {[name]: 'supergirl'};
console.log(supergirl[name]);  

const obj1 = {
    yourName: "rabeea",
    yourFatherName: "sana",
}
console.log(obj1.yourName);
console.log(obj1.yourFatherName);

var mainNumbers = [1,2, 3,4,5];
var anotherNumber = mainNumbers.reduce( (prev,next) => prev+next);
console.log(anotherNumber);
//document.getElementById(third).innerHTML = one1.foo;
var second = 'steve';
var realMan = Symbol.for(second);
//realMan[second] = 'daredevil';
//console.log(Symbol.keyFor(realMan));
console.log(Symbol.keyFor(realMan));
const hero = Symbol.for(123);
console.log(Symbol.keyFor(hero));*/
/*var obj;
obj[realMan] = 'daredevil';
console.log(obj[realMan]);*/
/*const dareDevil = {[realMan]: 'talha'};
console.log(dareDevil);
const superMan = {
    fly(){
        return 'up, up and eat ghaas';
    },
    add(){
        var a = 5;
        var b = 3;
        return a+b;
 }
}
console.log(superMan.fly());
console.log(superMan['fly']());
console.log(superMan.add());

var a = 4;
var b = 3;
var c = add(a,b);
function add(x, y){
    var i = 0;
    i = x + y;
    return i;

}
console.log(c)
Math.abs(3);
console.log(Math.abs(3));

const values = [1,2,3,4,5];
const res = values.reduce(function(prev, next){ 
     var j;
    j = prev + next;
    return j;
    
},0);
console.log(res);
const listItems = document.getElementsByTagName('li');
console.log(listItems);
console.log(listItems[0]);
document.getElementById('third').innerHTML = listItems[0];
 document.getElementById('third').length;
 var z = document.getElementsByTagName("p");
 document.getElementById('second').innerHTML = "bhensa is a fucking bitch:chakkar chalati hai hameed k saath" + z[0].innerHTML; 
const wonderWoman = document.querySelector('li:last-child');
console.log(wonderWoman);
const heroes = document.getElementById("roaster");
console.log(heroes.childNodes);
const g = heroes.childNodes;
for(const i in g){
console.log(g[i].textContent);
}
console.log(heroes.parentNode);
const rr = document.querySelectorAll('ul#roaster li');
for(const k in rr){
    console.log(rr[k].textContent);
}*/
//console.log(heroes.textContent)
//console.log(heroes.previousSibling);
//const dd = h4.innerHTML = dog;
//document.write('dd');
/*const listed = document.querySelector('#roaster li');
const wonder = document.createElement('li');
wonder.textContent = 'c++';*/
//console.log(wonder.textContent);
/*listed.appendChild(wonder);
function createElement(tag, text){
    const e1 = document.createElement(tag);
    e1.textContent = (text);
    return e1;

}
const e2 = createElement('li','c#');
listed.appendChild(e2);
console.log(e2);
document.write(e2)
const e3 = document.createElement('p');
const e4 = e3.innerHTML = "hello there nice to meet you where you have been";
document.write(e4);*/
//addEventListener('keydown', highlight);
//function highlight(event){
 //   event.target.classList.toggle('highlight');
//}

/*const onceParagraph = document.getElementById('demo');
onceParagraph.addEventListener('click', remove);
function remove(event){
    console.log('enjoy this while it lasts');
    onceParagraph.style.backgroundColor = 'red'
    onceParagraph.removeEventListener('click', remove);

}
const hh = document.getElementById('palat');
console.log(hh);
const obj9 = {
    fname: "sana",
    lname: "Numair sajid",
    status: "married",

}
console.log(obj9);*/
//localStorage.setItem('user',JSON.stringify(obj9));
/*const relyOne = document.createElement('div');
relyOne.setAttribute('class', 'two');
relyOne.textContent = "hello world";
relyOne.style.backgroundColor = 'red';
document.getElementById('one').appendChild(relyOne);
const makeFirst = document.createElement('div');
makeFirst.setAttribute('class', 'card-body');
makeFirst.textContent = " hi there hello bhensa fucker";
//makeFirst.style.backgroundColor = "pink";
//makeFirst.style.borderRadius = "20px";
//makeFirst.style.width = "200px";
document.getElementsByClassName('card').appendChild(makeFirst);
//document.getElementById('card').style.backgroundColor = "yellow";
/*function addData(){
  const createFirst = document.createElement('form');
  const createSecond = document.createElement('input');
  createSecond.type = "text";
  createSecond.name = "username";
  createSecond.value = "name";
  createFirst.appendChild(createSecond);
}
let myObj = {
    name: "sana",
    age: 30,
};
let myObj_serialized = JSON.stringify(myObj);
localStorage.setItem("myObj", myObj_serialized);
let myObj_deserial = JSON.parse(localStorage.getItem("myObj"));
console.log(myObj_deserial);*/






/*const makeFirst = document.createElement('div');
makeFirst.setAttribute('class', 'card');
document.body.appendChild(makeFirst);
const makeSecond = document.createElement('div');
makeSecond.setAttribute('class', 'card-body');
makeFirst.appendChild(makeSecond);
const para = makeSecond.textContent = "hello world";
document.write(para);
//makeSecond.style.backgroundColor = 'pink';
const one = makeSecond.nodeType;
console.log(one);
const two = makeFirst.nodeType;
console.log(two);
const makeList = document.createElement('ul');
makeSecond.appendChild(makeList);
const three = makeList.nodeType;
console.log(three);
const four = makeFirst.children;
console.log(four);
const firstPara = document.createElement('div');
const five = firstPara.textContent = "hii my name is sana";
document.write(five);
firstPara.style.color = 'pink';
//const para = document.getElementsByClassName() = "Hello world";
//document.write(para);

localStorage.setItem("name", "Me numair se khafa hun wo bad hai");
console.log(localStorage.getItem("name"));
localStorage.setItem("age", "19");
console.log(localStorage.getItem("age"));
localStorage.removeItem("name");
localStorage.getItem('user');*/
//main javascript starts her
const insertBtn = document.getElementById('insert');
insertBtn.addEventListener('click', storage);
const inpKey = document.getElementById('inputname4');
const inpEmailKey = document.getElementById('inputemail');
const inpSalKey = document.getElementById('inputsalary');
const inpGitKey = document.getElementById('inputgithublink');
const inpDesKey = document.getElementById('inputdesignation');
const storeData = document.getElementById('store');
 function storage(event){
     event.preventDefault();
   // const array = [inpKey, inpEmailKey, inpSalKey, inpGitKey, inpDesKey];
    const obj1 = {
        firstKey: inpKey.value,
        secondKey: inpEmailKey.value,
        thirdKey: inpSalKey.value,
        fourthKey: inpGitKey.value,
        fifthKey: inpDesKey.value,
     }
   /*  const createCard = document.createElement('div');
     createCard.setAttribute('class','card');
     const createInnerCard = document.createElement('div');
     createInnerCard.setAttribute('class','card-body');
     const dltBtn = document.createElement('input');
     dltBtn.setAttribute('class', 'btn btn-info');
     dltBtn.type = "button";
     dltBtn.value = "Delete";
     const editBtn = document.createElement('input');
     editBtn.setAttribute('class', 'btn btn-info');
     editBtn.type = "button";
     editBtn.value = "Edit";*/
     createAnother(obj1);


    // createInnerCard.textContent = obj1.secondKey;
    //createInnerCard.textContent = `${obj1.firstKey}\n ${obj1.secondKey}"\n"${obj1.thirdKey}"\n"${obj1.fourthKey}"\n"${ obj1.fifthKey}`;
     //for(const value in Object.values(obj1)){
       //createInnerCard.textContent = value;
    //}
   // createInnerCard.appendChild(dltBtn);
    //createInnerCard.appendChild(editBtn);
     //createCard.appendChild(createInnerCard);
   //  document.body.appendChild(createCard);
     //document.getElementById('createfirst').appendChild(createCard);
    }
     function createAnother(myObj){
         const createCard = document.createElement('div');
         createCard.setAttribute('class', 'card');
         const createInnerCard = document.createElement('div');
         createInnerCard.setAttribute('class','card-body');
         const showValue = Object.values(myObj);
         console.log(showValue);
         const array = [];
         for(var i=0; i<=array.length;i++){
             array[i] = document.createElement('div');
             array[i].setAttribute('class','firstdiv');
             array[i].textContent = showValue[i];
             createInnerCard.appendChild(array[i]);
         }
         createCard.appendChild(createInnerCard);
         document.body(createCard);
         document.getElementById('createfirst').appendChild(createCard);
         



     }
    /*const firstKey = inpKey.value;
    const secondKey = inpEmailKey.value;
    const thirdKey = inpSalKey.value;
    const fourthKey = inpGitKey.value;
    const fifthKey = inpDesKey.value;
    console.log(firstKey);
    console.log(secondKey);
    console.log(thirdKey);
    console.log(fourthKey);
    console.log(fifthKey);*/
   /* const obj1 = {
       firstKey: inpKey.value,
       secondKey: inpEmailKey.value,
       thirdKey: inpSalKey.value,
       fourthKey: inpGitKey.value,
       fifthKey: inpDesKey.value,
    }*/
   // let myObj_serialized = JSON.stringify(obj1); //main storage here
    //console.log(myObj_serialized);
   // localStorage.setItem("obj1", myObj_serialized);
    //console.log(localStorage);
   /* let myObj_deserialized = JSON.parse(localStorage.getItem("obj1"));
    console.log(myObj_deserialized);*/
/*console.log(firstKey);
const array = [firstKey, secondKey, thirdKey, fourthKey, fifthKey];

console.log(array);*/
