var openPopup = document.getElementById("uniqueClicksP");
var closePopup= document.getElementById("closeX");
var unfocusPopup = document.getElementById("popupWin");

//when the user presses the percentage symbol, the popup window will appear
openPopup.onclick = function() {
    unfocusPopup.style.display = "block"
}

//if the user presses the x at the top right, the popup window will disappear
closePopup.onclick = function() {
    unfocusPopup.style.display = "none"
}

//if the user presses off the popupwindow (if they press the grayed out area) it will lose focus and close the popupwindow
window.onclick = function(e) {
    if (e.target == unfocusPopup) {
        unfocusPopup.style.display = "none";
    }
}

//code for filtering the different markets
//general variables that will be altered when filtering
const autoBlast = document.getElementById("autoBlast"); //the name of the market
const displayDate = document.getElementById("displayDate"); //the date for the statistics
const deliveredP = document.getElementById("deliveredP"); //the delivered percentage stat
const deliveredN = document.getElementById("deliveredN"); //the actual delivered number
const uniqueClicksP = document.getElementById("uniqueClicksP"); //the unique clicks percentage stat
const uniqueClicksN = document.getElementById("uniqueClicksN"); //the actual unique clicks number
const openedP = document.getElementById("openedP"); //the opened percentage stat
const openedN = document.getElementById("openedN"); //the actual opened number
const uniqueOpensP = document.getElementById("uniqueOpensP"); //the unique opens percentage stats
const uniqueOpensN = document.getElementById("uniqueOpensN"); //the actual unique opens number
const emailList = document.getElementById("emailList"); //the list of emails that appear with the popup window

/*
    Values have not been set for the following filters. 
    It has been set up to hopefully speed up the process of importing the information into the table.
*/

//atlanta filter
const atlanta = document.getElementById("atlanta");
atlanta.addEventListener("click", isAtlanta);

function isAtlanta() {
    autoBlast.innerHTML = "Atlanta"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95.55%"
    deliveredN.innerHTML = "300,000"
    uniqueClicksP.innerHTML = "1.55%"
    uniqueClicksN.innerHTML = "6,000"
    openedP.innerHTML = "35.55%"
    openedN.innerHTML = "150,000"
    uniqueOpensP.innerHTML = "18.55%"
    uniqueOpensN.innerHTML = "75,000"
    //not sure how we want to handle the list of emails
    emailList.innerHTML = "email1@email.com <br> email2@email.com"
}

//birmingham filter
const birmingham = document.getElementById("birmingham");
birmingham.addEventListener("click", isBirmingham);

function isBirmingham() {
    autoBlast.innerHTML = "Birmingham"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}

//charlotte filter
const charlotte = document.getElementById("charlotte");
charlotte.addEventListener("click", isCharlotte);

function isCharlotte() {
    autoBlast.innerHTML = "Charlotte"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}

//columbus filter
const columbus = document.getElementById("columbus");
columbus.addEventListener("click", isColumbus);

function isColumbus() {
    autoBlast.innerHTML = "Columbus"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}

//dallas filter
const dallas = document.getElementById("dallas");
dallas.addEventListener("click", isDallas);

function isDallas() {
    autoBlast.innerHTML = "Dallas"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}

//houston filter
const houston = document.getElementById("houston");
houston.addEventListener("click", isHouston);

function isHouston() {
    autoBlast.innerHTML = "Houston"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}

//kansasCity filter
const kansasCity = document.getElementById("kansasCity");
kansasCity.addEventListener("click", isKansasCity);

function isKansasCity() {
    autoBlast.innerHTML = "Kansas City"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}

//lasVegas filter
const lasVegas = document.getElementById("lasVegas");
lasVegas.addEventListener("click", isLasVegas);

function isLasVegas() {
    autoBlast.innerHTML = "Las Vegas"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}

//memphis filter
const memphis = document.getElementById("memphis");
memphis.addEventListener("click", isMemphis);

function isMemphis() {
    autoBlast.innerHTML = "Memphis"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}

//northernAZ filter
const northernAZ = document.getElementById("northernAZ");
northernAZ.addEventListener("click", isNorthernAZ);

function isNorthernAZ() {
    autoBlast.innerHTML = "Northern AZ"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}

//sanAntonio filter
const sanAntonio = document.getElementById("sanAntonio");
sanAntonio.addEventListener("click", isSanAntonio);

function isSanAntonio() {
    autoBlast.innerHTML = "San Antonio"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}

//stLouis filter
const stLouis = document.getElementById("stLouis");
stLouis.addEventListener("click", isStLouis);

function isStLouis() {
    autoBlast.innerHTML = "St. Louis"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}

//tucson filter
const tucson = document.getElementById("tucson");
tucson.addEventListener("click", isTucson);

function isTucson() {
    autoBlast.innerHTML = "Tucson"
    displayDate.innerHTML = "2021-08-02"
    deliveredP.innerHTML = "95%"
    deliveredN.innerHTML = "250,000"
    uniqueClicksP.innerHTML = "1.46%"
    uniqueClicksN.innerHTML = "7,000"
    openedP.innerHTML = "35.64%"
    openedN.innerHTML = "165,000"
    uniqueOpensP.innerHTML = "18.35%"
    uniqueOpensN.innerHTML = "67,000"
}