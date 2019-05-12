$(function() {
    $.get("customers.json", function(data) {
       
    
        var ID= data;

          var product = ID[document.cookie];

         var cus= '<input type="text" class="form-control" placeholder="'+product.customerID+'">';
          $("#customerID ").append(cus);
        var com = '<input type="text" class="form-control" placeholder="'+product.companyName+'">';
         $("#companyName ").append(com);
        var con = '<input type="text" class="form-control" placeholder="'+product.contactName+'">';
         $("#contactName").append(con);
         var cont ='<input type="text" class="form-control" placeholder="'+product.contactTitle+'">'; 
         $("#contactTitle").append(cont);

         var street ='<input type="text" class="form-control" placeholder="'+ product.address.street+'">'; 
         $("#street ").append(street);

         var city = '<input type="text" class="form-control" placeholder="'+product.address.city+'">'; 
         $("#city ").append(city);
        var re='<input type="text" class="form-control" placeholder="'+ product.address.region+'">';
         $("#region").append(re);

        var pos='<input type="text" class="form-control" placeholder="'+ product.address.postalCode+'">'; 
         $("#postalCode ").append(pos);
        var coun='<input type="text" class="form-control" placeholder="'+product.address.country+'">'; 
         $("#country ").append(coun);
         var phone= '<input type="text" class="form-control" placeholder="'+product.address.phone+'">';
         $("#phone ").append(phone);
        

       

      });
});

function setCookies(i){
    document.cookie = i;
  }
