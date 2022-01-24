var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");
var txtoutput = document.querySelector("#txtoutput")

var serverurl = "https://api.funtranslations.com/translate/minion.json"

function getTranslation(text){
    return serverurl + "?" + "text="+text
}

function errorhandler(error){
    console.log("error occured!!", error)
    alert("Something wrong with server!! Try again after some time.")
}

function clickEventHandler(){

var inputtxt = txtinput.value;

fetch(getTranslation(inputtxt))
.then(response => response.json())
.then(json =>{ 
            var translatedText = json.contents.translated
                txtoutput.innerText = translatedText})
.catch(errorhandler)
}

btntranslate.addEventListener("click",clickEventHandler)
