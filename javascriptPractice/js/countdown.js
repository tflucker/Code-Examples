function createCountDown() {

var x = setInterval(function(){
  var currDate = new Date();
  var date = new Date(document.getElementById("date").value);

  //returns difference in milliseconds, converted to seconds
  var result = (date - currDate);

  var year = Math.floor(result / (1000 * 60 * 60 * 24 * 365));
  var day = Math.floor((result % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  var hour = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var min = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((result % (1000 * 60)) / (1000));

  document.getElementById("countdown").innerHTML = year+"y "+day+"d "+hour+"h "+min+"m "+ sec + "s" ;

//check for when timer runs out
  if(result < 0){
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


}
