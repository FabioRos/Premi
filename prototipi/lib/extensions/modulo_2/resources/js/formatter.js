jQuery(document).ready(function() {
    /*
     var src=jQuery("#siteloader").html('<object id="obj_" data="http://it.finance.yahoo.com/q?s=ftsemib.mi"/>').find("#yfs_l10_ftsemib.mi");
     console.log(src) ;
     */

    //prepara con i vecchi valori (ultimo aggiornamento), finchè non arrivano i nuovi
    default_load();

    print_table();

    //primo aggiornamento dati 
    load_borsa();
    function load_borsa() {
        $.ajax({
            url: "resources/php_scripts/parser_borsa_yahoo.php",
            type: "POST",
            success: function(data) {
                //jQuery("#siteloader").html(data);
                jQuery("#q_milano").html(data['MILANO']);
                /* AUTOREFRESH*/
                setInterval(function() {
                    load_borsa();
                }, 5000);
                //alert(data);
            }
        }
        );
    }



}


);

function print_table() {
    var row = jQuery("<table id='tabella_modulo_2'><tr><th>Indici</th><th>Quotazione</th></tr>");
    jQuery("#siteloader").append(row);
                
    row.append(jQuery("<tr> <td>Milano</td> <td id'q_milano'></td> </tr>")); 
    row.append(jQuery("<tr> <td>Parigi</td> <td id='q_parigi'></td> </tr>"));
    row.append(jQuery("<tr> <td>Madrid</td> <td id='q_madrid'></td> </tr>"));
    row.append(jQuery("<tr> <td>Bruxelles</td> <td id='q_bruxelles'></td> </tr>"));
                
    row.append(jQuery("</table>"));
}

function default_load() {
   /* var txt=$.get('resources/php_scripts/borsa.json');
    alert (txt);*/
}