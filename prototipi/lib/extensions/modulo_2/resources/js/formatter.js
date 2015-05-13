jQuery(document).ready(function() {
    /*
     var src=jQuery("#siteloader").html('<object id="obj_" data="http://it.finance.yahoo.com/q?s=ftsemib.mi"/>').find("#yfs_l10_ftsemib.mi");
     console.log(src) ;
     */

    //prepara con i vecchi valori (ultimo aggiornamento), finchè non arrivano i nuovi
    default_load();

    //primo aggiornamento dati 
    load_borsa();
    function load_borsa() {
        $.ajax({
            url: "resources/php_scripts/parser_borsa_yahoo.php",
            type: "POST",
            success: function(data) {
                jQuery("#siteloader").html(data);
                /* AUTOREFRESH*/
                setInterval(function() {
                    load_borsa();
                }, 5000);
                //alert(jQuery("#yfs_l10_ftsemib.mi"));
            }
        }
        );
    }



}


);

function default_load() {
   /* var txt=$.get('resources/php_scripts/borsa.json');
    alert (txt);*/
}