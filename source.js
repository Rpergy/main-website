$(document).on('change','#planSelection',function(){
    var plan = $("#planSelection").val();

    if(plan == "custom"){
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

    console.log(fullPrice);

    $("#price").html("$" + fullPrice);
}
$("input").change(updatePrice);
