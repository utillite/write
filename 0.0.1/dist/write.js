//BY KANISH RAVIKUMAR, Crashers Team, Project UtilLite
//Use FOR FREE
//Camera tag has been removed in order to prevent misuse

var Creatorscripts = [];
var Pagescs = [];
const body = document.body
var styl = document.createElement('style')
styl.innerHTML = "creator,page{display:none;}";
body.appendChild(styl);
var codes = document.getElementsByTagName('creator');



var looper = document.getElementsByTagName('loop');
for(var i = 0; i < looper.length; i++){
    var loopB = looper[i].getAttribute('begin');
    var loopE = looper[i].getAttribute('end');
    loopE = loopE - 1;
    var loopN = looper[i].getAttribute('container');
    var code = looper[i].innerHTML;
    for(var LPR = loopB; LPR < loopE; LPR++){
        looper[i].innerHTML += code;
    }
}

function ElemCreate(codestring){
  var thisElem = codestring.split(/[{]/);
  var eleM = thisElem[0].trim();
  var props = thisElem[1].replace('}',"");
  var propertyForThis = props.split(/[,]/);
  var propNo = propertyForThis.length;
  var elemD = document.createElement(eleM);
  for(let i = 0; i < propNo; i++){
      var propSp = propertyForThis[i].split(/[:]/)
      var propKey = propSp[0].trim();
      var propVal = propSp[1].trim();
      if(propKey == "iC"){
          elemD.innerHTML = propVal;
      }
      else if(propKey == "iT"){
          elemD.innerText = propVal;
      }
      else{
          elemD.setAttribute(propKey, propVal)
      }
  }
  body.appendChild(elemD)
}

for(let i = 0; i < codes.length; i++){
  Creatorscripts[i] = codes[i].innerText;
  var newsk = Creatorscripts[i].split(/[;]/)
  var newskNo = newsk.length;
  for(let j = 0; j < newskNo; j++){
      ElemCreate(newsk[j])
  }
}


const EntryBox = "input";
const Button = "button";
const UnorderedList = "ul";
const ListElement = "li";
const Canvas = "canvas";
const Url = "a";
const Div = "div";



const QueryString = window.location.search; 
const url = new URLSearchParams(QueryString);
var showCookies = document.cookie;

function $get(){
    function byId(element_id){
      return document.getElementById(element_id);
    }
    function byClass(element_class){
      return document.getElementsByClassName(element_class);
    }
    function byTag(tag){
      return document.getElementsByTagName(tag);
    }
    function create(element){
      document.createElement(element)
    }
    function remove(element){
      document.removeChild(element)
    }
    function replace(old, new_){
      document.replaceChild(new_, old)
    }
    function append(element){
      document.appendChild(element)
    }
    $get.byId = byId;
    $get.byClass = byClass;
    $get.byTag = byTag;
    $get.create = create;
    $get.remove = remove;
    $get.replace = replace;
    $get.append = append;
  }
  $get();

function newParams(param, value){
    window.location.assign(window.location.href+"?"+param+"="+value)
}

function page(){

    function title(value){
      document.title = value;
    }
    function goto(url){
      window.location.assign(url);
    }
    function openNew(url){
        window.open(url);
    }
    function link(){
      return window.location.href;
    }
    function height(){
      return window.innerHeight;
    }
    function width(){
      return window.innerWidth;
    }
    function end(){
      window.close()
    }
    function back(){
      history.back()
    }
    function forward(){
      history.forward()
    }
    function reload(time){
      if(time == undefined){
        time = 0;
      }
      setTimeout(function(){
   window.location.reload();
}, time);
    }
    function makeCookie(cookie, value){
      document.cookie = cookie+"="+value;
    }
    
    page.title = title;
    page.goto = goto;
    page.link = link;
    page.height = height;
    page.width = width;
    page.end = end;
    page.new = openNew;
    page.reload = reload;
    page.back = back;
    page.forward = forward;
    page.makeCookie = makeCookie;
}
page();
 

function create(item, JsonVal){
    var body = document.getElementsByTagName('body')[0];
    var exb = document.createElement(item);
  
    var JsonV = JSON.stringify(JsonVal);
    var JSS = JSON.parse(JsonV)
    for(var ech in JSS){
      exb.setAttribute(ech, JSS[ech])
    }
    body.appendChild(exb);
  }


function print(text){
  
  var body = document.getElementsByTagName('body')[0];
  var exb = document.createElement('lable');
  exb.setAttribute('name', text);
  exb.setAttribute('id', text);
  exb.setAttribute('class', text);
  exb.innerHTML = text;
  body.appendChild(exb)
}
  
function newLine(){
  create("br", null)
}

function ErrorMsg(Message){
  console.error(Message)
}

function $set(object, JsonVal){
  var newItem = object;
  var JsonV = JSON.stringify(JsonVal);
    var JSS = JSON.parse(JsonV)
    for(var ech in JSS){
      newItem.setAttribute(ech, JSS[ech])
    }
}

function setStyle(object, property, style){
    object.style[property] = style;
}
//DONE
