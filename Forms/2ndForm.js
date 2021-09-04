//gets information from csv

//I added a print out of the contents of the form if the checker presses the 'Accept' button.
//The border will automatically turn red if the form field is empty when the checker presses accept.
/*
-----------------------------------------------------------------------------------------------------------------------------
Property Address
-----------------------------------------------------------------------------------------------------------------------------
*/
var propertyAddressRejection = document.getElementById("propertyAddressRejection"); 
//if the user presses the reject button
document.getElementById("propertyAddressReject").addEventListener("click", function() {
    propertyAddressRejection.style.display = "flex";
    propertyAddress.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("propertyAddressSubmit").addEventListener("click", function() {
    if (document.getElementById("propertyAddressText").value.length > 0){
        propertyAddressRejection.style.display = "none";
        console.log(document.getElementById("propertyAddressText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("propertyAddressCancel").addEventListener("click", function() {
    propertyAddressRejection.style.display = "none";
    propertyAddress.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("propertyAddressAccept").addEventListener("click", function() {
    if (propertyAddress.value.length > 0) {
        propertyAddress.style.borderColor = "Green";
        console.log(propertyAddress.value); //prints out the contents of the property addr
    }
    else { //if there is nothing in the textfield, it will automatically turn red
        propertyAddress.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Is the Buyer a
-----------------------------------------------------------------------------------------------------------------------------
*/
var buyerRejection = document.getElementById("buyerRejection");
var wholesaler = document.getElementById("wholesaler");
var agent = document.getElementById("agent");
var investor = document.getElementById("investor");
var radioWholesaler = document.getElementById("radioWholesaler");
var radioAgent = document.getElementById("radioAgent");
var radioInvestor = document.getElementById("radioInvestor");
//if the user presses the reject button
document.getElementById("buyerReject").addEventListener("click", function() {
    buyerRejection.style.display = "flex";
    radioWholesaler.style.borderColor = "Red";
    radioAgent.style.borderColor = "Red";
    radioInvestor.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("buyerSubmit").addEventListener("click", function() {
    if (document.getElementById("buyerText").value.length > 0){
        buyerRejection.style.display = "none";
        console.log(document.getElementById("buyerText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("buyerCancel").addEventListener("click", function() {
    buyerRejection.style.display = "none";
    radioWholesaler.style.borderColor = "black";
    radioAgent.style.borderColor = "black";
    radioInvestor.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("buyerAccept").addEventListener("click", function() {
    radioWholesaler.style.borderColor = "Green";
    radioAgent.style.borderColor = "Green";
    radioInvestor.style.borderColor = "Green";
    //prints out the chosen buyer option if one has been chosen
    if (wholesaler.checked) {
        console.log("Wholesaler");
    }
    else if (agent.checked) {
        console.log("Agent");
    }
    else if (investor.checked) {
        console.log("Investor");
    }
    else { //if none of the options are checked then the borders are turned red
        radioWholesaler.style.borderColor = "Red";
        radioAgent.style.borderColor = "Red";
        radioInvestor.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Double Escrow?
-----------------------------------------------------------------------------------------------------------------------------
*/
var escrowRejection = document.getElementById("escrowRejection");
var escrowYes = document.getElementById("escrowYes");
var escrowNo = document.getElementById("escrowNo");
var radioEscrowYes = document.getElementById("radioEscrowYes");
var radioEscrowNo = document.getElementById("radioEscrowNo");
//if the user presses the reject button
document.getElementById("escrowReject").addEventListener("click", function() {
    escrowRejection.style.display = "flex";
    radioEscrowYes.style.borderColor = "Red";
    radioEscrowNo.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("escrowSubmit").addEventListener("click", function() {
    if (document.getElementById("escrowText").value.length > 0){
        escrowRejection.style.display = "none";
        console.log(document.getElementById("escrowText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("escrowCancel").addEventListener("click", function() {
    escrowRejection.style.display = "none";
    radioEscrowYes.style.borderColor = "black";
    radioEscrowNo.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("escrowAccept").addEventListener("click", function() {
    radioEscrowYes.style.borderColor = "Green";
    radioEscrowNo.style.borderColor = "Green";
    //prints out the chosen double escrow option
    if (escrowYes.checked) {
        console.log("Yes, Escrow");
    }
    else if (escrowNo.checked) {
        console.log("No, Escrow");
    }
    else { //if nothing is checked, then it will change the border to red
        radioEscrowYes.style.borderColor = "Red";
        radioEscrowNo.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Title Company/Attorney
-----------------------------------------------------------------------------------------------------------------------------
*/
var titleCompanyRejection = document.getElementById("titleCompanyRejection");
var titleCompany = document.getElementById("titleComp");
//if the user presses the reject button
document.getElementById("titleCompanyReject").addEventListener("click", function() {
    titleCompanyRejection.style.display = "flex";
    titleCompany.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("titleCompanySubmit").addEventListener("click", function() {
    if (document.getElementById("titleCompanyText").value.length > 0){
        titleCompanyRejection.style.display = "none";
        console.log(document.getElementById("titleCompanyText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("titleCompanyCancel").addEventListener("click", function() {
    titleCompanyRejection.style.display = "none";
    titleCompany.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("titleCompanyAccept").addEventListener("click", function() {
    if (titleCompany.value.length > 0) {
        titleCompany.style.borderColor = "Green";
        console.log(titleCompany.value); //prints out the title company/attorney
    }
    else { //if the form is empty then the border becomes red
        titleCompany.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Title Officer's Name
-----------------------------------------------------------------------------------------------------------------------------
*/
var titleOfficerNameRejection = document.getElementById("titleOfficerNameRejection");
var titleOfficerName = document.getElementById("titleOfficerName");
//if the user presses the reject button
document.getElementById("titleOfficerNameReject").addEventListener("click", function() {
    titleOfficerNameRejection.style.display = "flex";
    titleOfficerName.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("titleOfficerNameSubmit").addEventListener("click", function() {
    if (document.getElementById("titleOfficerNameText").value.length > 0){
        titleOfficerNameRejection.style.display = "none";
        console.log(document.getElementById("titleOfficerNameText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("titleOfficerNameCancel").addEventListener("click", function() {
    titleOfficerNameRejection.style.display = "none";
    titleOfficerName.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("titleOfficerNameAccept").addEventListener("click", function() {
    if (titleOfficerName.value.length > 0) {
        titleOfficerName.style.borderColor = "Green";
        console.log(titleOfficerName.value); //prints out the title officer's name
    }
    else { //if the form is empty then the border becomes red
        titleOfficerName.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Title Company's Email
-----------------------------------------------------------------------------------------------------------------------------
*/
var titleCompanyEmailRejection = document.getElementById("titleCompanyEmailRejection");
var titleCompanyEmail = document.getElementById("titleEmail");

//if the user presses the reject button
document.getElementById("titleCompanyEmailReject").addEventListener("click", function() {
    titleCompanyEmailRejection.style.display = "flex";
    titleCompanyEmail.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("titleCompanyEmailSubmit").addEventListener("click", function() {
    if (document.getElementById("titleCompanyEmailText").value.length > 0){
        titleCompanyEmailRejection.style.display = "none";
        console.log(document.getElementById("titleCompanyEmailText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("titleCompanyEmailCancel").addEventListener("click", function() {
    titleCompanyEmailRejection.style.display = "none";
    titleCompanyEmail.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("titleCompanyEmailAccept").addEventListener("click", function() {
    if (titleCompanyEmail.value.length > 0) {
        titleCompanyEmail.style.borderColor = "Green";
        console.log(titleCompanyEmail.value); //prints out the title company's email
    }
    else { //if the form is empty then the border becomes red
        titleCompanyEmail.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Title Officer's Phone Number
-----------------------------------------------------------------------------------------------------------------------------
*/
var titleCompanyNumberRejection = document.getElementById("titleCompanyNumberRejection");
var titleCompanyNumber = document.getElementById("compNum");

//if the user presses the reject button
document.getElementById("titleCompanyNumberReject").addEventListener("click", function() {
    titleCompanyNumberRejection.style.display = "flex";
    titleCompanyNumber.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("titleCompanyNumberSubmit").addEventListener("click", function() {
    if (document.getElementById("titleCompanyNumberText").value.length > 0){
        titleCompanyNumberRejection.style.display = "none";
        console.log(document.getElementById("titleCompanyNumberText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("titleCompanyNumberCancel").addEventListener("click", function() {
    titleCompanyNumberRejection.style.display = "none";
    titleCompanyNumber.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("titleCompanyNumberAccept").addEventListener("click", function() {
    if (titleCompanyNumber.value.length > 0) {
        titleCompanyNumber.style.borderColor = "Green";
        console.log(titleCompanyNumber.value); //prints out the title officer's phone number
    }
    else { //if the form is empty then the border becomes red
        titleCompanyNumber.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Signer's Name
-----------------------------------------------------------------------------------------------------------------------------
*/
var signerNameRejection = document.getElementById("signerNameRejection");
var signerName = document.getElementById("signerName");
//if the user presses the reject button
document.getElementById("signerNameReject").addEventListener("click", function() {
    signerNameRejection.style.display = "flex";
    signerName.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("signerNameSubmit").addEventListener("click", function() {
    if (document.getElementById("signerNameText").value.length > 0){
        signerNameRejection.style.display = "none";
        console.log(document.getElementById("signerNameText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("signerNameCancel").addEventListener("click", function() {
    signerNameRejection.style.display = "none";
    signerName.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("signerNameAccept").addEventListener("click", function() {
    if (signerName.value.length > 0) {
        signerName.style.borderColor = "Green";
        console.log(signerName.value); //prints out the signer's name
    }
    else { //if the form is empty then the border becomes red
        signerName.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Vesting
-----------------------------------------------------------------------------------------------------------------------------
*/
var vestingRejection = document.getElementById("vestingRejection");
var vesting = document.getElementById("vester");
//if the user presses the reject button
document.getElementById("vestingReject").addEventListener("click", function() {
    vestingRejection.style.display = "flex";
    vesting.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("vestingSubmit").addEventListener("click", function() {
    if (document.getElementById("vestingText").value.length > 0){
        vestingRejection.style.display = "none";
        console.log(document.getElementById("vestingText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("vestingCancel").addEventListener("click", function() {
    vestingRejection.style.display = "none";
    vesting.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("vestingAccept").addEventListener("click", function() {
    if (vesting.value.length > 0) {
        vesting.style.borderColor = "Green";
        console.log(vesting.value); //prints out the name of the person buying
    }
    else { //if the form is empty then the border becomes red
        vesting.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Contract Price
-----------------------------------------------------------------------------------------------------------------------------
*/
var contractPriceRejection = document.getElementById("contractPriceRejection");
var contractPrice = document.getElementById("contractPrice");

//if the user presses the reject button
document.getElementById("contractPriceReject").addEventListener("click", function() {
    contractPriceRejection.style.display = "flex";
    contractPrice.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("contractPriceSubmit").addEventListener("click", function() {
    if (document.getElementById("contractPriceText").value.length > 0){
        contractPriceRejection.style.display = "none";
        console.log(document.getElementById("contractPriceText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("contractPriceCancel").addEventListener("click", function() {
    contractPriceRejection.style.display = "none";
    contractPrice.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("contractPriceAccept").addEventListener("click", function() {
    if (contractPrice.value.length > 0) {
        contractPrice.style.borderColor = "Green";
        console.log(contractPrice.value); //prints out the contract price
    }
    else { //if the form is empty then the border becomes red
        contractPrice.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
EMD
-----------------------------------------------------------------------------------------------------------------------------
*/
var EMDRejection = document.getElementById("EMDRejection");
var EMD = document.getElementById("EMD");

//if the user presses the reject button
document.getElementById("EMDReject").addEventListener("click", function() {
    EMDRejection.style.display = "flex";
    EMD.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("EMDSubmit").addEventListener("click", function() {
    if (document.getElementById("EMDText").value.length > 0){
        EMDRejection.style.display = "none";
        console.log(document.getElementById("EMDText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("EMDCancel").addEventListener("click", function() {
    EMDRejection.style.display = "none";
    EMD.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("EMDAccept").addEventListener("click", function() {
    if (EMD.value.length > 0) {
        EMD.style.borderColor = "Green";
        console.log(EMD.value); //prints out the EMD
    }
    else { //if the form is empty then the border becomes red
        EMD.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Are we paying Closing Cost
-----------------------------------------------------------------------------------------------------------------------------
*/
var payingClosingRejection = document.getElementById("payingClosingRejection");
var payingClosingYes = document.getElementById("closeYes");
var payingClosingNo = document.getElementById("closeNo");
var radioPayingClosingYes = document.getElementById("radioPayingClosingYes");
var radioPayingClosingNo = document.getElementById("radioPayingClosingNo");
//if the user presses the reject button
document.getElementById("payingClosingReject").addEventListener("click", function() {
    payingClosingRejection.style.display = "flex";
    radioPayingClosingYes.style.borderColor = "Red";
    radioPayingClosingNo.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("payingClosingSubmit").addEventListener("click", function() {
    if (document.getElementById("payingClosingText").value.length > 0){
        payingClosingRejection.style.display = "none";
        console.log(document.getElementById("payingClosingText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("payingClosingCancel").addEventListener("click", function() {
    payingClosingRejection.style.display = "none";
    radioPayingClosingYes.style.borderColor = "black";
    radioPayingClosingNo.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("payingClosingAccept").addEventListener("click", function() {
    radioPayingClosingYes.style.borderColor = "Green";
    radioPayingClosingNo.style.borderColor = "Green";
    //prints out the chosen closing cost option
    if (payingClosingYes.checked) {
        console.log("Yes, Paying Closing");
    }
    else if (payingClosingNo.checked) {
        console.log("No, Paying Closing");
    }
    else { //if none of choices are checked then the border becomes red
        radioPayingClosingYes.style.borderColor = "Red";
        radioPayingClosingNo.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Close of Escrow
-----------------------------------------------------------------------------------------------------------------------------
*/
var closeEscrowRejection = document.getElementById("closeEscrowRejection");
var closeEscrow = document.getElementById("closeEscrow");
//if the user presses the reject button
document.getElementById("closeEscrowReject").addEventListener("click", function() {
    closeEscrowRejection.style.display = "flex";
    closeEscrow.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("closeEscrowSubmit").addEventListener("click", function() {
    if (document.getElementById("closeEscrowText").value.length > 0){
        closeEscrowRejection.style.display = "none";
        console.log(document.getElementById("closeEscrowText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("closeEscrowCancel").addEventListener("click", function() {
    closeEscrowRejection.style.display = "none";
    closeEscrow.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("closeEscrowAccept").addEventListener("click", function() {
    if (closeEscrow.value.length > 0) {
        closeEscrow.style.borderColor = "Green";
        console.log(closeEscrow.value); //prints out the date of the escrow close
    }
    else { //if the form is empty then the border becomes red
        closeEscrow.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Possibility of Closing Sooner
-----------------------------------------------------------------------------------------------------------------------------
*/
var closeSoonerRejection = document.getElementById("closeSoonerRejection");
var closeSoonerYes = document.getElementById("closeSoonerYes");
var closeSoonerNo = document.getElementById("closeSoonerNo");
var radioCloseSoonerYes = document.getElementById("radioCloseSoonerYes");
var radioCloseSoonerNo = document.getElementById("radioCloseSoonerNo");
//if the user presses the reject button
document.getElementById("closeSoonerReject").addEventListener("click", function() {
    closeSoonerRejection.style.display = "flex";
    radioCloseSoonerYes.style.borderColor = "Red";
    radioCloseSoonerNo.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("closeSoonerSubmit").addEventListener("click", function() {
    if (document.getElementById("closeSoonerText").value.length > 0){
        closeSoonerRejection.style.display = "none";
        console.log(document.getElementById("closeSoonerText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("closeSoonerCancel").addEventListener("click", function() {
    closeSoonerRejection.style.display = "none";
    radioCloseSoonerYes.style.borderColor = "black";
    radioCloseSoonerNo.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("closeSoonerAccept").addEventListener("click", function() {
    radioCloseSoonerYes.style.borderColor = "Green";
    radioCloseSoonerNo.style.borderColor = "Green";
    //prints out the chosen close sooner option
    if (closeSoonerYes.checked) {
        console.log("Yes, Closing Sooner");
    }
    else if (closeSoonerNo.checked) {
        console.log("No, Closing Sooner");
    }
    else { //if none of the choices are checked then the border becomes red
        radioCloseSoonerYes.style.borderColor = "Red";
        radioCloseSoonerNo.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Contract Executed Date
-----------------------------------------------------------------------------------------------------------------------------
*/
var executeEscrowRejection = document.getElementById("executeEscrowRejection");
var executeEscrow = document.getElementById("exeEscrow");
//if the user presses the reject button
document.getElementById("executeEscrowReject").addEventListener("click", function() {
    executeEscrowRejection.style.display = "flex";
    executeEscrow.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("executeEscrowSubmit").addEventListener("click", function() {
    if (document.getElementById("executeEscrowText").value.length > 0){
        executeEscrowRejection.style.display = "none";
        console.log(document.getElementById("executeEscrowText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("executeEscrowCancel").addEventListener("click", function() {
    executeEscrowRejection.style.display = "none";
    executeEscrow.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("executeEscrowAccept").addEventListener("click", function() {
    if (executeEscrow.value.length > 0) {
        executeEscrow.style.borderColor = "Green";
        console.log(executeEscrow.value); //prints out the current date the form was made
    }
    else { //if the form is empty then the border becomes red
        executeEscrow.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Buyer's Phone Number
-----------------------------------------------------------------------------------------------------------------------------
*/
//obtain and log buyer's phone number
var buyerNumberRejection = document.getElementById("buyerNumberRejection");
var buyerNumber = document.getElementById("buyNum");

//if the user presses the reject button
document.getElementById("buyerNumberReject").addEventListener("click", function() {
    buyerNumberRejection.style.display = "flex";
    buyerNumber.style.borderColor = "Red";
    buyerNumber.style.color = "white";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("buyerNumberSubmit").addEventListener("click", function() {
    if (document.getElementById("buyerNumberText").value.length > 0){
        buyerNumberRejection.style.display = "none";
        console.log(document.getElementById("buyerNumberText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("buyerNumberCancel").addEventListener("click", function() {
    buyerNumberRejection.style.display = "none";
    buyerNumber.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("buyerNumberAccept").addEventListener("click", function() {
    if (buyerNumber.value.length > 0) {
        buyerNumber.style.borderColor = "Green";
        console.log(buyerNumber.value); //prints out the buyer's phone number
    }
    else { //if the form is empty then the border becomes red
        buyerNumber.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Docusign Email
-----------------------------------------------------------------------------------------------------------------------------
*/
//obtain and log docusign email
var docusignRejection = document.getElementById("docusignRejection");
var docusign = document.getElementById("docusign");

//if the user presses the reject button
document.getElementById("docusignReject").addEventListener("click", function() {
    docusignRejection.style.display = "flex";
    docusign.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("docusignSubmit").addEventListener("click", function() {
    if (document.getElementById("docusignText").value.length > 0){
        docusignRejection.style.display = "none";
        console.log(document.getElementById("docusignText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("docusignCancel").addEventListener("click", function() {
    docusignRejection.style.display = "none";
    docusign.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("docusignAccept").addEventListener("click", function() {
    if (docusign.value.length > 0) {
        docusign.style.borderColor = "Green";
        console.log(docusign.value); //prints out the docusign email for the buyer/signer
    }
    else { //if the form is empty then the border becomes red
        docusign.style.borderColor = "Red";
    }
})

/*
-----------------------------------------------------------------------------------------------------------------------------
Your Name
-----------------------------------------------------------------------------------------------------------------------------
*/
var usernameRejection = document.getElementById("usernameRejection");
var username = document.getElementById("username");
//if the user presses the reject button
document.getElementById("usernameReject").addEventListener("click", function() {
    usernameRejection.style.display = "flex";
    username.style.borderColor = "Red";
})
//when the user has something typed into the textbox and they press the submit button
document.getElementById("usernameSubmit").addEventListener("click", function() {
    if (document.getElementById("usernameText").value.length > 0){
        usernameRejection.style.display = "none";
        console.log(document.getElementById("usernameText").value); //prints out rejection reason
    }
})
//if the user presses the cancel button in the rejection box
document.getElementById("usernameCancel").addEventListener("click", function() {
    usernameRejection.style.display = "none";
    username.style.borderColor = "black";
})
//if the user presses the accept button
document.getElementById("usernameAccept").addEventListener("click", function() {
    if (username.value.length > 0) {
        username.style.borderColor = "Green";
        console.log(username.value); //prints out name
    }
    else { //if the form is empty then the border becomes red
        username.style.borderColor = "Red";
    }
})