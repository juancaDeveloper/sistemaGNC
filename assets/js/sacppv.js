$(document).on("click","#add",function(e){
e.preventDefault();

var nombre =$("#nombre").val();
var email =$("#email").val();

               //alert(nombre);

 $.ajax({

    url:baseurl+ 'Sacppv/insert',
    type: "post",
    dataType: "json",
    data:{

        nombre: nombre,
        email: email
    },
    success: function(data){
    

        $('#exampleModal').modal('hide');

        if(data.message == "success"){

            toastr["success"](data.message)

        toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": false,
          "progressBar": true,
          "positionClass": "toast-top-right",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }


        } else {
            
              toastr["error"](data.message)

            toastr.options = {
              "closeButton": true,
              "debug": false,
              "newestOnTop": false,
              "progressBar": true,
              "positionClass": "toast-top-right",
              "preventDuplicates": false,
              "onclick": null,
              "showDuration": "300",
              "hideDuration": "1000",
              "timeOut": "5000",
              "extendedTimeOut": "1000",
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut"
            }



        }

      

        //console.log(data);
    }


 });

 $("#form")[0].reset();


});


function fetch(){

    $.ajax({

        url:baseurl+ 'Sacppv/fetch',
        type: "post",
        dataType: "json",
        success: function(data){
          
          //console.log(data);
          var tbody = "";

          for(var key in data){
            tbody += "<tr>";
            tbody += "<td>"+ data[key]['id']+"</td>";
            tbody += "<td>"+ data[key]['nombre']+"</td>";
            tbody += "<td>"+ data[key]['email']+"</td>";
           tbody+=`<td>
                    <a href="#" id="del" value="${data[key]['id']}">Eliminar</a>
                    <a href="#" id="del" value="${data[key]['id']}">Eliminar</a>
                    </td>`
          }
          $("#tbody").html(tbody);

        }
  

    });
}
fetch();

$(document).on("click", "#del", function(e){
  e.preventDefault();
  //alert("delete");

  var del_id =$(this).attr("value");
  alert(del_id);
});




