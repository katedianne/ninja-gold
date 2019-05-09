var coins;
var gold = 0;
$(document).ready(function(){
    
    $(".location").click( function() {
        //moves

        var value = parseInt($("#moves").text()) - 1;
        if(value>0){
            $("#moves").text(value);
        }else{
            alert("Game Over");
            
        }
           
    });




    $("#cave").click(function(){
        coins=  parseInt($("#gold").text()) +5;
        $("#gold").text(coins);
        alert("You found a gold!\n+ 5 gold");
        $("ol").append("<li>Cave "+coins+" 5   0  </li>");
    });
    
    $("#house").click(function(){
        if(Math.random() < 0.8) {
            coins=  parseInt($("#gold").text()) +10;
            $("#gold").text(coins);
            alert("You found a gold!\n+ 10 gold");
            $("ol").append("<li>House "+coins+" 10   0  </li>");
        } else {
            alert("You came back empty handed.");
            $("ol").append("<li>House "+coins+" 0   0  </li>");
        }   
    });

    $("#goldmine").click(function(){
        if(Math.random() < 0.8) {
            var min = 1;var max = 25;
            var coins = Math.floor(Math.random() * (max - min + 1) + min);
            alert("You found a gold!\n+ "+coins + " gold");
            currentcoins=  parseInt($("#gold").text()) +coins;
            $("#gold").text(currentcoins);
            $("ol").append("<li>Goldmine "+currentcoins+" "+coins+"   0  </li>");
        } else {
            alert("You came back empty handed.");
            $("ol").append("<li>Goldmine "+coins+" 0   0  </li>");
        }   
    });
    
    $("#casino").click(function(){
       //probability
        if(Math.random() < 0.5) {
            var min = 40;var max = 50;
            var coins = Math.floor(Math.random() * (max - min + 1) + min);
            alert("You won a gold!\n+ "+coins + " gold");
            currentcoins=  parseInt($("#gold").text()) +coins;
            $("#gold").text(currentcoins);
            $("ol").append("<li>Casino "+currentcoins+" "+coins+"   0  </li>");
        } else {
            var min = 40;var max = 50;
            var coins = Math.floor(Math.random() * (max - min + 1) + min);
            alert("You lost a gold :(\n- "+coins + " gold");
            currentcoins=  parseInt($("#gold").text()) -coins;
            $("#gold").text(currentcoins);
            $("ol").append("<li>Casino "+currentcoins+" 0 "+coins+"</li>");
        }   
    });
    
    


    
  });
