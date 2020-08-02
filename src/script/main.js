function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}

function randn_bm(min, max, skew) {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );

    num = num / 10.0 + 0.5; // Translate to 0 -> 1
    if (num > 1 || num < 0) num = randn_bm(min, max, skew); // resample between 0 and 1 if out of range
    num = Math.pow(num, skew); // Skew
    num *= max - min; // Stretch to fill range
    num += min; // offset to min
    return num;
}

$(document).ready(function(){
    setInterval(function(){
        let randomColor = [randn_bm(0,255,1),randn_bm(0,255,0.35),randn_bm(0,255,0.25)];
        let colorCode = "#" + randomColor.map(function(item){return parseInt(item).toString(16)}).join("")
        $("h1").css("color",colorCode)
        
    },3000)
    
})