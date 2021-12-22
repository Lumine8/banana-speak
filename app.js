var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var txtoutput = document.querySelector("#txtoutput")


function clickEventHandler(){
txtoutput.innerText = "tranlated "+txtinput.value
}
btntranslate.addEventListener("click",clickEventHandler)
