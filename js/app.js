$(document).ready(function(){
    
    $("#quantite_value").html( $("#quantite").val());
    $("#taille_value").html( $("#taille").val());
    $("#nombre_value").html( $("#nombre").val());
       $("#total_value").html($("#nombre").val()*$("#prix").val());
       $("#prix_value").html( $("#prix").val());
    $("#quantite").on("input",function(){
        $("#quantite_value").html( $("#quantite").val());
        
       
    });
    $("#taille").on("change",function(){
        $("#taille_value").html( $("#taille").val());
       
    });
    $("#nombre").on("change",function(){
       let nombre= $("#nombre_value").html( $("#nombre").val());
       $("#total_value").html($("#nombre").val()*$("#prix").val())
    });
    $("#prix").on("change",function(){
     let prix=   $("#prix_value").html( $("#prix").val());
     $("#total_value").html( $("#prix").val()*$("#nombre").val())
    });
    let images=["img/1.jpg","img/2.jpg","img/3.jpg"]
    let index=0;
    $("#next").on("click",function(){

if (index>images.length) {
    index=0;
}
$("#image").attr('src',images[index]);
index++;
    });
    $("#previous").on("click",function(){
index--;
        if (0>index) {
            index=images.length-1;
        }
        $("#image").attr('src',images[index]);
       
            });
            $("#toby") .on("click",function(){
                $("#blockConfirme").show(1000)
                $("#confirme").show()
                $("#bravo").hide(1000)
                $("#quantite_values").html( $("#quantite").val());
                $("#taille_values").html( $("#taille").val());
                $("#nombre_values").html( $("#nombre").val());
                $("#prix_values").html( $("#prix").val());
                $("#total_values").html( $("#prix").val()*$("#nombre").val())
           
             
            })  
            $("#confirmer").click(function(){
                $("#blockConfirme").show()
                $("#confirme").hide()
                $("#bravo").show(1000)
            var v= $("#h1").show(2000)
            if (  $("#h1").is(v) ) {
                $("#blockConfirme").fadeOut(8000)  
               }
            });
            
           
  });
