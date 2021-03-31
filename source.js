var fullPrice;
updatePrice();
$("#checkoutSuccess").hide();
$("#mobilePopout").hide();

function updatePrice() {
    if($("#standardCount").val() == "")
        $("#standardCount").val("0");
    if($("#proCount").val() == "")
        $("#proCount").val("0");
    if($("#businessCount").val() == "")
        $("#businessCount").val("0");
        
    var standardPrice = parseInt($("#standardCount").val()) * 30;
    var proPrice = parseInt($("#proCount").val()) * 60;
    var businessPrice = parseInt($("#businessCount").val()) * 90;

    fullPrice = standardPrice + proPrice + businessPrice;

    $("#price").html("Price: $" + fullPrice);
}
$("input").change(updatePrice);

function successOrder(){
    $("#checkoutSuccess").show();
    $("#customEditor").hide();
    $("#submit").hide();
}

function submit(event){
    event.preventDefault();

    var orderInfo = {
        "action": "order",
        "standardPages": parseInt($("#standardCount").val()),
        "proPages": parseInt($("#proCount").val()),
        "businessPages": parseInt($("#businessCount").val()),

        "name": $("#nameInput").val(),
        "email": $("#emailInput").val(),
        "phone": $("#phoneInput").val(),
        "price": fullPrice
    };

    console.log(orderInfo);

    $.ajax({
        url: "sendEmail.py",
        data: orderInfo
    }).then(successOrder);
}
$("#submit").click(submit);

var popOutVisible = false;

function popOut() {
    //topbarTitle, menuButton

    popOutVisible = !popOutVisible;
    if(popOutVisible) {
        $("#mobilePopout").show();
        $("#phoneTopbarTitle").attr("style", "font-size: 155%; margin-left: 57%; position: absolute; margin-top: 31px;");
        $("#menuButton").attr("style", "left: 169px; width: 42px; height: 50px; margin: 0; position: absolute; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%);");
    }
    else if(!popOutVisible) {
        $("#mobilePopout").hide();
        $("#phoneTopbarTitle").attr("style", "font-size: 202%; margin-left: 13%; position: absolute; margin-top: 24px;");
        $("#menuButton").attr("style", "left: 1px; width: 42px; height: 50px; margin: 0; position: absolute; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%);");
    }
}
$("#menuButton").click(popOut);


function contactSubmit() {
    event.preventDefault();

    var contactInfo = {
        "action": "contact",
        "name": $("#contactName").val(),
        "email": $("#contactEmail").val(),
        "message": $("#contactMsg").val()
    };

    $.ajax({
        data: contactInfo,
        url: "sendEmail.py"
    }).then($("#contactForm").html("<h1><span class = 'blueText'>Contact</span> Form</h1><br><h3>Thank you for submitting a contact ticket! You will recieve an answer in 1-3 business days.</h3>"));
}
$("#contactSubmit").click(contactSubmit);
