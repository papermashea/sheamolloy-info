    $(document).ready(function(){
        $("select").change(function(){
            $( "select option:selected").each(function(){
                if($(this).attr("value")=="read"){
                  $(".read-more").hide();
                  $(".read-more").show();
                }
                if($(this).attr("value")=="design"){
                    $(".design-more").hide();
                    $(".design-more").show();
                }
                if($(this).attr("value")=="develop"){
                    $(".develop-more").hide();
                    $(".develop-more").show();
                }
                if($(this).attr("value")=="make"){
                  $(".make-more").hide();
                  $(".make-more").show();
                }
                if($(this).attr("value")=="learn"){
                    $(".learn-more").hide();
                    $(".learn-more").show();
                }
                if($(this).attr("value")=="run"){
                    $(".run-more").hide();
                    $(".run-more").show();
                }
            });
        }).change();
    });
