if(window.location.href == "cart.html"){
    $("#standardQuantity").html("Quantity: " + localStorage.getItem("standard"));
    $("#proQuantity").html("Quantity: " + localStorage.getItem("pro"));
    $("#businessQuantity").html("Quantity: " + localStorage.getItem("business"));
}

function addToCart(item, amount) {
    var currentStandard = localStorage.getItem("standard");
    var currentPro = localStorage.getItem("pro");
    var currentBusiness = localStorage.getItem("business");
    
    if(item == "standard")
        localStorage.setItem("standard", parseInt(currentStandard) + amount);
    else if(item == "pro")
        localStorage.setItem("pro", parseInt(currentPro) + amount);
    else if(item == "business")
        localStorage.setItem("business", parseInt(currentBusiness) + amount);
}
