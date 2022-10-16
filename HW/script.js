setInterval(()=>{
        document.getElementById("cont").style.marginRight = (screen.width/90)*(screen.width/90) + "px";
        document.getElementById("cont").style.marginLeft = (screen.width/90)*(screen.width/90) + "px";
        console.log(document.getElementById("cont").style.marginRight);
}, 1);
