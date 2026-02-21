var time = document.getElementById('time_now');
 setInterval(function(){
   var d = new Date();
   time.innerHTML = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() 
 }, 1);