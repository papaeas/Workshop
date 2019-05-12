$(function() {
    $.get("customers.json", function(data) {
       
    
        var ID= data;

          var product = ID[document.cookie];
          var table = '<tr><td>' + product.customerID +'</td><td>'+product.companyName +'</td><td>' +product.contactName +'</td><td>' +
                     product.contactTitle +'</td><td>' +
            "street :"+ product.address.street + "<br>" + "city :"+ product.address.city + "<br>" +
            "region :"+ product.address.region + "<br>" +"postalCode :"+ product.address.postalCode + "<br>" +
            "country :"+ product.address.country + "<br>" +"phone :"+ product.address.phone +'</td></tr>' ;
    
          $("#table").append(table);

      });
});

function setCookies(i){
    document.cookie = i;
  }
