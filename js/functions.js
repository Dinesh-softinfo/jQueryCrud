 $("form").submit(function(e){
        e.preventDefault();
   
        var code = $("select[name='pcode']").val();
        var name = $("input[name='name']").val();
        var date = $("input[name='date']").val();
        var price = $("input[name='price']").val();
        var des = $("textarea[name='description']").val();
        var check = "";

        $("input[type=checkbox]:checked").each(function() 
        {
        	check+=$(this).val()+",";
        });
        var name1=$('#name').val();
        var pcode1=$('#pcode').val();
        var date1=$('#date').val();
        var price1=$('#price').val();
        var des1=$('#description').val();


   

        var validate=true;
        if (name1=="") {
            $('#er2').show();
            $('#er2').html('***Name must be filled***');
            $('#er2').css('color','red');
            validate=false;
        }
        else
            $('#er2').html('');
        if ((name1.length<=3)||(name1.length>=25)) {
            $('#er2').show();
            $('#er2').html('***Name length min 3 to max 25 character***');
            $('#er2').css('color','red');
            validate=false;
        }
        else
            $('#er2').html('');
        if (pcode1=="") {
             $('#er1').show();
             $("#list").show();
             $('#er1').html('***Choose Any Product Code***');
             $('#er1').css('color','red');
             validate=false;
        }
        else
        $('#er1').html('');
        if (date1=="") {
            $('#er3').show();
             $('#er3').html('***Select Today Date ***');
             $('#er3').css('color','red');
             validate=false;
        }
        else
            $('#er3').html('');
        if (price1=="") {
            $('#er4').show();
            $('#er4').html('***Price must be  filled***');
            $('#er4').css('color','red');
            validate=false;
        }
        else
            $('#er4').html('');
        if (des1=="") {
            $('#er5').show();
            $('#er5').html('***description must be filled***');
            $('#er5').css('color','red');
            validate=false;
        }
        else
            $('#er5').html('');
        if($('.form-check-input:checked').length==0){
            $('#er6').show();
            $('#er6').html('***Please check Any Checkbox***');
            $('#er6').css('color','red');
            validate=false;
        }
        else
            $('#er6').html('');
         if(validate){
              
        $(".data-table tbody").append("<tr class='show' data-code='"+code+"' data-name='"+name+"' data-date='"+date+"' data-price='"+price+"' data-des='"+des+"' data-check='"+check+"'><td>"+code+"</td><td>"+name+"</td><td>"+date+"</td><td>"+price+"</td><td>"+des+"</td><td>"+check+"</td><td><button class='btn btn-info btn-xs btn-edit' id='edit-btn'><i class='fa fa-pencil fa-3' aria-hidden='true'></i> &nbsp;&nbsp;&nbsp;Edit&nbsp;&nbsp;</button><button class='btn btn-danger btn-xs btn-delete' id='delfun'><i class='fa fa-trash-o fa-3' aria-hidden='true'></i>&nbsp;&nbsp;&nbsp;Delete&nbsp;&nbsp;</button></td></tr>");
        

    	this.reset();
        $("#tableform").show();
        $("#container").hide();

    }
    });
    $("body").on("click", ".btn-delete", function(){ 
             var del = confirm("Want to delete?");
             if (del) {
                $(this).parents("tr").remove();
             }
    });
 
    $("body").on("click", ".btn-edit", function(){
        var row=$(this).parents("tr");
        row.attr('class', 'update');

        var code = $(this).parents("tr").attr('data-code');
        var name = $(this).parents("tr").attr('data-name');
        var date = $(this).parents("tr").attr('data-date');
        var price= row.attr('data-price');
        var des = $(this).parents("tr").attr('data-des');
        var check = $(this).parents("tr").attr('data-check');
        check=check.split(',');
        $("#pcode").val(code);
        $("#name").val(name);
        $("#date").val(date);
        $("#price").val(price);
        $("#description").val(des);
        for(i=1;i<5;i++){
            for(var j in check){
                if($("#check"+i).val()==check[j])
                    $("#check"+i).prop("checked",true);
            }
        }
        
       $("#update1").html("<button class='btn btn-info btn-xs btn-update'><i class='fa fa-pencil-square fa-3' aria-hidden='true'></i>&nbsp;&nbsp;&nbsp;Update&nbsp;&nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button class='btn btn-warning btn-xs btn-cancel'><i class='fa fa-ban fa-3' aria-hidden='true'></i>&nbsp;&nbsp;&nbsp;Cancel&nbsp;&nbsp;</button>")

        // $(this).hide();
        $("#container").show();
        $("#tableform").hide(); 
        $("#save").hide();

    });
    $("body").on("click", ".btn-cancel", function(){
      
        $("#update1").html('');
        $("#container").hide();
        $("#tableform").show(); 
        $("#save").show();
        $("#form1")[0].reset();
    });

        $("body").on("click", ".btn-update", function(){
        var code=$("#pcode").val();
        var name=$("#name").val();
        var date=$("#date").val();
        var price=$("#price").val();
        var des=$("#description").val();
        var check ="";
        for(i=1;i<5;i++){
            temp=$("#check"+i+":checked").val();
            if(temp!=undefined)
                check+=temp+",";
        }

        
        $(".update").find("td:eq(0)").text(code);
        $(".update").find("td:eq(1)").text(name);
        $(".update").find("td:eq(2)").text(date);
        $(".update").find("td:eq(3)").text(price);
        $(".update").find("td:eq(4)").text(des);
        $(".update").find("td:eq(5)").text(check);
        
        
        $(".update").attr('data-code', code);
        $(".update").attr('data-name', name);
        $(".update").attr('data-date', date);
        $(".update").attr('data-price', price);
        $(".update").attr('data-des', des);
        $(".update").attr('data-check', check);
        // console.log(code,name,date,price,des,check);
        $(".update").find(".btn-edit").show();
        $(".update").attr('class', 'show'); 
        $("#tableform").show();
        $("#container").hide();
        $(".btn-cancel").remove();
        $(".btn-update").remove();
        $("#form1")[0].reset();

    });
    window.onload = function() {
        $("#container").hide(); 
    };
    $("#show").click(function(){
        $("#tableform").show();
        $("#container").hide();
    });
    $("#Create").click(function(){
        $("#container").show();
        $("#tableform").hide(); 
        $("#save").show();
    });

     $('#search').on('keyup',function(){
        var search1 = $(this).val().toLowerCase();
        $('.data-table tbody tr').each(function(){
            var lineStr = $(this).text().toLowerCase();
            if(lineStr.indexOf(search1) === -1){
                $(this).hide();
            }else{
                $(this).show();
            }
        });
    });
    $("#pcode").focus(function(){
        $("#er1").hide();
        $("#list").hide();
    });
     $("#name").focus(function(){
        $("#er2").hide();
    });
      $("#date").focus(function(){
        $("#er3").hide();
    });
       $("#price").focus(function(){
        $("#er4").hide();
    });
        $("#description").focus(function(){
        $("#er5").hide();
    });
        $(".form-check-input").focus(function(){
        $("#er6").hide();
    });
     function isInputNumber(evt){
          var number = String.fromCharCode(evt.which);
           if(!(/[0-9]/.test(number))){
                evt.preventDefault(); }
        }


        $("#id").text("t");