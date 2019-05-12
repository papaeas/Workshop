$(function() {
    $.get("products.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        console.log(x);
        $("#products").append(x);
    });
    $.get("customers.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        console.log(x);
        $("#customers").append(x);
    });
    $.get("suppliers.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        console.log(x);
        $("#suppliers").append(x);
    });
    $.get("orders.json", function(data) {
        var i =0
        for(i=0;i<=data.length;i++){
         var x=0;
         x += i;
        }
        console.log(x);
        $("#orders").append(x);
    });
});