console.log(1111111111111)
var today= new Date();
var hourNow=today.getHours(); 
var greeting;
if(hourNow>18){
    greeting='Good evening, Class!';
}else if(hourNow > 12){
    greeting='Good afternoon, Class!';
}else if(hourNow >= 0){
    greeting='Good morning!';
}else{
    greeting='Some thing went wrong!';
}
document.write('<h3>'+greeting+'</h3>');