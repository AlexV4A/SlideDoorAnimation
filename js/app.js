var value = 0
$(document).ready(function(){
  setInterval(function(){ 
    value = $("#leftdoor_inner_img").css("margin-left")
    value = Number(String(value).split('p')[0]);
    value = value === 0 ? 110 : value;
    $("#leftdoor_inner_img").animate({"margin-left": "-="+value+"px"}, "slow");
    $("#rightdoor_inner_img").animate({"margin-left": "+="+value+"px"}, "slow");
   }, 1000);
});