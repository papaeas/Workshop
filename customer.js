$(function () {
   
        $.get("customers.json", function (data, status) { //,message)
            if (status == 'success') {
                console.log(status);
             
                var products = data;
                var i = 0
          
                var tableHead = '<tr><th>ID</th><th>Name</th><th> Contact Name</th><th>Contact Title</th></tr>';
               
                $("#datalist").append(tableHead);
                for (i = 0;i< data.length;i++) {
                    var product = products[i];
                
                    var ID = '<a href="cusdetail.html" onclick="setCookies('+i+')">'+product.companyName +'</a>' ;
                    var tableRow = '<tr><td>'+product.customerID+ '</td><td>' + ID + '</td><td>' + product.contactName + '</td><td>' + product.contactTitle + '</td></tr>';
                    $("#datalist").append(tableRow);
                    
                   
                }
                
             
            } else
                console.log(status);
        });
    });

      function setCookies(i){
        document.cookie = i;
      }
    /////////////////////////////////
    ////////////////////////////////
    // $(function() {
    //     $.get("customers.json", function(data) {
    
    //     console.log(data);
    //         var i = 0
    //         for (i = 0;i< data.length;i++){
    //          var j = i +1;
    //          htmlString = '<tr><th scope ="row">'+j+'</th><td>'+data[i].customerID+'</td><td><a href="customerdetail.html" onclick="setCookies('+i+')">'
    //          +data[i].companyName+'</td><td>'+data[i].contactName+'</td><td>'+data[i].contactTitle+'</td></tr>';
          
    //      $('#data').append(htmlString);
    //         }
        
    //     });
    //   });
    
    //   function setCookies(i){
    //     document.cookie = i;
    //   }