let i = 0;

setInterval(()=>{
    
    document.getElementById("output").innerHTML = (Math.floor(i/1048576)%16).toString(16)+(Math.floor(i/65536)%16).toString(16)+(Math.floor(i/4096)%16).toString(16)+(Math.floor(i/256)%16).toString(16)+(Math.floor(i/16)%16).toString(16)+(Math.floor(i/1)%16).toString(16);
    //document.getElementById("output").style.color = 
    i++;
},100);


