var plan = $("#planSelection").val();

if(plan == "custom"){
    $("#standardCount").val("0");
    $("#proCount").val("0");
    $("#businessCount").val("0");
    updatePrice();
}
else if(plan == "basic") {
    $("#standardCount").val("3");
    $("#proCount").val("0");
    $("#businessCount").val("0");
        
    $("#price").html("$90");
}
else if(plan == "professional") {
    $("#standardCount").val("0");
    $("#proCount").val("5");
    $("#businessCount").val("0");

    $("#price").html("$300");
}
else if(plan == "business") {
    $("#standardCount").val("0");
    $("#proCount").val("0");
    $("#businessCount").val("10");
        
    $("#price").html("$900");
}

$(document).on('change','#planSelection',function(){
    var plan = $("#planSelection").val();

    if(plan == "custom"){
        $("#standardCount").val("0");
        $("#proCount").val("0");
        $("#businessCount").val("0");
        updatePrice();
    }
    else if(plan == "basic") {
        $("#standardCount").val("3");
        $("#proCount").val("0");
        $("#businessCount").val("0");
        
        $("#price").html("$90");
    }
    else if(plan == "professional") {
        $("#standardCount").val("0");
        $("#proCount").val("5");
        $("#businessCount").val("0");

        $("#price").html("$300");
    }
    else if(plan == "business") {
        $("#standardCount").val("0");
        $("#proCount").val("0");
        $("#businessCount").val("10");
        
        $("#price").html("$900");
    }
});


function updatePrice() {
    var standardPrice = parseInt($("#standardCount").val()) * 30;
    var proPrice = parseInt($("#proCount").val()) * 60;
    var businessPrice = parseInt($("#businessCount").val()) * 90;

    var fullPrice = standardPrice + proPrice + businessPrice;

    $("#price").html("$" + fullPrice);
}
$("input").change(updatePrice);

function submit(event){
    event.preventDefault();

    var data = {
        standardPages: parseInt($("#standardCount").val()),
        proPages: parseInt($("#proCount").val()),
        businessPages: parseInt($("#businessCount").val()),

        name: $("#nameInput").val(),
        email: $("#emailInput").val(),
        phone: $("#phoneInput").val()
    };

    console.log(data);
}
$("#submit").click(submit);
