$(document).on('change','#planSelection',function(){
    var plan = $("#planSelection").val();

    if(plan == "custom"){
        updatePrice();
    }
    else if(plan == "basic") {
        $("#price").html("$90");
    }
    else if(plan == "professional") {
        $("#price").html("$300");
    }
    else if(plan == "business") {
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
