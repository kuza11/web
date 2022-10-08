setInterval(()=>{
    /*if(document.getElementById("left").scrollHeight < document.getElementById("right").scrollHeight){
        document.getElementById("li").style.paddingTop = document.getElementById("right").scrollHeight/2 + "px";
        document.getElementById("li").style.paddingBottom = document.getElementById("right").scrollHeight/2 + "px";
        console.log(document.getElementById("li").scrollHeight);
    }
    else if(document.getElementById("left").scrollHeight > document.getElementById("right").scrollHeight && document.getElementById("left").scrollHeight > screen.height && document.getElementById("right").scrollHeight > screen.height){
        document.getElementById("li").style.paddingTop = document.getElementById("right").scrollHeight/2 + "px";
        document.getElementById("li").style.paddingBottom = document.getElementById("right").scrollHeight/2 + "px";
    }
    else{
        document.getElementById("li").style.paddingTop = (screen.height/2) - 118 + "px";
        document.getElementById("li").style.paddingBottom = (screen.height/2) - 118 + "px";
    }*/
    if(document.getElementById("li").style.paddingTop != document.documentElement.scrollHeight/2 - 156 + "px"){
        document.getElementById("li").style.paddingTop = document.documentElement.scrollHeight/2 - 156 + "px";
        document.getElementById("li").style.paddingBottom = document.documentElement.scrollHeight/2 - 156 + "px";
        console.log(document.getElementById("li").style.paddingTop);
    }
}, 1);
