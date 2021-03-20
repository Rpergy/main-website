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

    var fullPrice = standardPrice + proPrice + businessPrice;

    $("#price").html("Price: $" + fullPrice);
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
