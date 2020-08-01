function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

$(document).ready(function(){
    setInterval(function(){
        let randomColor = [getRandomInt(256),getRandomInt(256),getRandomInt(256)];
        
    },3000)
    $("h1").css("color","#fa885c")
    
})