jQuery( document ).ready(function(){
   // alert('ok');
    
     $.ajax({
            url : "resources/modulo_1.source.json",
            dataType: "text",
            success : function (data) {
                //$(".text").html(data);
                var json_array=jQuery.parseJSON(data);
                var html_container="<table class='tabella_modulo_1'>";
                html_container+="<thead><tr><th>Nome</th><th>Cognome</th></tr></thead>";
                html_container+="<tbody>";
                $.each(json_array, function(i, item) {
                     html_container+="<tr><td class='table_entry'>"+item.firstName+"</td><td class='table_entry'>"+item.lastName+"</td></tr>";
                });
                html_container+='</tbody></table>';
                
                 $(".text").html(html_container);
            }
    });
    
    
    
    }
);
